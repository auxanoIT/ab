"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiArrowRight,
  FiBox,
  FiCamera,
  FiClipboard,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGrid,
  FiHardDrive,
  FiLayers,
  FiLifeBuoy,
  FiLock,
  FiMonitor,
  FiPhoneCall,
  FiPrinter,
  FiServer,
  FiSettings,
  FiShare2,
  FiShield,
  FiTool,
  FiUsers,
  FiVideo,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type ServiceCategoryCarouselCard = {
  slug: string;
  title: string;
  href: string;
};

type ServiceCategoryCarouselProps = {
  id: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  cards: ServiceCategoryCarouselCard[];
  reverse?: boolean;
};

const serviceIconMap: Record<string, IconType> = {
  "door-access-control": FiLock,
  "surveillance-system-cctv": FiCamera,
  "fire-alarm-safety-systems": FiAlertTriangle,
  "structured-lan-cabling": FiShare2,
  "data-centre-services": FiServer,
  "automated-gates-sliding-doors": FiZap,
  "sales-of-it-hardware": FiMonitor,
  "repair-of-it-hardware": FiTool,
  "sales-of-data-centre-consumables": FiBox,
  "audio-visual-services-livestreaming": FiVideo,
  "network-design-with-diagram": FiGitBranch,
  "network-architecture-planning": FiGrid,
  "network-cabling": FiShare2,
  "network-configurations": FiSettings,
  "sales-of-network-equipment": FiHardDrive,
  "office-telephone-system-ip-pbx": FiPhoneCall,
  "desktop-laptop-sales": FiMonitor,
  "computer-installation-setup": FiCpu,
  "server-sales-repair": FiServer,
  "server-storage-provisioning-deployment": FiDatabase,
  "printer-sales-installation": FiPrinter,
  "firewall-sales-licenses": FiShield,
  "antivirus-licenses": FiShield,
  "windows-operating-system-licenses": FiMonitor,
  "server-operating-system-licenses": FiServer,
  "database-software-licenses": FiDatabase,
  "cloud-services-licenses": FiCloud,
  "applications-licenses": FiGrid,
  "it-technical-services": FiLifeBuoy,
  "it-managed-services-staff-outsourcing": FiUsers,
  "it-consultancy-audit-services": FiClipboard,
  "it-project-management": FiLayers,
};

const fallbackIcon = FiGrid;
const SCROLL_EDGE_TOLERANCE = 2;

export function ServiceCategoryCarousel({
  id,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  cards,
  reverse = false,
}: ServiceCategoryCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const didDragRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const syncScrollState = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const cardElements = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-service-card]"),
    );
    const closestCardIndex = cardElements.reduce(
      (closestIndex, card, index) => {
        const closestCard = cardElements[closestIndex];
        const closestDistance = closestCard
          ? Math.abs(closestCard.offsetLeft - scroller.scrollLeft)
          : Number.POSITIVE_INFINITY;
        const cardDistance = Math.abs(card.offsetLeft - scroller.scrollLeft);

        return cardDistance < closestDistance ? index : closestIndex;
      },
      0,
    );

    setActiveIndex(closestCardIndex);
    setCanScrollPrevious(scroller.scrollLeft > SCROLL_EDGE_TOLERANCE);
    setCanScrollNext(
      scroller.scrollLeft < maxScrollLeft - SCROLL_EDGE_TOLERANCE,
    );
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    syncScrollState();

    const observer = new ResizeObserver(syncScrollState);

    observer.observe(scroller);
    scroller.addEventListener("scroll", syncScrollState, { passive: true });

    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", syncScrollState);
    };
  }, [syncScrollState]);

  function goToIndex(index: number) {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelectorAll<HTMLElement>("[data-service-card]")[
      index
    ];

    if (!scroller || !card) {
      return;
    }

    scroller.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  }

  function scrollCards(direction: "previous" | "next") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left:
        direction === "previous"
          ? -scroller.clientWidth * 0.86
          : scroller.clientWidth * 0.86,
      behavior: "smooth",
    });
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const target = event.target;

    if (target instanceof Element && target.closest("a, button")) {
      return;
    }

    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    didDragRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scroller.scrollLeft;
    setIsDragging(true);
    scroller.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;

    if (!isDragging || !scroller) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;

    if (Math.abs(deltaX) > 4) {
      didDragRef.current = true;
    }

    scroller.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  }

  function endPointerDrag(event: PointerEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  }

  return (
    <section id={id} className="scroll-mt-28 bg-white py-12 sm:py-16">
      <div
        className={`grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-stretch ${
          reverse
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        <div className="flex min-w-0 flex-col">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="mt-3 space-y-2">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-7 text-[var(--color-ink)]/85 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative mt-4">
            <div
              ref={scrollerRef}
              className="cursor-grab overflow-x-auto overflow-y-hidden scroll-smooth pb-4 scrollbar-hide active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={endPointerDrag}
              onPointerCancel={endPointerDrag}
              onPointerLeave={(event) => {
                if (isDragging) {
                  endPointerDrag(event);
                }
              }}
              onClickCapture={(event) => {
                if (didDragRef.current) {
                  event.preventDefault();
                  event.stopPropagation();
                  didDragRef.current = false;
                }
              }}
            >
              <div className="flex snap-x snap-mandatory gap-3 sm:gap-4">
                {cards.map((card) => {
                  const Icon = serviceIconMap[card.slug] ?? fallbackIcon;

                  return (
                    <Link
                      key={card.slug}
                      href={card.href}
                      scroll
                      data-service-card
                      className="group min-h-[10rem] w-[calc(100vw_-_3rem)] max-w-[20rem] shrink-0 snap-start rounded-lg border border-[rgba(14,31,52,0.18)] bg-white p-5 transition hover:border-[#ED6A39] hover:shadow-[0_18px_42px_rgba(237,106,57,0.12)] sm:min-h-[10.75rem] sm:w-[19rem] sm:p-6 lg:min-h-[11.5rem] lg:w-[calc((100%_-_2rem)/3)] lg:max-w-none"
                      draggable={false}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(237,106,57,0.1)] text-[#ED6A39]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold leading-tight text-[var(--color-ink)] sm:text-xl">
                        {card.title}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>

            {canScrollPrevious ? (
              <button
                type="button"
                onClick={() => scrollCards("previous")}
                aria-label="Previous service"
                className="absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#ED6A39] bg-white text-[#ED6A39] transition hover:bg-[#ED6A39] hover:text-white lg:flex"
              >
                <FiArrowLeft className="h-6 w-6" />
              </button>
            ) : null}

            {canScrollNext ? (
              <button
                type="button"
                onClick={() => scrollCards("next")}
                aria-label="Next service"
                className="absolute right-0 top-1/2 z-10 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#ED6A39] bg-white text-[#ED6A39] transition hover:bg-[#ED6A39] hover:text-white lg:flex"
              >
                <FiArrowRight className="h-6 w-6" />
              </button>
            ) : null}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
            {cards.map((card, index) => (
              <button
                key={card.slug}
                type="button"
                onClick={() => goToIndex(index)}
                aria-label={`Go to ${card.title}`}
                className={`h-2 rounded-full transition ${
                  index === activeIndex
                    ? "w-8 bg-[#ED6A39]"
                    : "w-2 bg-[rgba(237,106,57,0.25)]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[17rem] w-full overflow-hidden rounded-lg sm:min-h-[22rem] lg:min-h-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain sm:object-cover"
            sizes="(min-width: 1024px) 46vw, (min-width: 640px) 100vw, calc(100vw - 3rem)"
          />
        </div>
      </div>
    </section>
  );
}
