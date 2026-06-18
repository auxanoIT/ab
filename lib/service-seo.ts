import type { Service } from "@/lib/types";

const coreLocations = [
  "Nigeria",
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ikeja",
  "Victoria Island",
];

const categorySearchTerms: Record<Service["category"], string[]> = {
  Infrastructure: [
    "ELV contractor in Nigeria",
    "security systems installation Lagos",
    "access control and CCTV company Nigeria",
  ],
  "Fire Alarm & Safety": [
    "fire alarm installation Nigeria",
    "fire alarm system company Lagos",
    "fire safety system maintenance Nigeria",
  ],
  Networking: [
    "network cabling company Nigeria",
    "structured cabling Lagos",
    "enterprise network design Nigeria",
  ],
  "Hardware Systems": [
    "IT hardware supplier Nigeria",
    "server and laptop sales Lagos",
    "business computer installation Nigeria",
  ],
  "Software & Licenses": [
    "software license reseller Nigeria",
    "firewall license Nigeria",
    "Microsoft and cloud licenses Lagos",
  ],
  "Managed & Advisory": [
    "managed IT services Nigeria",
    "IT support company Lagos",
    "IT audit and consultancy Nigeria",
  ],
};

export function buildServiceSeoTitle(service: Service) {
  const locationFocus =
    service.category === "Fire Alarm & Safety" ? "Nigeria" : "Lagos, Nigeria";

  return `${service.title} in ${locationFocus}`;
}

export function buildServiceSeoDescription(service: Service) {
  const serviceName = service.title.toLowerCase();
  const audience = service.industries.slice(0, 3).join(", ").toLowerCase();

  return `Auxano Solutions provides ${serviceName} in Lagos and across Nigeria for ${audience || "businesses"}, with planning, supply, installation, documentation, and support handover.`;
}

export function buildServiceSeoKeywords(service: Service) {
  const serviceName = service.title.toLowerCase();
  const slugPhrase = service.slug.replaceAll("-", " ");

  return [
    service.title,
    `${service.title} Nigeria`,
    `${service.title} Lagos`,
    `${serviceName} company in Nigeria`,
    `${serviceName} company in Lagos`,
    `${slugPhrase} Nigeria`,
    `${slugPhrase} Lagos`,
    ...categorySearchTerms[service.category],
    ...coreLocations.map((location) => `${serviceName} ${location}`),
    ...service.industries.map((industry) => `${serviceName} for ${industry}`),
    ...service.capabilities.slice(0, 6),
    ...service.deliverables.slice(0, 5),
  ];
}

export function buildServiceSeoQuestions(service: Service) {
  const serviceName = service.title.toLowerCase();

  return [
    `Can Auxano deliver ${serviceName} for business sites in Nigeria?`,
    `What is included in ${serviceName}?`,
    `How does Auxano scope and hand over ${serviceName}?`,
    `Can ${serviceName} support offices in Lagos, Abuja, and Port Harcourt?`,
    `How do I book a consultation for ${serviceName}?`,
  ];
}
