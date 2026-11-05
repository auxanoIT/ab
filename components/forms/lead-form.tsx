"use client";

import { useCallback, useRef, useState, useTransition } from "react";
import { CalendarDays } from "lucide-react";

import { TurnstileField } from "@/components/forms/turnstile-field";
import {
  getEmailValidationMessage,
  normalizeEmail,
} from "@/lib/email-validation";
import { cn, getBrowserCookie } from "@/lib/utils";
import { leadSchema } from "@/lib/schemas";
import { trackLead } from "@/lib/lead-analytics";

type LeadFormProps = {
  context: "contact" | "consultation";
  title?: string;
  description?: string;
  className?: string;
  headingAlign?: "left" | "center";
  showEyebrow?: boolean;
  submitLabel?: string;
  fullWidthSubmit?: boolean;
  initialService?: string;
};

const serviceInterests = [
  "Managed IT Support",
  "CCTV & Surveillance",
  "Network Infrastructure",
  "Access Control",
  "IT Audit & Compliance",
  "Business Continuity & DR",
];

export function LeadForm({
  context,
  title = "Start the conversation",
  description = "Share the environment, issue, or project goal. Auxano will review the brief and recommend the right next step.",
  className,
  headingAlign = "left",
  showEyebrow = true,
  submitLabel,
  fullWidthSubmit = false,
  initialService,
}: LeadFormProps) {
  const submissionInFlight = useRef(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [consentError, setConsentError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [isPending, startTransition] = useTransition();
  // A stable callback prevents TurnstileField's effect from removing and
  // recreating its widget on every status or pending-state render.
  const handleVerificationError = useCallback(() => {
    setStatus("error");
    setMessage("Verification could not load. Please refresh and try again.");
  }, []);

  async function handleSubmit(formData: FormData) {
    setStatus("idle");
    setMessage("");

    const email = normalizeEmail(formData.get("email"));
    const nextEmailError = getEmailValidationMessage(email);

    if (nextEmailError) {
      setEmailError(nextEmailError);
      setStatus("error");
      setMessage(nextEmailError);
      return;
    }

    const marketingConsent = formData.get("marketingConsent") === "on";

    if (!marketingConsent) {
      const nextConsentError =
        "Please agree to receive email communication before submitting.";

      setConsentError(nextConsentError);
      setStatus("error");
      setMessage(nextConsentError);
      return;
    }

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification check.");
      return;
    }

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email,
      phone: formData.get("phone"),
      serviceInterest: formData.get("serviceInterest"),
      message: formData.get("message"),
      marketingConsent,
      context,
      turnstileToken,
      hubspotTrackingCookie: getBrowserCookie("hubspotutk"),
    };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setMessage("Please complete all fields and describe your project in at least 10 characters.");
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || data?.ok !== true) {
        setStatus("error");
        setMessage(data?.error ?? "Something went wrong. Please try again.");
        setTurnstileResetKey((current) => current + 1);
        return;
      }

      setStatus("success");
      trackLead(context, parsed.data.serviceInterest);
      setMessage(
        context === "consultation"
          ? "Consultation request received. The team can now coordinate the next discussion."
          : "Message received. Auxano can now review the brief and respond.",
      );
      setTurnstileResetKey((current) => current + 1);
    } catch {
      setStatus("error");
      setMessage("We could not send your request because the connection failed. Your details are still here. Please check your internet connection and try again.");
      setTurnstileResetKey((current) => current + 1);
    }
  }

  return (
    <div
      className={cn(
        "rounded-[2rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-7 shadow-[0_24px_60px_rgba(11,18,32,0.08)]",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-xl",
          headingAlign === "center" && "mx-auto text-center",
        )}
      >
        {showEyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-electric)]">
            {context === "consultation" ? "Book Consultation" : "Contact Auxano"}
          </p>
        ) : null}
        <h3
          className={cn(
            "text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]",
            showEyebrow && "mt-4",
          )}
        >
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{description}</p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (isPending || submissionInFlight.current) return;
          const data = new FormData(event.currentTarget);
          submissionInFlight.current = true;
          startTransition(async () => {
            try {
              await handleSubmit(data);
            } finally {
              submissionInFlight.current = false;
            }
          });
        }}
        className="mt-8 grid gap-4 md:grid-cols-2"
      >
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Full name
          <input
            name="name"
            required
            placeholder="Enter your full name"
            className="h-12 rounded-2xl border border-[color:rgba(11,18,32,0.1)] bg-[var(--color-cloud)] px-4 outline-none transition focus:border-[var(--color-electric)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Company
          <input
            name="company"
            required
            placeholder="Enter your company name"
            className="h-12 rounded-2xl border border-[color:rgba(11,18,32,0.1)] bg-[var(--color-cloud)] px-4 outline-none transition focus:border-[var(--color-electric)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Email
          <input
            name="email"
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? "lead-form-email-error" : undefined}
            placeholder="Enter your email address"
            onBlur={(event) =>
              setEmailError(getEmailValidationMessage(event.target.value))
            }
            onChange={(event) => {
              if (emailError) {
                setEmailError(getEmailValidationMessage(event.target.value));
              }
            }}
            className={cn(
              "h-12 rounded-2xl border bg-[var(--color-cloud)] px-4 outline-none transition focus:border-[var(--color-electric)]",
              emailError
                ? "border-red-500 focus:border-red-500"
                : "border-[color:rgba(11,18,32,0.1)]",
            )}
          />
          {emailError ? (
            <span
              id="lead-form-email-error"
              className="text-xs font-medium text-red-600"
            >
              {emailError}
            </span>
          ) : null}
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Phone
          <input
            name="phone"
            required
            placeholder="Enter your phone number"
            className="h-12 rounded-2xl border border-[color:rgba(11,18,32,0.1)] bg-[var(--color-cloud)] px-4 outline-none transition focus:border-[var(--color-electric)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)] md:col-span-2">
          Service focus
          <select
            name="serviceInterest"
            defaultValue={initialService && serviceInterests.includes(initialService) ? initialService : "Managed IT Support"}
            className="h-12 rounded-2xl border border-[color:rgba(11,18,32,0.1)] bg-[var(--color-cloud)] px-4 outline-none transition focus:border-[var(--color-electric)]"
          >
            {serviceInterests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)] md:col-span-2">
          Project brief
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Example: Access control installation for a 3-floor office building, network upgrade, CCTV deployment, managed IT support, etc."
            className="rounded-[1.5rem] border border-[color:rgba(11,18,32,0.1)] bg-[var(--color-cloud)] px-4 py-4 outline-none transition focus:border-[var(--color-electric)]"
          />
        </label>
        <label
          className={cn(
            "flex gap-3 rounded-[1.25rem] border bg-[var(--color-cloud)] p-4 text-sm leading-6 text-[var(--color-muted)] md:col-span-2",
            consentError
              ? "border-red-500"
              : "border-[color:rgba(11,18,32,0.1)]",
          )}
        >
          <input
            name="marketingConsent"
            type="checkbox"
            required
            aria-invalid={Boolean(consentError)}
            aria-describedby={
              consentError ? "lead-form-consent-error" : undefined
            }
            onChange={(event) => {
              if (event.target.checked) {
                setConsentError("");
              }
            }}
            className="mt-1 h-4 w-4 shrink-0 rounded border-[color:rgba(11,18,32,0.18)] accent-[var(--color-electric)]"
          />
          <span>
            I agree to receive email communication from Auxano Solutions about
            my request and allow Auxano Solutions to store and process my
            personal data to respond to this submission.
          </span>
        </label>
        {consentError ? (
          <p
            id="lead-form-consent-error"
            className="-mt-2 text-xs font-medium text-red-600 md:col-span-2"
          >
            {consentError}
          </p>
        ) : null}
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <TurnstileField
            onVerify={setTurnstileToken}
            onError={handleVerificationError}
            resetKey={turnstileResetKey}
          />
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-electric),var(--color-cyan))] px-6 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(47,107,255,0.25)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70",
              fullWidthSubmit && "w-full",
            )}
          >
            {context === "consultation" ? <CalendarDays className="mr-2 h-4 w-4" /> : null}
            {isPending
              ? "Sending..."
              : submitLabel ?? (context === "consultation" ? "Request Consultation" : "Send Message")}
          </button>
        </div>
      </form>

      {message ? (
        <p
          role={status === "error" ? "alert" : "status"}
          className={cn(
            "mt-5 rounded-2xl px-4 py-3 text-sm",
            status === "success"
              ? "bg-[color:rgba(24,182,126,0.12)] text-[var(--color-success)]"
              : "bg-[color:rgba(239,68,68,0.08)] text-red-600",
          )}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
