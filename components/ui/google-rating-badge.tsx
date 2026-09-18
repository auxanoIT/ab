"use client";

const GOOGLE_BUSINESS_URL =
  "https://maps.app.goo.gl/WVauNskeQ55JBAHc6";

const RATING = 4.5;
const MAX_STARS = 5;

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarIcon({
  filled,
  half,
  className,
}: {
  filled?: boolean;
  half?: boolean;
  className?: string;
}) {
  if (half) {
    return (
      <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="#FBBC05" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
          </linearGradient>
        </defs>
        <path
          d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.45.91-5.33L2.27 6.62l5.34-.78L10 1z"
          fill="url(#half-star)"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.45.91-5.33L2.27 6.62l5.34-.78L10 1z"
        fill={filled ? "#FBBC05" : "rgba(255,255,255,0.25)"}
      />
    </svg>
  );
}

export function GoogleRatingBadge() {
  const fullStars = Math.floor(RATING);
  const hasHalf = RATING % 1 >= 0.25 && RATING % 1 < 0.75;
  const emptyStars = MAX_STARS - fullStars - (hasHalf ? 1 : 0);

  return (
    <a
      href={GOOGLE_BUSINESS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Auxano Solutions rated ${RATING} out of ${MAX_STARS} stars on Google — view profile`}
      className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
    >
      <GoogleIcon className="h-6 w-6 shrink-0" />

      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-semibold leading-none text-white">
            {RATING}
          </span>
          <div className="flex gap-px">
            {Array.from({ length: fullStars }).map((_, i) => (
              <StarIcon key={`full-${i}`} filled className="h-3.5 w-3.5" />
            ))}
            {hasHalf && <StarIcon half className="h-3.5 w-3.5" />}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <StarIcon key={`empty-${i}`} className="h-3.5 w-3.5" />
            ))}
          </div>
        </div>
        <span className="text-[11px] leading-none text-white/50 transition-colors group-hover:text-white/70">
          Google Reviews
        </span>
      </div>
    </a>
  );
}
