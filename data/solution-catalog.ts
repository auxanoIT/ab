import type { Service, ServiceCategory, SolutionCategory } from "@/lib/types";

type ServiceSeed = {
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  navDescription: string;
  heroImage?: Service["heroImage"];
  highlights: string[];
  capabilities: string[];
  deliverables: string[];
  industries: string[];
  detailEyebrow?: string;
  detailTitle?: string;
  detailDescription?: string;
  capabilitySections?: Service["capabilitySections"];
};

const categoryCardImages: Record<ServiceCategory, { src: string; alt: string }> = {
  Infrastructure: {
    src: "/placeholders/infrastructure-card.svg",
    alt: "Infrastructure service placeholder graphic",
  },
  Networking: {
    src: "/placeholders/networking-card.svg",
    alt: "Networking service placeholder graphic",
  },
  "Hardware Systems": {
    src: "/placeholders/hardware-systems-card.svg",
    alt: "Hardware systems service placeholder graphic",
  },
  "Software & Licenses": {
    src: "/placeholders/software-licenses-card.svg",
    alt: "Software and licenses service placeholder graphic",
  },
  "Managed & Advisory": {
    src: "/placeholders/managed-advisory-card.svg",
    alt: "Managed and advisory service placeholder graphic",
  },
};

function buildService(seed: ServiceSeed): Service {
  return {
    ...seed,
    positioning: seed.description,
    outcome: seed.summary,
    heroLabel: seed.navDescription,
    serviceMixId: seed.slug,
    navImage: categoryCardImages[seed.category],
  };
}

export const solutionCategories: SolutionCategory[] = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    formalTitle: "IT Infrastructure Services",
    description:
      "Physical security, cabling, data centre readiness, site automation, and core deployment services built to standard.",
    anchorId: "infrastructure",
    href: "/services#infrastructure",
    featuredTitle: "Infrastructure that is designed, installed, and handed over correctly.",
    featuredDescription:
      "From access control and CCTV through structured cabling and data-centre readiness, this category covers the physical and operational backbone of critical environments.",
    featuredImage: {
      src: "/placeholders/infrastructure-large.svg",
      alt: "Infrastructure category placeholder image",
    },
    serviceSlugs: [
      "door-access-control",
      "surveillance-system-cctv",
      "structured-lan-cabling",
      "data-centre-services",
      "automated-gates-sliding-doors",
      "sales-of-it-hardware",
      "repair-of-it-hardware",
      "sales-of-data-centre-consumables",
      "audio-visual-services-livestreaming",
    ],
  },
  {
    id: "networking",
    label: "Networking",
    formalTitle: "Networking Services",
    description:
      "Design, architecture, cabling, configuration, equipment supply, and IP telephony for environments that need speed and structure.",
    anchorId: "networking",
    href: "/services#networking",
    featuredTitle: "Networks planned and configured with long-term clarity.",
    featuredDescription:
      "This category covers network strategy, documentation, installation, performance, and business communications so the environment scales cleanly.",
    featuredImage: {
      src: "/placeholders/networking-large.svg",
      alt: "Networking category placeholder image",
    },
    serviceSlugs: [
      "network-design-with-diagram",
      "network-architecture-planning",
      "network-cabling",
      "network-configurations",
      "sales-of-network-equipment",
      "office-telephone-system-ip-pbx",
    ],
  },
  {
    id: "hardware-systems",
    label: "Hardware Systems",
    formalTitle: "Computers, Servers & Printers",
    description:
      "Original hardware, professional setup, storage, printers, and repair support for user and server environments.",
    anchorId: "hardware-systems",
    href: "/services#hardware-systems",
    featuredTitle: "Hardware supply and setup that stays supportable after day one.",
    featuredDescription:
      "This category covers end-user devices, server systems, storage, print infrastructure, and the professional setup needed to make them reliable.",
    featuredImage: {
      src: "/placeholders/hardware-systems-large.svg",
      alt: "Hardware systems category placeholder image",
    },
    serviceSlugs: [
      "desktop-laptop-sales",
      "computer-installation-setup",
      "server-sales-repair",
      "server-storage-provisioning-deployment",
      "printer-sales-installation",
    ],
  },
  {
    id: "software-licenses",
    label: "Software & Licenses",
    formalTitle: "Software & Licenses",
    description:
      "Genuine licenses, compliant deployment, and secure configuration across firewall, antivirus, operating systems, databases, cloud, and business apps.",
    anchorId: "software-licenses",
    href: "/services#software-licenses",
    featuredTitle: "Licensed, compliant, and configured for real environments.",
    featuredDescription:
      "This category covers the software layer of the environment, from security and operating systems to cloud subscriptions and application licensing.",
    featuredImage: {
      src: "/placeholders/software-licenses-large.svg",
      alt: "Software and licenses category placeholder image",
    },
    serviceSlugs: [
      "firewall-sales-licenses",
      "antivirus-licenses",
      "windows-operating-system-licenses",
      "server-operating-system-licenses",
      "database-software-licenses",
      "cloud-services-licenses",
      "applications-licenses",
    ],
  },
  {
    id: "managed-advisory",
    label: "Managed & Advisory",
    formalTitle: "Other IT Services",
    description:
      "Technical support, managed services, audit-led advice, staffing support, and project leadership for organizations that need more than procurement.",
    anchorId: "managed-advisory",
    href: "/services#managed-advisory",
    featuredTitle: "Operational support and advisory that hold the environment together.",
    featuredDescription:
      "This category covers ongoing technical support, managed operations, consultancy, audits, staffing support, and structured project delivery.",
    featuredImage: {
      src: "/placeholders/managed-advisory-large.svg",
      alt: "Managed and advisory category placeholder image",
    },
    serviceSlugs: [
      "it-technical-services",
      "it-managed-services-staff-outsourcing",
      "it-consultancy-audit-services",
      "it-project-management",
    ],
  },
];

