import type { Metadata } from "next";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "./globals.css";

import { CookieConsentManager } from "@/components/layout/cookie-consent-manager";
import { ChecklistLeadMagnetPopup } from "@/components/layout/checklist-lead-magnet-popup";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import {
  getFooterColumns,
  getIndustries,
  getNavigation,
  getResourceGroups,
  getServices,
  getSiteSettings,
  getSolutionCategories,
} from "@/lib/content";
import type { Service, SiteSettings } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default:
      "Auxano Solutions | IT, CCTV, Fire Alarm, and Network Services Nigeria",
    template: "%s | Auxano Solutions",
  },
  description:
    "Auxano Solutions is a Lagos-based IT solutions company serving Nigeria with CCTV, access control, fire alarm, network cabling, hardware, software licensing, and managed IT support.",
  applicationName: "Auxano Solutions",
  authors: [{ name: "Auxano Solutions Technology Limited" }],
  creator: "Auxano Solutions Technology Limited",
  publisher: "Auxano Solutions Technology Limited",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Auxano Solutions | IT, CCTV, Fire Alarm, and Network Services Nigeria",
    description:
      "IT infrastructure, CCTV, access control, fire alarm, network cabling, hardware, software licensing, and managed IT support for Nigerian organizations.",
    url: absoluteUrl("/"),
    siteName: "Auxano Solutions",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Auxano Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxano Solutions | IT, CCTV, Fire Alarm, and Network Services Nigeria",
    description:
      "Lagos-based IT solutions company serving Nigerian organizations with infrastructure, ELV, security, safety, and managed support.",
    images: [{ url: absoluteUrl("/opengraph-image"), alt: "Auxano Solutions" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const fallbackOfferNames = [
  "IT infrastructure services",
  "CCTV installation",
  "Door access control",
  "Fire alarm and safety systems",
  "Network cabling and configuration",
  "Managed IT services",
  "IT consultancy and audit services",
];

function buildOfferCatalog(services: Service[]) {
  const offers = services.length
    ? services.map((service) => ({
        name: service.title,
        description: service.summary,
        url: absoluteUrl(`/services/${service.slug}`),
        category: service.category,
      }))
    : fallbackOfferNames.map((name) => ({
        name,
        description: `${name} in Lagos and across Nigeria.`,
        url: absoluteUrl("/services"),
        category: "Technology services",
      }));

  return {
    "@type": "OfferCatalog",
    name: "Auxano IT, ELV, Security, Safety, Network, Software, and Managed Support Services",
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      areaServed: "Nigeria",
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
        category: offer.category,
        url: offer.url,
        areaServed: "Nigeria",
      },
    })),
  };
}

function buildSiteJsonLd(settings: SiteSettings, services: Service[]) {
  const organizationId = `${absoluteUrl("/")}#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": organizationId,
        name: settings.name,
        alternateName: settings.shortName,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/image/AUxano.webp"),
        image: absoluteUrl("/opengraph-image"),
        description: settings.description,
        email: settings.email,
        telephone: settings.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: settings.phone,
            email: settings.email,
            contactType: "sales and technical consultation",
            areaServed: "NG",
            availableLanguage: ["English"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: settings.address,
          addressLocality: settings.city,
          addressCountry: settings.country,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Nigeria",
          },
          {
            "@type": "City",
            name: "Lagos",
          },
          {
            "@type": "City",
            name: "Abuja",
          },
          {
            "@type": "City",
            name: "Port Harcourt",
          },
        ],
        knowsAbout: [
          "Managed IT support",
          "CCTV installation",
          "Access control installation",
          "Fire alarm system installation",
          "Fire safety systems",
          "Structured LAN cabling",
          "Network infrastructure",
          "Access control systems",
          "ELV systems",
          "Server and storage deployment",
          "Software licensing",
          "Firewall licenses",
          "IT audit and compliance",
          "Business continuity",
        ],
        hasOfferCatalog: buildOfferCatalog(services),
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        name: settings.shortName,
        url: absoluteUrl("/"),
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "en-NG",
      },
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = await getNavigation();
  const needsSolutions = navigation.some((item) => item.kind === "solutions");
  const needsIndustries = navigation.some((item) => item.kind === "industries");
  const needsResources = navigation.some((item) => item.kind === "resources");

  const [
    solutionCategories,
    industries,
    resourceGroups,
    services,
    footerColumns,
    siteSettings,
  ] = await Promise.all([
    needsSolutions ? getSolutionCategories() : Promise.resolve([]),
    needsIndustries ? getIndustries() : Promise.resolve([]),
    needsResources ? getResourceGroups() : Promise.resolve([]),
    needsSolutions ? getServices() : Promise.resolve([]),
    getFooterColumns(),
    getSiteSettings(),
  ]);

  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader
            navigation={navigation}
            solutionCategories={solutionCategories}
            industries={industries}
            resourceGroups={resourceGroups}
            services={services}
          />
          <main className="flex-1">{children}</main>
          <SiteFooter columns={footerColumns} settings={siteSettings} />
        </div>
        <JsonLd data={buildSiteJsonLd(siteSettings, services)} />
        <CookieConsentManager />
        <ChecklistLeadMagnetPopup />
      </body>
    </html>
  );
}
