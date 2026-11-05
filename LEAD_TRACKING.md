# Successful enquiry tracking

The existing GA4 installation in `components/layout/cookie-consent-manager.tsx` remains the only installation. It reads `NEXT_PUBLIC_GA_MEASUREMENT_ID` and loads after the existing cookie acceptance. This change adds no cookie, consent UI, hardcoded measurement ID in application code, or additional analytics script.

The authorised Auxano property created on 4 November 2026 is **562376837**, in account **162469442**. Its website stream is **16272297511**, for `https://www.auxanosolutions.net`, with measurement ID **G-17H3NDLGW9**. Configure that public ID through the existing environment variable; do not add another script. The local ignored `.env.local` is configured, but the production environment and deployment still require verification. The stream was created with page views and scrolls enabled and automatic form interactions, outbound clicks, site search, video events and downloads disabled. Lead success remains the explicit code event.

`LeadForm` calls `trackLead` only after `/api/lead` returns an HTTP success and `{ ok: true }`. The API confirms acceptance by HubSpot or the fallback email provider before returning success. Missing/failed bot verification, validation failures, provider rejection and network errors cannot produce a lead event. Provider acceptance is not a guarantee that a person received, qualified or purchased from an enquiry.

## Event parameters and attribution

The event is `generate_lead`. Its only custom parameters are:

- `form_name`: `contact` or `consultation`, fixed by the actual route's component prop.
- `service_type`: `cctv`, `managed_it`, `networking`, `access_control`, `it_audit`, `business_continuity`, or `other`, selected from a fixed mapping.

Names, email addresses, phone numbers, company names, message text, bot tokens, CRM cookies and arbitrary submitted strings are never passed to the analytics helper. No sale value or currency is invented. Existing automatic GA4 fields are outside this helper; verify production enhanced-measurement and URL settings separately.

Auxano has separate `/contact` and `/book-consultation` routes. Query parameters do not control `form_name`. The CCTV page's enquiry link uses `?service=surveillance-system-cctv` solely to preselect the existing CCTV service choice on the consultation form. Missing, invalid or array-valued service parameters use the existing default. Changing between the generic and CCTV-prefilled consultation route remounts the form via its key. A copied CCTV URL remains a consultation enquiry, and the user can change the selected service.

Reading the consultation page's search parameters makes that route render on demand instead of prerendering it. The contact and service routes retain their existing rendering modes.

## Dispatch guarantee and limits

The shared module holds at most 50 consented events in memory, for at most 30 seconds. It uses one timer, exponential backoff from 250 ms capped at four seconds, and removes expired entries. Component unmount/remount does not create another processor. Overflow drops the newest entry. Expired entries and pending events after consent withdrawal are discarded. No event is buffered before cookie acceptance.

Each queued entry is removed before `gtag` is called. A throwing call is not retried because it may already have accepted the event. The guarantee is **at-most-once dispatch attempts per successful client submission**, not exactly-once delivery or confirmed Google receipt. Browser reloads/tab closure, blocking extensions, unavailable/late tags, consent rejection, queue overflow and expiry can lose analytics events. Background timer throttling can delay cleanup; expired events are removed when execution resumes. Analytics never blocks form success or retries the enquiry API.

The form ref prevents concurrent duplicate clicks before React rerenders, and the async transition remains pending for the request. Separate completed submissions and independent form instances remain legitimate separate enquiries. There is no server-wide idempotency across tabs or manual retries. A provider timeout followed by fallback can create two CRM/email records if the first provider accepted before the timeout; reconcile records when assessing qualified leads.

## Validation and rollout

```sh
npm run test:leads
node scripts/test-blog-excerpt.cjs
npm run typecheck
npm run lint -- app/api/lead/route.ts app/book-consultation/page.tsx components/forms/lead-form.tsx components/sections/service-capability-flow.tsx lib/integrations.ts lib/lead-analytics.ts scripts/lead-tracking.test.mjs
npm run build
git diff --check
```

The Node harness executes the actual form, queue, validation, route handler and provider helpers. It substitutes React/browser primitives and external HTTP; it does not validate hydration, native HTML validation, a real Cloudflare widget, actual provider receipt or Google ingestion. Route tests use presentation stubs to inspect the actual pages' form props. A browser smoke test and an approved test destination are still required before launch.

Confirm the production GA4 web stream belongs to auxanosolutions.net and matches the existing environment ID. Confirm the correct Ads account/property link and one primary successful-lead action; do not duplicate installations or import redundant primary actions. Verify both Turnstile keys and at least one delivery provider configuration. The existing verification helper deliberately bypasses Turnstile if its server secret is absent, so deployment configuration must be checked explicitly. Shared provider requests now have 10-second timeouts, and fallback messages use plain text instead of interpolated HTML.

Deploy only after review and approval. Validate provider receipt plus GA4 DebugView with consent, then validate the Ads conversion import. A passing local test suite cannot prove a live conversion integration or sales performance.