export const services: Service[] = [
  buildService({
    slug: "door-access-control",
    title: "Door Access Control",
    category: "Infrastructure",
    summary: "Control who enters intelligently with centralized access management, audit trails, and clean handover.",
    description:
      "Deploy biometric and card-based entry systems with centralized control, access logging, and site-specific configuration that integrates cleanly with wider security operations.",
    navDescription: "Biometric, card, and centralized entry control for accountable movement.",
    highlights: [
      "Biometric and proximity card systems",
      "Centralized dashboard control and revocation",
      "Entry and exit audit trails",
      "Integrated CCTV-aware deployment planning",
    ],
    capabilities: [
      "Reader and lock deployment planning",
      "Access policy and permission mapping",
      "Commissioning, testing, and staff handover",
    ],
    deliverables: [
      "Access design and zone plan",
      "Configured dashboard and credential policy",
      "Operator handover and usage guidance",
    ],
    industries: ["Corporate offices", "Healthcare", "Education", "Warehousing"],
    detailEyebrow: "Door access control capabilities",
    detailTitle: "Door access systems built around control, proof, and clean daily operation.",
    detailDescription:
      "This delivery model turns the PDF promise into a practical access-control scope: credential strategy, centralized administration, traceable entry records, and integration with the wider security environment.",
    capabilitySections: [
      {
        id: "credential-entry",
        navLabel: "Credentials",
        title: "Biometric and card access that fits the site.",
        lead:
          "Fingerprint, facial recognition, and proximity cards should reduce friction at the door without weakening operational control.",
        body: [
          "Auxano aligns reader choice, lock type, traffic volume, and entry policy before devices are installed. That keeps the door experience fast for approved users while preserving stricter control for sensitive spaces.",
          "The outcome is not just hardware on the wall. It is a credential model that matches the way people actually move through the building.",
        ],
        points: [
          "Fingerprint, facial, and proximity-card options",
          "Reader placement matched to entry flow",
          "Role-based credential strategy",
          "Site-specific access policy planning",
        ],
        image: {
          src: "/image/service-details/door-access-credentials.webp",
          alt: "Professional access control reader and credential verification at a modern office entrance",
        },
      },
      {
        id: "centralized-access",
        navLabel: "Control",
        title: "Centralized management for grants, revocations, and cleaner accountability.",
        lead:
          "Every access decision should be easier to administer from one place than through fragmented manual handoffs.",
        body: [
          "Access rights can be issued, changed, or revoked from a unified dashboard, which matters when employees move roles, vendors finish work, or temporary passes must expire on time.",
          "That central view also helps the business keep the door layer aligned with HR changes, operational roles, and site policies.",
        ],
        points: [
          "Single dashboard for permission management",
          "Faster revocation for exited or changed users",
          "Cleaner temporary and visitor access rules",
          "Reduced dependency on manual coordination",
        ],
        image: {
          src: "/image/service-details/door-access-dashboard.webp",
          alt: "Security administrator managing access permissions from a centralized dashboard",
        },
      },
      {
        id: "entry-audit-trail",
        navLabel: "Audit trail",
        title: "Automatic entry and exit logs that support review instead of guesswork.",
        lead:
          "An access system earns trust when the record of movement is clear, searchable, and usable during review.",
        body: [
          "Door events should support incident review, compliance questions, and basic operational accountability without requiring teams to reconstruct events from memory.",
          "Auxano scopes logs, schedules, and operator expectations so the audit trail is not simply enabled, but usable.",
        ],
        points: [
          "Automatic user and event logs",
          "Clear movement records for investigation",
          "Better support for compliance reviews",
          "Practical handover for operators",
        ],
        image: {
          src: "/image/service-details/door-access-audit.webp",
          alt: "Access control event log review on a workstation in a secure operations room",
        },
      },
      {
        id: "security-integration",
        navLabel: "Integration",
        title: "Access control tied back to the wider surveillance picture.",
        lead:
          "The front door becomes more valuable when entry events and security visibility are planned together.",
        body: [
          "The PDF calls out CCTV integration for a reason: access events become stronger when teams can connect a door action to the relevant video context.",
          "Auxano plans the handoff between access control and surveillance so the security stack works as one coordinated environment rather than isolated tools.",
        ],
        points: [
          "CCTV-aware deployment planning",
          "Better context around entry events",
          "Sharper post-incident review",
          "Staff handover on the complete workflow",
        ],
        image: {
          src: "/image/service-details/door-access-integration.webp",
          alt: "Integrated office security setup combining door access control and CCTV monitoring",
        },
      },
    ],
  }),
  buildService({
    slug: "surveillance-system-cctv",
    title: "Surveillance System (CCTV)",
    category: "Infrastructure",
    summary: "See everything and protect what matters with properly surveyed, installed, and supported CCTV systems.",
    description:
      "Deliver HD and 4K surveillance systems with remote viewing, storage sized to retention requirements, and coverage planning across offices, warehouses, estates, schools, and operational sites.",
    navDescription: "CCTV systems planned for coverage, retention, and operational review.",
    highlights: [
      "HD, 4K, indoor, outdoor, and PTZ deployment",
      "Remote live and recorded viewing",
      "Storage sized to retention needs",
      "Full site survey through maintenance support",
    ],
    capabilities: [
      "Coverage design for operational blind spots",
      "Recorder and storage architecture",
      "Commissioning and post-install support",
    ],
    deliverables: [
      "Survey-backed coverage plan",
      "Installed camera and recording system",
      "Maintenance recommendation and handover",
    ],
    industries: ["Retail", "Warehousing", "Education", "Commercial offices"],
    detailEyebrow: "CCTV capabilities",
    detailTitle: "Surveillance designed for visibility, retention, and usable response.",
    detailDescription:
      "The PDF positions CCTV as a full-service scope, not a camera-only purchase. The page now explains the operating logic behind coverage design, remote review, storage sizing, and lifecycle support.",
    capabilitySections: [
      {
        id: "camera-coverage",
        navLabel: "Coverage",
        title: "HD and 4K camera design based on the environment, not a generic count.",
        lead:
          "Indoor, outdoor, PTZ, low-light, and day-night needs should be chosen from the risk picture of the site.",
        body: [
          "Auxano starts with line of sight, activity zones, entrances, blind spots, and review expectations. That keeps the solution focused on evidence quality and operational awareness.",
          "The aim is camera placement that protects what matters without wasting budget on poor angles or duplicated coverage.",
        ],
        points: [
          "Indoor, outdoor, PTZ, and day-night coverage",
          "Risk-led placement and camera selection",
          "Sharper protection of entrances and blind spots",
          "Cleaner alignment with site operations",
        ],
        image: {
          src: "/image/service-details/cctv-camera-coverage.webp",
          alt: "Modern CCTV camera network covering a commercial building entrance and perimeter",
        },
      },
      {
        id: "remote-visibility",
        navLabel: "Remote view",
        title: "Live and recorded footage available wherever oversight is needed.",
        lead:
          "Remote visibility matters when managers, security leads, or owners need evidence without being physically on site.",
        body: [
          "The viewing experience is configured around practical use: secure remote access, intuitive playback, and the ability to check both current activity and prior events quickly.",
          "That makes surveillance more useful for everyday operations and incident response alike.",
        ],
        points: [
          "Live and recorded footage access",
          "Usable playback across common devices",
          "Faster incident verification",
          "Remote oversight for distributed teams",
        ],
        image: {
          src: "/image/service-details/cctv-remote-viewing.webp",
          alt: "Operations manager reviewing live CCTV footage on laptop and mobile device",
        },
      },
      {
        id: "retention-storage",
        navLabel: "Storage",
        title: "Recorder and storage sizing tied to the retention window the business actually needs.",
        lead:
          "A surveillance project is incomplete if footage quality is high but retention planning is weak.",
        body: [
          "Auxano aligns NVR or DVR capacity with camera count, resolution, frame needs, and the number of days footage must remain available.",
          "That keeps storage expectations realistic and protects against discovering too late that the evidence window is shorter than required.",
        ],
        points: [
          "NVR and DVR sizing",
          "Retention planning by camera load",
          "Capacity aligned with review requirements",
          "Reduced storage guesswork",
        ],
        image: {
          src: "/image/service-details/cctv-storage-retention.webp",
          alt: "Security recording hardware and storage dashboard representing CCTV footage retention planning",
        },
      },
      {
        id: "survey-to-support",
        navLabel: "Lifecycle",
        title: "Site survey, installation, commissioning, and maintenance handled as one chain.",
        lead:
          "The PDF makes the point clearly: one team should own the route from survey to long-term support.",
        body: [
          "That single delivery chain reduces design drift, missed handover details, and fragmented accountability after installation.",
          "It also gives the client a clearer path for additions, troubleshooting, and maintenance planning after go-live.",
        ],
        points: [
          "Survey-backed deployment plan",
          "Installation and commissioning in one scope",
          "Maintenance direction after launch",
          "Stronger ownership across the project",
        ],
        image: {
          src: "/image/service-details/cctv-survey-support.webp",
          alt: "Field engineer commissioning a commercial surveillance system on site",
        },
      },
    ],
  }),
  buildService({
    slug: "structured-lan-cabling",
    title: "Structured LAN Cabling",
    category: "Infrastructure",
    summary: "Structured copper and fibre cabling installed, tested, documented, and built for long-term reliability.",
    description:
      "Install Cat6, Cat6A, and fibre runs with clean cable management, certified testing, and as-built documentation so the network layer is dependable and supportable.",
    navDescription: "Certified cabling with clean routing, testing, and documentation.",
    heroImage: {
      src: "/image/lanhero.jpeg",
      alt: "Structured LAN cabling rack with organized network equipment and patch cables",
    },
    highlights: [
      "Cat6, Cat6A, and fibre deployments",
      "Labelled, trunked, and routed cable management",
      "Fluke-certified testing and proof reports",
      "As-built drawings on completion",
    ],
    capabilities: [
      "Horizontal and backbone cabling",
      "Cable pathway and cabinet organization",
      "Testing, labeling, and documentation",
    ],
    deliverables: [
      "Installed structured cabling system",
      "Certification reports",
      "As-built and handover documentation",
    ],
    industries: ["Corporate offices", "Data rooms", "Healthcare", "Education"],
    detailEyebrow: "Structured LAN cabling capabilities",
    detailTitle: "Structured cabling built to be testable, traceable, and supportable.",
    detailDescription:
      "The PDF emphasizes that cabling should not be improvised. This flow turns that into a commercial standard: correct media selection, disciplined routing, certification, and handover documentation.",
    capabilitySections: [
      {
        id: "right-media",
        navLabel: "Media",
        title: "Cat6, Cat6A, and fibre chosen for the actual load and distance.",
        lead:
          "The right cable in the right place first time prevents expensive compromises later.",
        body: [
          "Auxano selects copper or fibre based on endpoint demand, backbone needs, equipment layout, and future expandability rather than habit.",
          "That keeps the network foundation ready for both current traffic and the upgrades that arrive after occupancy or expansion.",
        ],
        points: [
          "Cat6, Cat6A, and fibre deployment",
          "Data and voice readiness",
          "Distance and bandwidth considered early",
          "Cleaner growth path for the site",
        ],
        image: {
          src: "/image/service-details/lan-media-selection.webp",
          alt: "Structured Cat6A and fibre cabling prepared for installation in a business facility",
        },
      },
      {
        id: "cable-management",
        navLabel: "Cable routing",
        title: "Labelled, trunked, and properly routed cabling that remains maintainable.",
        lead:
          "Cabling quality is visible long after installation when support teams can understand the environment at a glance.",
        body: [
          "Route discipline, cabinet order, labeling, and physical neatness reduce fault-finding time and create a more professional technical environment.",
          "This is where long-term supportability is either won or lost.",
        ],
        points: [
          "Neat containment and trunking",
          "Readable labels and patching discipline",
          "Reduced troubleshooting friction",
          "More professional rack and room presentation",
        ],
        image: {
          src: "/image/service-details/lan-cable-management.webp",
          alt: "Neatly managed structured network cabling in a business communications rack",
        },
      },
      {
        id: "certified-testing",
        navLabel: "Testing",
        title: "Every run tested and documented before the job is treated as complete.",
        lead:
          "Proof matters more than assumptions when the physical layer is meant to support serious operations.",
        body: [
          "The PDF specifically references Fluke-certified testing. That proof closes the gap between an installed cable and a verified cable.",
          "Testing reports help commissioning teams, internal IT, and future contractors understand exactly what was delivered.",
        ],
        points: [
          "Fluke-certified testing where required",
          "Evidence-backed pass and fail review",
          "Fewer hidden deployment risks",
          "Stronger handover confidence",
        ],
        image: {
          src: "/image/lanfirst.jpeg",
          alt: "Engineers inspecting a structured LAN cabling rack before handover",
        },
      },
      {
        id: "as-built-documentation",
        navLabel: "Documentation",
        title: "As-built drawings and handover records that make the network easier to own.",
        lead:
          "Nothing is guessed. Everything is easier to support because the final environment is documented.",
        body: [
          "As-built drawings, endpoint references, and handover notes help future expansion, fault response, and audit readiness.",
          "That turns the installation into a maintainable asset rather than a hidden dependency only the original installer understands.",
        ],
        points: [
          "As-built drawings",
          "Clear handover records",
          "Better support for future changes",
          "More disciplined ownership after completion",
        ],
        image: {
          src: "/image/lansecond.jpeg",
          alt: "Structured LAN cabling cabinet reviewed for documentation and handover records",
        },
      },
    ],
  }),
  buildService({
    slug: "data-centre-services",
    title: "Data Centre Services",
    category: "Infrastructure",
    summary: "Server room and data-centre infrastructure built for reliability, resilience, power protection, and uptime.",
    description:
      "Design and implement racks, power, cooling, UPS, environmental monitoring, and physical security layers that keep critical infrastructure stable from day one.",
    navDescription: "Server-room and data-centre environments built around uptime.",
    highlights: [
      "Rack, power, and cooling design",
      "UPS and surge protection planning",
      "Environmental monitoring and alerts",
      "Physical security readiness",
    ],
    capabilities: [
      "Room build-out and hardware layout",
      "Power resilience planning",
      "Monitoring and alarm setup",
    ],
    deliverables: [
      "Data-centre readiness plan",
      "Installed rack and environmental systems",
      "Reliability and monitoring handover",
    ],
    industries: ["Enterprise offices", "Financial services", "Healthcare", "Operations-heavy SMEs"],
    detailEyebrow: "Data centre service capabilities",
    detailTitle: "Infrastructure readiness shaped around uptime, protection, and environmental control.",
    detailDescription:
      "The PDF frames data centre work as a reliability discipline. This page now expands the four pillars behind that promise: room build-out, power continuity, cooling, and environmental monitoring.",
    capabilitySections: [
      {
        id: "server-room-buildout",
        navLabel: "Build-out",
        title: "Server rooms designed around racks, power, cooling, and physical protection.",
        lead:
          "The room itself is part of the infrastructure and should be engineered with the same care as the equipment inside it.",
        body: [
          "Auxano aligns rack layout, working clearance, power routes, cooling considerations, and controlled access before deployment gets crowded or difficult to maintain.",
          "That produces a cleaner technical environment and lowers the risk of costly rework later.",
        ],
        points: [
          "Rack and equipment layout",
          "Physical security readiness",
          "Maintainable service clearances",
          "Stronger foundation for uptime planning",
        ],
        image: {
          src: "/image/service-details/data-centre-buildout.webp",
          alt: "Professional server room build-out with racks, power, and security planning",
        },
      },
      {
        id: "power-management",
        navLabel: "Power",
        title: "UPS and power management sized to keep critical equipment protected.",
        lead:
          "Outages and surges should be design inputs, not surprises discovered after failure.",
        body: [
          "The power strategy accounts for UPS coverage, surge protection, and operational continuity around the equipment that cannot be allowed to drop without consequence.",
          "That helps clients make better resilience decisions before the infrastructure becomes business-critical.",
        ],
        points: [
          "UPS planning",
          "Surge and outage protection",
          "Priority equipment mapping",
          "Cleaner resilience decisions",
        ],
        image: {
          src: "/image/service-details/data-centre-power.webp",
          alt: "UPS and power distribution equipment protecting a business server room",
        },
      },
      {
        id: "precision-cooling",
        navLabel: "Cooling",
        title: "Cooling strategies that preserve equipment health and operating stability.",
        lead:
          "Temperature drift shortens equipment life and weakens reliability before it becomes obvious.",
        body: [
          "Auxano plans thermal control around the room footprint, equipment density, airflow, and the expected operational profile of the space.",
          "That avoids the pattern of installing equipment first and discovering environmental limits after the fact.",
        ],
        points: [
          "Precision cooling considerations",
          "Airflow awareness around rack layout",
          "Reduced heat-related risk",
          "Better long-term equipment protection",
        ],
        image: {
          src: "/image/service-details/data-centre-cooling.webp",
          alt: "Cooling infrastructure maintaining a professional server room environment",
        },
      },
      {
        id: "environmental-monitoring",
        navLabel: "Monitoring",
        title: "Environmental alerts for temperature, humidity, and intrusion risks.",
        lead:
          "A data centre should report its own early-warning signals before a small issue becomes downtime.",
        body: [
          "The PDF highlights temperature, humidity, and intrusion alerts. Those signals create a tighter operating loop around infrastructure health and physical risk.",
          "Monitoring extends the service from build quality into ongoing awareness.",
        ],
        points: [
          "Temperature and humidity awareness",
          "Intrusion alerting",
          "Faster escalation when conditions drift",
          "More complete uptime governance",
        ],
        image: {
          src: "/image/service-details/data-centre-monitoring.webp",
          alt: "Environmental monitoring dashboard for server room temperature humidity and intrusion alerts",
        },
      },
    ],
  }),
  buildService({
    slug: "automated-gates-sliding-doors",
    title: "Automated Gates & Sliding Doors",
    category: "Infrastructure",
    summary: "Secure, smart entry with automated gates, barriers, and doors designed for safe and seamless operation.",
    description:
      "Deploy swing and sliding gates, boom barriers, and automated doors with app or remote control, anti-crush sensors, backup logic, and operator safeguards.",
    navDescription: "Motorized entry systems with safety, backup, and control built in.",
    highlights: [
      "Swing, sliding, and barrier automation",
      "Remote, app, or card-based control",
      "Anti-crush sensors and manual override",
      "Power backup included in planning",
    ],
    capabilities: [
      "Entry automation design and installation",
      "Safety configuration and testing",
      "Operator training and support",
    ],
    deliverables: [
      "Installed automated entry system",
      "Safety and override testing",
      "Operational handover checklist",
    ],
    industries: ["Commercial offices", "Estates", "Warehousing", "Healthcare"],
    detailEyebrow: "Automated entry capabilities",
    detailTitle: "Automated gates and sliding doors built for secure, controlled movement.",
    detailDescription:
      "The PDF frames this service as secure, smart entry that operates seamlessly. This page expands that into a practical delivery story covering motorized gates, car park barriers, sensor-triggered doors, and remote control with safety protections built in.",
    capabilitySections: [
      {
        id: "swing-sliding-gates",
        navLabel: "Gates",
        title: "Motorized swing and sliding gates for vehicle and pedestrian access.",
        lead:
          "Entry automation should improve movement without weakening safety, control, or accountability at the perimeter.",
        body: [
          "Auxano designs motorized gate systems around the actual site flow: vehicle approach, pedestrian movement, security posture, available power, and manual override requirements.",
          "That keeps the installation practical for daily use while still protecting the entrance as a controlled access point.",
        ],
        points: [
          "Swing and sliding gate automation",
          "Vehicle and pedestrian entry planning",
          "Access-control-ready operation",
          "Manual override included in the scope",
        ],
        image: {
          src: "/image/service-details/automated-gates-swing-sliding.webp",
          alt: "Motorized sliding gate controlling vehicle and pedestrian entry at a modern facility",
        },
      },
      {
        id: "boom-barriers",
        navLabel: "Barriers",
        title: "Fast-action boom barriers for car parks and controlled vehicle lanes.",
        lead:
          "Car park and driveway control works best when the barrier is fast, visible, and matched to traffic volume.",
        body: [
          "Boom barriers help facilities separate approved vehicle movement from open access, especially where guards, reception teams, tenants, or visitors share the same entrance.",
          "Auxano plans barrier placement, activation method, and traffic behavior so the gate line remains efficient rather than becoming a bottleneck.",
        ],
        points: [
          "Fast-action car park barriers",
          "Vehicle lane control",
          "Card, remote, or operator activation",
          "Traffic-aware placement and setup",
        ],
        image: {
          src: "/image/service-details/automated-gates-boom-barrier.webp",
          alt: "Fast-action boom barrier controlling access to a commercial car park entrance",
        },
      },
      {
        id: "automated-sliding-doors",
        navLabel: "Sliding doors",
        title: "Sensor-triggered automated sliding doors for offices and facilities.",
        lead:
          "Automated doors should create a smooth user experience while still respecting the security and safety requirements of the building.",
        body: [
          "For offices, healthcare areas, reception zones, and shared facilities, sensor-triggered doors can reduce friction and improve movement where hands-free entry is expected.",
          "The scope considers door size, sensor placement, user volume, safety response, and integration with the surrounding access policy.",
        ],
        points: [
          "Sensor-triggered door operation",
          "Office and facility entry support",
          "Safety-aware opening and closing logic",
          "Cleaner experience for high-traffic entrances",
        ],
        image: {
          src: "/image/service-details/automated-gates-sliding-doors.webp",
          alt: "Sensor-triggered automated sliding glass doors at a professional office entrance",
        },
      },
      {
        id: "remote-app-control",
        navLabel: "Remote control",
        title: "Remote, app, phone, and card control for everyday operation.",
        lead:
          "The right control method lets authorized users operate entry points without creating new security gaps.",
        body: [
          "Auxano can configure entry operation around phones, remotes, cards, or operator controls depending on the site and the people who need access.",
          "Anti-crush sensors, power backup, and override planning are treated as part of the delivery standard, not optional afterthoughts.",
        ],
        points: [
          "Phone, app, remote, or card operation",
          "Anti-crush sensor planning",
          "Power backup included",
          "Operator handover and safety testing",
        ],
        image: {
          src: "/image/service-details/automated-gates-remote-control.webp",
          alt: "Facility manager operating an automated gate from a mobile phone and access remote",
        },
      },
    ],
  }),
  buildService({
    slug: "sales-of-it-hardware",
    title: "Sales of IT Hardware",
    category: "Infrastructure",
    summary: "Original, warranted desktops, laptops, servers, peripherals, and accessories sourced for immediate deployment.",
    description:
      "Supply genuine hardware from authorized distributors, including user devices, servers, UPS units, storage, and supporting peripherals for business environments.",
    navDescription: "Original business hardware sourced, warranted, and ready to deploy.",
    highlights: [
      "Desktops, laptops, and workstations",
      "Servers from authorized distributors",
      "Peripherals, UPS, storage, and accessories",
      "Bulk procurement and tagged delivery",
    ],
    capabilities: [
      "Specification guidance by role and budget",
      "Authorized sourcing and warranty control",
      "Bulk procurement coordination",
    ],
    deliverables: [
      "Procurement recommendation",
      "Supplied and tagged hardware",
      "Warranty-backed fulfillment",
    ],
    industries: ["Professional services", "Healthcare", "Education", "Retail"],
    detailEyebrow: "IT hardware supply capabilities",
    detailTitle: "Original IT hardware sourced, warranted, and ready for deployment.",
    detailDescription:
      "The PDF positions this service around genuine equipment and deployment readiness. This page breaks that down into role-matched devices, server supply, supporting accessories, and bulk procurement for organizations.",
    capabilitySections: [
      {
        id: "desktops-laptops-workstations",
        navLabel: "Devices",
        title: "Desktops, laptops, and workstations matched to the role.",
        lead:
          "The right machine depends on workload, user role, budget, warranty expectations, and deployment timing.",
        body: [
          "Auxano helps clients choose across HP, Dell, Lenovo, Apple, and other suitable device tiers without treating every user as if they have the same computing needs.",
          "That keeps procurement practical: finance, administration, design, field, and executive users can each receive hardware that fits the job.",
        ],
        points: [
          "Desktop, laptop, and workstation supply",
          "Role-based specification guidance",
          "Business and user workload alignment",
          "Deployment-ready procurement planning",
        ],
        image: {
          src: "/image/service-details/it-hardware-devices.webp",
          alt: "Business desktops laptops and workstations prepared for professional deployment",
        },
      },
      {
        id: "server-hardware-supply",
        navLabel: "Servers",
        title: "Server hardware sourced for business-critical infrastructure needs.",
        lead:
          "Server procurement should be tied to workload, resilience, expansion, and supportability from the start.",
        body: [
          "Auxano supplies server hardware from recognized business vendors and helps align tower, rack, or workload-specific choices with the operational role the server must perform.",
          "The result is not just a purchase order. It is a better-informed infrastructure decision.",
        ],
        points: [
          "Server supply and sizing support",
          "Vendor and model fit guidance",
          "Infrastructure readiness review",
          "Warranty-aware fulfillment",
        ],
        image: {
          src: "/image/service-details/it-hardware-servers.webp",
          alt: "Enterprise server hardware prepared for installation in a business server room",
        },
      },
      {
        id: "peripherals-accessories",
        navLabel: "Accessories",
        title: "Peripherals and accessories supplied with the same deployment discipline.",
        lead:
          "Monitors, UPS units, storage, and accessories shape how usable the core hardware becomes on day one.",
        body: [
          "Auxano can bundle supporting items with the main hardware order so teams do not lose time chasing missing adapters, displays, storage, backup power, or workspace accessories.",
          "This is especially useful when a team is opening a new office, onboarding users, or refreshing a fleet.",
        ],
        points: [
          "Monitors, UPS, storage, and peripherals",
          "Accessory bundles by user role",
          "Reduced procurement gaps",
          "Cleaner day-one readiness",
        ],
        image: {
          src: "/image/service-details/it-hardware-accessories.webp",
          alt: "Professional IT peripherals monitors UPS units and accessories organized for deployment",
        },
      },
      {
        id: "bulk-procurement",
        navLabel: "Bulk supply",
        title: "Bulk procurement with asset-tagged delivery for organizations.",
        lead:
          "Large hardware orders need tracking, warranty control, and delivery structure, not just boxes arriving at reception.",
        body: [
          "For schools, offices, healthcare teams, retail groups, and growing businesses, Auxano can coordinate bulk procurement with asset tagging and organized handover.",
          "Every product is sourced through authorized channels so warranty and authenticity stay clear.",
        ],
        points: [
          "Asset-tagged delivery",
          "Bulk procurement coordination",
          "Authorized distributor sourcing",
          "Genuine warranty on supplied products",
        ],
        image: {
          src: "/image/service-details/it-hardware-bulk-procurement.webp",
          alt: "Asset-tagged IT hardware shipment prepared for organized business deployment",
        },
      },
    ],
  }),
  buildService({
    slug: "repair-of-it-hardware",
    title: "Repair of IT Hardware",
    category: "Infrastructure",
    summary: "Fast, transparent hardware repair and preventive maintenance to return devices and systems to service.",
    description:
      "Support laptops, desktops, servers, printers, and failed storage with diagnostics, part replacement, data recovery support, and preventive care planning.",
    navDescription: "Diagnostics, repair, recovery, and preventive maintenance for failed hardware.",
    highlights: [
      "Laptop and desktop component repair",
      "Server and printer diagnostics",
      "Data recovery support",
      "Preventive maintenance scheduling",
    ],
    capabilities: [
      "Fault isolation and part replacement",
      "Repair estimates before work begins",
      "Preventive maintenance planning",
    ],
    deliverables: [
      "Diagnostic report",
      "Repair recommendation and parts plan",
      "Restored device or system handover",
    ],
    industries: ["Corporate offices", "Retail", "Education", "Healthcare"],
    detailEyebrow: "IT hardware repair capabilities",
    detailTitle: "Hardware repair handled with diagnosis, transparency, and recovery in mind.",
    detailDescription:
      "The PDF emphasizes fast, honest repairs and transparent diagnosis before work begins. This flow turns that promise into repair scopes for user devices, servers, printers, data recovery, and preventive maintenance.",
    capabilitySections: [
      {
        id: "laptop-desktop-repair",
        navLabel: "User devices",
        title: "Laptop and desktop repairs that get users back to work quickly.",
        lead:
          "Screens, keyboards, motherboards, power issues, and internal components should be diagnosed before repair decisions are made.",
        body: [
          "Auxano isolates the fault, explains the repair path, and confirms likely parts or service requirements before work proceeds.",
          "That keeps the process clearer for business users who need uptime, cost control, and honest expectations.",
        ],
        points: [
          "Screen, keyboard, and component repair",
          "Motherboard and power fault diagnosis",
          "Repair estimate before work begins",
          "Clear device handover after service",
        ],
        image: {
          src: "/image/service-details/repair-laptops-desktops.webp",
          alt: "Technician repairing a business laptop and desktop hardware components on a clean workbench",
        },
      },
      {
        id: "server-printer-diagnostics",
        navLabel: "Servers & printers",
        title: "Server and printer diagnostics with part replacement where needed.",
        lead:
          "Shared infrastructure failures affect more than one user, so diagnosis must be careful and accountable.",
        body: [
          "Auxano supports diagnostics and part replacement for servers and printers, helping teams resolve hardware faults without unnecessary replacement when repair is practical.",
          "The approach is designed to restore service while documenting what failed and what should be watched next.",
        ],
        points: [
          "Server hardware diagnostics",
          "Printer fault isolation",
          "Part replacement planning",
          "Service restoration notes",
        ],
        image: {
          src: "/image/service-details/repair-servers-printers.webp",
          alt: "Engineer diagnosing server and printer hardware issues in a business support environment",
        },
      },
      {
        id: "data-recovery-support",
        navLabel: "Recovery",
        title: "Data recovery support for failed drives and damaged storage.",
        lead:
          "When a drive fails, the first response should protect the chance of recovery rather than make the damage worse.",
        body: [
          "Auxano helps assess failed drives and storage incidents, then recommends the safest practical path for retrieving critical data where recovery is possible.",
          "This service is especially important when business files, accounts, project records, or operational data are trapped on failed hardware.",
        ],
        points: [
          "Failed drive assessment",
          "Recovery-first handling guidance",
          "Business-critical data focus",
          "Clear recommendation before next action",
        ],
        image: {
          src: "/image/service-details/repair-data-recovery.webp",
          alt: "Data recovery specialist examining failed storage drives in a professional repair lab",
        },
      },
      {
        id: "preventive-maintenance",
        navLabel: "Maintenance",
        title: "Preventive maintenance scheduled before problems become downtime.",
        lead:
          "Servicing equipment before failure is often cheaper and less disruptive than emergency repair.",
        body: [
          "Auxano can schedule cleaning, checks, component review, firmware or system observations, and practical maintenance recommendations for devices and shared equipment.",
          "The goal is to reduce repeat faults and give the client better visibility into hardware condition.",
        ],
        points: [
          "Scheduled servicing",
          "Condition and fault trend review",
          "Reduced unexpected downtime",
          "Transparent diagnosis with no hidden charges",
        ],
        image: {
          src: "/image/service-details/repair-preventive-maintenance.webp",
          alt: "Technician performing preventive maintenance on business IT equipment",
        },
      },
    ],
  }),
  buildService({
    slug: "sales-of-data-centre-consumables",
    title: "Sales of Data Centre Consumables",
    category: "Infrastructure",
    summary: "Supply the critical consumables and rack accessories needed to keep infrastructure deployments clean and supportable.",
    description:
      "Provide patch cables, rack hardware, SFP modules, cable-management kits, and operational accessories with fast supply and volume pricing.",
    navDescription: "Patching, rack hardware, and connectivity consumables supplied without delay.",
    highlights: [
      "Patch cables and fibre accessories",
      "Rack hardware and mounting components",
      "SFP modules and transceivers",
      "Cable management and cleaning kits",
    ],
    capabilities: [
      "Consumable sourcing and stocking support",
      "Volume procurement",
      "Data-centre accessory fulfillment",
    ],
    deliverables: [
      "Supply list confirmation",
      "Consumables delivery",
      "Volume pricing support",
    ],
    industries: ["Data centres", "Enterprise offices", "ISPs", "Operations teams"],
    detailEyebrow: "Data centre consumables capabilities",
    detailTitle: "Critical consumables supplied quickly for clean, supportable infrastructure.",
    detailDescription:
      "The PDF describes this as the right supplies when you need them. This page expands the consumables scope into patching, rack hardware, fibre accessories, and cable-management kits for ongoing infrastructure work.",
    capabilitySections: [
      {
        id: "patch-cables",
        navLabel: "Patch cables",
        title: "Cat5e, Cat6, Cat6A, and fibre patch cables in the lengths you need.",
        lead:
          "The right patch cable stock keeps deployments, expansions, and emergency changes moving without delay.",
        body: [
          "Auxano supplies patch cables across copper and fibre requirements, helping data rooms, offices, and support teams avoid low-quality or mismatched connectivity supplies.",
          "This is useful for new racks, cleanup projects, urgent replacements, and recurring operational demand.",
        ],
        points: [
          "Cat5e, Cat6, Cat6A, and fibre options",
          "Multiple cable lengths",
          "Deployment and replacement stock",
          "Cleaner compatibility planning",
        ],
        image: {
          src: "/image/service-details/consumables-patch-cables.webp",
          alt: "Organized copper and fibre patch cables prepared for data centre connectivity work",
        },
      },
      {
        id: "rack-hardware",
        navLabel: "Rack hardware",
        title: "Rack hardware that keeps cabinet work organized and serviceable.",
        lead:
          "Small rack components can decide whether a deployment is clean, safe, and easy to maintain.",
        body: [
          "Auxano supplies cage nuts, blanking panels, shelf brackets, rails, and other cabinet accessories needed for practical rack organization.",
          "Having the right rack hardware available reduces improvisation and keeps installations more professional.",
        ],
        points: [
          "Cage nuts and mounting hardware",
          "Blanking panels and shelf brackets",
          "Rails and rack accessories",
          "Cleaner cabinet organization",
        ],
        image: {
          src: "/image/service-details/consumables-rack-hardware.webp",
          alt: "Rack hardware accessories including cage nuts blanking panels rails and brackets organized for installation",
        },
      },
      {
        id: "sfp-transceivers",
        navLabel: "Transceivers",
        title: "SFP modules and transceivers for fibre connectivity accessories.",
        lead:
          "Fibre links depend on correctly matched modules, connectors, distance, and speed requirements.",
        body: [
          "Auxano helps source SFP modules, transceivers, and related fibre accessories so network and data-centre teams can complete connectivity work with fewer compatibility surprises.",
          "The supply conversation can include the equipment already in place and the performance target for the link.",
        ],
        points: [
          "SFP modules and transceivers",
          "Fibre connectivity accessories",
          "Compatibility-aware sourcing",
          "Support for expansion and replacement",
        ],
        image: {
          src: "/image/service-details/consumables-sfp-transceivers.webp",
          alt: "SFP transceiver modules and fibre connectivity accessories arranged for network installation",
        },
      },
      {
        id: "cable-management-kits",
        navLabel: "Management kits",
        title: "Cable-management kits, labels, cleaning tools, and support consumables.",
        lead:
          "Good infrastructure work depends on the small supplies that make routing, labeling, and maintenance repeatable.",
        body: [
          "Auxano supplies ties, labels, cable-management tools, thermal paste, cleaning tools, and supporting items for teams maintaining racks and technical rooms.",
          "Fast supply and volume pricing support recurring infrastructure needs rather than one-off emergency buying.",
        ],
        points: [
          "Ties, labels, and cable-management supplies",
          "Thermal paste and cleaning tools",
          "Fast supply for operational teams",
          "Volume pricing for ongoing demand",
        ],
        image: {
          src: "/image/service-details/consumables-cable-management.webp",
          alt: "Cable management kits labels ties and cleaning tools organized for data centre maintenance",
        },
      },
    ],
  }),
  buildService({
    slug: "audio-visual-services-livestreaming",
    title: "Audio Visual Services & Livestreaming",
    category: "Infrastructure",
    summary: "Conference-room AV, event production, LED display, and professional livestreaming delivered end to end.",
    description:
      "Design and run AV systems for meeting rooms, launches, conferences, ceremonies, and livestreamed events with full setup and live operations support.",
    navDescription: "AV and livestreaming delivery for rooms, events, and public moments.",
    highlights: [
      "Conference room AV and video conferencing",
      "Event PA, displays, and live production",
      "Multi-camera livestreaming",
      "LED video wall support",
    ],
    capabilities: [
      "AV design and event setup",
      "Live production management",
      "Breakdown and post-event support",
    ],
    deliverables: [
      "AV equipment and setup plan",
      "Live operation support",
      "Pack-down and handover",
    ],
    industries: ["Corporate events", "Education", "Religious organizations", "Professional services"],
    detailEyebrow: "AV and livestreaming capabilities",
    detailTitle: "Audio visual and livestreaming delivery planned down to the last detail.",
    detailDescription:
      "The PDF frames AV as an end-to-end event and room service: set up, manage live, and pack up while the client focuses on the audience. This page turns that into conference room AV, event production, livestreaming, and LED display capability sections.",
    capabilitySections: [
      {
        id: "conference-room-av",
        navLabel: "Room AV",
        title: "Conference room AV for meetings, collaboration, and video conferencing.",
        lead:
          "Meeting rooms need audio, display, and conferencing systems that work cleanly for everyday users.",
        body: [
          "Auxano designs and installs projectors, displays, PA systems, microphones, speakers, and video conferencing tools around the room size and use case.",
          "The aim is a room that teams can use without technical friction before every meeting.",
        ],
        points: [
          "Projectors, displays, and PA systems",
          "Video conferencing setup",
          "Room-size-aware AV planning",
          "User-ready handover",
        ],
        image: {
          src: "/image/service-details/av-conference-room.webp",
          alt: "Modern conference room with professional display audio and video conferencing setup",
        },
      },
      {
        id: "event-production",
        navLabel: "Events",
        title: "Full AV production for conferences, launches, and ceremonies.",
        lead:
          "Events need technical delivery that supports the program instead of distracting from it.",
        body: [
          "Auxano can plan and run event audio, displays, staging support, microphones, playback, and live technical operation for corporate, educational, and public moments.",
          "The team handles setup and live management so organizers can focus on the audience and program.",
        ],
        points: [
          "Conference and launch AV support",
          "PA, display, and playback coordination",
          "Live technical operation",
          "Setup and pack-up included",
        ],
        image: {
          src: "/image/service-details/av-event-production.webp",
          alt: "Professional event production setup with stage lighting display screens and audio equipment",
        },
      },
      {
        id: "professional-livestreaming",
        navLabel: "Livestreaming",
        title: "Professional multi-camera livestreaming to major online platforms.",
        lead:
          "Livestreaming should be planned around camera coverage, audio clarity, switching, platform setup, and live reliability.",
        body: [
          "Auxano supports multi-camera streaming to YouTube, Facebook, Zoom, and other event platforms, with the operating crew and technical preparation needed for a smooth broadcast.",
          "This helps events reach remote audiences without reducing the experience to a single static phone camera.",
        ],
        points: [
          "Multi-camera livestreaming",
          "YouTube, Facebook, Zoom, and platform support",
          "Audio and video switching",
          "Live crew operation",
        ],
        image: {
          src: "/image/service-details/av-livestreaming.webp",
          alt: "Professional multi-camera livestreaming control setup for a business event",
        },
      },
      {
        id: "led-video-walls",
        navLabel: "LED walls",
        title: "LED video walls for high-impact events and permanent installations.",
        lead:
          "Large-format display systems should be specified for brightness, viewing distance, content type, and installation context.",
        body: [
          "Auxano can support LED video wall planning for temporary events and permanent facilities where standard displays are not enough.",
          "The scope can include screen sizing, placement, source management, setup, live operation, and pack-down where required.",
        ],
        points: [
          "LED video wall support",
          "Event and permanent display planning",
          "High-impact visual presentation",
          "Setup, live management, and pack-up",
        ],
        image: {
          src: "/image/service-details/av-led-video-wall.webp",
          alt: "Large LED video wall display installed for a professional event presentation",
        },
      },
    ],
  }),
  buildService({
    slug: "network-design-with-diagram",
    title: "Network Design with Diagram",
    category: "Networking",
    summary: "Start with the right network design, documentation, IP planning, and bill of materials before deployment begins.",
    description:
      "Carry out site surveys and produce logical and physical diagrams, IP plans, and equipment schedules so later implementation is disciplined and supportable.",
    navDescription: "Site-survey-led network design with professional diagrams and BOMs.",
    highlights: [
      "Physical assessment and requirements review",
      "Logical and physical network diagrams",
      "Structured IP planning and service design",
      "Detailed bill of materials",
    ],
    capabilities: [
      "Network discovery and planning workshops",
      "Documentation and diagram production",
      "Capacity and bill-of-materials definition",
    ],
    deliverables: [
      "Network design pack",
      "Logical and physical diagrams",
      "Procurement-ready equipment schedule",
    ],
    industries: ["Corporate offices", "Healthcare", "Retail", "Education"],
    detailEyebrow: "Network design capabilities",
    detailTitle: "Network design that gives every engineer a clear path before deployment starts.",
    detailDescription:
      "The PDF positions network design as the starting point for fast, secure, correctly configured networking. This page expands that into site survey, diagramming, IP planning, and bill-of-materials discipline.",
    capabilitySections: [
      {
        id: "network-site-survey",
        navLabel: "Site survey",
        title: "Physical assessment of your space and requirements.",
        lead:
          "A reliable network starts with the building, users, devices, and operating constraints that the design must support.",
        body: [
          "Auxano reviews the physical environment before equipment is specified, including rooms, routes, power, endpoint locations, wireless behavior, and expansion expectations.",
          "That early survey reduces assumptions and gives the design a stronger foundation for installation, configuration, and future support.",
        ],
        points: [
          "Physical space and route assessment",
          "User and device requirement review",
          "Wireless and wired coverage inputs",
          "Expansion and support considerations",
        ],
        image: {
          src: "/image/service-details/network-design-site-survey.webp",
          alt: "Network engineer performing a site survey inside a modern office environment",
        },
      },
      {
        id: "logical-physical-diagrams",
        navLabel: "Diagrams",
        title: "Logical and physical diagrams for every engineer that follows.",
        lead:
          "Network documentation should make the environment easier to understand, support, and extend.",
        body: [
          "Auxano produces diagrams that separate how the network is structured logically from how it is physically deployed across rooms, racks, and pathways.",
          "This becomes permanent IT documentation instead of knowledge trapped with the first installer.",
        ],
        points: [
          "Logical topology diagrams",
          "Physical layout documentation",
          "Engineer-ready handover material",
          "Clearer support and troubleshooting",
        ],
        image: {
          src: "/image/service-details/network-design-diagrams.webp",
          alt: "Engineers reviewing logical and physical network diagrams on a project table",
        },
      },
      {
        id: "ip-address-planning",
        navLabel: "IP planning",
        title: "Structured IP planning for subnetting, DHCP scopes, and DNS design.",
        lead:
          "Address planning protects the network from avoidable conflicts, confusion, and growth limits.",
        body: [
          "Auxano defines addressing, segmentation, DHCP scopes, DNS needs, and service layout so the network can be configured cleanly from the beginning.",
          "That structure is especially important when the environment includes multiple departments, guest access, servers, phones, CCTV, or wireless networks.",
        ],
        points: [
          "Subnet and address planning",
          "DHCP scope structure",
          "DNS and service layout",
          "Segmentation-ready design",
        ],
        image: {
          src: "/image/service-details/network-design-ip-planning.webp",
          alt: "Structured IP address planning and network addressing review on a workstation",
        },
      },
      {
        id: "network-bill-of-materials",
        navLabel: "BOM",
        title: "Bill of materials with exact equipment specifications.",
        lead:
          "A clear BOM turns the design into a procurement-ready scope with fewer surprises.",
        body: [
          "Auxano defines equipment categories, quantities, specifications, and deployment dependencies so purchasing is tied to the actual design.",
          "This helps clients compare budgets properly and prevents underbuying or buying the wrong class of hardware.",
        ],
        points: [
          "Equipment quantities and specifications",
          "Brand and model guidance where needed",
          "Procurement-ready schedule",
          "Budget and deployment alignment",
        ],
        image: {
          src: "/image/service-details/network-design-bom.webp",
          alt: "Procurement-ready network bill of materials reviewed beside switches routers and access points",
        },
      },
    ],
  }),
  buildService({
    slug: "network-architecture-planning",
    title: "Network Architecture Planning",
    category: "Networking",
    summary: "Align your network architecture with business strategy, resilience, and migration requirements before you invest.",
    description:
      "Assess the current state, identify gaps and risks, recommend the right architecture, and produce a migration roadmap that avoids disruption.",
    navDescription: "Architecture guidance for resilient LAN, WAN, SD-WAN, and hybrid environments.",
    highlights: [
      "Current-state audit and gap analysis",
      "Architecture recommendation and tradeoff review",
      "Redundancy and resilience planning",
      "Migration roadmap development",
    ],
    capabilities: [
      "Risk and architecture assessment",
      "Migration sequencing and planning",
      "Independent technical recommendation",
    ],
    deliverables: [
      "Architecture recommendation report",
      "Risk and gap register",
      "Migration roadmap",
    ],
    industries: ["Enterprise offices", "Multi-site businesses", "Healthcare", "Professional services"],
    detailEyebrow: "Network architecture capabilities",
    detailTitle: "Network architecture planning aligned to strategy, resilience, and migration realities.",
    detailDescription:
      "The PDF emphasizes independent advice, no vendor bias, and no sales agenda. This page expands that into audit, architecture recommendation, redundancy planning, and migration sequencing.",
    capabilitySections: [
      {
        id: "current-state-audit",
        navLabel: "Audit",
        title: "Current-state audit of gaps, risks, and performance.",
        lead:
          "Architecture work should begin with a clear view of what exists today and what is already causing risk.",
        body: [
          "Auxano reviews the current network against business requirements, support pressure, security exposure, and performance expectations.",
          "The goal is to document real gaps before recommending a target architecture or migration path.",
        ],
        points: [
          "Current topology and device review",
          "Performance and capacity assessment",
          "Risk and support-gap identification",
          "Documented findings before recommendations",
        ],
        image: {
          src: "/image/service-details/network-architecture-audit.webp",
          alt: "Network architect auditing current network state with dashboards and rack documentation",
        },
      },
      {
        id: "architecture-recommendation",
        navLabel: "Recommendation",
        title: "Architecture recommendation across LAN, WAN, SD-WAN, cloud, and hybrid needs.",
        lead:
          "The right architecture depends on the business model, not on one default vendor or one fashionable topology.",
        body: [
          "Auxano weighs LAN, WAN, SD-WAN, cloud, and hybrid options against operational fit, resilience, cost, and supportability.",
          "The recommendation explains the tradeoffs so leadership and technical teams can make a practical decision.",
        ],
        points: [
          "LAN, WAN, SD-WAN, cloud, and hybrid review",
          "Business-fit recommendation",
          "Tradeoff and dependency explanation",
          "Vendor-neutral decision support",
        ],
        image: {
          src: "/image/service-details/network-architecture-recommendation.webp",
          alt: "Network architecture recommendation workshop reviewing LAN WAN cloud and hybrid options",
        },
      },
      {
        id: "redundancy-planning",
        navLabel: "Redundancy",
        title: "Redundancy planning to reduce single points of failure.",
        lead:
          "A network can look complete and still be fragile if critical paths have no fallback.",
        body: [
          "Auxano identifies where resilience is needed: links, power, core switching, firewalls, wireless coverage, service paths, and branch connectivity.",
          "The plan is shaped around business impact so redundancy is added where it actually protects operations.",
        ],
        points: [
          "Single-point-of-failure review",
          "Link and core resilience planning",
          "Business-impact prioritization",
          "Continuity-aware architecture",
        ],
        image: {
          src: "/image/service-details/network-architecture-redundancy.webp",
          alt: "Resilient network architecture diagram with redundant links and core infrastructure planning",
        },
      },
      {
        id: "migration-roadmap",
        navLabel: "Roadmap",
        title: "Migration roadmap from old to new with minimal disruption.",
        lead:
          "Good architecture becomes valuable only when the migration path can be executed without avoidable downtime.",
        body: [
          "Auxano breaks migration into practical phases, dependencies, testing points, rollback thinking, and communication needs.",
          "That roadmap helps the business modernize without turning every improvement into an operational interruption.",
        ],
        points: [
          "Phased migration sequencing",
          "Dependency and testing plan",
          "Rollback and continuity thinking",
          "Reduced disruption during change",
        ],
        image: {
          src: "/image/service-details/network-architecture-roadmap.webp",
          alt: "Network migration roadmap planning session with phased technical milestones",
        },
      },
    ],
  }),
  buildService({
    slug: "network-cabling",
    title: "Network Cabling",
    category: "Networking",
    summary: "Copper and fibre network cabling installed, certified, labelled, and documented to standard.",
    description:
      "Deliver horizontal and backbone cabling, data-centre patching, trunking, and proof-of-performance testing with as-built documentation at handover.",
    navDescription: "Copper and fibre network cabling with certification and as-built proof.",
    highlights: [
      "Horizontal and backbone deployments",
      "Data-centre rack and patch organization",
      "Conduit and trunking installation",
      "Fluke-certified reports",
    ],
    capabilities: [
      "Cabling deployment and route planning",
      "Rack and pathway organization",
      "Testing and proof documentation",
    ],
    deliverables: [
      "Installed network cabling",
      "Certification report",
      "As-built documentation",
    ],
    industries: ["Corporate offices", "Warehousing", "Education", "Retail"],
    detailEyebrow: "Network cabling capabilities",
    detailTitle: "Network cabling installed, tested, certified, and documented.",
    detailDescription:
      "The PDF defines network cabling as a proof-led service: every run tested, certified, and documented. This page expands horizontal cabling, data-centre cabling, conduit/trunking, and certification reports.",
    capabilitySections: [
      {
        id: "horizontal-backbone-cabling",
        navLabel: "Backbone",
        title: "Horizontal and backbone cabling using Cat6, Cat6A, copper, and fibre.",
        lead:
          "The cabling layer must support the network's current load and the growth that follows.",
        body: [
          "Auxano plans cable routes, media type, outlet locations, patching, and backbone needs around the environment and equipment strategy.",
          "That keeps the physical layer ready for voice, data, wireless, surveillance, and other connected systems.",
        ],
        points: [
          "Cat6 and Cat6A copper cabling",
          "Fibre optic backbone support",
          "Outlet and route planning",
          "Voice and data readiness",
        ],
        image: {
          src: "/image/service-details/network-cabling-backbone.webp",
          alt: "Horizontal and backbone network cabling installation in a commercial building",
        },
      },
      {
        id: "data-centre-cabling",
        navLabel: "Rack cabling",
        title: "Data-centre cabling that is colour-coded, labelled, and managed.",
        lead:
          "Rack cabling should make operations easier, not create a hidden support problem.",
        body: [
          "Auxano organizes patching, rack runs, cabinet layout, and colour discipline so changes remain understandable after handover.",
          "This improves troubleshooting, reduces accidental disconnects, and creates a more professional data room.",
        ],
        points: [
          "Managed rack cabling",
          "Colour-coded cable organization",
          "Patch-panel and cabinet discipline",
          "Cleaner support after handover",
        ],
        image: {
          src: "/image/service-details/network-cabling-rack.webp",
          alt: "Colour-coded and labelled data centre rack cabling managed neatly",
        },
      },
      {
        id: "conduit-trunking",
        navLabel: "Pathways",
        title: "Conduit and trunking for cable protection through walls, floors, and ceilings.",
        lead:
          "Cable pathways protect the installation and make the finished site look disciplined.",
        body: [
          "Auxano routes cables through appropriate containment, reducing exposure, damage risk, and visual clutter across workspaces and technical areas.",
          "Pathway planning also makes future additions cleaner because the route strategy is already defined.",
        ],
        points: [
          "Conduit and trunking installation",
          "Protected cable routing",
          "Cleaner office and facility finish",
          "Future expansion readiness",
        ],
        image: {
          src: "/image/service-details/network-cabling-trunking.webp",
          alt: "Protected network cable routing through conduit and trunking in a modern facility",
        },
      },
      {
        id: "fluke-certified-reports",
        navLabel: "Reports",
        title: "Fluke-certified reports for every run on completion.",
        lead:
          "Completed cabling should be proven with test results, not accepted by sight alone.",
        body: [
          "Auxano tests cable runs and provides certification evidence where required, supporting TIA-568 and ISO 11801 compliant delivery.",
          "As-built drawings and reports help future engineers understand what was installed and verified.",
        ],
        points: [
          "Cable certification testing",
          "Printed or digital test results",
          "TIA-568 and ISO 11801 alignment",
          "As-built documentation on completion",
        ],
        image: {
          src: "/image/service-details/network-cabling-certification.webp",
          alt: "Technician generating certified network cabling test reports after installation",
        },
      },
    ],
  }),
  buildService({
    slug: "network-configurations",
    title: "Network Configurations",
    category: "Networking",
    summary: "Configure enterprise, SMB, and home-office networks for performance, security, and operational reliability.",
    description:
      "Handle VLANs, QoS, routing, guest WiFi, VPNs, printers, and secure wireless deployments with full documentation and backup of configurations.",
    navDescription: "Network configuration for enterprise, SMB, and home-office environments.",
    highlights: [
      "Enterprise-grade VLAN and QoS configuration",
      "SMB firewall, WiFi, and VPN setup",
      "Home and hybrid-work network optimization",
      "Config backup and full documentation",
    ],
    capabilities: [
      "Routing and wireless setup",
      "Firewall, VPN, and guest access policies",
      "Configuration backup and handover",
    ],
    deliverables: [
      "Configured network environment",
      "Backup of device configurations",
      "Documentation and support notes",
    ],
    industries: ["Corporate offices", "Retail", "Professional services", "Hybrid teams"],
    detailEyebrow: "Network configuration capabilities",
    detailTitle: "Network configurations built for performance, security, reliability, and handover clarity.",
    detailDescription:
      "The PDF splits this service across enterprise, small business, home office, and documentation needs. This page turns those into practical configuration sections with the same sticky capability flow.",
    capabilitySections: [
      {
        id: "enterprise-network-config",
        navLabel: "Enterprise",
        title: "Enterprise configuration for VLANs, QoS, 802.1X, routing, and hardening.",
        lead:
          "Enterprise networks need segmentation, prioritization, authentication, and routing discipline from the beginning.",
        body: [
          "Auxano configures enterprise-grade network behavior around users, departments, applications, voice, wireless, servers, and security boundaries.",
          "The work can include VLANs, QoS, 802.1X, routing protocols, and hardening controls depending on the environment.",
        ],
        points: [
          "VLAN and segmentation setup",
          "QoS for voice and priority traffic",
          "802.1X and access hardening",
          "Routing protocol configuration",
        ],
        image: {
          src: "/image/service-details/network-config-enterprise.webp",
          alt: "Enterprise network configuration dashboard with switches routing and secure segmentation",
        },
      },
      {
        id: "small-business-network-config",
        navLabel: "SMB",
        title: "Small business setup for firewalls, guest WiFi, VPNs, and printer integration.",
        lead:
          "Small business networks still need clean security and usability, even when the environment is smaller.",
        body: [
          "Auxano configures firewall rules, secure wireless, guest access, VPN access, and shared devices so teams can work reliably without exposing the network unnecessarily.",
          "The setup is practical for offices, retail locations, clinics, schools, and professional service teams.",
        ],
        points: [
          "Firewall rule setup",
          "Guest WiFi and secure wireless",
          "VPN access configuration",
          "Printer and shared device integration",
        ],
        image: {
          src: "/image/service-details/network-config-small-business.webp",
          alt: "Small business network configuration with firewall WiFi VPN and shared printer setup",
        },
      },
      {
        id: "home-office-network-config",
        navLabel: "Home office",
        title: "Fast, reliable home and home-office WiFi with device management.",
        lead:
          "Remote and hybrid work need stable connectivity without turning the home network into a constant support burden.",
        body: [
          "Auxano improves WiFi placement, device behavior, router settings, access controls, and reliability for home-office and executive home environments.",
          "This helps users work with better video calls, stronger coverage, and clearer device control.",
        ],
        points: [
          "Home and home-office WiFi tuning",
          "Device management setup",
          "Coverage and performance optimization",
          "Hybrid work reliability",
        ],
        image: {
          src: "/image/service-details/network-config-home-office.webp",
          alt: "Reliable home office WiFi configuration with router laptop and managed devices",
        },
      },
      {
        id: "network-config-documentation",
        navLabel: "Documentation",
        title: "Full documentation with configurations backed up and handed over.",
        lead:
          "Nothing should be a mystery after the network has been configured.",
        body: [
          "Auxano records key configuration decisions, backs up device configs, and hands over support notes so future changes can be made with context.",
          "This closes the gap between a working network and a network that can be owned properly by the client.",
        ],
        points: [
          "Configuration backup",
          "Handover documentation",
          "Support notes and key settings",
          "Reduced dependency on memory",
        ],
        image: {
          src: "/image/service-details/network-config-documentation.webp",
          alt: "Network configuration backup and handover documentation reviewed by an engineer",
        },
      },
    ],
  }),
  buildService({
    slug: "sales-of-network-equipment",
    title: "Sales of Network Equipment",
    category: "Networking",
    summary: "Genuine firewalls, routers, switches, access points, and network accessories sourced to the right spec.",
    description:
      "Supply branded network hardware across firewall, switching, wireless, and fibre connectivity layers with recommendation support when requirements are unclear.",
    navDescription: "Firewalls, switching, wireless, and network accessories sourced to spec.",
    highlights: [
      "Firewall, router, and switch procurement",
      "Wireless access point sourcing",
      "SFP modules and media converter supply",
      "Specification guidance to budget",
    ],
    capabilities: [
      "Equipment sizing and recommendation",
      "Brand and model selection guidance",
      "Procurement and fulfillment support",
    ],
    deliverables: [
      "Equipment specification list",
      "Supplied network hardware",
      "Budget-aligned sourcing recommendation",
    ],
    industries: ["Corporate offices", "Healthcare", "Education", "Retail"],
    detailEyebrow: "Network equipment supply capabilities",
    detailTitle: "Genuine network equipment specified around the right need, price, and deployment plan.",
    detailDescription:
      "The PDF lists firewalls, routers, switches, wireless access points, and accessories. This page expands each supply category so buyers understand how Auxano helps spec and source the right equipment.",
    capabilitySections: [
      {
        id: "network-firewalls",
        navLabel: "Firewalls",
        title: "Firewall supply for the security edge of the network.",
        lead:
          "Firewall selection should match the threat profile, user count, bandwidth, services, and support model.",
        body: [
          "Auxano helps clients choose firewall platforms and licensing needs based on actual operating requirements rather than buying a device that is too weak or unnecessarily complex.",
          "The goal is genuine hardware, correct sizing, and a clearer security path.",
        ],
        points: [
          "Firewall sizing and recommendation",
          "Security-edge procurement support",
          "License and feature awareness",
          "Budget-aligned sourcing",
        ],
        image: {
          src: "/image/service-details/network-equipment-firewalls.webp",
          alt: "Enterprise firewall appliances prepared for secure network deployment",
        },
      },
      {
        id: "routers-switches",
        navLabel: "Switching",
        title: "Routers and switches specified for the network they must support.",
        lead:
          "Routing and switching hardware should be selected for performance, ports, power, growth, and manageability.",
        body: [
          "Auxano sources switching and routing equipment across common business tiers, helping clients choose what fits the design and budget.",
          "The recommendation can account for PoE needs, uplinks, VLANs, stacking, branch connectivity, and long-term support.",
        ],
        points: [
          "Router and switch procurement",
          "Port, PoE, and uplink planning",
          "Business-tier model guidance",
          "Growth-aware hardware selection",
        ],
        image: {
          src: "/image/service-details/network-equipment-switches-routers.webp",
          alt: "Routers and switches staged for business network installation",
        },
      },
      {
        id: "wireless-access-points",
        navLabel: "Wireless",
        title: "Wireless access points matched to coverage, density, and management needs.",
        lead:
          "The right access point depends on the building, users, application load, and management expectations.",
        body: [
          "Auxano helps specify wireless access points for offices, schools, retail spaces, warehouses, and other environments where coverage and stability matter.",
          "The supply conversation considers placement, controller model, guest access, capacity, and future expansion.",
        ],
        points: [
          "Wireless access point sourcing",
          "Coverage and density guidance",
          "Managed WiFi planning",
          "Guest and business access needs",
        ],
        image: {
          src: "/image/service-details/network-equipment-access-points.webp",
          alt: "Wireless access points prepared for managed business WiFi deployment",
        },
      },
      {
        id: "network-cables-accessories",
        navLabel: "Accessories",
        title: "Cables and accessories including patch cables, SFP modules, and media converters.",
        lead:
          "Accessories complete the installation and often decide whether the main equipment can be deployed without delay.",
        body: [
          "Auxano supplies the supporting parts needed for network projects, including patch cables, SFP modules, media converters, and related connectivity accessories.",
          "When clients are not sure what to buy, Auxano can spec the right equipment and accessories for the budget and design.",
        ],
        points: [
          "Patch cables and connectivity accessories",
          "SFP modules and media converters",
          "Spec support when requirements are unclear",
          "Reduced procurement mismatch",
        ],
        image: {
          src: "/image/service-details/network-equipment-accessories.webp",
          alt: "Network cables SFP modules media converters and accessories arranged for installation",
        },
      },
    ],
  }),
  buildService({
    slug: "office-telephone-system-ip-pbx",
    title: "Office Telephone System (IP PBX)",
    category: "Networking",
    summary: "Modern IP telephony that cuts call costs and improves business communications across locations and users.",
    description:
      "Deploy on-prem or cloud-hosted IP PBX systems with SIP trunking, desk phones, softphones, and business features like call queues and voicemail-to-email.",
    navDescription: "IP telephony with SIP, softphones, call queues, and cost savings.",
    highlights: [
      "IP PBX deployment and migration",
      "SIP trunking and call cost reduction",
      "Desk phones and mobile softphones",
      "Queues, recording, voicemail, and auto-attendant",
    ],
    capabilities: [
      "Telephony design and user rollout",
      "Call flow configuration",
      "Feature enablement and training",
    ],
    deliverables: [
      "Configured PBX platform",
      "Phone and softphone rollout",
      "Call flow and support handover",
    ],
    industries: ["Professional services", "Corporate offices", "Healthcare", "Education"],
    detailEyebrow: "IP PBX capabilities",
    detailTitle: "Office telephone systems that reduce call cost and modernize communication.",
    detailDescription:
      "The PDF presents IP PBX as a practical upgrade: on-premises or cloud-hosted systems, SIP trunking, IP phones, softphones, and smart business features. This page turns each item into a clear service section.",
    capabilitySections: [
      {
        id: "ip-pbx-deployment",
        navLabel: "PBX",
        title: "IP PBX deployment for on-premises or cloud-hosted communication.",
        lead:
          "A modern PBX should match how the business answers, routes, records, and manages calls.",
        body: [
          "Auxano deploys IP PBX platforms around the organization's call flow, sites, users, extensions, and management requirements.",
          "The solution can support on-premises or cloud-hosted models depending on reliability, budget, and operating preference.",
        ],
        points: [
          "On-premises or cloud-hosted PBX",
          "Extension and user planning",
          "Call-flow-aware deployment",
          "Migration from legacy telephony",
        ],
        image: {
          src: "/image/service-details/ip-pbx-deployment.webp",
          alt: "Modern IP PBX telephone system deployment in a business communications room",
        },
      },
      {
        id: "sip-trunking",
        navLabel: "SIP",
        title: "SIP trunking for lower-cost local and international calls.",
        lead:
          "SIP trunking moves business calling over internet connectivity while preserving professional call handling.",
        body: [
          "Auxano configures SIP connectivity, provider details, routing behavior, failover thinking, and call quality considerations.",
          "For many businesses, the move to IP telephony can reduce phone bills while improving flexibility.",
        ],
        points: [
          "SIP trunk setup",
          "Local and international call routing",
          "Call quality and provider coordination",
          "Cost-saving telephony path",
        ],
        image: {
          src: "/image/service-details/ip-pbx-sip-trunking.webp",
          alt: "SIP trunking and business voice connectivity configured on a telephony dashboard",
        },
      },
      {
        id: "ip-phones-softphones",
        navLabel: "Phones",
        title: "IP phones and softphones for desk, mobile, and PC-based working.",
        lead:
          "Users should be able to communicate from the right device without losing the structure of the office phone system.",
        body: [
          "Auxano rolls out desk phones, mobile softphones, and PC calling apps so teams can work across offices, remote locations, and hybrid schedules.",
          "This expands communication without forcing every user into the same hardware pattern.",
        ],
        points: [
          "Desk phone rollout",
          "Mobile and PC softphones",
          "Anywhere-working support",
          "User training and handover",
        ],
        image: {
          src: "/image/service-details/ip-pbx-phones-softphones.webp",
          alt: "Business IP phones and softphone apps prepared for office and mobile communication",
        },
      },
      {
        id: "smart-telephony-features",
        navLabel: "Features",
        title: "Smart features including auto-attendant, queues, voicemail-to-email, and recording.",
        lead:
          "The value of IP telephony comes from better call handling, not only newer handsets.",
        body: [
          "Auxano configures smart business features around how the organization receives calls, routes departments, manages missed calls, and reviews conversations where required.",
          "These features help teams improve responsiveness and create a more professional caller experience.",
        ],
        points: [
          "Auto-attendant and call queues",
          "Voicemail-to-email setup",
          "Call recording where required",
          "Better customer call handling",
        ],
        image: {
          src: "/image/service-details/ip-pbx-smart-features.webp",
          alt: "Office telephony dashboard showing call queues voicemail and smart business phone features",
        },
      },
    ],
  }),
  buildService({
    slug: "desktop-laptop-sales",
    title: "Desktop & Laptop Sales",
    category: "Hardware Systems",
    summary: "The right desktops, laptops, and workstations matched to role, budget, and business need.",
    description:
      "Supply desktops, laptops, and workstations from HP, Dell, Lenovo, and Apple with accessory bundles and bulk procurement readiness.",
    navDescription: "Business and role-matched desktop and laptop procurement.",
    highlights: [
      "Business and consumer device tiers",
      "Role-based specification guidance",
      "Bulk procurement readiness",
      "Accessory and docking support",
    ],
    capabilities: [
      "Device recommendation by workload",
      "Bulk supply coordination",
      "Authorized procurement and warranty support",
    ],
    deliverables: [
      "Procurement recommendation",
      "Supplied devices and accessories",
      "Warranty-backed fulfillment",
    ],
    industries: ["Professional services", "Education", "Healthcare", "Retail"],
    detailEyebrow: "Desktop and laptop supply capabilities",
    detailTitle: "Desktop and laptop procurement matched to the role, budget, and deployment plan.",
    detailDescription:
      "The PDF frames this service as original hardware with professional setup and ongoing support. This page expands the sales scope into device selection, role fit, bulk procurement, and accessory readiness.",
    capabilitySections: [
      {
        id: "desktop-laptop-workstations",
        navLabel: "Devices",
        title: "HP, Dell, Lenovo, Apple, desktops, laptops, and workstations across all tiers.",
        lead:
          "Hardware supply should start with what each user needs to do, not a single generic device choice.",
        body: [
          "Auxano helps clients source business-ready desktops, laptops, and workstations from recognized hardware ecosystems, with attention to performance, warranty, durability, and role fit.",
          "That makes the purchase easier to defend commercially and easier to support technically after delivery.",
        ],
        points: [
          "Desktop, laptop, and workstation supply",
          "Business-grade device options",
          "Performance matched to real workloads",
          "Warranty-aware procurement",
        ],
        image: {
          src: "/image/service-details/hardware-desktop-laptop-devices.webp",
          alt: "Business desktops laptops and workstations prepared for professional deployment",
        },
      },
      {
        id: "business-consumer-fit",
        navLabel: "Role fit",
        title: "Business and consumer device choices matched to each role and budget.",
        lead:
          "A finance user, designer, field worker, executive, and front-desk team should not be forced into the same specification.",
        body: [
          "Auxano compares user role, application load, mobility, screen needs, storage, memory, and support expectations before recommending a hardware tier.",
          "This keeps procurement controlled without underspecifying the people whose work depends on performance.",
        ],
        points: [
          "Role-based specification guidance",
          "Budget and workload balancing",
          "User group planning",
          "Reduced overspend and underspecification",
        ],
        image: {
          src: "/image/service-details/hardware-role-fit.webp",
          alt: "IT procurement team comparing business device specifications for different employee roles",
        },
      },
      {
        id: "hardware-bulk-procurement",
        navLabel: "Bulk supply",
        title: "Bulk procurement that is asset-tagged, delivered, and deployment-ready.",
        lead:
          "Large device orders need organization, tracking, and handover discipline from the moment they arrive.",
        body: [
          "Auxano can coordinate bulk device supply for growing teams, schools, offices, clinics, and multi-user environments, including asset tagging and delivery organization.",
          "This helps internal teams know what was supplied, where it goes, and how it should be supported.",
        ],
        points: [
          "Bulk procurement coordination",
          "Asset-tagged delivery",
          "Organized handover",
          "Deployment-ready device batches",
        ],
        image: {
          src: "/image/service-details/hardware-bulk-procurement.webp",
          alt: "Asset-tagged laptops and business hardware prepared for bulk deployment",
        },
      },
      {
        id: "hardware-accessories",
        navLabel: "Accessories",
        title: "Monitors, docking stations, bags, peripherals, and supporting accessories.",
        lead:
          "The device is only ready for work when the accessories needed by the user are included in the plan.",
        body: [
          "Auxano can bundle displays, docking stations, UPS units, storage, keyboards, mice, bags, and related accessories around each role.",
          "That reduces day-one gaps and prevents teams from losing time chasing small but essential items after delivery.",
        ],
        points: [
          "Monitors and docking stations",
          "Bags, peripherals, and storage",
          "Accessory bundles by role",
          "Cleaner day-one readiness",
        ],
        image: {
          src: "/image/service-details/hardware-accessories.webp",
          alt: "Professional IT accessories monitors docking stations and peripherals prepared for deployment",
        },
      },
    ],
  }),
  buildService({
    slug: "computer-installation-setup",
    title: "Computer Installation and Setup",
    category: "Hardware Systems",
    summary: "Devices delivered, configured, secured, and ready for users from day one.",
    description:
      "Handle OS setup, software installation, email and printer configuration, security hardening, and data migration so devices are deployment-ready on arrival.",
    navDescription: "OS, app, email, security, and migration setup for ready-to-work devices.",
    highlights: [
      "Operating system and business app setup",
      "Network, email, and printer integration",
      "Security hardening and update policy",
      "Data migration from old devices",
    ],
    capabilities: [
      "User-ready deployment setup",
      "Migration and profile transfer",
      "Security baseline configuration",
    ],
    deliverables: [
      "Configured end-user device",
      "Data migration completion",
      "Deployment and support notes",
    ],
    industries: ["Corporate offices", "Retail", "Education", "Healthcare"],
    detailEyebrow: "Computer setup capabilities",
    detailTitle: "Computer installation and setup that makes every device ready from day one.",
    detailDescription:
      "The PDF breaks this service into OS and software, network and email connection, security hardening, and data migration. This page expands those steps into a professional setup flow for one PC or a hundred.",
    capabilitySections: [
      {
        id: "os-software-setup",
        navLabel: "OS & apps",
        title: "Licensed Windows, Office suite, antivirus, and business apps installed correctly.",
        lead:
          "A new computer should arrive ready for actual work, with licensed software and core applications configured properly.",
        body: [
          "Auxano handles operating system setup, productivity apps, antivirus, browser and business application readiness, and basic device configuration.",
          "The setup is applied consistently whether the scope is one device or a larger deployment batch.",
        ],
        points: [
          "Operating system setup",
          "Office and business app installation",
          "Antivirus deployment",
          "Consistent setup standard across devices",
        ],
        image: {
          src: "/image/service-details/computer-setup-os-software.webp",
          alt: "Technician configuring operating system and business software on new office computers",
        },
      },
      {
        id: "network-email-setup",
        navLabel: "Network & email",
        title: "Devices connected to the network, email, printers, and shared drives.",
        lead:
          "A configured computer is not complete until it can reach the services and shared resources users depend on.",
        body: [
          "Auxano connects devices to wired or wireless networks, business email, printers, shared drives, and common collaboration tools.",
          "This reduces first-day support issues and helps users start work without repeated manual fixes.",
        ],
        points: [
          "Network and WiFi connection",
          "Email profile setup",
          "Printer and shared drive access",
          "Collaboration tool readiness",
        ],
        image: {
          src: "/image/service-details/computer-setup-network-email.webp",
          alt: "New office computer connected to business network email printers and shared drives",
        },
      },
      {
        id: "computer-security-hardening",
        navLabel: "Hardening",
        title: "Security hardening with firewall, updates, and unnecessary services controlled.",
        lead:
          "Device setup should reduce avoidable exposure before users start storing business data on the machine.",
        body: [
          "Auxano enables security baselines such as firewall settings, update configuration, antivirus readiness, local account hygiene, and unnecessary service review.",
          "This gives each new endpoint a stronger starting posture before it enters daily use.",
        ],
        points: [
          "Firewall and update configuration",
          "Endpoint protection readiness",
          "Unnecessary service review",
          "Practical security baseline",
        ],
        image: {
          src: "/image/service-details/computer-setup-security-hardening.webp",
          alt: "Endpoint security hardening dashboard for newly configured business computers",
        },
      },
      {
        id: "computer-data-migration",
        navLabel: "Migration",
        title: "Files, emails, and settings moved from old machines to new machines.",
        lead:
          "Hardware refresh should preserve the user’s working context instead of leaving them to rebuild everything manually.",
        body: [
          "Auxano supports data migration from old devices to new ones, including business files, selected settings, mail profiles, and practical user handover checks.",
          "This is especially useful during refresh projects where productivity loss is as important as the device purchase itself.",
        ],
        points: [
          "File and profile migration",
          "Email and selected settings transfer",
          "Old-to-new device transition",
          "User handover checks",
        ],
        image: {
          src: "/image/service-details/computer-setup-data-migration.webp",
          alt: "Technician migrating files and settings from an old computer to a new business laptop",
        },
      },
    ],
  }),
  buildService({
    slug: "server-sales-repair",
    title: "Server Sales and Repair",
    category: "Hardware Systems",
    summary: "Reliable servers supplied, installed, diagnosed, repaired, and maintained around your workload needs.",
    description:
      "Provide tower, rack, and blade servers with RAID, OS deployment, replacement parts, and fault resolution for business-critical infrastructure.",
    navDescription: "Server procurement, repair, RAID setup, and operating system deployment.",
    highlights: [
      "New server supply and sizing",
      "Hardware repair and replacement",
      "RAID setup and resilience planning",
      "Windows, Linux, and VMware deployment",
    ],
    capabilities: [
      "Server workload sizing",
      "Hardware fault remediation",
      "OS deployment and hardening",
    ],
    deliverables: [
      "Installed or restored server system",
      "RAID and OS configuration",
      "Support and maintenance notes",
    ],
    industries: ["Enterprise offices", "Healthcare", "Financial services", "Education"],
    detailEyebrow: "Server sales and repair capabilities",
    detailTitle: "Servers supplied, installed, diagnosed, repaired, and maintained around the workload.",
    detailDescription:
      "The PDF breaks server work into new server supply, hardware repair, RAID configuration, and OS deployment. This page expands those into an infrastructure-ready service flow.",
    capabilitySections: [
      {
        id: "new-server-supply",
        navLabel: "New servers",
        title: "Tower, rack, and blade servers sized for your workload.",
        lead:
          "Server selection should be shaped by workload, resilience, storage, power, operating system, and future growth.",
        body: [
          "Auxano helps clients choose server hardware around the role it must play: file services, applications, virtualization, databases, backup, or branch operations.",
          "The goal is a server platform that is supportable from the beginning rather than oversized, undersized, or poorly matched.",
        ],
        points: [
          "Tower, rack, and blade server options",
          "Workload-based sizing",
          "Growth and resilience considerations",
          "Installation-ready specification",
        ],
        image: {
          src: "/image/service-details/server-new-supply.webp",
          alt: "Enterprise server hardware prepared for workload-based installation",
        },
      },
      {
        id: "server-hardware-repair",
        navLabel: "Repair",
        title: "RAM, drives, RAID controllers, PSUs, and cooling replaced where faults require it.",
        lead:
          "Server repair should isolate the fault quickly while protecting the workload and data it supports.",
        body: [
          "Auxano diagnoses server hardware faults and supports part replacement across memory, storage, controllers, power, and cooling components.",
          "The service is built around transparent diagnosis and practical restoration, not blind replacement.",
        ],
        points: [
          "Server diagnostics",
          "RAM, drive, PSU, and cooling replacement",
          "RAID controller fault support",
          "Repair notes and restoration guidance",
        ],
        image: {
          src: "/image/service-details/server-hardware-repair.webp",
          alt: "Engineer repairing server hardware components in a professional equipment room",
        },
      },
      {
        id: "server-raid-configuration",
        navLabel: "RAID",
        title: "RAID configuration for data protection through RAID 1, 5, 6, and 10.",
        lead:
          "RAID planning should be intentional, documented, and tested against the recovery expectations of the business.",
        body: [
          "Auxano configures RAID based on workload, capacity, performance, and recovery needs, then documents the selected protection model.",
          "This gives the client a clearer view of how storage failure risk is being reduced.",
        ],
        points: [
          "RAID 1, 5, 6, and 10 planning",
          "Performance and protection tradeoffs",
          "Storage resilience configuration",
          "Recovery-aware documentation",
        ],
        image: {
          src: "/image/service-details/server-raid-configuration.webp",
          alt: "Server RAID configuration with storage drives and redundancy planning dashboard",
        },
      },
      {
        id: "server-os-deployment",
        navLabel: "OS deploy",
        title: "Windows Server, Ubuntu, Red Hat, and VMware ESXi installed and hardened.",
        lead:
          "A server is not ready until the operating platform is installed, secured, and aligned to its role.",
        body: [
          "Auxano deploys server operating systems and virtualization platforms with baseline hardening, service configuration, and handover notes.",
          "That includes the practical work needed to prepare the server for business services rather than leaving it as bare hardware.",
        ],
        points: [
          "Windows Server and Linux deployment",
          "VMware ESXi readiness",
          "Baseline hardening",
          "Role-aligned service setup",
        ],
        image: {
          src: "/image/service-details/server-os-deployment.webp",
          alt: "Engineer deploying and hardening a server operating system in a data room",
        },
      },
    ],
  }),
  buildService({
    slug: "server-storage-provisioning-deployment",
    title: "Server Storage Provisioning & Deployment",
    category: "Hardware Systems",
    summary: "Scalable, protected NAS and SAN storage built with recovery and capacity planning from the start.",
    description:
      "Deploy storage platforms for file sharing, backup, virtualization, and database performance with RAID and recovery strategy embedded in the design.",
    navDescription: "NAS, SAN, RAID, and storage growth planning with recovery in mind.",
    highlights: [
      "NAS and SAN platform deployment",
      "RAID configuration and recovery planning",
      "Capacity forecasting",
      "Backup-aligned storage architecture",
    ],
    capabilities: [
      "Storage sizing and platform selection",
      "RAID and redundancy configuration",
      "Recovery-aware deployment",
    ],
    deliverables: [
      "Provisioned storage platform",
      "Redundancy and recovery setup",
      "Capacity and support guidance",
    ],
    industries: ["Healthcare", "Enterprise offices", "Creative teams", "Professional services"],
    detailEyebrow: "Server storage capabilities",
    detailTitle: "Server storage provisioned for collaboration, performance, redundancy, and growth.",
    detailDescription:
      "The PDF defines storage as scalable and protected from day one. This page expands NAS, SAN, RAID deployment, and capacity planning into a complete storage delivery story.",
    capabilitySections: [
      {
        id: "nas-solutions",
        navLabel: "NAS",
        title: "NAS solutions for file sharing, backup, and collaboration.",
        lead:
          "Network-attached storage gives teams a structured place to share, protect, and organize business data.",
        body: [
          "Auxano provisions NAS platforms around file access, user permissions, backup expectations, storage pools, and collaboration needs.",
          "This is suitable for offices, creative teams, healthcare environments, and businesses that need centralized file storage without unnecessary complexity.",
        ],
        points: [
          "NAS platform provisioning",
          "File sharing and collaboration",
          "Backup-aware storage setup",
          "User and permission planning",
        ],
        image: {
          src: "/image/service-details/storage-nas-solutions.webp",
          alt: "NAS storage appliance provisioned for business file sharing and backup",
        },
      },
      {
        id: "san-solutions",
        navLabel: "SAN",
        title: "SAN solutions for virtualization, databases, and high-performance shared storage.",
        lead:
          "Performance-sensitive workloads need shared storage that is planned for throughput, resilience, and host access.",
        body: [
          "Auxano helps design and deploy SAN storage where virtualization, databases, and shared high-performance workloads require stronger storage architecture.",
          "The scope considers connectivity, redundancy, workload profile, and the infrastructure that will consume the storage.",
        ],
        points: [
          "SAN storage planning",
          "Virtualization and database support",
          "High-performance shared storage",
          "Host and connectivity alignment",
        ],
        image: {
          src: "/image/service-details/storage-san-solutions.webp",
          alt: "SAN shared storage infrastructure connected to virtualization servers",
        },
      },
      {
        id: "storage-raid-deployment",
        navLabel: "RAID",
        title: "RAID deployment with redundant storage and tested recovery procedures.",
        lead:
          "Redundancy should be built into storage design, not bolted on after the first failure.",
        body: [
          "Auxano configures RAID and recovery procedures around the storage platform and the business impact of data loss or downtime.",
          "Testing and documentation help confirm that protection is practical, not just theoretical.",
        ],
        points: [
          "Redundant storage configuration",
          "Recovery procedure planning",
          "RAID testing and documentation",
          "Reduced storage failure risk",
        ],
        image: {
          src: "/image/service-details/storage-raid-deployment.webp",
          alt: "RAID storage deployment with redundant drive bays and recovery procedure review",
        },
      },
      {
        id: "storage-capacity-planning",
        navLabel: "Capacity",
        title: "Capacity planning that forecasts storage needs before space runs out.",
        lead:
          "Storage projects should include the growth curve, not only the space needed on the day of installation.",
        body: [
          "Auxano estimates current use, growth rate, retention needs, backup requirements, and workload behavior before recommending capacity.",
          "That helps the client avoid emergency expansion and protects the storage investment for longer.",
        ],
        points: [
          "Storage growth forecasting",
          "Retention and backup considerations",
          "Capacity headroom planning",
          "Expansion-ready recommendation",
        ],
        image: {
          src: "/image/service-details/storage-capacity-planning.webp",
          alt: "Storage capacity planning dashboard and server storage growth forecast",
        },
      },
    ],
  }),
  buildService({
    slug: "printer-sales-installation",
    title: "Printer Sales & Installation",
    category: "Hardware Systems",
    summary: "Printers supplied, installed, networked, and tested before handover.",
    description:
      "Support multifunction, label, receipt, and office printers across Windows, Mac, and mobile workflows with shared deployment and print management guidance.",
    navDescription: "Printers supplied, networked, and integrated into business workflows.",
    highlights: [
      "Laser, inkjet, and multifunction devices",
      "Label and receipt printer deployment",
      "Cross-platform network setup",
      "Print management support",
    ],
    capabilities: [
      "Printer selection and supply",
      "Network integration and testing",
      "Print policy and support setup",
    ],
    deliverables: [
      "Installed and tested printers",
      "Network print configuration",
      "User and support notes",
    ],
    industries: ["Retail", "Warehousing", "Corporate offices", "Healthcare"],
    detailEyebrow: "Printer supply and installation capabilities",
    detailTitle: "Printers supplied, networked, managed, and tested before handover.",
    detailDescription:
      "The PDF breaks printer services into office printers, label and receipt printers, network setup, and print management. This page expands each item into a practical printer delivery flow.",
    capabilitySections: [
      {
        id: "office-printer-supply",
        navLabel: "Office printers",
        title: "Laser, inkjet, and multifunction printers matched to business use.",
        lead:
          "The right printer depends on volume, output type, user behavior, maintenance expectations, and network integration.",
        body: [
          "Auxano supplies and installs office printers for teams that need dependable printing, scanning, copying, and shared use across departments.",
          "The recommendation considers workload and operating cost instead of treating every printer as interchangeable.",
        ],
        points: [
          "Laser, inkjet, and multifunction options",
          "Office workload matching",
          "Scanning and copying readiness",
          "Installed and tested before handover",
        ],
        image: {
          src: "/image/service-details/printer-office-supply.webp",
          alt: "Modern office multifunction printer installed and ready for business use",
        },
      },
      {
        id: "label-receipt-printers",
        navLabel: "Label printers",
        title: "Thermal, barcode, label, and receipt printers for logistics, retail, and warehousing.",
        lead:
          "Specialist printers need to match the workflow, label size, media type, and application that drives them.",
        body: [
          "Auxano supports label and receipt printer deployment for logistics, warehousing, point-of-sale, inventory, and operational workflows.",
          "The scope can include device selection, connection, driver setup, testing, and user handover.",
        ],
        points: [
          "Thermal and barcode printer support",
          "Receipt printer setup",
          "Retail and warehouse workflows",
          "Driver and media testing",
        ],
        image: {
          src: "/image/service-details/printer-label-receipt.webp",
          alt: "Label barcode and receipt printers set up for retail and warehouse operations",
        },
      },
      {
        id: "printer-network-setup",
        navLabel: "Network setup",
        title: "Printers shared across Windows, Mac, and mobile devices.",
        lead:
          "Printer installation is complete only when the right users can print reliably from the devices they actually use.",
        body: [
          "Auxano configures printer access across wired, wireless, Windows, Mac, and mobile environments, with testing before handover.",
          "This reduces repeated support calls and makes shared printing more predictable.",
        ],
        points: [
          "Network printer setup",
          "Windows, Mac, and mobile support",
          "Shared print access",
          "Connectivity and print testing",
        ],
        image: {
          src: "/image/service-details/printer-network-setup.webp",
          alt: "Network printer setup across office laptops mobile devices and shared print users",
        },
      },
      {
        id: "print-management",
        navLabel: "Management",
        title: "Print management to track and reduce printing costs organization-wide.",
        lead:
          "Print environments are easier to control when usage, cost, access, and support are visible.",
        body: [
          "Auxano can help structure print management so organizations understand device usage, reduce waste, and support the right printer policy.",
          "This matters for offices, schools, healthcare environments, and any business where printing cost or accountability is a recurring concern.",
        ],
        points: [
          "Print usage visibility",
          "Cost-reduction planning",
          "User and policy control",
          "Organization-wide print oversight",
        ],
        image: {
          src: "/image/service-details/printer-print-management.webp",
          alt: "Print management dashboard for tracking organization-wide printer usage and costs",
        },
      },
    ],
  }),
  buildService({
    slug: "firewall-sales-licenses",
    title: "Firewall Sales and Licenses",
    category: "Software & Licenses",
    summary: "Your first line of defence supplied, licensed, and configured for your environment rather than left at defaults.",
    description:
      "Source firewall platforms and license renewals, then configure them around network structure, user behavior, and the actual risk profile of the business.",
    navDescription: "Firewall licensing and deployment configured for real operational risk.",
    highlights: [
      "Firewall procurement and renewals",
      "Platform fit across major vendors",
      "Environment-specific configuration",
      "Expiry and protection continuity tracking",
    ],
    capabilities: [
      "Firewall recommendation and supply",
      "License renewal management",
      "Security policy configuration",
    ],
    deliverables: [
      "Licensed firewall platform",
      "Configured security ruleset",
      "Renewal and support guidance",
    ],
    industries: ["Professional services", "Healthcare", "Education", "Retail"],
    detailEyebrow: "Firewall licensing capabilities",
    detailTitle: "Firewall platforms licensed, configured, and managed for the environment they protect.",
    detailDescription:
      "The PDF positions firewall licensing as the first line of defence, properly configured. This flow breaks the service into platform fit, enterprise-grade options, and renewal management so protection does not lapse.",
    capabilitySections: [
      {
        id: "firewall-performance-value",
        navLabel: "Performance",
        title: "Firewall platforms selected for performance, value, and real network demand.",
        lead:
          "A firewall should match bandwidth, user count, site risk, VPN needs, and inspection requirements before it is purchased.",
        body: [
          "Auxano helps clients choose firewall hardware and licenses around the actual environment instead of leaving the device at default assumptions.",
          "The result is a security edge that is sized, licensed, and ready to be configured for the business.",
        ],
        points: [
          "Firewall sizing and platform fit",
          "Performance and value review",
          "License feature alignment",
          "Environment-specific recommendation",
        ],
        image: {
          src: "/image/service-details/software-firewall-performance.webp",
          alt: "Enterprise firewall appliance and security dashboard prepared for business network protection",
        },
      },
      {
        id: "firewall-endpoint-sync",
        navLabel: "Endpoint sync",
        title: "Synchronized security across firewall and endpoint protection.",
        lead:
          "Firewall value increases when the wider security stack can share visibility and response context.",
        body: [
          "Auxano can align firewall licensing with endpoint security needs, monitoring expectations, and user behavior so perimeter and device protection work together.",
          "This supports stronger threat response than isolated tools managed in separate silos.",
        ],
        points: [
          "Firewall and endpoint alignment",
          "Central security visibility",
          "Threat response context",
          "Protection beyond default setup",
        ],
        image: {
          src: "/image/service-details/software-firewall-endpoint-sync.webp",
          alt: "Firewall and endpoint security monitoring displayed on a centralized operations dashboard",
        },
      },
      {
        id: "enterprise-firewall-complex",
        navLabel: "Enterprise",
        title: "Enterprise-grade firewall options for complex environments.",
        lead:
          "Larger environments need more than basic filtering; they need segmentation, inspection, policy control, and resilience.",
        body: [
          "Auxano scopes firewall needs for complex sites, multi-branch networks, regulated teams, and environments with heavier security requirements.",
          "The service can support advanced firewall platforms where the network requires deeper controls and stronger governance.",
        ],
        points: [
          "Complex environment support",
          "Policy and segmentation planning",
          "Enterprise security control fit",
          "Governance-aware deployment",
        ],
        image: {
          src: "/image/service-details/software-firewall-enterprise.webp",
          alt: "Enterprise firewall architecture protecting a complex multi-site business network",
        },
      },
      {
        id: "firewall-renewal-management",
        navLabel: "Renewals",
        title: "Renewal management so firewall protection never quietly lapses.",
        lead:
          "Security licenses lose value when expiry dates are unmanaged and protection lapses unnoticed.",
        body: [
          "Auxano tracks renewal needs, expiry timing, license coverage, and upgrade windows so the client can plan before protection is interrupted.",
          "That keeps the firewall useful as an active security control, not a forgotten appliance.",
        ],
        points: [
          "Expiry tracking",
          "Renewal planning",
          "Coverage continuity",
          "Upgrade and license guidance",
        ],
        image: {
          src: "/image/service-details/software-firewall-renewals.webp",
          alt: "Firewall license renewal calendar and security coverage dashboard",
        },
      },
    ],
  }),
  buildService({
    slug: "antivirus-licenses",
    title: "Antivirus Licenses",
    category: "Software & Licenses",
    summary: "Endpoint protection licensed, deployed, configured, and actively managed across the device fleet.",
    description:
      "Provide centrally managed antivirus and ransomware protection across user and business devices with deployment included, not left to the client.",
    navDescription: "Endpoint protection licensing with deployment and central visibility.",
    highlights: [
      "Vendor fit by budget and risk profile",
      "Central management console setup",
      "Ransomware protection coverage",
      "Deployment included across the fleet",
    ],
    capabilities: [
      "Endpoint security rollout",
      "Central monitoring setup",
      "License and coverage management",
    ],
    deliverables: [
      "Licensed antivirus deployment",
      "Monitoring console readiness",
      "Coverage and renewal guidance",
    ],
    industries: ["Corporate offices", "Retail", "Education", "Healthcare"],
    detailEyebrow: "Antivirus licensing capabilities",
    detailTitle: "Endpoint protection licensed, deployed, and monitored across the business fleet.",
    detailDescription:
      "The PDF emphasizes that Auxano does not just sell a key. This page expands antivirus licensing into vendor fit, central console setup, ransomware protection, and deployment across devices.",
    capabilitySections: [
      {
        id: "antivirus-vendor-fit",
        navLabel: "Vendor fit",
        title: "Endpoint protection matched to budget, risk profile, and device estate.",
        lead:
          "The best antivirus choice depends on how many devices need protection and what level of risk the business carries.",
        body: [
          "Auxano compares endpoint protection options against budget, management needs, risk exposure, and the support model expected after deployment.",
          "The recommendation is practical: the goal is a solution the client can afford, manage, and trust.",
        ],
        points: [
          "Budget and risk-profile review",
          "Endpoint estate assessment",
          "Vendor-fit recommendation",
          "License coverage planning",
        ],
        image: {
          src: "/image/service-details/software-antivirus-vendor-fit.webp",
          alt: "Endpoint security product comparison and antivirus license planning workspace",
        },
      },
      {
        id: "antivirus-central-console",
        navLabel: "Console",
        title: "Central management console for monitoring all protected devices.",
        lead:
          "Endpoint security becomes more useful when coverage and incidents are visible from one place.",
        body: [
          "Auxano configures central management so administrators can see protected devices, coverage gaps, alerts, and policy status.",
          "This helps the business move beyond one-by-one installation into fleet-level control.",
        ],
        points: [
          "Central console setup",
          "Device coverage visibility",
          "Policy and alert monitoring",
          "Fleet-level endpoint management",
        ],
        image: {
          src: "/image/service-details/software-antivirus-console.webp",
          alt: "Central antivirus management console monitoring protected business devices",
        },
      },
      {
        id: "ransomware-protection",
        navLabel: "Ransomware",
        title: "Ransomware protection treated as a critical business control.",
        lead:
          "Modern endpoint protection must account for ransomware, not only traditional virus detection.",
        body: [
          "Auxano helps configure endpoint protection around ransomware risk, user behavior, update discipline, and the response path when suspicious activity appears.",
          "This gives businesses a stronger practical defence against one of the most disruptive endpoint threats.",
        ],
        points: [
          "Ransomware protection coverage",
          "Suspicious activity monitoring",
          "User and device risk awareness",
          "Endpoint response readiness",
        ],
        image: {
          src: "/image/service-details/software-antivirus-ransomware.webp",
          alt: "Ransomware protection dashboard showing protected endpoints and threat alerts",
        },
      },
      {
        id: "antivirus-deployment-included",
        navLabel: "Deployment",
        title: "Deployment included across the fleet, not left to the client.",
        lead:
          "A license is not the same as protection until it is installed, configured, and verified.",
        body: [
          "Auxano deploys antivirus software across business devices, confirms coverage, and provides practical guidance for ongoing monitoring and renewal.",
          "That closes the gap between procurement and actual protection.",
        ],
        points: [
          "Installation across user devices",
          "Coverage verification",
          "Baseline policy configuration",
          "Renewal and support guidance",
        ],
        image: {
          src: "/image/service-details/software-antivirus-deployment.webp",
          alt: "Technician deploying endpoint protection across business laptops",
        },
      },
    ],
  }),
  buildService({
    slug: "windows-operating-system-licenses",
    title: "Windows Operating System Licenses",
    category: "Software & Licenses",
    summary: "Genuine Windows licensing for individuals, teams, and organizations with clean compliance records.",
    description:
      "Supply Windows editions and volume licensing options with organization-linked documentation and audit visibility where needed.",
    navDescription: "Genuine Windows licensing with business compliance documentation.",
    highlights: [
      "Home, Pro, and Business editions",
      "Volume licensing options",
      "Compliance documentation",
      "License audit visibility",
    ],
    capabilities: [
      "OS license sourcing and allocation",
      "Compliance documentation support",
      "Volume licensing guidance",
    ],
    deliverables: [
      "Registered OS licenses",
      "Compliance record support",
      "Organization-ready documentation",
    ],
    industries: ["Corporate offices", "Education", "Healthcare", "Professional services"],
    detailEyebrow: "Windows licensing capabilities",
    detailTitle: "Genuine Windows licensing with compliance visibility and clean documentation.",
    detailDescription:
      "The PDF frames Windows licensing around secure, updated, compliant systems. This page expands the service into edition selection, volume licensing, documentation, and audit clarity.",
    capabilitySections: [
      {
        id: "windows-editions",
        navLabel: "Editions",
        title: "Windows editions selected for individuals, teams, and organizations.",
        lead:
          "The right Windows edition depends on device role, security needs, management requirements, and user type.",
        body: [
          "Auxano helps clients choose Windows licensing options for individual users, teams, and business environments that need genuine, supportable operating systems.",
          "This keeps devices properly activated and easier to manage.",
        ],
        points: [
          "Windows Home, Pro, and Business guidance",
          "Role-based edition selection",
          "Genuine license sourcing",
          "Secure and update-ready devices",
        ],
        image: {
          src: "/image/service-details/software-windows-editions.webp",
          alt: "Genuine Windows operating system license planning for business devices",
        },
      },
      {
        id: "windows-volume-licensing",
        navLabel: "Volume",
        title: "Volume licensing for organizations with multiple devices.",
        lead:
          "Teams with several devices need a licensing approach that is easier to track than scattered individual keys.",
        body: [
          "Auxano supports volume licensing conversations where organizations need cost-effective, documented, and centrally understandable license coverage.",
          "This is useful for refresh projects, new offices, schools, and growing businesses.",
        ],
        points: [
          "Volume licensing guidance",
          "Multi-device cost efficiency",
          "Organization-level license planning",
          "Procurement support for device fleets",
        ],
        image: {
          src: "/image/service-details/software-windows-volume.webp",
          alt: "Volume operating system licensing dashboard for a business device fleet",
        },
      },
      {
        id: "windows-compliance-documentation",
        navLabel: "Compliance",
        title: "Compliance documentation registered in the organization's name.",
        lead:
          "Licensing should leave the business with records it can defend during review or audit.",
        body: [
          "Auxano helps preserve license documentation and procurement records so the client has a cleaner compliance position.",
          "That documentation is part of the value of buying properly, not a side detail.",
        ],
        points: [
          "License record support",
          "Organization-ready documentation",
          "Proof of genuine software",
          "Cleaner compliance posture",
        ],
        image: {
          src: "/image/service-details/software-windows-compliance.webp",
          alt: "Operating system license compliance documentation reviewed on a business workstation",
        },
      },
      {
        id: "windows-license-audit",
        navLabel: "Audit",
        title: "License audit visibility so the business knows where OS licensing stands.",
        lead:
          "An audit view helps teams identify gaps before licensing becomes a procurement or compliance problem.",
        body: [
          "Auxano can help review existing operating system license coverage, document device status, and recommend remediation where gaps exist.",
          "This gives decision-makers a clearer view of what is compliant, what is missing, and what should be cleaned up.",
        ],
        points: [
          "OS license estate review",
          "Coverage gap identification",
          "Audit-ready visibility",
          "Remediation recommendation",
        ],
        image: {
          src: "/image/service-details/software-windows-audit.webp",
          alt: "Windows license audit dashboard showing business device compliance status",
        },
      },
    ],
  }),
  buildService({
    slug: "server-operating-system-licenses",
    title: "Server Operating System Licenses",
    category: "Software & Licenses",
    summary: "Server operating systems licensed, deployed, hardened, and aligned to the infrastructure role they must support.",
    description:
      "Handle Windows Server, Ubuntu, Red Hat, and VMware licensing plus installation, Active Directory services, and platform hardening.",
    navDescription: "Server OS licensing with deployment, hardening, and infrastructure services.",
    highlights: [
      "Windows Server and Linux options",
      "VMware and virtualization support",
      "AD, DNS, DHCP, and Group Policy setup",
      "Hardening and deployment included",
    ],
    capabilities: [
      "Platform selection and licensing",
      "Server OS installation and configuration",
      "Directory and service setup",
    ],
    deliverables: [
      "Licensed and configured server OS",
      "Core services deployment",
      "Security and support notes",
    ],
    industries: ["Enterprise offices", "Healthcare", "Financial services", "Education"],
    detailEyebrow: "Server OS licensing capabilities",
    detailTitle: "Server operating systems licensed, installed, hardened, and aligned to their infrastructure role.",
    detailDescription:
      "The PDF names Windows Server, Red Hat, Ubuntu Server LTS, and VMware vSphere/ESXi. This page expands each platform option into a practical deployment and licensing story.",
    capabilitySections: [
      {
        id: "windows-server-platform",
        navLabel: "Windows Server",
        title: "Windows Server for Active Directory, RDS, Hyper-V, and file services.",
        lead:
          "Windows Server licensing should match the roles the business expects the server to carry.",
        body: [
          "Auxano supports Windows Server licensing, installation, and configuration around directory services, remote desktop services, virtualization, and shared file needs.",
          "The deployment can include AD, DNS, DHCP, Group Policy, and baseline hardening where required.",
        ],
        points: [
          "Windows Server licensing",
          "AD, DNS, DHCP, and Group Policy",
          "RDS, Hyper-V, and file services",
          "Installation and hardening included",
        ],
        image: {
          src: "/image/service-details/software-server-windows.webp",
          alt: "Windows Server platform deployment dashboard in a business server room",
        },
      },
      {
        id: "red-hat-linux-platform",
        navLabel: "Red Hat",
        title: "Red Hat Enterprise Linux for critical Linux workloads.",
        lead:
          "Commercial Linux workloads often need supportability, lifecycle clarity, and hardened deployment.",
        body: [
          "Auxano helps clients license and deploy Red Hat Enterprise Linux where critical workloads require a commercially supported Linux platform.",
          "The scope can include installation, baseline hardening, service readiness, and handover documentation.",
        ],
        points: [
          "Commercial Linux licensing",
          "Critical workload support",
          "Secure installation",
          "Operational handover notes",
        ],
        image: {
          src: "/image/service-details/software-server-redhat.webp",
          alt: "Enterprise Linux server deployment with secure command console and server racks",
        },
      },
      {
        id: "ubuntu-server-platform",
        navLabel: "Ubuntu",
        title: "Ubuntu Server LTS for web, database, and open-source environments.",
        lead:
          "Ubuntu Server fits many modern workloads when it is installed and governed properly.",
        body: [
          "Auxano deploys Ubuntu Server LTS for web, database, application, and open-source infrastructure needs, with the baseline setup required for production readiness.",
          "The service helps avoid informal server builds that become hard to patch or support later.",
        ],
        points: [
          "Ubuntu Server LTS deployment",
          "Web and database workload readiness",
          "Open-source environment support",
          "Patch and hardening guidance",
        ],
        image: {
          src: "/image/service-details/software-server-ubuntu.webp",
          alt: "Ubuntu server deployment workstation connected to business server infrastructure",
        },
      },
      {
        id: "vmware-vsphere-platform",
        navLabel: "VMware",
        title: "VMware vSphere and ESXi for virtualized infrastructure.",
        lead:
          "Virtualization can reduce hardware cost and improve flexibility when it is planned around real workloads.",
        body: [
          "Auxano supports VMware licensing and deployment for organizations consolidating services, improving resilience, or modernizing server infrastructure.",
          "The work can include host readiness, storage awareness, network planning, and handover of the virtualized platform.",
        ],
        points: [
          "VMware vSphere and ESXi support",
          "Infrastructure virtualization",
          "Host and storage readiness",
          "Hardware cost optimization",
        ],
        image: {
          src: "/image/service-details/software-server-vmware.webp",
          alt: "Virtualized server infrastructure dashboard with multiple virtual machines and host resources",
        },
      },
    ],
  }),
  buildService({
    slug: "database-software-licenses",
    title: "Database Software Licenses",
    category: "Software & Licenses",
    summary: "The right database platforms licensed, deployed, tuned, and backed up for business-critical workloads.",
    description:
      "Support SQL Server, open-source relational databases, and NoSQL stacks with setup, tuning, and recovery-aware configuration.",
    navDescription: "Database licensing and deployment aligned to performance and recovery.",
    highlights: [
      "Relational and NoSQL database support",
      "Performance-aware deployment",
      "Backup and recovery setup",
      "Platform fit by workload",
    ],
    capabilities: [
      "Database platform selection",
      "Deployment and tuning",
      "Backup and restore strategy setup",
    ],
    deliverables: [
      "Licensed and configured database platform",
      "Backup policy and recovery setup",
      "Operational support guidance",
    ],
    industries: ["Healthcare", "Professional services", "Financial services", "Operations-heavy SMEs"],
    detailEyebrow: "Database software capabilities",
    detailTitle: "Database software licensed, deployed, tuned, backed up, and managed for availability.",
    detailDescription:
      "The PDF groups database licensing around SQL Server, open-source relational databases, MongoDB, and backup/recovery configuration. This flow expands each database path into a practical delivery section.",
    capabilitySections: [
      {
        id: "microsoft-sql-server",
        navLabel: "SQL Server",
        title: "Microsoft SQL Server licensing for business applications.",
        lead:
          "Business applications need a database platform that is correctly licensed, configured, and protected.",
        body: [
          "Auxano supports SQL Server licensing conversations and deployment planning for standard and enterprise application workloads.",
          "The goal is a database environment that is supportable, performant, and aligned to the application it serves.",
        ],
        points: [
          "SQL Server licensing support",
          "Business application readiness",
          "Standard and enterprise workload planning",
          "Performance-aware deployment",
        ],
        image: {
          src: "/image/service-details/software-database-sql.webp",
          alt: "SQL Server database platform dashboard for business application workloads",
        },
      },
      {
        id: "open-source-relational-databases",
        navLabel: "Relational",
        title: "MySQL, MariaDB, and PostgreSQL for open-source relational workloads.",
        lead:
          "Open-source databases still need professional deployment, tuning, backup, and governance.",
        body: [
          "Auxano deploys relational database platforms around application requirements, user load, storage needs, and operational support expectations.",
          "This helps clients use open-source databases without treating them as unmanaged technical shortcuts.",
        ],
        points: [
          "MySQL, MariaDB, and PostgreSQL support",
          "Application-aligned deployment",
          "Performance and storage planning",
          "Operational support guidance",
        ],
        image: {
          src: "/image/service-details/software-database-relational.webp",
          alt: "Open-source relational database architecture dashboard and server environment",
        },
      },
      {
        id: "mongodb-nosql",
        navLabel: "NoSQL",
        title: "MongoDB and NoSQL support for modern application workloads.",
        lead:
          "Modern application data may require flexible document storage instead of a purely relational model.",
        body: [
          "Auxano supports NoSQL database deployment where the application workload calls for flexible schema design, high-volume data, or modern development patterns.",
          "The scope can include configuration, access planning, backup awareness, and support notes.",
        ],
        points: [
          "MongoDB and NoSQL workload support",
          "Modern application alignment",
          "Access and configuration planning",
          "Backup-aware deployment",
        ],
        image: {
          src: "/image/service-details/software-database-mongodb.webp",
          alt: "NoSQL database dashboard for modern application workloads",
        },
      },
      {
        id: "database-backup-recovery",
        navLabel: "Recovery",
        title: "Automated backup and tested recovery configuration.",
        lead:
          "A database is not properly managed until backup and restore behavior has been planned and tested.",
        body: [
          "Auxano configures backup schedules, retention expectations, restore procedures, and recovery checks around the criticality of the database.",
          "This protects availability and reduces panic when data loss, corruption, or server failure occurs.",
        ],
        points: [
          "Automated backup configuration",
          "Retention and restore planning",
          "Tested recovery procedures",
          "Availability-focused management",
        ],
        image: {
          src: "/image/service-details/software-database-backup.webp",
          alt: "Database backup and recovery dashboard with protected server storage",
        },
      },
    ],
  }),
  buildService({
    slug: "cloud-services-licenses",
    title: "Cloud Services Licenses",
    category: "Software & Licenses",
    summary: "Cloud subscriptions and platform services managed by a team that can actually configure and optimize them.",
    description:
      "Support Microsoft 365, Google Workspace, Azure, and AWS subscriptions with migration, configuration, renewal tracking, and cost visibility.",
    navDescription: "Cloud licensing, migration, and environment configuration for business teams.",
    highlights: [
      "Microsoft 365 and Google Workspace",
      "Azure and AWS subscription support",
      "Migration and environment setup",
      "Renewal and spend visibility",
    ],
    capabilities: [
      "Cloud platform onboarding",
      "Tenant setup and migration",
      "Subscription and renewal management",
    ],
    deliverables: [
      "Configured cloud environment",
      "Migration completion where required",
      "Subscription and support guidance",
    ],
    industries: ["Professional services", "Education", "Healthcare", "Retail"],
    detailEyebrow: "Cloud licensing capabilities",
    detailTitle: "Cloud services licensed, migrated, configured, and optimized by people who understand the platform.",
    detailDescription:
      "The PDF breaks cloud services into Microsoft 365, Google Workspace, Azure and AWS, and subscription management. This page turns that into an operational licensing and configuration flow.",
    capabilitySections: [
      {
        id: "microsoft-365-services",
        navLabel: "Microsoft 365",
        title: "Microsoft 365 for Word, Excel, Teams, Outlook, SharePoint, and OneDrive.",
        lead:
          "Microsoft 365 value depends on licensing, identity, email, collaboration, storage, and user adoption being configured together.",
        body: [
          "Auxano supports Microsoft 365 licensing, tenant setup, user provisioning, email configuration, Teams readiness, SharePoint structure, and OneDrive adoption.",
          "The service can include migration and practical configuration so the subscription becomes a working environment.",
        ],
        points: [
          "Microsoft 365 licensing",
          "Email, Teams, SharePoint, and OneDrive setup",
          "Tenant and user provisioning",
          "Migration and configuration support",
        ],
        image: {
          src: "/image/service-details/software-cloud-microsoft-365.webp",
          alt: "Microsoft 365 cloud workspace dashboard with email collaboration and document storage",
        },
      },
      {
        id: "google-workspace-services",
        navLabel: "Google Workspace",
        title: "Google Workspace for Gmail, Docs, Drive, Meet, and Calendar.",
        lead:
          "Google Workspace should be configured around users, files, meetings, identity, and administration.",
        body: [
          "Auxano helps clients license and configure Google Workspace for communication, collaboration, cloud storage, meetings, and team administration.",
          "This gives organizations a cleaner path from subscription purchase to working cloud environment.",
        ],
        points: [
          "Google Workspace licensing",
          "Gmail, Drive, Docs, Meet, and Calendar setup",
          "User and admin configuration",
          "Collaboration-ready deployment",
        ],
        image: {
          src: "/image/service-details/software-cloud-google-workspace.webp",
          alt: "Cloud collaboration workspace dashboard with mail documents drive and calendar tools",
        },
      },
      {
        id: "azure-aws-services",
        navLabel: "Azure & AWS",
        title: "Microsoft Azure and AWS for cloud infrastructure and platform services.",
        lead:
          "Cloud infrastructure needs design discipline, cost awareness, security, and operational ownership.",
        body: [
          "Auxano supports Azure and AWS licensing and platform conversations around infrastructure, hosting, identity, storage, networking, and application needs.",
          "The work can include environment configuration, migration planning, and operational guidance.",
        ],
        points: [
          "Azure and AWS platform support",
          "Cloud infrastructure planning",
          "Security and cost-awareness",
          "Migration and environment setup",
        ],
        image: {
          src: "/image/service-details/software-cloud-azure-aws.webp",
          alt: "Cloud infrastructure dashboard for Azure and AWS platform services",
        },
      },
      {
        id: "cloud-subscription-management",
        navLabel: "Subscriptions",
        title: "Subscription management so renewals, spend, and lapses stay under control.",
        lead:
          "Cloud subscriptions can waste money quickly when licenses are unmanaged or renewals are missed.",
        body: [
          "Auxano tracks subscriptions, renewal dates, user allocation, and optimization opportunities so the client avoids waste and service interruption.",
          "That keeps the cloud environment commercially controlled as well as technically configured.",
        ],
        points: [
          "Renewal tracking",
          "License allocation review",
          "Spend optimization",
          "No waste and no lapses",
        ],
        image: {
          src: "/image/service-details/software-cloud-subscriptions.webp",
          alt: "Cloud subscription management dashboard showing renewal tracking and spend optimization",
        },
      },
    ],
  }),
  buildService({
    slug: "applications-licenses",
    title: "Applications Licenses",
    category: "Software & Licenses",
    summary: "Business software licensed properly so teams can operate without compliance gaps or procurement friction.",
    description:
      "Source Microsoft Office, Adobe, Autodesk, remote access tools, accounting apps, and other business software with deployment-ready licensing guidance.",
    navDescription: "Application licensing for office, creative, engineering, and business workflows.",
    highlights: [
      "Office, design, and engineering applications",
      "Remote access and PDF tools",
      "Accounting and specialist software",
      "Broad sourcing coverage on request",
    ],
    capabilities: [
      "Application license sourcing",
      "Role-based recommendation support",
      "Deployment readiness planning",
    ],
    deliverables: [
      "Licensed application package",
      "Procurement and deployment notes",
      "Renewal visibility where applicable",
    ],
    industries: ["Professional services", "Creative teams", "Engineering firms", "Corporate offices"],
    detailEyebrow: "Application licensing capabilities",
    detailTitle: "Business application licenses sourced, activated, documented, and ready for teams.",
    detailDescription:
      "The PDF lists Microsoft Office, Adobe Creative Cloud, AutoCAD and Autodesk, plus accounting, remote access, and PDF tools. This page expands each application category into a clear licensing path.",
    capabilitySections: [
      {
        id: "microsoft-office-licenses",
        navLabel: "Office",
        title: "Microsoft Office perpetual and subscription licensing.",
        lead:
          "Office licensing should match how teams create documents, collaborate, and manage email or productivity workflows.",
        body: [
          "Auxano sources Office licenses and helps clients choose between perpetual and subscription models based on business requirements.",
          "The goal is genuine, activated software with cleaner procurement records.",
        ],
        points: [
          "Office perpetual and subscription options",
          "Productivity software licensing",
          "Activation and documentation support",
          "Business-fit recommendation",
        ],
        image: {
          src: "/image/service-details/software-app-office.webp",
          alt: "Office productivity application licensing dashboard on a business laptop",
        },
      },
      {
        id: "adobe-creative-cloud-licenses",
        navLabel: "Creative",
        title: "Adobe Creative Cloud licensing for design, video, and marketing teams.",
        lead:
          "Creative teams need the right application access without compliance gaps or procurement confusion.",
        body: [
          "Auxano supports creative software licensing for design, video editing, marketing production, and content teams that need reliable access to professional tools.",
          "The service helps align licenses with roles and renewal expectations.",
        ],
        points: [
          "Creative suite license sourcing",
          "Design and video workflow support",
          "Role-based licensing",
          "Renewal visibility",
        ],
        image: {
          src: "/image/service-details/software-app-adobe.webp",
          alt: "Creative design workstation with licensed design and video application tools",
        },
      },
      {
        id: "autocad-autodesk-licenses",
        navLabel: "Engineering",
        title: "AutoCAD and Autodesk licensing for engineers and architects.",
        lead:
          "Engineering and architecture tools need licensing that fits project teams, device performance, and compliance expectations.",
        body: [
          "Auxano sources CAD and engineering application licenses for teams that need specialist software for design, architecture, drawing, and technical production.",
          "The recommendation can account for user roles, subscription needs, and procurement timing.",
        ],
        points: [
          "CAD and Autodesk license sourcing",
          "Architecture and engineering workflows",
          "Specialist software procurement",
          "User-role alignment",
        ],
        image: {
          src: "/image/service-details/software-app-autodesk.webp",
          alt: "Engineering workstation with CAD software license planning and technical drawings",
        },
      },
      {
        id: "business-tools-licenses",
        navLabel: "Business tools",
        title: "Accounting, remote access, PDF tools, and specialist software sourced on request.",
        lead:
          "Business teams often need practical tools beyond the headline software suites.",
        body: [
          "Auxano can source accounting software, remote access tools, PDF applications, and other specialist licenses when a team needs legitimate, documented software.",
          "If a license is not listed, the team can still ask; the service is designed to support broad software sourcing.",
        ],
        points: [
          "Accounting software licenses",
          "Remote access and PDF tools",
          "Specialist software sourcing",
          "Procurement documentation",
        ],
        image: {
          src: "/image/service-details/software-app-business-tools.webp",
          alt: "Business software licensing workspace with accounting remote access and PDF tool dashboards",
        },
      },
    ],
  }),
  buildService({
    slug: "it-technical-services",
    title: "IT Technical Services",
    category: "Managed & Advisory",
    summary: "Hands-on technical support on-site or remote for hardware, software, network, and system administration issues.",
    description:
      "Provide help desk, field support, system administration, and break/fix assistance for teams that need fast intervention without unnecessary complexity.",
    navDescription: "On-site and remote technical support for live operational issues.",
    highlights: [
      "Help desk and escalation support",
      "On-site engineer dispatch",
      "System administration coverage",
      "Break/fix support without long-term lock-in",
    ],
    capabilities: [
      "Remote and field issue resolution",
      "Account, device, and server administration",
      "Ad-hoc technical support coverage",
    ],
    deliverables: [
      "Support intervention and resolution",
      "Issue notes and recommendations",
      "Operational follow-up guidance",
    ],
    industries: ["Corporate offices", "Retail", "Education", "Healthcare"],
    detailEyebrow: "IT technical service capabilities",
    detailTitle: "Technical support structured for quick response, clear ownership, and lower downtime.",
    detailDescription:
      "The PDF positions IT technical services as hands-on support that can work remotely or on site. This page turns that into a practical support model across help desk, field dispatch, system administration, and break/fix intervention.",
    capabilitySections: [
      {
        id: "help-desk-support",
        navLabel: "Help desk",
        title: "First and second-line support for hardware, software, and network issues.",
        lead:
          "Users need a clear route to support when devices, applications, accounts, or connectivity interrupt the workday.",
        body: [
          "Auxano handles first-line triage and second-line escalation so issues are categorized, prioritized, and resolved without leaving users to chase multiple vendors.",
          "The support path covers common endpoint problems, software faults, email issues, network symptoms, and user access concerns.",
        ],
        points: [
          "First and second-line support",
          "Hardware and software issue triage",
          "Network fault escalation",
          "Clear issue notes and follow-up",
        ],
        image: {
          src: "/image/service-details/managed-technical-help-desk.webp",
          alt: "IT help desk engineer resolving support tickets from a professional support workstation",
        },
      },
      {
        id: "onsite-engineer-dispatch",
        navLabel: "On-site",
        title: "Engineer dispatch when remote support is not enough.",
        lead:
          "Some problems need a qualified person at the desk, rack, device, or site before the root cause can be confirmed.",
        body: [
          "When remote diagnosis reaches its limit, Auxano can dispatch on-site engineers to inspect hardware, cabling, access, power, network points, and user workstations directly.",
          "That field presence helps reduce delays when the issue is physical, location-specific, or tied to multiple systems in the environment.",
        ],
        points: [
          "On-site engineer support",
          "Physical fault inspection",
          "Workstation and network checks",
          "Faster resolution for site-bound issues",
        ],
        image: {
          src: "/image/service-details/managed-technical-onsite-engineer.webp",
          alt: "On-site IT engineer inspecting network equipment and workstation connectivity",
        },
      },
      {
        id: "system-administration",
        navLabel: "Administration",
        title: "System administration for users, email, servers, and directory services.",
        lead:
          "Daily IT operations depend on accounts, permissions, mailboxes, servers, and identity services staying clean and controlled.",
        body: [
          "Auxano supports user account administration, Active Directory tasks, email configuration, server care, and routine operational changes that keep teams productive.",
          "The goal is disciplined administration, not casual changes that later become access, security, or support problems.",
        ],
        points: [
          "User account administration",
          "Active Directory support",
          "Email and mailbox changes",
          "Server care and operational checks",
        ],
        image: {
          src: "/image/service-details/managed-services-monitoring.webp",
          alt: "IT operations team monitoring server and account administration dashboards",
        },
      },
      {
        id: "break-fix-support",
        navLabel: "Break/fix",
        title: "Ad-hoc support without forcing a long-term commitment.",
        lead:
          "Some clients need expert intervention for a specific failure, not a full managed-service contract.",
        body: [
          "Auxano can handle break/fix work for urgent or isolated technical problems, then leave behind practical notes and recommendations for preventing repeat incidents.",
          "This gives clients access to professional support even when the need is occasional, project-based, or incident-driven.",
        ],
        points: [
          "Ad-hoc technical intervention",
          "No long-term commitment required",
          "Resolution notes after support",
          "Practical prevention recommendations",
        ],
        image: {
          src: "/image/service-details/managed-technical-onsite-engineer.webp",
          alt: "Field engineer resolving a break fix issue at an office workstation and network cabinet",
        },
      },
    ],
  }),
  buildService({
    slug: "it-managed-services-staff-outsourcing",
    title: "IT Managed Services & IT Staff Outsourcing",
    category: "Managed & Advisory",
    summary: "A predictable, SLA-backed managed service model with monitoring, security support, staffing, and leadership coverage.",
    description:
      "Operate as the client's external IT department or embed dedicated engineers on site, backed by proactive monitoring, reporting, and managed security disciplines.",
    navDescription: "Managed IT operations, staff augmentation, and SLA-backed support coverage.",
    highlights: [
      "24/7 monitoring and alerting",
      "Managed security and patch oversight",
      "Dedicated engineer outsourcing",
      "IT manager-as-a-service support",
    ],
    capabilities: [
      "SLA-backed operational support",
      "On-site and off-site team coverage",
      "Monthly reporting and review cadence",
    ],
    deliverables: [
      "Managed support operating model",
      "Monitoring and security coverage",
      "Reporting and staffing structure",
    ],
    industries: ["Professional services", "Healthcare", "Retail", "Education"],
    detailEyebrow: "Managed service capabilities",
    detailTitle: "Managed IT coverage with predictable cost, SLA response, and visible performance.",
    detailDescription:
      "The PDF describes this scope as a complete IT department at a predictable cost. The detailed flow explains monitoring, managed security, staff outsourcing, and IT manager-as-a-service support.",
    capabilitySections: [
      {
        id: "proactive-monitoring",
        navLabel: "Monitoring",
        title: "24/7 monitoring that detects risk before users feel the outage.",
        lead:
          "Networks and servers should be watched continuously, not only checked after a complaint arrives.",
        body: [
          "Auxano monitors key network, server, and availability signals so alerts can be reviewed before downtime becomes widespread.",
          "This gives the client a more proactive operating posture and a clearer view of recurring issues across the environment.",
        ],
        points: [
          "24/7 network monitoring",
          "Server health visibility",
          "Alert review before outages",
          "Recurring issue tracking",
        ],
        image: {
          src: "/image/service-details/managed-services-monitoring.webp",
          alt: "Network operations team monitoring server and network health dashboards",
        },
      },
      {
        id: "managed-security",
        navLabel: "Security",
        title: "Managed security across firewall rules, patching, and threat visibility.",
        lead:
          "Security operations need routine control, not one-time configuration that slowly becomes outdated.",
        body: [
          "Auxano supports firewall management, patch update oversight, and threat monitoring so the protective layer remains active and reviewed.",
          "The service helps clients maintain security hygiene without depending only on internal availability or informal checks.",
        ],
        points: [
          "Firewall management support",
          "Patch update oversight",
          "Threat monitoring",
          "Security hygiene reporting",
        ],
        image: {
          src: "/image/service-details/managed-services-security.webp",
          alt: "Security operations analysts reviewing firewall and patch monitoring dashboards",
        },
      },
      {
        id: "staff-outsourcing",
        navLabel: "Outsourcing",
        title: "Dedicated IT engineers at the client location on contract.",
        lead:
          "Some organizations need reliable IT presence without carrying every role as a permanent internal hire.",
        body: [
          "Auxano can provide outsourced IT staff who operate at the client's location while remaining backed by the wider technical team.",
          "That model gives the business day-to-day support presence, clearer accountability, and access to broader expertise when escalation is required.",
        ],
        points: [
          "Dedicated engineer placement",
          "On-site client support",
          "Backed by wider specialist expertise",
          "Contract-based staffing flexibility",
        ],
        image: {
          src: "/image/service-details/managed-services-staff-outsourcing.webp",
          alt: "Dedicated outsourced IT engineer assisting an employee at a corporate workstation",
        },
      },
      {
        id: "it-manager-as-a-service",
        navLabel: "Leadership",
        title: "IT manager as a service for senior technical leadership without a full-time hire.",
        lead:
          "Operational teams often need senior technology direction, not just ticket closure.",
        body: [
          "Auxano can provide IT leadership coverage for prioritization, reporting, vendor alignment, risk review, and technology planning.",
          "This gives decision-makers a senior point of view while keeping the commercial model predictable.",
        ],
        points: [
          "Senior IT leadership coverage",
          "Monthly performance reporting",
          "Vendor and risk review",
          "SLA-backed response cadence",
        ],
        image: {
          src: "/image/service-details/managed-consultancy-audit.webp",
          alt: "Senior IT advisor reviewing operational performance and technology priorities with client stakeholders",
        },
      },
    ],
  }),
  buildService({
    slug: "it-consultancy-audit-services",
    title: "IT Consultancy & Audit Services",
    category: "Managed & Advisory",
    summary: "Independent technical advice, infrastructure audits, cybersecurity reviews, and policy guidance before major decisions are made.",
    description:
      "Assess infrastructure, cabling, cybersecurity posture, and vendor proposals with objective recommendations, documented findings, and policy support.",
    navDescription: "Independent audits and consultancy before procurement or transformation.",
    highlights: [
      "Infrastructure and cybersecurity audit",
      "Policy development and governance support",
      "Vendor assessment without sales bias",
      "Risk, gap, and control recommendations",
    ],
    capabilities: [
      "Audit execution and findings review",
      "Policy and governance advice",
      "Vendor and proposal assessment",
    ],
    deliverables: [
      "Audit or consultancy report",
      "Gap and remediation guidance",
      "Decision-support recommendations",
    ],
    industries: ["Financial services", "Healthcare", "Professional services", "Education"],
    detailEyebrow: "Consultancy and audit capabilities",
    detailTitle: "Independent IT advice before procurement, transformation, or risk exposure becomes expensive.",
    detailDescription:
      "The PDF breaks this service into infrastructure audits, cybersecurity audits, policy development, and vendor assessment. The page now explains each advisory lane as a decision-support engagement.",
    capabilitySections: [
      {
        id: "infrastructure-audit",
        navLabel: "Infrastructure",
        title: "Infrastructure audit across hardware, network, cabling, risks, and gaps.",
        lead:
          "A technical environment should be assessed before major spend, expansion, or remediation decisions are made.",
        body: [
          "Auxano reviews the state of hardware, network architecture, cabling, server rooms, and support dependencies to identify risks and gaps.",
          "The output helps leadership understand what is working, what is fragile, and what should be addressed first.",
        ],
        points: [
          "Hardware and network review",
          "Cabling and site readiness checks",
          "Risk and gap identification",
          "Prioritized remediation guidance",
        ],
        image: {
          src: "/image/service-details/managed-consultancy-audit.webp",
          alt: "IT consultant reviewing infrastructure audit diagrams and risk findings with a client team",
        },
      },
      {
        id: "cybersecurity-audit",
        navLabel: "Cybersecurity",
        title: "Cybersecurity audit of firewall rules, patch levels, access controls, and staff practices.",
        lead:
          "Security posture depends on configuration, maintenance, access discipline, and the habits of people using the systems.",
        body: [
          "Auxano reviews firewall posture, endpoint patch levels, access controls, admin practices, and user behavior risks that can expose the business.",
          "The findings help the client move from assumptions to practical security actions.",
        ],
        points: [
          "Firewall rule review",
          "Patch level assessment",
          "Access control checks",
          "Staff practice risk review",
        ],
        image: {
          src: "/image/service-details/managed-services-security.webp",
          alt: "Cybersecurity analyst reviewing firewall rules patch status and threat monitoring dashboards",
        },
      },
      {
        id: "it-policy-development",
        navLabel: "Policy",
        title: "IT policy development for acceptable use, passwords, and data handling.",
        lead:
          "Technical controls are stronger when the people using the environment have clear operating rules.",
        body: [
          "Auxano helps define policies for acceptable use, password management, data handling, device behavior, and operational responsibility.",
          "The aim is practical governance that users and managers can actually follow, not a document that sits unused.",
        ],
        points: [
          "Acceptable-use policy support",
          "Password management guidance",
          "Data handling rules",
          "Practical governance documentation",
        ],
        image: {
          src: "/image/service-details/managed-consultancy-policy-vendor.webp",
          alt: "Technology advisor developing IT policy and governance documents with stakeholders",
        },
      },
      {
        id: "vendor-assessment",
        navLabel: "Vendors",
        title: "Objective vendor assessment with no sales bias.",
        lead:
          "Vendor proposals should be evaluated against the client's requirements, risk, and long-term operating fit.",
        body: [
          "Auxano can review vendor proposals, technical claims, bill of materials, support terms, and delivery assumptions on the client's behalf.",
          "This helps decision-makers compare options with a more independent technical view before committing budget.",
        ],
        points: [
          "Proposal and BOM review",
          "Technical claim validation",
          "Operating-fit comparison",
          "Independent recommendation",
        ],
        image: {
          src: "/image/service-details/managed-consultancy-policy-vendor.webp",
          alt: "Independent IT advisor comparing vendor proposal options with client stakeholders",
        },
      },
    ],
  }),
  buildService({
    slug: "it-project-management",
    title: "IT Project Management",
    category: "Managed & Advisory",
    summary: "Complex technical projects scoped, coordinated, risk-managed, and handed over properly.",
    description:
      "Lead planning, vendor coordination, risk management, and post-implementation review so multi-party technology work lands on time and to specification.",
    navDescription: "Structured project management for complex technical delivery.",
    highlights: [
      "Planning, scoping, and timeline control",
      "Vendor and stakeholder coordination",
      "Risk management before escalation",
      "Post-implementation review and handover",
    ],
    capabilities: [
      "Project planning and governance",
      "Multi-vendor coordination",
      "Delivery tracking and handover control",
    ],
    deliverables: [
      "Project scope and delivery plan",
      "Risk register and coordination cadence",
      "Post-implementation review and handover",
    ],
    industries: ["Enterprise offices", "Healthcare", "Education", "Operations-heavy SMEs"],
    detailEyebrow: "IT project management capabilities",
    detailTitle: "Technology projects coordinated from scope through vendor delivery and clean handover.",
    detailDescription:
      "The PDF describes IT project management as the control layer for complex delivery. This page breaks that into planning, vendor coordination, risk management, and post-implementation review.",
    capabilitySections: [
      {
        id: "planning-and-scoping",
        navLabel: "Planning",
        title: "Planning and scoping before work begins.",
        lead:
          "Complex projects need a clear scope, timeline, resource plan, and decision structure before vendors start work.",
        body: [
          "Auxano defines the delivery scope, milestones, dependencies, roles, and resource requirements so everyone is working from the same project baseline.",
          "That planning discipline reduces ambiguity and keeps procurement, engineering, and client stakeholders aligned.",
        ],
        points: [
          "Clear project scope",
          "Timeline and milestone planning",
          "Resource requirement mapping",
          "Decision and approval structure",
        ],
        image: {
          src: "/image/service-details/managed-project-management.webp",
          alt: "IT project manager leading a technology project planning session with timelines and system diagrams",
        },
      },
      {
        id: "vendor-coordination",
        navLabel: "Vendors",
        title: "Vendor coordination toward one delivery outcome.",
        lead:
          "Multi-supplier projects fail when each party optimizes for its own task instead of the shared result.",
        body: [
          "Auxano coordinates vendors, engineers, stakeholders, timelines, and dependencies so equipment, configuration, installation, and handover activities line up.",
          "This gives the client one control point for progress, issues, and accountability.",
        ],
        points: [
          "Multi-vendor coordination",
          "Dependency tracking",
          "Progress and issue cadence",
          "Single delivery control point",
        ],
        image: {
          src: "/image/service-details/managed-project-management.webp",
          alt: "Technology project team coordinating vendors and engineers around a shared delivery plan",
        },
      },
      {
        id: "project-risk-management",
        navLabel: "Risk",
        title: "Risk management before small problems become project delays.",
        lead:
          "The best time to resolve project risk is before it becomes a visible escalation.",
        body: [
          "Auxano tracks assumptions, access constraints, supply issues, technical dependencies, and stakeholder blockers that can delay delivery.",
          "Risks are made visible early, then managed through decisions, mitigations, and clear ownership.",
        ],
        points: [
          "Risk register and ownership",
          "Dependency and blocker review",
          "Early escalation control",
          "Mitigation planning",
        ],
        image: {
          src: "/image/service-details/managed-consultancy-audit.webp",
          alt: "IT project leaders reviewing risk findings and mitigation priorities with stakeholders",
        },
      },
      {
        id: "post-implementation-review",
        navLabel: "Handover",
        title: "Post-implementation review and clean handover to operations.",
        lead:
          "A project is not finished when installation ends; it is finished when operations can run and support it.",
        body: [
          "Auxano reviews delivered work against scope, confirms outstanding items, organizes operational notes, and supports a clean transition to the people who will own the environment.",
          "That final review protects the value of the project after the vendors leave site.",
        ],
        points: [
          "Post-implementation review",
          "Outstanding item tracking",
          "Operational handover notes",
          "Supportable closeout",
        ],
        image: {
          src: "/image/service-details/managed-technical-onsite-engineer.webp",
          alt: "IT engineer completing handover checks after a technology project implementation",
        },
      },
    ],
  }),
];
