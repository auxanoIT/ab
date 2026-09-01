import { AboutGeneaInspired } from "@/components/sections/about-genea-inspired";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Auxano Solutions, IT and ELV Company in Nigeria",
  description:
    "Auxano Solutions is a Nigerian IT and ELV company delivering ICT infrastructure, CCTV, access control, fire alarm, networking, and managed support.",
  path: "/about",
  keywords: [
    "about Auxano Solutions",
    "IT company in Nigeria",
    "ELV company in Lagos",
    "ICT infrastructure company Nigeria",
    "CCTV and access control company Nigeria",
    "fire alarm systems company Lagos",
  ],
});

export default function AboutPage() {
  return <AboutGeneaInspired />;
}
