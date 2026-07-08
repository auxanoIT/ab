import { TechnologySecurityChecklist } from "@/components/checklist/technology-security-checklist";
import { JsonLd } from "@/components/ui/json-ld";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "2026 Business Technology & Security Readiness Checklist",
  description:
    "Take Auxano's free 50-point business technology and security readiness checklist for Nigerian companies. Score network health, cybersecurity, backup, fire alarm, CCTV, access control, power, software licensing, and disaster recovery.",
  path: "/technology-security-checklist",
  keywords: [
    "business technology checklist Nigeria",
    "IT health check Nigeria",
    "cybersecurity checklist for Nigerian companies",
    "CCTV and access control checklist",
    "fire alarm readiness checklist Nigeria",
    "business continuity checklist Nigeria",
    "IT audit checklist Lagos",
  ],
});

export default function TechnologySecurityChecklistPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "2026 Business Technology & Security Readiness Checklist",
            description:
              "A 50-point readiness assessment for Nigerian companies covering IT infrastructure, cybersecurity, physical security, fire safety, power, licensing, and disaster recovery.",
            url: absoluteUrl("/technology-security-checklist"),
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            provider: {
              "@type": "Organization",
              "@id": `${absoluteUrl("/")}#organization`,
              name: "Auxano Solutions Technology Limited",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "NGN",
            },
          },
        ]}
      />
      <TechnologySecurityChecklist />
    </>
  );
}
