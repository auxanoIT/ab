import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { FooterColumn, SiteSettings } from "@/lib/types";
import { createWhatsappLink } from "@/lib/utils";

type SiteFooterProps = {
  columns: FooterColumn[];
  settings: SiteSettings;
};

export function SiteFooter({ columns, settings }: SiteFooterProps) {
  const visibleColumns = columns
    .map((column) => ({
      ...column,
      links: column.links.filter(
        (link) =>
          link.href !== "/privacy" &&
          link.label.toLowerCase() !== "privacy policy",
      ),
    }))
    .filter((column) => column.links.length > 0);

  return (
    <footer className="border-t border-white/6 bg-[var(--color-ink)] text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div className="space-y-6">
          <Link href="/" aria-label="Auxano Solutions home" className="inline-flex h-16 items-center">
            <Image
              src="/image/AUxano.webp"
              alt="Auxano Solutions"
              width={100}
              height={500}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="max-w-xl text-sm leading-7 text-white/68">
            {settings.address}, {settings.city}, {settings.country}. Call{" "}
            <a href={`tel:${settings.phone}`} className="text-white">
              {settings.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${settings.email}`} className="text-white">
              {settings.email}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
            <ButtonLink
              href={createWhatsappLink(
                settings.whatsappSales,
                "Hello Auxano, I want to discuss an infrastructure or security project.",
              )}
              variant="secondary"
              className="border-white/12 bg-white/6 text-white hover:border-white/28 hover:text-white"
            >
              WhatsApp Sales
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {visibleColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
                {column.title}
              </p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/72 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
