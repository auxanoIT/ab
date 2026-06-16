import type { IndustryProfile } from "@/lib/types";

type IndustrySeed = Omit<IndustryProfile, "href" | "heroImage">;

function buildIndustry(industry: IndustrySeed): IndustryProfile {
  return {
    ...industry,
    href: `/industries/${industry.slug}`,
    heroImage: {
      src: `/image/industries/${industry.slug}.webp`,
      alt: `${industry.title} technology infrastructure environment`,
    },
  };
}

export const industryProfiles: IndustryProfile[] = [
  buildIndustry({
    slug: "corporate-offices",
    title: "Corporate Offices",
    shortDescription:
      "Workplace infrastructure, access, surveillance, and support systems for offices that need reliability and accountability.",
    heroTitle: "Infrastructure and security systems built for modern office operations.",
    heroDescription:
      "Corporate offices need clean access control, dependable connectivity, visible surveillance, and support readiness without turning day-to-day operations into a constant workaround.",
    icon: "corporate",
    primaryServiceSlugs: [
      "door-access-control",
      "surveillance-system-cctv",
      "it-managed-services-staff-outsourcing",
    ],
    challengePoints: [
      "Shared entrances, visitors, and staff movement need clearer control and auditability.",
      "Unstable user support and infrastructure hygiene quickly erode productivity.",
      "Security tooling often sits beside the network instead of being planned as one environment.",
    ],
    environmentExamples: [
      "Head offices and corporate campuses",
      "Professional services firms",
      "Administrative and back-office operations",
    ],
    relatedCaseStudySlug: "seflam-sgl-engineering-office-elv",
    ctaLabel: "Book an Office Infrastructure Consultation",
  }),
  buildIndustry({
    slug: "healthcare",
    title: "Healthcare",
    shortDescription:
      "Network reliability, controlled access, device support, and continuity planning for patient-facing environments.",
    heroTitle: "Healthcare environments need uptime, visibility, and disciplined technical handover.",
    heroDescription:
      "Clinics, hospitals, and diagnostic operators depend on stable networks, secure infrastructure, and support coverage that respects clinical workflows and operational risk.",
    icon: "healthcare",
    primaryServiceSlugs: [
      "network-architecture-planning",
      "it-consultancy-audit-services",
      "server-storage-provisioning-deployment",
    ],
    challengePoints: [
      "Clinical environments cannot tolerate recurring network instability and vague escalation paths.",
      "Device sprawl and fragmented infrastructure create hidden operational risk.",
      "Recovery planning matters more when the environment supports patient-facing activity.",
    ],
    environmentExamples: [
      "Private hospitals and clinics",
      "Diagnostic and imaging centers",
      "Multi-branch healthcare groups",
    ],
    relatedCaseStudySlug: "cihp-headquarters-elv-infrastructure-abuja",
    ctaLabel: "Book a Healthcare Systems Consultation",
  }),
  buildIndustry({
    slug: "education",
    title: "Education",
    shortDescription:
      "Structured connectivity, surveillance, access, and campus-ready infrastructure for learning environments.",
    heroTitle: "Education sites need infrastructure that works across buildings, users, and operational rhythms.",
    heroDescription:
      "Schools, campuses, and learning centers need coverage, connectivity, and device support that remain manageable across classrooms, admin spaces, and shared facilities.",
    icon: "education",
    primaryServiceSlugs: [
      "network-cabling",
      "surveillance-system-cctv",
      "office-telephone-system-ip-pbx",
    ],
    challengePoints: [
      "Large footprints create blind spots in both connectivity and physical visibility.",
      "Mixed user groups demand more structured infrastructure than ad-hoc extensions can support.",
      "Shared facilities and dispersed buildings make documentation and support discipline essential.",
    ],
    environmentExamples: [
      "Private schools and campuses",
      "Higher education facilities",
      "Learning centers and training institutes",
    ],
    ctaLabel: "Book an Education Infrastructure Consultation",
  }),
  buildIndustry({
    slug: "government",
    title: "Government",
    shortDescription:
      "Accountable infrastructure, access controls, surveillance, and audit-led planning for regulated environments.",
    heroTitle: "Government environments require traceability, reliability, and stronger controls by default.",
    heroDescription:
      "Public-sector and regulated teams need infrastructure that is documented, supportable, and accountable across security, access, networking, and core systems.",
    icon: "government",
    primaryServiceSlugs: [
      "door-access-control",
      "firewall-sales-licenses",
      "it-consultancy-audit-services",
    ],
    challengePoints: [
      "Security and access layers need stronger accountability and reporting discipline.",
      "Legacy infrastructure often carries risk because no one owns a clean operating baseline.",
      "Technical decisions need clearer audit trails, documentation, and governance support.",
    ],
    environmentExamples: [
      "Administrative offices",
      "Public institutions and agencies",
      "Compliance-heavy operational sites",
    ],
    ctaLabel: "Book a Government Systems Consultation",
  }),
  buildIndustry({
    slug: "financial-services",
    title: "Financial Services",
    shortDescription:
      "Secure networks, licensed systems, surveillance visibility, and operational controls for finance-led teams.",
    heroTitle: "Financial environments need stronger controls, cleaner licensing, and dependable infrastructure.",
    heroDescription:
      "Banks, fintech operators, and finance-led firms need infrastructure and security layers that reduce operational ambiguity and support regulated workflows.",
    icon: "finance",
    primaryServiceSlugs: [
      "firewall-sales-licenses",
      "server-operating-system-licenses",
      "it-consultancy-audit-services",
    ],
    challengePoints: [
      "Security controls cannot be separated from infrastructure design in finance-heavy environments.",
      "Licensing and server posture need to be both compliant and supportable.",
      "Branch or multi-floor operations amplify the cost of inconsistent network and access management.",
    ],
    environmentExamples: [
      "Financial institutions and branches",
      "Fintech operating teams",
      "Back-office finance environments",
    ],
    ctaLabel: "Book a Financial Systems Consultation",
  }),
  buildIndustry({
    slug: "warehousing-logistics",
    title: "Warehousing & Logistics",
    shortDescription:
      "Visibility, dispatch-area security, gate automation, and structured networking for fast-moving sites.",
    heroTitle: "Warehousing operations need visibility, connectivity, and support discipline at launch.",
    heroDescription:
      "Logistics and warehousing environments need surveillance, network structure, gate systems, and post-launch support that can keep pace with operational throughput.",
    icon: "warehouse",
    primaryServiceSlugs: [
      "network-design-with-diagram",
      "surveillance-system-cctv",
      "automated-gates-sliding-doors",
    ],
    challengePoints: [
      "Blind spots across loading, dispatch, and storage zones reduce operational confidence.",
      "Endpoint-heavy environments put pressure on switching, cabling, and monitoring visibility.",
      "Launches fail when rollout and support readiness are treated as separate conversations.",
    ],
    environmentExamples: [
      "Warehouses and dispatch centers",
      "Distribution yards and industrial compounds",
      "Multi-bay logistics facilities",
    ],
    relatedCaseStudySlug: "wiocc-34-floor-it-elv-deployment",
    ctaLabel: "Book a Warehouse Infrastructure Consultation",
  }),
  buildIndustry({
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "Industrial-site networking, surveillance, access, and support systems for production-led operations.",
    heroTitle: "Manufacturing sites need structured infrastructure around uptime, safety, and site visibility.",
    heroDescription:
      "Production-led environments need stronger network design, coverage across operational zones, and systems that remain supportable as site complexity grows.",
    icon: "manufacturing",
    primaryServiceSlugs: [
      "network-architecture-planning",
      "surveillance-system-cctv",
      "structured-lan-cabling",
    ],
    challengePoints: [
      "Operational floors and remote zones create visibility gaps when coverage design is weak.",
      "Industrial environments strain poorly documented cabling and network infrastructure.",
      "Support models need to reflect the commercial cost of downtime, not just technical convenience.",
    ],
    environmentExamples: [
      "Production facilities",
      "Factory offices and warehouses",
      "Industrial compounds",
    ],
    ctaLabel: "Book a Manufacturing Systems Consultation",
  }),
  buildIndustry({
    slug: "retail",
    title: "Retail",
    shortDescription:
      "Customer-facing surveillance, access, endpoint support, and network systems across branch and store operations.",
    heroTitle: "Retail environments need infrastructure that supports visibility, speed, and repeatability across sites.",
    heroDescription:
      "Retail operations need dependable surveillance, clean connectivity, device support, and standardized infrastructure that can be repeated across stores and branches.",
    icon: "retail",
    primaryServiceSlugs: [
      "surveillance-system-cctv",
      "desktop-laptop-sales",
      "applications-licenses",
    ],
    challengePoints: [
      "Customer-facing environments need stronger visibility without slowing operations.",
      "Branch expansion exposes weaknesses in standardization and support coverage.",
      "Endpoint sprawl and mixed applications can create recurring instability when not managed centrally.",
    ],
    environmentExamples: [
      "Stores and showrooms",
      "Branch-based retail operations",
      "Retail back-office and admin spaces",
    ],
    ctaLabel: "Book a Retail Infrastructure Consultation",
  }),
  buildIndustry({
    slug: "hospitality",
    title: "Hospitality",
    shortDescription:
      "Guest-facing connectivity, surveillance, access, and endpoint systems for hotels and hospitality operations.",
    heroTitle: "Hospitality operations need infrastructure that feels invisible to guests and dependable to operators.",
    heroDescription:
      "Hotels, resorts, and hospitality environments need security, connectivity, and support that preserve guest experience while giving operators better control.",
    icon: "hospitality",
    primaryServiceSlugs: [
      "surveillance-system-cctv",
      "office-telephone-system-ip-pbx",
      "it-technical-services",
    ],
    challengePoints: [
      "Guest expectations rise quickly when connectivity or shared systems fail.",
      "Front-of-house and back-of-house environments create different infrastructure pressures.",
      "Site-wide visibility matters more when multiple service areas run in parallel.",
    ],
    environmentExamples: [
      "Hotels and resorts",
      "Short-stay and serviced environments",
      "Hospitality admin and front-desk operations",
    ],
    ctaLabel: "Book a Hospitality Systems Consultation",
  }),
  buildIndustry({
    slug: "real-estate-property-management",
    title: "Real Estate & Property Management",
    shortDescription:
      "Access, surveillance, gate systems, and building infrastructure for managed properties and mixed-use environments.",
    heroTitle: "Property environments need stronger control over access, visibility, and building-wide infrastructure.",
    heroDescription:
      "Property managers and real-estate operators need accountable entry control, CCTV visibility, gate automation, and infrastructure that tenants and site teams can rely on.",
    icon: "property",
    primaryServiceSlugs: [
      "door-access-control",
      "automated-gates-sliding-doors",
      "surveillance-system-cctv",
    ],
    challengePoints: [
      "Multi-tenant properties need cleaner control over visitors, residents, and service access.",
      "Perimeter and common-area visibility gaps increase operational and reputational risk.",
      "Building systems often evolve in fragments without a unifying technical standard.",
    ],
    environmentExamples: [
      "Commercial real estate",
      "Managed estates and compounds",
      "Property management operations",
    ],
    ctaLabel: "Book a Property Systems Consultation",
  }),
  buildIndustry({
    slug: "religious-organizations",
    title: "Religious Organizations",
    shortDescription:
      "Surveillance, audio-visual infrastructure, networking, and access systems for worship and community environments.",
    heroTitle: "Religious organizations need dependable systems for worship, security, and weekly operations.",
    heroDescription:
      "Churches and large worship environments need surveillance, AV infrastructure, access control, and network systems that support both services and day-to-day administration.",
    icon: "religious",
    primaryServiceSlugs: [
      "audio-visual-services-livestreaming",
      "surveillance-system-cctv",
      "network-cabling",
    ],
    challengePoints: [
      "Event-style usage patterns create different technical pressure than standard office environments.",
      "Security, attendance flow, and AV delivery often compete for planning attention.",
      "Large spaces and dispersed rooms require better cabling and infrastructure coordination.",
    ],
    environmentExamples: [
      "Church auditoriums and campuses",
      "Community and ministry offices",
      "Worship venues with live production needs",
    ],
    ctaLabel: "Book a Worship Infrastructure Consultation",
  }),
  buildIndustry({
    slug: "multi-site-smes",
    title: "Multi-site SMEs",
    shortDescription:
      "Standardized support, network planning, security, and infrastructure for growing businesses across multiple locations.",
    heroTitle: "Multi-site SMEs need standardization before growth turns infrastructure into operational drag.",
    heroDescription:
      "Growing businesses with multiple branches or floors need repeatable infrastructure patterns, clearer support ownership, and better visibility across locations.",
    icon: "multisite",
    primaryServiceSlugs: [
      "it-managed-services-staff-outsourcing",
      "network-design-with-diagram",
      "surveillance-system-cctv",
    ],
    challengePoints: [
      "Growth creates hidden inconsistency when each site evolves on its own.",
      "Support quality becomes harder to manage without shared standards and monitoring visibility.",
      "Leadership needs a clearer operating picture across locations, not separate technical silos.",
    ],
    environmentExamples: [
      "Multi-branch service businesses",
      "Growing office and retail groups",
      "Cross-site operational SMEs",
    ],
    ctaLabel: "Book a Multi-site Infrastructure Consultation",
  }),
];
