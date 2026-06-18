import { ArrowRight, ClipboardCheck, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { buildServiceSeoFaqs } from "@/lib/service-seo";
import type { Service } from "@/lib/types";

type ServiceSeoAnswerBlockProps = {
  service: Service;
};

export function ServiceSeoAnswerBlock({ service }: ServiceSeoAnswerBlockProps) {
  const faqs = buildServiceSeoFaqs(service);
  const projectPriorities = Array.from(
    new Set([
      ...service.highlights.slice(0, 3),
      ...service.deliverables.slice(0, 3),
    ]),
  ).slice(0, 6);

  return (
    <section className="bg-[#f6f8fb] py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="rounded-[1.25rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-6 shadow-[0_18px_50px_rgba(11,18,32,0.06)] sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-electric)]">
              Nigeria Service Coverage
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-4xl">
              {service.title} for Lagos and Nigerian business sites.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Auxano plans, installs, tests, documents, and supports {service.title.toLowerCase()} for organizations with live operating environments in Lagos, Abuja, Port Harcourt, and other Nigerian locations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)]">
              {["Lagos", "Abuja", "Port Harcourt", "Ikeja", "Victoria Island"].map(
                (location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-cloud)] px-3 py-2"
                  >
                    <MapPin className="h-3.5 w-3.5 text-[var(--color-electric)]" />
                    {location}
                  </span>
                ),
              )}
            </div>
            <ButtonLink href="/book-consultation" className="mt-7">
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="grid gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-electric)]">
                How We Work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[var(--color-ink)] sm:text-4xl">
                Clear scope, disciplined installation, and a handover your team can use.
              </h2>
            </div>

            <div className="grid gap-4">
              {faqs.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.25rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-5 shadow-[0_14px_40px_rgba(11,18,32,0.05)]"
                >
                  <h3 className="text-lg font-semibold leading-7 text-[var(--color-ink)]">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>

            <div className="rounded-[1.25rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-5">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-[var(--color-electric)]" />
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  What the project should leave behind
                </p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                {projectPriorities.map((priority) => (
                  <li
                    key={priority}
                    className="rounded-full bg-[var(--color-cloud)] px-3 py-2"
                  >
                    {priority}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
