import type {
  BlogPost,
  CaseStudy,
  EstimatorConfig,
  FAQItem,
  FooterColumn,
  MarketingPage,
  NavItem,
  SiteSettings,
  Testimonial,
} from "@/lib/types";

export { services, solutionCategories } from "@/data/solution-catalog";
export { industryProfiles } from "@/data/industry-catalog";
export { resourceGroups, resourceLinks } from "@/data/resource-catalog";

export const siteSettings: SiteSettings = {
  name: "Auxano Solutions Technology Limited",
  shortName: "Auxano Solutions",
  description:
    "End-to-end IT solutions designed, installed, and supported by experts across infrastructure, networking, hardware, software, and managed services.",
  phone: "+234 8062 218 546",
  email: "info@auxanosolutions.net",
  address:
    "26A Adeshina Street, Off Oluwole Phillips, Obafemi Awolowo Way, Ikeja",
  city: "Lagos",
  country: "Nigeria",
  whatsappSales: process.env.NEXT_PUBLIC_SALES_WHATSAPP ?? "+2348062218546",
  whatsappSupport: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "+2348062218546",
  hubspotMeetingUrl:
    process.env.HUBSPOT_MEETINGS_URL ??
    "https://meetings.hubspot.com/auxano-solutions",
};

export const navigation: NavItem[] = [
  { label: "Solutions", href: "/services", kind: "solutions" },
  { label: "Industries", href: "/industries", kind: "industries" },
  { label: "Blog", href: "/blog", kind: "link" },
  { label: "About", href: "/about", kind: "link" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "lagos-head-office-security-modernization",
    title: "Security modernization for a multi-floor Lagos head office",
    client: "Confidential Professional Services Firm",
    industry: "Professional Services",
    location: "Ikeja, Lagos",
    summary:
      "Auxano unified CCTV coverage, access control planning, and network improvements for a busy headquarters environment.",
    challenge:
      "The client needed stronger perimeter visibility, a clearer visitor movement picture, and more confidence in the network serving surveillance endpoints.",
    solution: [
      "Redesigned camera coverage for entrances, lift lobbies, and shared operational zones.",
      "Standardized network cabinet organization and cabling for cleaner surveillance performance.",
      "Prepared phased access-control recommendations and operator handover guidance.",
    ],
    result:
      "The site moved from fragmented monitoring to a cleaner, more accountable security posture with stronger operational visibility.",
    metrics: [
      { value: "38%", label: "Reduction in blind coverage areas" },
      { value: "3 floors", label: "Aligned under one rollout plan" },
      { value: "7 days", label: "Targeted stabilization window after go-live" },
    ],
    relatedServices: [
      "surveillance-system-cctv",
      "door-access-control",
      "network-cabling",
    ],
  },
  {
    slug: "private-clinic-network-refresh",
    title: "Network and continuity refresh for a private healthcare operator",
    client: "Confidential Healthcare Group",
    industry: "Healthcare",
    location: "Lagos, Nigeria",
    summary:
      "A healthcare operator needed stronger network reliability, better monitoring, and clearer business continuity support.",
    challenge:
      "Intermittent network issues were affecting device availability and raising concern around continuity for patient-facing operations.",
    solution: [
      "Mapped the current environment and rebuilt topology documentation.",
      "Introduced network monitoring and improved switching and wireless layout.",
      "Defined continuity priorities and support response expectations for critical workflows.",
    ],
    result:
      "The organization gained a more stable environment, better issue visibility, and a clearer recovery conversation with leadership.",
    metrics: [
      {
        value: "42%",
        label: "Fewer repeat connectivity incidents in the first quarter",
      },
      { value: "24/7", label: "Improved visibility for critical alerts" },
      {
        value: "1 playbook",
        label: "Continuity baseline delivered to leadership",
      },
    ],
    relatedServices: [
      "network-architecture-planning",
      "it-managed-services-staff-outsourcing",
      "it-consultancy-audit-services",
    ],
  },
  {
    slug: "warehouse-rollout-with-centralized-visibility",
    title:
      "Warehouse rollout with centralized visibility and support readiness",
    client: "Confidential Distribution Business",
    industry: "Distribution & Warehousing",
    location: "Ogun-Lagos corridor",
    summary:
      "Auxano helped a fast-moving operations team connect surveillance, networking, and support readiness into one deployment program.",
    challenge:
      "The client was expanding into a more operationally demanding site and needed coverage, connectivity, and support governance to land together.",
    solution: [
      "Designed CCTV deployment for entry, dispatch, and storage zones.",
      "Structured the network rollout for device density and monitoring visibility.",
      "Created a support model for post-launch issue handling and escalation.",
    ],
    result:
      "The warehouse opened with cleaner technical coordination, better operational assurance, and a more structured handover.",
    metrics: [
      { value: "60+", label: "Endpoints included in the rollout program" },
      { value: "1 launch", label: "Single coordinated deployment window" },
      { value: "100%", label: "Critical areas covered in the final design" },
    ],
    relatedServices: [
      "surveillance-system-cctv",
      "network-design-with-diagram",
      "it-managed-services-staff-outsourcing",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-growing-businesses-miss-when-planning-cctv",
    title: "What Growing Businesses Miss When Planning CCTV Deployments",
    category: "Physical Security",
    publishedAt: "2026-03-10",
    readingTime: "6 min read",
    author: "Auxano Solutions Team",
    coverImage: {
      src: "/image/service-details/cctv-camera-coverage.webp",
      alt: "CCTV camera installed for commercial security coverage",
    },
    excerpt:
      "Coverage quality depends on network design, operator workflow, retention planning, and post-installation discipline.",
    takeaways: [
      "Coverage without a monitoring workflow creates expensive blind spots.",
      "Storage and retention should be sized before hardware is purchased.",
      "Your network topology shapes CCTV performance more than most teams expect.",
    ],
    body: [
      {
        _type: "blogHeading",
        text: "Plan coverage before counting cameras",
        anchor: "plan-coverage-before-counting-cameras",
      },
      {
        _type: "blogParagraph",
        text: "Most CCTV projects fail long before installation day. The failure starts when teams think in terms of camera count instead of operational coverage. Entrances, corridors, dispatch lanes, and sensitive areas all require different logic. When that logic is skipped, the final system looks busy but performs poorly during real incidents.",
      },
      {
        _type: "blogHeading",
        text: "Retention and retrieval shape the real value",
        anchor: "retention-and-retrieval",
      },
      {
        _type: "blogParagraph",
        text: "The second blind spot is retention and retrieval. Businesses often buy hardware first, then discover later that the footage archive is too short, too fragmented, or too hard to review quickly. A surveillance system is only useful when operators can trust what was recorded and retrieve it fast.",
      },
      {
        _type: "blogImageBlock",
        image: {
          src: "/image/service-details/cctv-storage-retention.webp",
          alt: "Network video recorder and storage planning for CCTV retention",
        },
        caption:
          "Storage planning should happen before installation, not after footage is already needed.",
      },
      {
        _type: "blogHeading",
        text: "CCTV performance depends on the network",
        anchor: "cctv-performance-depends-on-network",
      },
      {
        _type: "blogParagraph",
        text: "The third issue is networking. Cameras do not exist outside the network environment. Poor switching, weak uplinks, or unplanned wireless reliance can turn a security project into an ongoing reliability problem. CCTV planning should sit alongside network planning, not after it.",
      },
    ],
  },
  {
    slug: "how-to-budget-managed-it-support-in-nigeria",
    title: "How to Budget Managed IT Support Without Underbuying Reliability",
    category: "Managed Services",
    publishedAt: "2026-03-18",
    readingTime: "7 min read",
    author: "Auxano Solutions Team",
    coverImage: {
      src: "/image/service-details/managed-technical-help-desk.webp",
      alt: "Managed IT support desk for business users",
    },
    excerpt:
      "Support budgets fail when leadership only prices tickets and ignores visibility, onboarding, continuity, and user enablement.",
    takeaways: [
      "The cheapest support model often moves cost into downtime and escalation.",
      "Endpoint visibility and onboarding discipline matter as much as ticket response time.",
      "Managed support should be budgeted against business interruption, not only headcount.",
    ],
    body: [
      {
        _type: "blogHeading",
        text: "Do not price support like a call center",
        anchor: "do-not-price-support-like-call-center",
      },
      {
        _type: "blogParagraph",
        text: "A common budgeting mistake is treating IT support like a reactive call center. That model ignores the work required to keep devices healthy, users onboarded properly, and risk visible to leadership. Support quality is not only about response speed. It is also about how much operational friction is prevented before users feel it.",
      },
      {
        _type: "blogHeading",
        text: "Look for visibility and ownership",
        anchor: "look-for-visibility-and-ownership",
      },
      {
        _type: "blogParagraph",
        text: "Good managed support includes device standards, endpoint visibility, escalation ownership, and repeatable reporting. Without those pieces, your support bill may look smaller on paper while the business absorbs hidden cost through interruptions, shadow fixes, and poor accountability.",
      },
      {
        _type: "blogHeading",
        text: "Budget against interruption risk",
        anchor: "budget-against-interruption-risk",
      },
      {
        _type: "blogParagraph",
        text: "When planning budget, leadership should ask a more useful question: what level of interruption can the business tolerate? That answer usually determines whether support should stay basic, move to business-critical coverage, or include a stronger continuity posture.",
      },
    ],
  },
  {
    slug: "network-monitoring-for-multi-site-operations",
    title: "Why Network Monitoring Matters More Once You Have Multiple Sites",
    category: "Networking",
    publishedAt: "2026-03-24",
    readingTime: "5 min read",
    author: "Auxano Solutions Team",
    coverImage: {
      src: "/image/service-details/managed-services-monitoring.webp",
      alt: "Network monitoring dashboard for multi-site operations",
    },
    excerpt:
      "Once a business spreads across floors or sites, undocumented network issues become operational problems, not just technical ones.",
    takeaways: [
      "Visibility collapses quickly when branch networks grow without a shared model.",
      "Monitoring improves issue response because teams stop troubleshooting from guesswork.",
      "Documentation and alert tuning matter as much as the monitoring dashboard itself.",
    ],
    body: [
      {
        _type: "blogHeading",
        text: "Multi-site networks need shared visibility",
        anchor: "multi-site-networks-need-shared-visibility",
      },
      {
        _type: "blogParagraph",
        text: "Small networks can survive on memory and habit for a while. Multi-site environments cannot. The moment an organization adds floors, branches, or high-dependency endpoints like CCTV and access systems, network problems become harder to isolate and slower to resolve.",
      },
      {
        _type: "blogHeading",
        text: "Monitoring turns symptoms into evidence",
        anchor: "monitoring-turns-symptoms-into-evidence",
      },
      {
        _type: "blogParagraph",
        text: "Monitoring adds value because it turns symptoms into evidence. Instead of hearing that the internet is slow somewhere, teams can see device status, latency patterns, and repeated failure points. That changes both technical response and leadership confidence.",
      },
      {
        _type: "blogHeading",
        text: "Documentation keeps alerts useful",
        anchor: "documentation-keeps-alerts-useful",
      },
      {
        _type: "blogParagraph",
        text: "However, monitoring is not only a tool purchase. It works best when paired with network documentation, clear escalation paths, and realistic thresholds. Otherwise, the dashboard fills up while the team still struggles to act.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Auxano approached the environment like an operator, not just an installer. That changed the quality of the final result.",
    name: "Operations Lead",
    role: "Facilities and Operations",
    company: "Lagos Head Office Deployment",
  },
  {
    quote:
      "The difference was the clarity. We could see what was being fixed, why it mattered, and what would happen next.",
    name: "Admin Manager",
    role: "Administration",
    company: "Healthcare Network Refresh",
  },
  {
    quote:
      "Support readiness was part of the rollout, not an afterthought. That helped the site settle faster after launch.",
    name: "Site Director",
    role: "Operations",
    company: "Warehouse Expansion Program",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of businesses does Auxano work with?",
    answer:
      "Auxano works with businesses of all sizes — from small offices and startups to large enterprises, schools, healthcare providers, financial institutions, retail outlets, and industrial facilities. Whether you operate from one location or across multiple sites, we design and deliver IT solutions that fit your operational needs and business goals.",
  },
  {
    id: "faq-2",
    question:
      "Do you only sell IT equipment, or do you also handle installation?",
    answer:
      "We do both. Auxano supplies genuine IT hardware and software through authorised distributors, and our certified engineers handle the full installation, configuration, testing, and deployment process. That means you get a complete solution from one trusted partner instead of managing multiple vendors.",
  },
  {
    id: "faq-3",
    question:
      "Can you assess our current IT infrastructure before recommending upgrades?",
    answer:
      "Yes. Our IT assessment services are designed to evaluate your existing infrastructure, identify inefficiencies, security risks, performance gaps, and outdated systems. From there, we provide practical recommendations aligned with your business objectives and budget.",
  },
  {
    id: "faq-4",
    question: "Do you offer managed IT support after project delivery?",
    answer:
      "Absolutely. Our relationship doesn’t end after deployment. We provide ongoing managed IT support, including system monitoring, maintenance, troubleshooting, performance optimization, upgrades, and technical support to ensure your infrastructure continues to perform efficiently.",
  },
  {
    id: "faq-5",
    question:
      "Can Auxano help improve our network performance and reliability?",
    answer:
      "Yes. We design, install, configure, and monitor business networks to improve speed, security, and stability. This includes structured cabling, wireless networks, routing, switching, firewall setup, and network monitoring to reduce downtime and improve operational efficiency.",
  },
  {
    id: "faq-6",
    question: "Do you provide cybersecurity solutions?",
    answer:
      "Yes. Auxano offers cybersecurity solutions including firewall deployment, antivirus licensing, access control systems, governance, risk and compliance services, incident response planning, and security audits to strengthen your business against internal and external threats.",
  },
  {
    id: "faq-7",
    question: "How do you handle disaster recovery and business continuity?",
    answer:
      "We create customized backup and disaster recovery plans based on your business operations and risk exposure. Instead of relying on generic backup practices, we identify critical failure points and build recovery strategies that help restore systems quickly during disruptions.",
  },
  {
    id: "faq-8",
    question: "Do you provide IT audit and compliance services?",
    answer:
      "Yes. Our IT audit services evaluate your infrastructure controls, data security, system availability, access management, and disaster recovery readiness. We also help businesses align with industry best practices and regulatory requirements through governance, risk, and compliance services.",
  },
  {
    id: "faq-9",
    question: "Can you support our internal IT team?",
    answer:
      "Yes. Auxano can work alongside your internal IT team to fill skill gaps, support infrastructure upgrades, monitor systems, improve performance, and provide strategic technical support whenever needed. Think of us as an extension of your IT department.",
  },
  {
    id: "faq-10",
    question: "How quickly can you start a project?",
    answer:
      "Project timelines depend on the scope and complexity, but once requirements are confirmed, our team can begin planning and execution quickly. We prioritize proper planning, clear timelines, and efficient delivery to ensure projects are completed right the first time.",
  },
  {
    id: "faq-11",
    question: "Do you serve businesses outside Lagos?",
    answer:
      "Yes. While Auxano is based in Ikeja, Lagos, we provide IT solutions and support for businesses across Nigeria, depending on project requirements and operational scope.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Infrastructure", href: "/services#infrastructure" },
      { label: "Networking", href: "/services#networking" },
      { label: "Hardware Systems", href: "/services#hardware-systems" },
      { label: "Software & Licenses", href: "/services#software-licenses" },
      { label: "Managed & Advisory", href: "/services#managed-advisory" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book Consultation", href: "/book-consultation" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const marketingPages: MarketingPage[] = [
  {
    slug: "home",
    title:
      "Infrastructure, Networking, and Managed IT Solutions for Critical Teams",
    description:
      "Auxano Solutions helps businesses design, deploy, and support infrastructure, networking, hardware, software, and managed operations with enterprise-grade clarity.",
    sections: [
      {
        _type: "hero",
        eyebrow: "Enterprise IT And Infrastructure",
        title: "One command view for IT, CCTV, and network infrastructure.",
        description:
          "Design, deployment, and support for business-critical environments.",
        mode: "videoCarousel",
        tags: [
          "Infrastructure",
          "Networking",
          "Hardware Systems",
          "Software & Licenses",
        ],
        metrics: [
          { value: "15+", label: "Years in Business" },
          { value: "500+", label: "Projects delivered" },
          { value: "200+", label: "Clients served" },
          { value: "24/7", label: "Support available" },
        ],
        primaryCta: {
          label: "Book Consultation",
          href: "/book-consultation",
          variant: "primary",
        },
        secondaryCta: {
          label: "Book Consultation",
          href: "/book-consultation",
          variant: "secondary",
        },
        slides: [
          {
            id: "hero-slide-1",
            videoPublicId: "placeholder",
            videoUrl: "",
            headline:
              "One command view for IT, CCTV, and network infrastructure.",
            description:
              "Auxano connects IT, CCTV, networking, and support into one easier operating view.",
            primaryCta: {
              label: "Book Consultation",
              href: "/book-consultation",
              variant: "primary",
            },
          },
          {
            id: "hero-slide-2",
            videoPublicId: "placeholder",
            videoUrl: "",
            headline: "Physical security installed with network discipline.",
            description:
              "CCTV, access, cabling, storage, and handover are planned together for reliable coverage from day one.",
            primaryCta: {
              label: "Explore Security Solutions",
              href: "/services/door-access-control",
              variant: "primary",
            },
          },
          {
            id: "hero-slide-3",
            videoPublicId: "placeholder",
            videoUrl: "",
            headline:
              "Networks built for the devices and teams that rely on them.",
            description:
              "Structured cabling, switching, wireless, firewalls, and documentation built for easier daily management.",
            primaryCta: {
              label: "Explore Network Infrastructure",
              href: "/services#networking",
              variant: "primary",
            },
          },
          {
            id: "hero-slide-4",
            videoPublicId: "placeholder",
            videoUrl: "",
            headline: "Managed IT support with clearer ownership.",
            description:
              "Users, devices, monitoring, and escalation stay under one support model leadership can track.",
            primaryCta: {
              label: "Explore Managed IT",
              href: "/services/it-managed-services-staff-outsourcing",
              variant: "primary",
            },
          },
        ],
      },
      {
        _type: "serviceShowcase",
        eyebrow: "Our Services",
        title: "Everything your business needs under one roof.",
        description:
          "Explore the core service areas Auxano delivers for modern business environments.",
        items: [
          {
            id: "it-infrastructure",
            title: "IT Infrastructure",
            description:
              "Reliable IT infrastructure built for performance, scalability, and long-term business growth.",
            imageSrc: "/image/IT%20Infrastructure.png",
            imageAlt: "IT Infrastructure service card placeholder",
            ctaLabel: "Learn more",
            ctaHref: "/services#infrastructure",
          },
          {
            id: "fire-alarm-safety",
            title: "Fire Alarm & Safety",
            description:
              "Fire alarm systems designed, installed, commissioned, tested, and maintained for safer facilities.",
            imageSrc: "/image/service-details/fire-alarm-safety-systems.jpg",
            imageAlt: "Fire alarm and safety system devices in a commercial facility",
            ctaLabel: "Learn more",
            ctaHref: "/services/fire-alarm-safety-systems",
          },
          {
            id: "networking",
            title: "Networking",
            description:
              "Fast, secure networks that keep your business connected and operating without interruption.",
            imageSrc: "/image/networking.png",
            imageAlt: "Networking service card placeholder",
            ctaLabel: "Learn more",
            ctaHref: "/services#networking",
          },
          {
            id: "computers-and-servers",
            title: "Computers & Servers",
            description:
              "Business-grade computers and servers for speed, reliability, and storage.",
            imageSrc: "/image/computer_and_server.png",
            imageAlt: "Computers and servers service card placeholder",
            ctaLabel: "Learn more",
            ctaHref: "/services#hardware-systems",
          },
          {
            id: "software-and-licenses",
            title: "Software & Licenses",
            description:
              "Licensed software that keeps your business secure, compliant, and productive.",
            imageSrc: "/image/software_and_licenses.jpg",
            imageAlt: "Software and licenses service card placeholder",
            ctaLabel: "Learn more",
            ctaHref: "/services#software-licenses",
          },
          {
            id: "it-management",
            title: "IT Management",
            description:
              "End-to-end IT support to keep your systems stable, secure, and optimized daily.",
            imageSrc: "/image/It_management.jpg",
            imageAlt: "IT Management service card placeholder",
            ctaLabel: "Learn more",
            ctaHref: "/services/it-managed-services-staff-outsourcing",
          },
        ],
      },
      {
        _type: "networkMapSection",
        eyebrow: "",
        title: "Ready to get it right the first time?",
        description:
          "Auxano Solutions Technology Limited delivers specialized and cost-effective ICT services that empower businesses to streamline operations, secure assets, and scale efficiently.",
        imageSrc: "/image/left.png",
        imageAlt: "Auxano left-side section visual",
        bullets: [],
        nodes: [
          {
            label: "Core Network",
            detail: "Switching, design, and monitoring",
            x: 50,
            y: 18,
          },
          {
            label: "CCTV",
            detail: "Coverage, storage, retrieval",
            x: 80,
            y: 40,
          },
          {
            label: "Access",
            detail: "Entry, permissions, audit",
            x: 72,
            y: 72,
          },
          {
            label: "Support",
            detail: "Users, devices, continuity",
            x: 28,
            y: 72,
          },
          {
            label: "Hardware",
            detail: "Servers, printers, endpoints",
            x: 18,
            y: 40,
          },
        ],
      },
      {
        _type: "trustBanner",
        title: "More than 500 organizations trust Auxano Solutions",
        description: "From growing businesses to multi-site operations",
        cta: {
          label: "Explore our services",
          href: "/services",
          variant: "primary",
        },
      },
      {
        _type: "categoryShowcase",
        eyebrow: "",
        title: "Why organizations choose Auxano Solutions",
        description: "",
        videoPublicId: "placeholder",
        videoUrl: "",
        items: [
          {
            id: "installed-right",
            label: "Installed Right",
            title:
              "Surveyed, installed, commissioned, and handed over properly the first time.",
            description:
              "Auxano starts with the real site conditions, plans the installation path, commissions every component properly, and hands the environment over in a state the client can operate with confidence.",
            bullets: [
              "Site survey and installation planning happen before equipment is mounted",
              "Commissioning, testing, and documentation stay inside the delivery scope",
              "Operators receive a cleaner handover with less ambiguity after go-live",
            ],
            ctaLabel: "Explore Infrastructure Services",
            ctaHref: "/services#infrastructure",
          },
          {
            id: "connected-end-to-end",
            label: "Connected End-to-End",
            title:
              "Cabling, network design, configuration, and documentation built as one connected system.",
            description:
              "Physical runs, network logic, live configuration, and final documentation are delivered together so the environment works as one system instead of a string of disconnected vendor handoffs.",
            bullets: [
              "Structured cabling and active network setup stay under one operating view",
              "IP planning, routing, switching, Wi-Fi, and tuning are shaped around the real site",
              "Diagrams and labelled handover make future troubleshooting faster",
            ],
            ctaLabel: "Explore Networking Services",
            ctaHref: "/services#networking",
          },
          {
            id: "original-equipment",
            label: "Original Equipment",
            title:
              "Genuine hardware supplied, deployed, and ready for day-one use.",
            description:
              "Auxano supplies genuine devices and prepares them for the live environment so teams receive hardware that is ready to use and easier to support after deployment.",
            bullets: [
              "Authorised supply reduces warranty and authenticity risk",
              "Endpoints, servers, storage, and peripherals are prepared for day-one operations",
              "Deployment standards make growth, repair, and replacement more predictable",
            ],
            ctaLabel: "Explore Hardware Systems",
            ctaHref: "/services#hardware-systems",
          },
          {
            id: "licensed-configured",
            label: "Licensed & Configured",
            title:
              "Security tools, operating systems, cloud apps, and business software set up properly for live environments.",
            description:
              "Auxano does not stop at procurement. Licensing, activation, security configuration, and business-app setup are completed against the live brief so the software layer is usable after handover.",
            bullets: [
              "Firewall, endpoint, OS, cloud, and app setup are completed for the real environment",
              "Licensing, activation, and compliance records stay clearer from the start",
              "The software layer is left usable, supportable, and ready for handover",
            ],
            ctaLabel: "Explore Software Services",
            ctaHref: "/services#software-licenses",
          },
          {
            id: "support-that-stays",
            label: "Support That Stays",
            title:
              "Managed support, audits, and project follow-through that continue after installation.",
            description:
              "After installation, Auxano can continue with support, audits, advisory work, and structured project follow-through so the environment does not lose discipline once the rollout ends.",
            bullets: [
              "After-sales support stays tied to the way the environment was delivered",
              "Audits and advisory work expose gaps before they grow into bigger operational issues",
              "Project ownership can continue beyond handover when more phases are needed",
            ],
            ctaLabel: "Explore Managed Services",
            ctaHref: "/services#managed-advisory",
          },
        ],
      },
      {
        _type: "interactiveServices",
        eyebrow: "Service Ecosystem",
        title: "Full-Service IT Solutions Built Right. Every Time.",
        description:
          "Select any point in the scene to explore how infrastructure, networking, hardware, software, and managed support connect in a live business setup.",
        imageSrc: "/image/servces.png",
        imageAlt:
          "Interactive Auxano services environment showing integrated infrastructure, networking, hardware, software, and managed support touchpoints.",
        promptLabel: "Explore the stack",
        items: [
          {
            id: "software-hotspot",
            label: "Software & Licenses",
            title: "Licensed and configured software for the real environment.",
            description:
              "Auxano handles licensing, activation, security configuration, and cloud or business application setup so the software layer is compliant, usable, and supportable after deployment instead of becoming a separate cleanup project.",
            ctaLabel: "Explore Software",
            ctaHref: "/services#software-licenses",
            x: 24.1,
            y: 14.0,
            size: 66,
            glowFrom: "rgba(191,219,254,0.30)",
            glowTo: "rgba(59,130,246,0.10)",
            panelPlacement: "bottom",
            targetSize: 127,
            targetOffsetY: 72,
          },
          {
            id: "security-hotspot",
            label: "Physical Security & Access",
            title:
              "Security and access systems deployed as one controlled layer.",
            description:
              "Auxano delivers CCTV, access control, structured cabling, automation, and site readiness as one coordinated infrastructure layer so environments open with cleaner coverage, safer entry, and fewer technical gaps.",
            ctaLabel: "Explore Infrastructure",
            ctaHref: "/services#infrastructure",
            x: 50,
            y: 8,
            size: 66,
            glowFrom: "rgba(34,211,238,0.38)",
            glowTo: "rgba(59,130,246,0.12)",
            panelPlacement: "bottom",
            targetSize: 127,
            targetOffsetY: 72,
          },
          {
            id: "infrastructure-hotspot",
            label: "Infrastructure",
            title:
              "Infrastructure planned, installed, and handed over properly.",
            description:
              "Structured cabling, site readiness, data-centre support, and operational installation standards are coordinated together so the physical environment stays stable, supportable, and ready for growth.",
            ctaLabel: "Explore Infrastructure",
            ctaHref: "/services#infrastructure",
            x: 76,
            y: 14.5,
            size: 10,
            glowFrom: "rgba(125,211,252,0.34)",
            glowTo: "rgba(96,165,250,0.14)",
            panelPlacement: "bottom",
            targetSize: 127,
            targetOffsetY: 72,
          },
          {
            id: "it-management-hotspot",
            label: "IT Management",
            title:
              "Managed IT support with clearer ownership and follow-through.",
            description:
              "Auxano supports users, devices, escalations, and continuity with a structured operating model that keeps the environment from slipping after rollout or daily support pressure increases.",
            ctaLabel: "Explore Managed Services",
            ctaHref: "/services#managed-advisory",
            x: 13.8,
            y: 41.8,
            size: 66,
            glowFrom: "rgba(165,243,252,0.34)",
            glowTo: "rgba(147,197,253,0.12)",
            panelPlacement: "right",
            targetSize: 128,
            targetOffsetY: 72,
          },
          {
            id: "networking-hotspot",
            label: "Networking",
            title: "Networks designed, configured, and documented properly.",
            description:
              "From survey-led topology planning to active configuration and final diagrams, Auxano builds networks that support CCTV, users, cloud apps, and business communications without leaving the client to coordinate separate vendors.",
            ctaLabel: "Explore Networking",
            ctaHref: "/services#networking",
            x: 14.8,
            y: 68.9,
            size: 66,
            glowFrom: "rgba(125,211,252,0.34)",
            glowTo: "rgba(96,165,250,0.14)",
            panelPlacement: "right",
            targetSize: 127,
            targetOffsetY: 72,
          },
          {
            id: "hardware-support-hotspot",
            label: "Hardware & Support",
            title: "Hardware delivery tied to support readiness from day one.",
            description:
              "Original endpoints, peripherals, support setup, and deployment preparation are handled together so the business receives devices that are easier to operate, maintain, and replace without friction.",
            ctaLabel: "Explore Hardware",
            ctaHref: "/services#hardware-systems",
            x: 83.9,
            y: 41.9,
            size: 66,
            glowFrom: "rgba(165,243,252,0.34)",
            glowTo: "rgba(147,197,253,0.12)",
            panelPlacement: "left",
            targetSize: 125,
            targetOffsetY: 72,
          },
          {
            id: "hardware-hotspot",
            label: "Computers & Servers",
            title: "Original hardware supplied and prepared for immediate use.",
            description:
              "Computers, servers, storage, printers, and supporting endpoints are sourced, deployed, and configured against the environment they will serve, making replacement, support, and future growth more predictable.",
            ctaLabel: "Explore Hardware",
            ctaHref: "/services#hardware-systems",
            x: 83.5,
            y: 69.3,
            size: 66,
            glowFrom: "rgba(103,232,249,0.32)",
            glowTo: "rgba(96,165,250,0.12)",
            panelPlacement: "left",
            targetSize: 128,
            targetOffsetY: 72,
          },
          {
            id: "data-centre-hotspot",
            label: "Data Centre",
            title: "Data-centre readiness built into the wider environment.",
            description:
              "Server-room power, racks, cooling, monitoring, and supporting infrastructure are planned as part of the broader deployment, not left as an isolated technical afterthought.",
            ctaLabel: "Explore Data Centre Services",
            ctaHref: "/services#infrastructure",
            x: 50,
            y: 90,
            size: 54,
            glowFrom: "rgba(56,189,248,0.30)",
            glowTo: "rgba(59,130,246,0.10)",
            panelPlacement: "bottom",
            targetSize: 122,
            targetOffsetY: 72,
          },
        ],
      },
      {
        _type: "ctaBand",
        eyebrow: "Lead magnet",
        title: "Let’s design the right IT solution for your business.",
        description:
          "Partner with Auxano to deploy reliable infrastructure, strengthen security, and create technology systems built for long-term growth.",
        primaryCta: {
          label: "Book Consultation",
          href: "/book-consultation",
          variant: "primary",
        },
        secondaryCta: {
          label: "Book Consultation",
          href: "/book-consultation",
          variant: "secondary",
        },
        dark: true,
      },
      {
        _type: "faqBlock",
        eyebrow: "FAQs",
        title: "Everything you need to know before getting started",
        description:
          "Find answers to common questions about our IT solutions, implementation process, support structure, and how we help businesses build secure, scalable technology systems.",
        ids: [
          "faq-1",
          "faq-2",
          "faq-3",
          "faq-4",
          "faq-5",
          "faq-6",
          "faq-7",
          "faq-8",
          "faq-9",
          "faq-10",
          "faq-11",
        ],
      },
    ],
  },
  {
    slug: "about",
    title: "About Auxano Solutions",
    description:
      "Auxano combines infrastructure delivery, networking, hardware systems, software licensing, and managed advisory support for organizations that need serious operational execution.",
    sections: [
      {
        _type: "richContent",
        eyebrow: "About Auxano",
        title:
          "A technical delivery partner for organizations that need more than generic IT support.",
        content: [
          "Auxano Solutions Technology Limited works across infrastructure, networking, hardware systems, software licensing, and managed advisory support. The company is built around doing technical work properly from the beginning rather than treating quality as a later correction step.",
          "That operating view matters because surveillance depends on the network, devices depend on clean setup, licensing depends on compliance discipline, and support quality shapes what happens after deployment.",
          "The new website positions Auxano like a serious technical partner: clear, structured, and commercially credible.",
        ],
      },
    ],
  },
];

export const estimatorConfig: EstimatorConfig = {
  companySizes: [
    {
      id: "small",
      label: "10-25 staff",
      multiplierLow: 1,
      multiplierHigh: 1.1,
    },
    {
      id: "mid",
      label: "26-75 staff",
      multiplierLow: 1.2,
      multiplierHigh: 1.35,
    },
    {
      id: "large",
      label: "76-150 staff",
      multiplierLow: 1.45,
      multiplierHigh: 1.65,
    },
    {
      id: "enterprise",
      label: "150+ staff",
      multiplierLow: 1.7,
      multiplierHigh: 2,
    },
  ],
  locationBands: [
    {
      id: "single-site",
      label: "Single site",
      multiplierLow: 1,
      multiplierHigh: 1.05,
    },
    {
      id: "two-to-four",
      label: "2-4 locations",
      multiplierLow: 1.18,
      multiplierHigh: 1.3,
    },
    {
      id: "multi-site",
      label: "5+ locations",
      multiplierLow: 1.38,
      multiplierHigh: 1.55,
    },
  ],
  supportTiers: [
    {
      id: "standard",
      label: "Standard support coverage",
      multiplierLow: 1,
      multiplierHigh: 1.08,
    },
    {
      id: "business-critical",
      label: "Business-critical coverage",
      multiplierLow: 1.18,
      multiplierHigh: 1.28,
    },
    {
      id: "24-7",
      label: "24/7 support expectation",
      multiplierLow: 1.35,
      multiplierHigh: 1.5,
    },
  ],
  cameraBands: [
    { id: "none", label: "No camera scope", low: 0, high: 0 },
    { id: "1-8", label: "1-8 cameras", low: 900000, high: 1600000 },
    { id: "9-24", label: "9-24 cameras", low: 1800000, high: 3600000 },
    { id: "25-60", label: "25-60 cameras", low: 3800000, high: 7200000 },
    { id: "60-plus", label: "60+ cameras", low: 7600000, high: 12800000 },
  ],
  networkScopes: [
    { id: "light", label: "Office refresh", low: 750000, high: 1500000 },
    {
      id: "medium",
      label: "Multi-floor or dense endpoint rollout",
      low: 1800000,
      high: 3600000,
    },
    {
      id: "heavy",
      label: "Multi-site or complex infrastructure scope",
      low: 4200000,
      high: 7800000,
    },
  ],
  complianceLevels: [
    { id: "none", label: "No compliance uplift", low: 0, high: 0 },
    { id: "basic", label: "Basic audit review", low: 650000, high: 1200000 },
    {
      id: "regulated",
      label: "Regulated or board-level review",
      low: 1450000,
      high: 2800000,
    },
  ],
  services: [
    {
      id: "managed-it",
      label: "Managed IT Support",
      baseLow: 1500000,
      baseHigh: 3200000,
      description:
        "Support model, endpoint visibility, onboarding, reporting, and response structure.",
    },
    {
      id: "cctv",
      label: "CCTV & Surveillance",
      baseLow: 1800000,
      baseHigh: 3400000,
      description:
        "Coverage planning, deployment, recording, and control-room readiness.",
    },
    {
      id: "network",
      label: "Network Infrastructure",
      baseLow: 1600000,
      baseHigh: 3000000,
      description:
        "Structured network rollout, switching, wireless, and monitoring setup.",
    },
    {
      id: "audit",
      label: "IT Audit & Compliance",
      baseLow: 900000,
      baseHigh: 1850000,
      description:
        "Controls review, gap assessment, reporting, and remediation planning.",
    },
    {
      id: "access-control",
      label: "Access Control",
      baseLow: 1250000,
      baseHigh: 2600000,
      description:
        "Entry management design, hardware planning, and access policy structure.",
    },
    {
      id: "disaster-recovery",
      label: "Business Continuity & DR",
      baseLow: 850000,
      baseHigh: 1750000,
      description:
        "Critical dependency mapping, recovery planning, and resilience recommendations.",
    },
  ],
  contingencyLow: 1.04,
  contingencyHigh: 1.12,
};
