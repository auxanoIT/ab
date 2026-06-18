import Image from "next/image";
import {
  BriefcaseBusiness,
  Headphones,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { PartnerLogoMarquee } from "@/components/sections/partner-logo-marquee";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Book IT, CCTV, Fire Alarm, and Network Consultation in Nigeria",
  description:
    "Book a consultation with Auxano Solutions in Lagos to scope IT infrastructure, CCTV, access control, fire alarm, network cabling, cybersecurity, software licensing, or managed IT support in Nigeria.",
  path: "/book-consultation",
  keywords: [
    "book IT consultation Nigeria",
    "IT infrastructure consultation Lagos",
    "CCTV installation consultation Nigeria",
    "fire alarm installation consultation Lagos",
    "network cabling consultation Nigeria",
    "managed IT support consultation Lagos",
  ],
});

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "200+",
    label: "Projects Delivered",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Technical Support",
  },
  {
    icon: ShieldCheck,
    value: "End-to-End",
    label: "Deployment & Support",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Book IT, CCTV, Fire Alarm, and Network Consultation in Nigeria",
            url: absoluteUrl("/book-consultation"),
            description:
              "Book a consultation with Auxano Solutions to scope IT infrastructure, CCTV, access control, fire alarm, network cabling, cybersecurity, software licensing, or managed IT support in Nigeria.",
            about: [
              "IT infrastructure consultation",
              "CCTV installation consultation",
              "Access control consultation",
              "Fire alarm system consultation",
              "Network cabling consultation",
              "Managed IT support consultation",
            ],
            provider: {
              "@type": "Organization",
              "@id": `${absoluteUrl("/")}#organization`,
              name: "Auxano Solutions Technology Limited",
            },
            potentialAction: {
              "@type": "CommunicateAction",
              target: absoluteUrl("/book-consultation"),
              name: "Request a technical consultation",
            },
          },
        ]}
      />
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute left-0 top-0 hidden h-56 w-56 opacity-55 [background-image:radial-gradient(#90b7f8_1.3px,transparent_1.3px)] [background-size:15px_15px] lg:block" />

        <Container className="relative grid gap-10 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
          <div className="relative min-h-[42rem] overflow-hidden rounded-lg lg:min-h-[45rem] xl:rounded-none">
            <Image
              src="/image/service-details/data-centre-buildout.webp"
              alt="Data centre infrastructure corridor for Auxano consultation planning"
              fill
              priority
              className="object-cover object-left"
              sizes="(min-width: 1280px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,255,0.08)_0%,rgba(248,251,255,0.9)_42%,#f8fbff_72%,#f8fbff_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.96)_0%,rgba(248,251,255,0.7)_22%,rgba(248,251,255,0.72)_72%,#f8fbff_100%)]" />

            <div className="relative flex min-h-[42rem] flex-col justify-center px-5 py-10 sm:px-8 lg:min-h-[45rem] lg:px-12">
              <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-[-0.055em] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                Let&apos;s design the right{" "}
                <span className="text-[#175be8]">IT solution</span> for your
                business.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#34435c] sm:text-lg">
                Whether you need infrastructure deployment, network upgrades,
                access control, surveillance systems, cybersecurity, or managed
                IT support, Auxano helps you plan, deploy, and support reliable
                technology environments built for long-term performance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <article
                      key={stat.value}
                      className="rounded-lg border border-[color:rgba(11,18,32,0.1)] bg-white/84 p-5 shadow-[0_18px_55px_rgba(11,18,32,0.06)] backdrop-blur"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#175be8,#053fae)] text-white shadow-[0_14px_35px_rgba(23,91,232,0.28)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-base font-medium leading-6 text-[var(--color-ink)]">
                        {stat.label}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-5 rounded-lg border border-white/72 bg-white/55 p-5 shadow-[0_18px_50px_rgba(47,107,255,0.08)] backdrop-blur">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d8e7ff] text-[#175be8]">
                  <UsersRound className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                    No technical expertise required.
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-ink)]">
                    Tell us what you need, and our team will recommend the right
                    solution for your environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/80 bg-white/92 p-5 shadow-[0_30px_90px_rgba(11,18,32,0.11)] backdrop-blur sm:p-7 lg:p-8">
            <LeadForm
              context="consultation"
              title="Talk to an Auxano specialist"
              description="Tell us about your project, infrastructure needs, or operational challenges. Our team will review your request and recommend the right next steps."
              className="border-0 bg-transparent p-0 shadow-none"
              showEyebrow={false}
              submitLabel="Book Consultation"
              fullWidthSubmit
            />
          </div>
        </Container>
      </section>

      <PartnerLogoMarquee />
    </>
  );
}
