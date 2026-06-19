import type { Service } from "@/lib/types";

export type ServiceSeoFaq = {
  question: string;
  answer: string;
};

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

export function buildServiceSeoFaqs(service: Service): ServiceSeoFaq[] {
  const serviceName = service.title.toLowerCase();
  const firstIndustries = service.industries.slice(0, 4).join(", ");
  const primaryCapabilities = service.capabilities.slice(0, 4).join(", ");
  const primaryDeliverables = service.deliverables.slice(0, 4).join(", ");

  return [
    {
      question: `How does Auxano deliver ${serviceName}?`,
      answer: `Auxano begins with the operating environment, confirms the technical scope, then handles planning, supply, installation, testing, commissioning, documentation, and support handover as one coordinated delivery process.`,
    },
    {
      question: `What is included in the project scope?`,
      answer: `Each scope is shaped around the site, risk level, users, devices, and long-term support needs. Core delivery areas include ${primaryCapabilities || service.summary}.`,
    },
    {
      question: `Can Auxano support multiple Nigerian locations?`,
      answer: `Yes. Auxano supports single-site and multi-site environments in Lagos, Abuja, Port Harcourt, and other Nigerian locations, with planning and documentation that keep deployment and future support consistent.`,
    },
    {
      question: `Which environments is this service suited for?`,
      answer: `This service is suited for ${firstIndustries || "corporate offices, healthcare, education, financial services, and multi-site operations"}, with the final design adapted to each site's uptime, security, compliance, and support requirements.`,
    },
    {
      question: `What happens at handover?`,
      answer: `Handover is treated as part of the work, not an afterthought. Typical handover items include ${primaryDeliverables || "configuration records, test results, user guidance, support notes, and warranty or renewal information"}.`,
    },
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
