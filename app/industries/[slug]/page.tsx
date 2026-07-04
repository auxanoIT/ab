import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowDown,
  ArrowRight,
  ClipboardCheck,
  Network,
  ShieldCheck,
} from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { IndustryChallengeTabs } from "@/components/sections/industry-challenge-tabs";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIndustryBySlug, getIndustries, getServices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import type { Service, ServiceNavMedia } from "@/lib/types";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = false;

function getMappedServices(serviceSlugs: string[], services: Service[]) {
  return serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}

const industrySolutionCardImages: Partial<Record<string, ServiceNavMedia>> = {
  "it-managed-services-staff-outsourcing": {
    src: "/image/service_section/Operational_support.jpg",
    alt: "Managed IT support engineer reviewing infrastructure operations in a data room",
  },
  "it-consultancy-audit-services": {
    src: "/image/It_management.jpg",
    alt: "IT consultant reviewing operational technology requirements on a tablet",
  },
  "it-technical-services": {
    src: "/image/service_section/Operational_support.jpg",
    alt: "Technical services engineer supporting business infrastructure operations",
  },
  "firewall-sales-licenses": {
    src: "/image/service_section/Licensed.jpg",
    alt: "Cybersecurity and firewall licensing concept for protected business systems",
  },
  "server-operating-system-licenses": {
    src: "/image/software_and_licenses.jpg",
    alt: "Server and software licensing workspace for compliant infrastructure deployment",
  },
  "applications-licenses": {
    src: "/image/software_and_licenses.jpg",
    alt: "Business application licensing workspace with secure software management",
  },
};

function getServiceCardImage(service: Service): ServiceNavMedia {
  return (
    service.capabilitySections?.[0]?.image ??
    industrySolutionCardImages[service.slug] ??
    service.navImage
  );
}

export async function generateStaticParams() {
  const industries = await getIndustries();

  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return buildMetadata({
      title: "Industry not found",
      description: "The requested industry page could not be found.",
      path: `/industries/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `IT Infrastructure for ${industry.title} in Nigeria`,
    description: `${industry.heroDescription} Auxano supports ${industry.title.toLowerCase()} in Lagos and across Nigeria with IT infrastructure, CCTV, access control, networking, and managed support.`,
    path: industry.href,
    imagePath: industry.heroImage.src,
    imageAlt: industry.heroImage.alt,
    keywords: [
      industry.title,
      `${industry.title} IT infrastructure Nigeria`,
      `${industry.title} security systems Lagos`,
      `${industry.title} CCTV access control Nigeria`,
      ...industry.environmentExamples,
      ...industry.primaryServiceSlugs,
    ],
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const [industry, services] = await Promise.all([
    getIndustryBySlug(slug),
    getServices(),
  ]);

  if (!industry) {
    notFound();
  }

  const mappedServices = getMappedServices(industry.primaryServiceSlugs, services);
  const featuredServices = mappedServices.slice(0, 3);
  const featureItems = [
    {
      icon: ShieldCheck,
      title: "Security and access planned together",
      description:
        "Access control, surveillance, and site workflows are scoped as one operating environment instead of isolated purchases.",
    },
    {
      icon: Network,
      title: "Infrastructure that supports the security layer",
      description:
        "Cabling, switching, wireless, and endpoint readiness are considered before the environment depends on the rollout.",
    },
    {
      icon: ClipboardCheck,
      title: "Documented handover and support clarity",
      description:
        "The result is easier to operate because scope, configuration, diagrams, and support expectations are left clear.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Infrastructure for ${industry.title}`,
            description: industry.heroDescription,
            url: absoluteUrl(industry.href),
            image: absoluteUrl(industry.heroImage.src),
            about: industry.environmentExamples,
            provider: {
              "@type": "Organization",
              name: "Auxano Solutions Technology Limited",
            },
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
                name: industry.title,
                item: absoluteUrl(industry.href),
              },
            ],
          },
        ]}
      />
      <section className="overflow-hidden bg-white">
        <div className="relative hidden min-h-[35rem] md:block">
          <Image
            src={industry.heroImage.src}
            alt={industry.heroImage.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.96)_30%,rgba(255,255,255,0.72)_48%,rgba(255,255,255,0.18)_68%,rgba(255,255,255,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_78%,rgba(255,255,255,0.75)_100%)]" />

          <Container className="relative flex min-h-[35rem] items-center">
            <div className="max-w-[34rem]">
              <h1 className="max-w-[30rem] text-balance text-[2.65rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--color-ink)] lg:text-[3.2rem]">
                Infrastructure for {industry.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                {industry.shortDescription}
              </p>
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-0.5"
                >
                  Book Consultation
                </Link>
                <a
                  href="#industry-challenges"
                  aria-label="Scroll to industry challenges"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/18 bg-white/70 text-black backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <ArrowDown className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Container>
        </div>

        <div className="md:hidden">
          <div className="relative min-h-[19rem] bg-[var(--color-cloud)]">
            <Image
              src={industry.heroImage.src}
              alt={industry.heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.78)_100%)]" />
          </div>

          <Container className="bg-[#f4f6f8] py-10">
            <h1 className="text-balance text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)]">
              Infrastructure for {industry.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
              {industry.shortDescription}
            </p>
            <div className="mt-7 flex items-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
              <a
                href="#industry-challenges"
                aria-label="Scroll to industry challenges"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/18 bg-white text-black"
              >
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </div>
      </section>

      <div id="industry-challenges">
        <IndustryChallengeTabs industry={industry} services={featuredServices} />
      </div>

      <section className="bg-[#f6f8fb] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[24rem] overflow-hidden rounded-lg bg-white shadow-[0_22px_70px_rgba(11,18,32,0.08)]">
            <Image
              src={industry.heroImage.src}
              alt={industry.heroImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,0.2),rgba(8,17,31,0))]" />
          </div>

          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Why choose Auxano for {industry.title.toLowerCase()}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              We connect practical technology choices with the way the site is
              expected to run: movement, visibility, uptime, and post-launch support.
            </p>

            <div className="mt-8 grid gap-6">
              {featureItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-electric)] shadow-[0_12px_32px_rgba(11,18,32,0.07)]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            title={`Solutions for ${industry.title.toLowerCase()}`}
            description="Smart, secure, and scalable IT solutions designed for modern operating environments."
            align="center"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service) => {
              const image = getServiceCardImage(service);

              return (
                <article
                  key={service.slug}
                  className="overflow-hidden rounded-lg border border-[color:rgba(11,18,32,0.08)] bg-white shadow-[0_18px_50px_rgba(11,18,32,0.06)]"
                >
                  <div className="relative min-h-[13.5rem] bg-[var(--color-cloud)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 31vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {service.summary}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--color-electric)]"
                    >
                      View solution
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f8fb] py-16 sm:py-24">
        <Container>
          <LeadForm
            context="consultation"
            title="Plan a stronger environment"
            description={`Share the project goal, support requirement, or risk inside your ${industry.title.toLowerCase()} environment. Auxano will review the brief and recommend the right next step.`}
            className="mx-auto max-w-5xl rounded-lg"
            headingAlign="center"
            showEyebrow={false}
          />
        </Container>
      </section>
    </>
  );
}
