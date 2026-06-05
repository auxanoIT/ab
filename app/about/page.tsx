import { AboutGeneaInspired } from "@/components/sections/about-genea-inspired";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Auxano Solutions",
  description:
    "Auxano Solutions Technology Limited delivers reliable ICT infrastructure, security, managed support, and technical project delivery across Nigeria, North Africa, East Africa, and strategic partnerships across multiple markets",
  path: "/about",
});

export default function AboutPage() {
  return <AboutGeneaInspired />;
}
