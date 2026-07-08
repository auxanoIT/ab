"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ClipboardCheck, X } from "lucide-react";

const storageKey = "auxano-checklist-lead-magnet-dismissed-at";
const dismissWindowMs = 1000 * 60 * 60 * 24 * 7;

function hasRecentDismissal() {
  if (typeof window === "undefined") {
    return true;
  }

  const value = window.localStorage.getItem(storageKey);
  const dismissedAt = value ? Number(value) : 0;

  return Boolean(dismissedAt && Date.now() - dismissedAt < dismissWindowMs);
}

function rememberDismissal() {
  window.localStorage.setItem(storageKey, String(Date.now()));
}

export function ChecklistLeadMagnetPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 4000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pathname === "/technology-security-checklist" || !ready) {
      return;
    }

    if (hasRecentDismissal()) {
      return;
    }

    function showPopup() {
      if (!hasRecentDismissal()) {
        setVisible(true);
      }
    }

    function handleMouseOut(event: MouseEvent) {
      if (window.innerWidth < 1024) {
        return;
      }

      if (event.clientY <= 0) {
        showPopup();
      }
    }

    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 720) {
        showPopup();
      }
    }

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, ready]);

  if (!visible || pathname === "/technology-security-checklist") {
    return null;
  }

  function closePopup() {
    rememberDismissal();
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-xl sm:bottom-6 sm:right-6 sm:left-auto sm:mx-0">
      <div
        role="dialog"
        aria-labelledby="checklist-lead-magnet-title"
        className="overflow-hidden rounded-2xl border border-white/20 bg-[var(--color-ink)] text-white shadow-[0_28px_100px_rgba(11,18,32,0.35)]"
      >
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-cyan)]">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan)]">
              Free 2026 checklist
            </p>
            <h2
              id="checklist-lead-magnet-title"
              className="mt-2 text-xl font-semibold leading-tight"
            >
              Is your business technology actually protected?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Take the 50-point readiness check for Nigerian companies across
              IT, cybersecurity, fire safety, CCTV, power, licensing, and
              disaster recovery.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/technology-security-checklist"
                onClick={closePopup}
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
              >
                Start free checklist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={closePopup}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/14 px-4 text-sm font-semibold text-white/78 transition hover:border-white/28 hover:text-white"
              >
                Maybe later
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close checklist popup"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/58 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
