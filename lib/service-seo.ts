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
      question: `Who provides ${serviceName} in Nigeria?`,
      answer: `Auxano Solutions Technology Limited provides ${serviceName} in Lagos and across Nigeria for organizations that need planned deployment, reliable installation, documented handover, and ongoing technical support.`,
    },
    {
      question: `What does Auxano include in ${serviceName}?`,
      answer: `The service covers assessment, solution design, supply or configuration, installation, testing, commissioning, and operational documentation. Key scope areas include ${primaryCapabilities || service.summary}.`,
    },
    {
      question: `Is ${serviceName} available for businesses in Lagos, Abuja, and other Nigerian cities?`,
      answer: `Yes. Auxano supports projects in Lagos, Abuja, Port Harcourt, and other Nigerian locations through site assessment, project planning, deployment teams, remote support, and post-installation handover.`,
    },
    {
      question: `Which industries use ${serviceName}?`,
      answer: `Auxano commonly supports ${firstIndustries || "corporate offices, healthcare, education, financial services, and multi-site operations"} with ${serviceName}, adapting the scope to each site's uptime, security, compliance, and support requirements.`,
    },
    {
      question: `What should a client receive after a ${serviceName} project?`,
      answer: `A completed project should leave the environment easier to operate and support. Typical handover items include ${primaryDeliverables || "configuration records, test results, user guidance, support notes, and warranty or renewal information"}.`,
    },
  ];
}

export function buildServiceSeoQuestions(service: Service) {
  const serviceName = service.title.toLowerCase();

  return [
    `best ${serviceName} company in Nigeria`,
    `${serviceName} installation in Lagos`,
    `${serviceName} provider near me`,
    `${serviceName} for business offices in Nigeria`,
    `${serviceName} cost and consultation in Nigeria`,
  ];
}
