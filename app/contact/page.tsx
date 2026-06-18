import { Mail, MapPin, Phone } from "lucide-react";

import { LeadForm } from "@/components/forms/lead-form";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSiteSettings } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, createWhatsappLink } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contact Auxano Solutions in Lagos, Nigeria",
  description:
    "Contact Auxano Solutions in Lagos for IT infrastructure, CCTV installation, access control, fire alarm systems, network cabling, software licensing, and managed IT support in Nigeria.",
  path: "/contact",
  keywords: [
    "contact IT company Lagos",
    "IT solutions company Nigeria contact",
    "CCTV installation Lagos contact",
    "fire alarm installation Nigeria contact",
    "managed IT support Lagos contact",
  ],
});

export default async function ContactPage() {
  const settings = await getSiteSettings();

  const contactCards = [
    {
      icon: Phone,
      label: "Phone",
      value: settings.phone,
      href: `tel:${settings.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: settings.email,
      href: `mailto:${settings.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${settings.address}, ${settings.city}`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${settings.address}, ${settings.city}, Nigeria`,
      )}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Auxano Solutions",
            url: absoluteUrl("/contact"),
            description:
              "Contact Auxano Solutions Technology Limited for IT infrastructure, CCTV, access control, fire alarm, network cabling, software licensing, and managed IT support in Nigeria.",
            mainEntity: {
              "@type": "Organization",
              "@id": `${absoluteUrl("/")}#organization`,
              name: settings.name,
              telephone: settings.phone,
              email: settings.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: settings.address,
                addressLocality: settings.city,
                addressCountry: settings.country,
              },
            },
          },
        ]}
      />
      <section className="py-20 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Contact Auxano"
            title="Bring the commercial brief, technical friction, or rollout idea into one serious conversation."
            description="The contact route is designed for teams that already know something needs attention and need a clear next step."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="rounded-[1.75rem] border border-[color:rgba(11,18,32,0.08)] bg-white p-6 shadow-[0_18px_50px_rgba(11,18,32,0.06)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:rgba(47,107,255,0.08)] text-[var(--color-electric)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">{card.value}</p>
                </a>
              );
            })}
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <LeadForm context="contact" />
            <div className="rounded-[2rem] border border-[color:rgba(11,18,32,0.08)] bg-[var(--color-ink)] p-7 text-white shadow-[0_28px_80px_rgba(11,18,32,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan)]">
                Faster routes
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                If the need is urgent, route it directly.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Sales and support routing stay separate in the experience even if both currently land on the same live number.
              </p>
              <div className="mt-8 grid gap-4">
                <ButtonLink
                  href={createWhatsappLink(
                    settings.whatsappSales,
                    "Hello Auxano, I need to discuss a new IT, network, or security project.",
                  )}
                  className="w-full"
                >
                  WhatsApp Sales
                </ButtonLink>
                <ButtonLink
                  href={createWhatsappLink(
                    settings.whatsappSupport,
                    "Hello Auxano, I need support assistance for an existing technical issue.",
                  )}
                  variant="secondary"
                  className="w-full border-white/12 bg-white/8 text-white hover:border-white/22 hover:text-white"
                >
                  WhatsApp Support
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
