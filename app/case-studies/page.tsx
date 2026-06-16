import Image from "next/image";
import { ArrowRight, ShieldCheck, Signal, Workflow } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Container } from "@/components/ui/container";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Explore Auxano case studies across ELV infrastructure, structured cabling, cybersecurity compliance, access control, surveillance, fire safety, and enterprise IT deployment.",
  path: "/case-studies",
});

export const revalidate = 120;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  const featured = caseStudies[0];
  const remaining = caseStudies.slice(1);

  return (
    <>
      <section className="overflow-hidden bg-[var(--color-ink)] text-white">
        <Container className="grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan)]">
              Delivery Proof
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Case studies built around operational change.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              See how Auxano plans, installs, documents, and commissions
              critical IT, ELV, security, fire safety, and network environments
              for organizations that need stronger execution and reliable
              handover.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/book-consultation">
                Discuss a similar project
              </ButtonLink>
              <ButtonLink href="/services" className="text-black">
                Explore services
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/8 shadow-[0_32px_90px_rgba(0,0,0,0.26)]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/image/case-studies/enterprise-elv-integrated-hero-photo.webp"
                alt="Integrated enterprise ELV infrastructure used for case study delivery proof"
                fill
                priority
                quality={56}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,18,32,0.18),rgba(11,18,32,0.68))]" />
            </div>
            <div className="grid gap-3 border-t border-white/10 bg-[rgba(11,18,32,0.78)] p-5 backdrop-blur sm:p-6 md:grid-cols-3 lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:rounded-[1.25rem] lg:border lg:bg-[rgba(11,18,32,0.7)]">
              {[
                ["Plan", "Map the risk and operating environment."],
                ["Deploy", "Install the physical and digital layers."],
                ["Handover", "Document the result so support stays clean."],
              ].map(([label, body]) => (
                <div key={label}>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 text-xs leading-6 text-white/68">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Security outcomes",
                body: "CCTV, access control, and site visibility projects are framed around operational assurance, not just equipment counts.",
              },
              {
                icon: Signal,
                title: "Infrastructure reliability",
                body: "Structured cabling, fiber backbone, wireless, server room, and endpoint improvements are framed around long-term maintainability.",
              },
              {
                icon: Workflow,
                title: "Repeatable handover",
                body: "Every story keeps challenge, solution, result, and metrics in the same order so buyers can compare project outcomes quickly.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-6 shadow-[0_18px_50px_rgba(11,18,32,0.06)]"
              >
                <item.icon className="h-6 w-6 text-[var(--color-electric)]" />
                <h2 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-cloud)] py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-electric)]">
              Proof Library
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Browse delivery stories by environment, challenge, and result.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              Each case study is structured around the business need, delivery
              scope, commissioned systems, and measurable project outcome.
            </p>
          </div>

          {featured ? (
            <div className="mt-10 grid items-stretch gap-5">
              <CaseStudyCard caseStudy={featured} featured />
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {remaining.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-8 text-[var(--color-muted)]">
              No case studies have been published yet.
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
