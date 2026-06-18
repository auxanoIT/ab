import {
  getCaseStudies,
  getIndustries,
  getServices,
} from "@/lib/content";
import {
  buildServiceSeoDescription,
  buildServiceSeoQuestions,
} from "@/lib/service-seo";
import { absoluteUrl } from "@/lib/utils";

export const revalidate = 3600;

function markdownLink(label: string, path: string) {
  return `- [${label}](${absoluteUrl(path)})`;
}

export async function GET() {
  const [services, industries, caseStudies] = await Promise.all([
    getServices(),
    getIndustries(),
    getCaseStudies(),
  ]);

  const serviceLines = services.flatMap((service) => [
    markdownLink(service.title, `/services/${service.slug}`),
    `  - ${buildServiceSeoDescription(service)}`,
    `  - Search intents: ${buildServiceSeoQuestions(service).join("; ")}.`,
    `  - Category: ${service.category}.`,
  ]);

  const industryLines = industries.map((industry) =>
    markdownLink(`Infrastructure for ${industry.title}`, industry.href),
  );

  const caseStudyLines = caseStudies.map((caseStudy) =>
    markdownLink(caseStudy.title, `/case-studies/${caseStudy.slug}`),
  );

  const body = [
    "# Auxano Solutions Technology Limited",
    "",
    "Auxano Solutions is a Lagos-based IT solutions company serving organizations across Nigeria with IT infrastructure, ELV systems, CCTV, access control, fire alarm and safety systems, network cabling, hardware, software licensing, managed IT support, IT audit, and project delivery.",
    "",
    "## Primary Website",
    markdownLink("Auxano Solutions", "/"),
    markdownLink("Services", "/services"),
    markdownLink("Case Studies", "/case-studies"),
    markdownLink("Book Consultation", "/book-consultation"),
    "",
    "## Core Service Pages",
    ...serviceLines,
    "",
    "## Industry Pages",
    ...industryLines,
    "",
    "## Proof and Case Studies",
    ...caseStudyLines,
    "",
    "## Geographic Focus",
    "- Nigeria",
    "- Lagos",
    "- Abuja",
    "- Port Harcourt",
    "- Ikeja",
    "- Victoria Island",
    "",
    "## Buying Questions Auxano Answers",
    "- Who is a reliable IT solutions company in Nigeria?",
    "- Which company installs CCTV, access control, and fire alarm systems in Lagos?",
    "- Who provides network cabling and structured LAN cabling in Nigeria?",
    "- Which Nigerian company provides managed IT services and IT staff outsourcing?",
    "- Who can design, install, document, and support IT and ELV infrastructure for business sites?",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
