"use client";

import {
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { HeroMetricStrip } from "@/components/sections/hero-metric-strip";
import { PartnerLogoMarquee } from "@/components/sections/partner-logo-marquee";
import { cn } from "@/lib/utils";
import type { HeroSection, HeroVideoSlide, Metric } from "@/lib/types";

type HomeHeroProps = {
  section: HeroSection;
};

type SlideSelectorRailProps = {
  slides: HeroVideoSlide[];
  activeIndex: number;
  progress: number;
  countdownValue: number;
  onSelect: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const schematicNodes = [
  { id: "core", label: "Core", top: "16%", left: "45%" },
  { id: "cameras", label: "CCTV", top: "34%", left: "76%" },
  { id: "access", label: "Access", top: "66%", left: "71%" },
  { id: "support", label: "Support", top: "70%", left: "21%" },
  { id: "branch", label: "Branch", top: "38%", left: "12%" },
];

const HERO_COUNTDOWN_START = 12;
const SELECTOR_SIZE = 48;
const SELECTOR_STROKE = 2.75;
const SELECTOR_RADIUS = 20;
const SELECTOR_CIRCUMFERENCE = 2 * Math.PI * SELECTOR_RADIUS;
const HERO_STATS_FALLBACK: Metric[] = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects delivered" },
  { value: "200+", label: "Clients served" },
  { value: "24/7", label: "Support available" },
];

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

function getCountdownValue(progress: number) {
  return Math.max(
    0,
    HERO_COUNTDOWN_START - Math.floor(progress * HERO_COUNTDOWN_START),
  );
}

export function HomeHero({ section }: HomeHeroProps) {
  if (section.mode === "videoCarousel" && section.slides?.length) {
    const metrics =
      section.metrics.length >= 4
        ? section.metrics.slice(0, 4)
        : HERO_STATS_FALLBACK;

    return (
      <>
        <VideoCarouselHero slides={section.slides} />
        <HeroMetricStrip metrics={metrics} />
        <PartnerLogoMarquee />
      </>
    );
  }

  return <DefaultHomeHero section={section} />;
}

function VideoCarouselHero({ slides }: { slides: HeroVideoSlide[] }) {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeIndexRef = useRef(0);
  const videoRevealTimeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDocumentVisible, setIsDocumentVisible] = useState(() =>
    typeof document === "undefined"
      ? true
      : document.visibilityState === "visible",
  );
  const activeSlide = slides[activeIndex] ?? slides[0];
  const [isVideoReady, setIsVideoReady] = useState(false);
  const shouldHideActiveContent = Boolean(activeSlide.hideContent);
  const hasServiceCta = activeSlide.primaryCta.href !== "/book-consultation";
  const countdownValue = shouldReduceMotion
    ? HERO_COUNTDOWN_START
    : getCountdownValue(progress);
  const clearVideoRevealTimeout = () => {
    if (!videoRevealTimeoutRef.current) {
      return;
    }

    window.clearTimeout(videoRevealTimeoutRef.current);
    videoRevealTimeoutRef.current = null;
  };

  const revealVideoWhenSettled = (mediaId: string) => {
    clearVideoRevealTimeout();

    videoRevealTimeoutRef.current = window.setTimeout(() => {
      videoRevealTimeoutRef.current = null;

      if (videoRef.current?.dataset.publicId === mediaId) {
        setIsVideoReady(true);
      }
    }, 140);
  };

  const playVideo = async (
    video: HTMLVideoElement | null,
    forceRestart = false,
  ) => {
    if (!video) {
      return;
    }

    try {
      if (forceRestart || video.currentTime > 0) {
        video.currentTime = 0;
      }

      video.muted = true;

      if (shouldReduceMotion || !isDocumentVisible) {
        video.pause();
        return;
      }

      await video.play();
    } catch {
      if (!shouldReduceMotion && isDocumentVisible) {
        void video.play().catch(() => undefined);
      }
    }
  };

  const playActiveVideo = (forceRestart = false) => {
    void playVideo(videoRef.current, forceRestart);
  };

  const handlePlayable = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;

    if (video.dataset.publicId !== activeSlide.videoPublicId) {
      return;
    }

    videoRef.current = video;
    video.muted = true;

    if (shouldReduceMotion) {
      clearVideoRevealTimeout();
      setIsVideoReady(true);
      video.pause();
      return;
    }

    void video.play().catch(() => undefined);

    window.requestAnimationFrame(() => {
      void video.play().catch(() => undefined);
      revealVideoWhenSettled(video.dataset.publicId ?? "");
    });
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
    clearVideoRevealTimeout();
    setIsVideoReady(false);
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      clearVideoRevealTimeout();
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const handleVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (shouldReduceMotion || !isDocumentVisible) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => undefined);
  }, [isDocumentVisible, shouldReduceMotion]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    playActiveVideo(true);
    // active slide sync intentionally depends only on slide changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleSelectSlide = (index: number) => {
    setProgress(0);
    clearVideoRevealTimeout();
    setIsVideoReady(false);

    if (index === activeIndexRef.current) {
      playActiveVideo(true);
      return;
    }

    setActiveIndex(index);
  };

  const handleLoadedMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    handlePlayable(event);
  };

  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;

    if (video.dataset.publicId !== activeSlide.videoPublicId) {
      return;
    }

    if (shouldReduceMotion || !isDocumentVisible) {
      return;
    }

    const duration = video.duration;
    const currentTime = video.currentTime;

    if (!duration || Number.isNaN(duration)) {
      return;
    }

    setProgress(clampProgress(currentTime / duration));
    revealVideoWhenSettled(video.dataset.publicId ?? "");
  };

  const handleEnded = () => {
    if (shouldReduceMotion) {
      setProgress(0);
      return;
    }

    setProgress(1);
    clearVideoRevealTimeout();
    setIsVideoReady(false);
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#071b24] text-white">
      <div className="relative min-h-[14rem] sm:min-h-[25rem] lg:min-h-[33rem] xl:min-h-[36rem]">
        <div className="absolute inset-0 bg-[#071b24]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,36,0.62)_0%,rgba(7,27,36,0.08)_38%,rgba(7,27,36,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,36,0.08)_0%,rgba(7,27,36,0.02)_48%,rgba(7,27,36,0.66)_100%)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.11)_1px,transparent_1px)] [background-size:88px_88px]"
        />

        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <video
            key={activeSlide.videoPublicId}
            ref={videoRef}
            data-public-id={activeSlide.videoPublicId}
            src={activeSlide.videoUrl}
            autoPlay
            disablePictureInPicture
            loop={false}
            muted
            playsInline
            preload="auto"
            className="pointer-events-none absolute inset-0 block h-full w-full scale-[1.02]"
            style={{ objectFit: "cover", objectPosition: "center center" }}
            onCanPlay={handlePlayable}
            onCanPlayThrough={handlePlayable}
            onLoadedData={handlePlayable}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,36,0.08)_0%,rgba(7,27,36,0.18)_58%,rgba(7,27,36,0.78)_100%)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,52,0.52)_0%,rgba(8,34,52,0.24)_56%,rgba(8,34,52,0.62)_100%)]"
        />
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 bg-[#071b24] transition-opacity duration-300 ease-out",
            isVideoReady ? "opacity-0" : "opacity-100",
          )}
        />

        <SlideSelectorRail
          slides={slides}
          activeIndex={activeIndex}
          progress={shouldReduceMotion ? 0 : progress}
          countdownValue={countdownValue}
          onSelect={handleSelectSlide}
          orientation="vertical"
          className="absolute right-5 top-1/2 hidden -translate-y-1/2 lg:flex xl:right-9"
        />

        {shouldHideActiveContent ? (
          <SlideSelectorRail
            slides={slides}
            activeIndex={activeIndex}
            progress={shouldReduceMotion ? 0 : progress}
            countdownValue={countdownValue}
            onSelect={handleSelectSlide}
            orientation="horizontal"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:hidden"
          />
        ) : null}
      </div>

      {shouldHideActiveContent ? null : (
        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#355C9A_100%,#4E73B8_50%,#6C8FD6_100%)]">
          <div className="absolute inset-x-0 top-0 h-px bg-white/14" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:96px_96px]"
          />

          <Container className="grid gap-6 py-6 sm:py-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(26rem,1fr)] lg:items-start lg:gap-10 lg:py-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1fr)] xl:gap-12">
            <div className="min-w-0">
              <h1 className="max-w-full break-words text-[2rem] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:max-w-3xl sm:text-balance sm:text-[2.25rem] lg:max-w-[34rem] lg:text-[2.1rem] xl:text-[2.3rem]">
                {activeSlide.headline}
              </h1>
            </div>

            <div className="min-w-0">
              <p className="max-w-full text-sm leading-7 text-white/84 sm:max-w-2xl sm:text-pretty sm:text-[0.95rem] sm:leading-[1.6] lg:text-[1rem] lg:leading-8">
                {activeSlide.description}
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                {hasServiceCta ? (
                  <ButtonLink
                    href={activeSlide.primaryCta.href}
                    variant="secondary"
                    className="w-full whitespace-nowrap rounded-sm border-transparent bg-white px-5 py-3 text-sm font-semibold !text-[#061a28] shadow-[0_22px_55px_rgba(3,18,31,0.2)] hover:-translate-y-0.5 hover:border-transparent hover:!text-[#061a28] sm:w-auto"
                  >
                    {activeSlide.primaryCta.label}
                  </ButtonLink>
                ) : null}
                <ButtonLink
                  href="/book-consultation"
                  variant="ghost"
                  className="w-full justify-start rounded-sm px-0 py-3 text-sm font-semibold text-white/86 hover:bg-transparent hover:text-white sm:w-auto sm:justify-center sm:px-4 sm:hover:bg-white/8"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>

              <SlideSelectorRail
                slides={slides}
                activeIndex={activeIndex}
                progress={shouldReduceMotion ? 0 : progress}
                countdownValue={countdownValue}
                onSelect={handleSelectSlide}
                orientation="horizontal"
                className="mt-8 lg:hidden"
              />
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}

