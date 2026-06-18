import { notFound } from "next/navigation";

import { SectionRenderer } from "@/components/sections/section-renderer";
import { JsonLd } from "@/components/ui/json-ld";
import { getCaseStudies, getFaqs, getMarketingPage, getServices, getTestimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const revalidate = 120;

export const metadata = buildMetadata({
  title: "IT Solutions Company in Nigeria for CCTV, Fire Alarm, and Networks",
  description:
    "Auxano Solutions is a Lagos-based IT solutions company serving Nigeria with managed IT support, CCTV installation, access control, fire alarm systems, network cabling, hardware, software licensing, and IT consultancy.",
  path: "/",
  keywords: [
    "best IT solutions company in Nigeria",
    "IT company in Lagos Nigeria",
    "managed IT support Nigeria",
    "CCTV installation company Lagos",
    "fire alarm installation Nigeria",
    "access control systems Nigeria",
    "network cabling company Lagos",
    "ELV contractor Nigeria",
  ],
});

export default async function HomePage() {
  const [page, services, caseStudies, testimonials, faqs] = await Promise.all([
    getMarketingPage("home"),
    getServices(),
    getCaseStudies(),
    getTestimonials(),
    getFaqs(),
  ]);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${absoluteUrl("/")}#organization`,
            name: "Auxano Solutions Technology Limited",
            url: absoluteUrl("/"),
            areaServed: [
              { "@type": "Country", name: "Nigeria" },
              { "@type": "City", name: "Lagos" },
              { "@type": "City", name: "Abuja" },
              { "@type": "City", name: "Port Harcourt" },
            ],
            serviceType: [
              "Managed IT Support",
              "CCTV Installation",
              "Door Access Control",
              "Fire Alarm System Installation",
              "Network Infrastructure",
              "Structured LAN Cabling",
              "Server and Storage Deployment",
              "Software Licensing",
              "IT Audit and Compliance",
            ],
          },
        ]}
      />
      <SectionRenderer
        sections={page.sections}
        services={services}
        caseStudies={caseStudies}
        testimonials={testimonials}
        faqs={faqs}
      />
    </>
  );
}
