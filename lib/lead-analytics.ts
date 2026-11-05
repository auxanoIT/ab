type FormName = "contact" | "consultation";
type ServiceType = "cctv" | "managed_it" | "networking" | "access_control" |
  "it_audit" | "business_continuity" | "other";
type LeadParameters = { form_name: FormName; service_type: ServiceType };

declare global {
  interface Window {
    gtag?: (command: "event", eventName: "generate_lead", parameters: LeadParameters) => void;
  }
}

const CONSENT_KEY = "auxano_cookie_consent";
const MAX_WAIT_MS = 30_000;
const MAX_QUEUE_SIZE = 50;
const INITIAL_DELAY_MS = 250;
const MAX_DELAY_MS = 4_000;
const pending: { parameters: LeadParameters; expiresAt: number }[] = [];
let timer: ReturnType<typeof setTimeout> | undefined;
let delay = INITIAL_DELAY_MS;
let flushing = false;

// Match the existing installation's consent gate. Never retain an event before
// consent, or dispatch a pending event after consent has been withdrawn.
function hasConsent() {
  if (typeof window === "undefined") return false;
  try {
    if (window.localStorage.getItem(CONSENT_KEY) === "accepted") return true;
  } catch {
    // Cookies can still carry the existing consent when storage is restricted.
  }
  return document.cookie.split(";").some(cookie => cookie.trim() === `${CONSENT_KEY}=accepted`);
}

function expire() {
  const now = performance.now();
  while (pending.length && pending[0].expiresAt <= now) pending.shift();
}

function flush() {
  if (flushing) return;
  if (timer !== undefined) clearTimeout(timer);
  timer = undefined;
  flushing = true;
  try {
    if (!hasConsent()) pending.length = 0;
    expire();
    if (typeof window.gtag === "function") {
      while (pending.length) {
        expire();
        const entry = pending.shift();
        if (!entry) break;
        try {
          window.gtag("event", "generate_lead", entry.parameters);
        } catch {
          // At-most-once dispatch attempts. Never blindly retry: gtag may have
          // accepted the event before throwing. Google receipt is not confirmed.
        }
      }
    }
  } catch {
    // An inaccessible analytics property must not interrupt a successful form.
  } finally {
    flushing = false;
    expire();
    if (pending.length) {
      timer = setTimeout(flush, Math.min(delay, pending[0].expiresAt - performance.now()));
      delay = Math.min(delay * 2, MAX_DELAY_MS);
    } else {
      delay = INITIAL_DELAY_MS;
    }
  }
}

function serviceType(service: string): ServiceType {
  switch (service) {
    case "CCTV & Surveillance": return "cctv";
    case "Managed IT Support": return "managed_it";
    case "Network Infrastructure": return "networking";
    case "Access Control": return "access_control";
    case "IT Audit & Compliance": return "it_audit";
    case "Business Continuity & DR": return "business_continuity";
    default: return "other";
  }
}

export function trackLead(formName: FormName, service: string) {
  try {
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || !hasConsent()) return;
    expire();
    if (pending.length >= MAX_QUEUE_SIZE) return; // Keep existing entries; drop newest overflow.
    // Only fixed categories are retained. No submitted personal fields or free
    // text are sent. In-memory entries are lost on reload or tab closure.
    pending.push({
      parameters: { form_name: formName, service_type: serviceType(service) },
      expiresAt: performance.now() + MAX_WAIT_MS,
    });
    if (timer === undefined && !flushing) flush();
  } catch {
    // Analytics is best effort and cannot change delivery success.
  }
}