function SlideSelectorRail({
  slides,
  activeIndex,
  progress,
  countdownValue,
  onSelect,
  orientation = "vertical",
  className,
}: SlideSelectorRailProps) {
  return (
    <div
      className={cn(
        "z-10 flex items-center",
        orientation === "vertical" ? "flex-col gap-4" : "flex-row gap-3",
        className,
      )}
      aria-label="Homepage hero slides"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show hero slide ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group relative flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082a3f]",
              isActive
                ? "h-12 w-12"
                : "h-8 w-8 transition duration-200 hover:scale-110",
            )}
          >
            {isActive ? (
              <>
                <svg
                  viewBox={`0 0 ${SELECTOR_SIZE} ${SELECTOR_SIZE}`}
                  className="absolute inset-0 -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx={SELECTOR_SIZE / 2}
                    cy={SELECTOR_SIZE / 2}
                    r={SELECTOR_RADIUS}
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth={SELECTOR_STROKE}
                  />
                  <circle
                    cx={SELECTOR_SIZE / 2}
                    cy={SELECTOR_SIZE / 2}
                    r={SELECTOR_RADIUS}
                    fill="none"
                    stroke="rgba(25,213,255,1)"
                    strokeLinecap="round"
                    strokeWidth={SELECTOR_STROKE}
                    strokeDasharray={SELECTOR_CIRCUMFERENCE}
                    strokeDashoffset={
                      SELECTOR_CIRCUMFERENCE *
                      (1 - clampProgress(progress))
                    }
                  />
                </svg>
                <span className="absolute inset-[4px] rounded-full border border-white/10 bg-[rgba(6,28,41,0.88)]" />
                <span className="relative text-[0.7rem] font-semibold tabular-nums text-white">
                  {countdownValue}
                </span>
              </>
            ) : (
              <span className="relative h-2.5 w-2.5 rounded-full bg-white/52 transition duration-200 group-hover:bg-white/86" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function DefaultHomeHero({ section }: HomeHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(25,213,255,0.28),transparent_28%),radial-gradient(circle_at_95%_10%,rgba(47,107,255,0.24),transparent_22%),linear-gradient(180deg,#F7FAFF_0%,#EEF4FF_100%)] pb-20 pt-14 sm:pb-24 sm:pt-18">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div
            data-hero-copy
            className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(11,18,32,0.08)] bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-electric)] shadow-[0_18px_42px_rgba(11,18,32,0.08)]"
          >
            <ShieldCheck className="h-4 w-4" />
            {section.eyebrow}
          </div>
          <h1
            data-hero-copy
            className="mt-8 max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-6xl lg:text-7xl"
          >
            {section.title}
          </h1>
          <p
            data-hero-copy
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl"
          >
            {section.description}
          </p>

          <div data-hero-copy className="mt-6 flex flex-wrap gap-3">
            {section.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:rgba(11,18,32,0.08)] bg-white/78 px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div data-hero-copy className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={section.primaryCta.href}>
              {section.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={section.secondaryCta.href} variant="secondary">
              {section.secondaryCta.label}
            </ButtonLink>
          </div>

          <div
            data-hero-copy
            className="mt-10 grid gap-4 border-t border-[color:rgba(11,18,32,0.08)] pt-8 sm:grid-cols-3"
          >
            {section.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/50 bg-white/60 p-5 shadow-[0_20px_45px_rgba(11,18,32,0.06)]"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--color-muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          data-hero-panel
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative isolate overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(11,18,32,0.96),rgba(17,26,47,0.92))] p-6 text-white shadow-[0_40px_80px_rgba(11,18,32,0.26)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,213,255,0.22),transparent_30%),radial-gradient(circle_at_90%_18%,rgba(47,107,255,0.35),transparent_26%)]" />
          <div className="relative flex min-h-[34rem] flex-col justify-between rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan)]">
                  Integrated Command View
                </p>
                <p className="mt-2 text-sm text-white/72">
                  Support, surveillance, network health, and site readiness in
                  one story.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/72">
                Live rollout
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="relative mx-auto mt-10 h-[20rem] w-full max-w-[30rem]">
              <div
                data-line
                className="absolute left-[18%] top-[38%] h-px w-[31%] bg-[linear-gradient(90deg,rgba(25,213,255,0.1),rgba(25,213,255,1))]"
              />
              <div
                data-line
                className="absolute left-[51%] top-[18%] h-[23%] w-px bg-[linear-gradient(180deg,rgba(25,213,255,1),rgba(25,213,255,0.14))]"
              />
              <div
                data-line
                className="absolute left-[51%] top-[40%] h-px w-[27%] bg-[linear-gradient(90deg,rgba(25,213,255,1),rgba(47,107,255,1))]"
              />
              <div
                data-line
                className="absolute left-[27%] top-[68%] h-px w-[43%] bg-[linear-gradient(90deg,rgba(47,107,255,0.5),rgba(25,213,255,1))]"
              />

              {schematicNodes.map((node) => (
                <div
                  key={node.id}
                  data-node
                  className="absolute"
                  style={{ left: node.left, top: node.top }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(25,213,255,0.6),transparent_70%)] blur-xl" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/14 bg-[radial-gradient(circle,rgba(47,107,255,0.32),rgba(11,18,32,0.96))] text-center shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
                      <span className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/84">
                        {node.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 pt-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/52">
                  Coverage
                </p>
                <p className="mt-2 text-sm font-medium text-white/82">
                  CCTV, access, and incident visibility designed together.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/52">
                  Operations
                </p>
                <p className="mt-2 text-sm font-medium text-white/82">
                  Support ownership and documentation included from the start.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/52">
                  Visibility
                </p>
                <p className="mt-2 text-sm font-medium text-white/82">
                  Network health and deployment readiness reflected in one
                  model.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
