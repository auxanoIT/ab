import Image from "next/image";

import { PartnerLogoMarquee } from "@/components/sections/partner-logo-marquee";
import { ServiceCategoryCarousel } from "@/components/sections/service-category-carousel";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { getServices, getSolutionCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import type { Service, ServiceCategory, SolutionCategory } from "@/lib/types";

export const metadata = buildMetadata({
  title: "IT, ELV, CCTV, Fire Alarm, and Network Services in Nigeria",
  description:
    "Explore Auxano IT, ELV, CCTV, fire alarm, access control, network cabling, hardware, software licensing, and managed support services in Nigeria.",
  path: "/services",
  keywords: [
    "IT services Nigeria",
    "IT solutions company Lagos",
    "CCTV installation Nigeria",
    "fire alarm installation Lagos",
    "network cabling company Nigeria",
    "managed IT services Lagos",
    "ELV contractor Nigeria",
  ],
});

export const revalidate = false;

const categoryNarratives: Record<
  ServiceCategory,
  {
    title: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
  }
> = {
  Infrastructure: {
    title: "Built to protect.",
    paragraphs: [
      "Simple and seamless physical security with a cybersecurity focus",
    ],
    imageSrc: "/image/service_section/itsection.jpg",
    imageAlt:
      "IT infrastructure service team in a secured business environment",
  },
  "Fire Alarm & Safety": {
    title: "Safety systems installed right.",
    paragraphs: [
      "Fire alarm design, installation, testing, maintenance, integration, and compliance support for safer facilities.",
    ],
    imageSrc: "/image/service-details/fire-alarm-hero-call-point.webp",
    imageAlt: "Red manual fire alarm call point mounted on a clean commercial wall",
  },
  Networking: {
    title: "Designed to scale.",
    paragraphs: ["Structured networks built for speed, stability, and growth."],
    imageSrc: "/image/service_section/Networks_section.jpg",
    imageAlt: "Networking service setup with modern office connectivity",
  },
  "Hardware Systems": {
    title: "Hardware done right.",
    paragraphs: [
      "From setup to support, built for reliability and long-term use.",
    ],
    imageSrc: "/image/service_section/Hardware_section.jpg",
    imageAlt: "Hardware systems deployment in a business environment",
  },
  "Software & Licenses": {
    title: "Protection starts here.",
    paragraphs: [
      "Software, security, and cloud solutions built for modern business needs.",
    ],
    imageSrc: "/image/service_section/Licensed.jpg",
    imageAlt:
      "Licensed software and security solutions for business operations",
  },
  "Managed & Advisory": {
    title: "Beyond deployment.",
    paragraphs: [
      "Ongoing support, audits, and expert guidance for growing businesses.",
    ],
    imageSrc: "/image/service_section/Operational_support.jpg",
    imageAlt: "Operational support and advisory service collaboration",
  },
};

const categoryOrder: ServiceCategory[] = [
  "Infrastructure",
  "Networking",
  "Hardware Systems",
  "Software & Licenses",
  "Managed & Advisory",
  "Fire Alarm & Safety",
];

function orderCategoriesByNarrative(categories: SolutionCategory[]) {
  return [...categories].sort(
    (left, right) =>
      categoryOrder.indexOf(left.label as ServiceCategory) -
      categoryOrder.indexOf(right.label as ServiceCategory),
  );
}

function getCategoryServices(services: Service[], slugs: string[]) {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}

export default async function ServicesPage() {
  const [services, categories] = await Promise.all([
    getServices(),
    getSolutionCategories(),
  ]);

  const orderedCategories = orderCategoriesByNarrative(categories);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Auxano IT, ELV, CCTV, Fire Alarm, and Network Services",
            description:
              "Auxano Solutions service catalog for IT infrastructure, physical security, fire safety, networking, hardware, software licensing, and managed IT support in Nigeria.",
            url: absoluteUrl("/services"),
            inLanguage: "en-NG",
            provider: {
              "@type": "Organization",
              "@id": `${absoluteUrl("/")}#organization`,
              name: "Auxano Solutions Technology Limited",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Auxano service catalog",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: absoluteUrl(`/services/${service.slug}`),
              description: service.summary,
            })),
          },
        ]}
      />
      <section className="overflow-hidden bg-[linear-gradient(135deg,#355C9A_100%,#4E73B8_50%,#6C8FD6_100%)] text-white">
        <Container className="grid min-h-[calc(100vh-5rem)] gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.06em] sm:text-4xl lg:text-5xl">
              IT, ELV, CCTV, fire alarm, and network services for Nigeria.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Auxano delivers IT infrastructure, physical security, fire safety,
              networking, hardware, software licensing, and managed support for
              organizations in Lagos and across Nigeria.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <Image
              src="/image/servces.png"
              alt="Auxano services platform visual"
              fill
              priority
              className="object-contain lg:object-cover"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <PartnerLogoMarquee />

      <section className="bg-white py-20 sm:py-24">
        <Container className="text-center">
          <h2 className="mx-auto mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--color-ink)] sm:text-5xl lg:text-7xl">
            One Partner for every Technology need
          </h2>
        </Container>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <Container className="space-y-2">
          {orderedCategories.map((category, index) => {
            const narrative =
              categoryNarratives[category.label as ServiceCategory];
            const categoryServices = getCategoryServices(
              services,
              category.serviceSlugs,
            );

            return (
              <ServiceCategoryCarousel
                key={category.id}
                id={category.anchorId}
                title={narrative.title}
                paragraphs={narrative.paragraphs}
                imageSrc={narrative.imageSrc}
                imageAlt={narrative.imageAlt}
                reverse={index % 2 === 1}
                cards={categoryServices.map((service) => ({
                  slug: service.slug,
                  title: service.title,
                  href: `/services/${service.slug}`,
                }))}
              />
            );
          })}
        </Container>
      </section>
    </>
  );
}
