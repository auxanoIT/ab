import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Network,
  ShieldCheck,
  Wrench,
  BadgeCheck,
  ClipboardCheck,
  Flame,
} from "lucide-react";

import { PartnerLogoMarquee } from "@/components/sections/partner-logo-marquee";
import { ServiceCapabilityFlow } from "@/components/sections/service-capability-flow";
import { ServiceSeoAnswerBlock } from "@/components/sections/service-seo-answer-block";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { getServiceBySlug, getServiceSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import {
  buildServiceSeoDescription,
  buildServiceSeoFaqs,
  buildServiceSeoKeywords,
  buildServiceSeoTitle,
} from "@/lib/service-seo";
import { absoluteUrl } from "@/lib/utils";
import type {
  Service,
  ServiceCapabilitySection,
  ServiceCategory,
  ServiceNavMedia,
} from "@/lib/types";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = false;

const categoryStyles: Record<
  ServiceCategory,
  {
    icon: typeof ShieldCheck;
    accent: string;
    tint: string;
    image: string;
    imageAlt: string;
  }
> = {
  Infrastructure: {
    icon: ShieldCheck,
    accent: "#2f6bff",
    tint: "rgba(47,107,255,0.1)",
    image: "/image/IT Infrastructure.png",
    imageAlt:
      "Biometric access control device in a secure infrastructure environment",
  },
  "Fire Alarm & Safety": {
    icon: Flame,
    accent: "#dc2626",
    tint: "rgba(220,38,38,0.1)",
    image: "/image/service-details/fire-alarm-hero-call-point.webp",
    imageAlt: "Red manual fire alarm call point mounted on a clean commercial wall",
  },
  Networking: {
    icon: Network,
    accent: "#f97316",
    tint: "rgba(249,115,22,0.11)",
    image: "/image/networking.png",
    imageAlt: "Network rack with structured orange cabling",
  },
  "Hardware Systems": {
    icon: Wrench,
    accent: "#18b67e",
    tint: "rgba(24,182,126,0.12)",
    image: "/image/computer_and_server.png",
    imageAlt: "Computer and server hardware systems",
  },
  "Software & Licenses": {
    icon: BadgeCheck,
    accent: "#7c3aed",
    tint: "rgba(124,58,237,0.1)",
    image: "/image/software_and_licenses.jpg",
    imageAlt: "Software licensing and cloud services workspace",
  },
  "Managed & Advisory": {
    icon: ClipboardCheck,
    accent: "#0f766e",
    tint: "rgba(15,118,110,0.12)",
    image: "/image/It_management.jpg",
    imageAlt: "IT management professional reviewing service activity",
  },
};

function buildFallbackSections(
  service: Service,
  image: string,
  imageAlt: string,
): ServiceCapabilitySection[] {
  return [
    {
      id: "delivery-model",
      navLabel: "Delivery model",
      title: `How ${service.title.toLowerCase()} is scoped.`,
      lead: service.summary,
      body: [service.description],
      image: {
        src: image,
        alt: imageAlt,
      },
    },
    {
      id: "handover-control",
      navLabel: "Handover",
      title: "What should be clear at completion.",
      lead: "A finished scope should leave the environment usable, supportable, and easier to govern.",
      body: [
        "Auxano documents the technical outcome in a way that helps internal teams, external vendors, and future support work from the same operating picture.",
      ],
      image: {
        src: image,
        alt: imageAlt,
      },
    },
    {
      id: "operating-fit",
      navLabel: "Operating fit",
      title: "Where this service creates measurable value.",
      lead: service.positioning,
      body: [
        "The strongest results come when the service is matched to the environment, the operational pressure behind it, and the accountability expected after deployment.",
      ],
      image: {
        src: image,
        alt: imageAlt,
      },
    },
  ];
}

function getServiceHeroImage(
  service: Service,
  fallbackImage: ServiceNavMedia,
): ServiceNavMedia {
  return (
    service.heroImage ??
    service.capabilitySections?.find((section) => section.image)?.image ??
    fallbackImage
  );
}

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The requested service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  const style = categoryStyles[service.category];
  const heroImage = getServiceHeroImage(service, {
    src: style.image,
    alt: style.imageAlt,
  });

  return buildMetadata({
    title: buildServiceSeoTitle(service),
    description: buildServiceSeoDescription(service),
    path: `/services/${service.slug}`,
    imagePath: heroImage.src,
    imageAlt: heroImage.alt,
    keywords: buildServiceSeoKeywords(service),
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const style = categoryStyles[service.category];
  const heroImage = getServiceHeroImage(service, {
    src: style.image,
    alt: style.imageAlt,
  });
  const capabilitySections =
    service.capabilitySections ??
    buildFallbackSections(service, heroImage.src, heroImage.alt);
  const serviceFaqs = buildServiceSeoFaqs(service);
  const serviceUrl = absoluteUrl(`/services/${service.slug}`);
  const organizationId = `${absoluteUrl("/")}#organization`;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            serviceType: service.category,
            provider: {
              "@type": "Organization",
              "@id": organizationId,
              name: "Auxano Solutions Technology Limited",
            },
            areaServed: [
              { "@type": "Country", name: "Nigeria" },
              { "@type": "City", name: "Lagos" },
              { "@type": "City", name: "Abuja" },
              { "@type": "City", name: "Port Harcourt" },
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl,
              servicePhone: "+234 8062 218 546",
            },
            audience: service.industries.map((industry) => ({
              "@type": "Audience",
              audienceType: industry,
            })),
            url: serviceUrl,
            description: buildServiceSeoDescription(service),
            image: absoluteUrl(heroImage.src),
            termsOfService: absoluteUrl("/terms"),
            serviceOutput: service.deliverables,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: "Nigeria",
              url: absoluteUrl("/book-consultation"),
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "NGN",
                description:
                  "Pricing is scoped after a site assessment, bill of materials, implementation plan, or support requirement review.",
              },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: serviceFaqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: absoluteUrl("/"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: absoluteUrl("/services"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: absoluteUrl(`/services/${service.slug}`),
              },
            ],
          },
        ]}
      />

      <section className="overflow-hidden bg-[linear-gradient(135deg,#355C9A_100%,#4E73B8_50%,#6C8FD6_100%)] text-white">
        <Container className="py-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
        </Container>
        <Container className="grid gap-10 pb-16 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {service.description}
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              quality={55}
              className="object-cover opacity-90"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <ServiceCapabilityFlow service={service} sections={capabilitySections} />
      <ServiceSeoAnswerBlock service={service} />
      <PartnerLogoMarquee />
    </>
  );
}
