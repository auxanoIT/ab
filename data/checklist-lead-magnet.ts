export type ChecklistCategoryId =
  | "network-health"
  | "internet-reliability"
  | "server-health"
  | "cybersecurity"
  | "data-backup"
  | "fire-alarm-systems"
  | "cctv-access-control"
  | "power-ups"
  | "software-licensing"
  | "disaster-recovery";

export type ChecklistQuestion = {
  id: string;
  text: string;
};

export type ChecklistCategory = {
  id: ChecklistCategoryId;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  questions: ChecklistQuestion[];
};

export const checklistCategories: ChecklistCategory[] = [
  {
    id: "network-health",
    number: "01",
    title: "Network Health",
    shortTitle: "Network",
    summary:
      "Switching, routing, segmentation, monitoring, and bandwidth discipline.",
    questions: [
      {
        id: "network-enterprise-support",
        text: "Network switches and routers are business-grade, documented, and still under active support.",
      },
      {
        id: "network-segmentation",
        text: "LAN/WAN access is segmented so critical systems are separated from general user traffic.",
      },
      {
        id: "network-monitoring",
        text: "Network performance is monitored with alerts for outages, congestion, and abnormal activity.",
      },
      {
        id: "network-ipam",
        text: "IP addressing, VLANs, device names, and network diagrams are documented and kept current.",
      },
      {
        id: "network-bandwidth",
        text: "Network bandwidth and internal performance are tested regularly against business demand.",
      },
    ],
  },
  {
    id: "internet-reliability",
    number: "02",
    title: "Internet Reliability",
    shortTitle: "Internet",
    summary:
      "ISP redundancy, failover, uptime tracking, traffic priority, and safe use.",
    questions: [
      {
        id: "internet-redundancy",
        text: "The business has at least two internet links from separate providers or service paths.",
      },
      {
        id: "internet-failover",
        text: "Automatic failover is configured so operations continue when the primary link fails.",
      },
      {
        id: "internet-uptime",
        text: "Internet uptime is tracked, reviewed, and measured against a monthly availability target.",
      },
      {
        id: "internet-qos",
        text: "Business-critical apps such as cloud tools, VoIP, CCTV, and ERP traffic are prioritized.",
      },
      {
        id: "internet-filtering",
        text: "Internet usage is monitored and filtered to reduce unsafe access and unauthorized use.",
      },
    ],
  },
  {
    id: "server-health",
    number: "03",
    title: "Server Health",
    shortTitle: "Servers",
    summary:
      "Operating systems, utilization, physical protection, warranties, and recovery snapshots.",
    questions: [
      {
        id: "server-supported-os",
        text: "Servers run supported operating systems with current security patches applied.",
      },
      {
        id: "server-utilization",
        text: "Server CPU, memory, storage, and services are monitored within safe thresholds.",
      },
      {
        id: "server-room-control",
        text: "Physical servers are kept in secured, cooled, and access-controlled spaces.",
      },
      {
        id: "server-warranty",
        text: "Server hardware is under active warranty, support, or a maintenance plan.",
      },
      {
        id: "server-snapshots",
        text: "VM snapshots or equivalent recovery points are created and managed for rapid recovery.",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    summary:
      "Endpoint protection, staff training, MFA, policies, and vulnerability testing.",
    questions: [
      {
        id: "security-endpoint-protection",
        text: "All endpoints have active antivirus, EDR, or endpoint security protection.",
      },
      {
        id: "security-awareness",
        text: "Staff have received cybersecurity awareness training within the last 12 months.",
      },
      {
        id: "security-mfa",
        text: "Multi-factor authentication is enforced for email, admin, finance, cloud, and critical systems.",
      },
      {
        id: "security-policy",
        text: "A written cybersecurity policy exists and has been communicated to employees.",
      },
      {
        id: "security-testing",
        text: "Vulnerability scanning, penetration testing, or a security review has been completed within the last year.",
      },
    ],
  },
  {
    id: "data-backup",
    number: "05",
    title: "Data Backup",
    shortTitle: "Backups",
    summary:
      "Daily backup coverage, restore testing, RTO, encryption, and job reviews.",
    questions: [
      {
        id: "backup-321",
        text: "Business data is backed up daily using a 3-2-1 approach: 3 copies, 2 media, 1 offsite.",
      },
      {
        id: "backup-restore-testing",
        text: "Backup restoration is tested at least quarterly, not only assumed to be working.",
      },
      {
        id: "backup-rto",
        text: "Recovery Time Objective is documented and achievable for critical systems.",
      },
      {
        id: "backup-encryption",
        text: "Cloud or offsite backups are encrypted and stored in a secure location.",
      },
      {
        id: "backup-log-review",
        text: "Backup completion logs are reviewed weekly and failed jobs are resolved quickly.",
      },
    ],
  },
  {
    id: "fire-alarm-systems",
    number: "06",
    title: "Fire Alarm Systems",
    shortTitle: "Fire Alarm",
    summary:
      "Installation, testing, maintenance, evacuation awareness, and monitoring.",
    questions: [
      {
        id: "fire-installed-commissioned",
        text: "The fire alarm system is installed, commissioned, and aligned with applicable Nigerian building safety expectations.",
      },
      {
        id: "fire-detector-testing",
        text: "Smoke detectors, heat detectors, call points, and sounders are physically tested at scheduled intervals.",
      },
      {
        id: "fire-maintenance",
        text: "The fire alarm panel and connected devices are covered by a maintenance plan with a qualified provider.",
      },
      {
        id: "fire-evacuation-awareness",
        text: "Staff know alarm zones, evacuation routes, assembly points, and escalation procedures.",
      },
      {
        id: "fire-monitoring",
        text: "Fire alarm signals are monitored by a security desk, facility team, or external response point.",
      },
    ],
  },
  {
    id: "cctv-access-control",
    number: "07",
    title: "CCTV & Access Control",
    shortTitle: "CCTV & Access",
    summary:
      "Coverage, retention, restricted areas, access logs, and device uptime.",
    questions: [
      {
        id: "security-camera-coverage",
        text: "CCTV covers entry points, exits, reception, critical assets, and sensitive areas without major blind spots.",
      },
      {
        id: "security-footage-retention",
        text: "CCTV footage is retained for a defined period, retrieved easily, and stored securely.",
      },
      {
        id: "security-access-control",
        text: "Sensitive areas use controlled entry such as electronic locks, cards, PINs, biometrics, or managed keys.",
      },
      {
        id: "security-access-logs",
        text: "Access logs are reviewed and former staff credentials are revoked immediately.",
      },
      {
        id: "security-camera-uptime",
        text: "Offline cameras, degraded views, faulty readers, and failed locks are detected and fixed quickly.",
      },
    ],
  },
  {
    id: "power-ups",
    number: "08",
    title: "Power & UPS",
    shortTitle: "Power",
    summary:
      "UPS coverage, battery testing, generator sizing, transfer control, and surge protection.",
    questions: [
      {
        id: "power-ups-critical-systems",
        text: "UPS units protect servers, network equipment, security systems, and critical workstations.",
      },
      {
        id: "power-battery-testing",
        text: "UPS batteries are tested and replaced on a documented schedule.",
      },
      {
        id: "power-generator-capacity",
        text: "Generator capacity can support critical technology systems during grid outages.",
      },
      {
        id: "power-ats",
        text: "Automatic or documented transfer procedures exist for switchover between mains, inverter, and generator.",
      },
      {
        id: "power-surge-protection",
        text: "Surge protection is installed for servers, network equipment, CCTV, fire alarm panels, and key devices.",
      },
    ],
  },
  {
    id: "software-licensing",
    number: "09",
    title: "Software Licensing",
    shortTitle: "Licensing",
    summary:
      "License compliance, renewals, unauthorized software, user counts, and security subscriptions.",
    questions: [
      {
        id: "software-audit-ready",
        text: "Software used across the business is properly licensed and audit-ready.",
      },
      {
        id: "software-renewal-register",
        text: "License renewals are tracked in a central register with expiry alerts.",
      },
      {
        id: "software-unauthorized-blocking",
        text: "Unauthorized or unlicensed software is blocked, removed, or formally approved before use.",
      },
      {
        id: "software-user-counts",
        text: "Microsoft 365, Google Workspace, and similar licenses match active users and real business roles.",
      },
      {
        id: "software-security-active",
        text: "Antivirus, firewall, endpoint, and security subscriptions are active and not expired.",
      },
    ],
  },
  {
    id: "disaster-recovery",
    number: "10",
    title: "Disaster Recovery",
    shortTitle: "Recovery",
    summary:
      "Continuity planning, drills, RPO/RTO, recovery environments, and role clarity.",
    questions: [
      {
        id: "dr-bcp",
        text: "A documented Business Continuity Plan exists and has been reviewed in 2026.",
      },
      {
        id: "dr-drills",
        text: "Disaster recovery drills are conducted and documented at least once per year.",
      },
      {
        id: "dr-rpo-rto",
        text: "RPO and RTO are defined, approved, and understood by management for critical systems.",
      },
      {
        id: "dr-recovery-environment",
        text: "An offsite, cloud-based, or alternate recovery environment is maintained and tested.",
      },
      {
        id: "dr-role-clarity",
        text: "Key staff know their responsibilities during outage, breach, fire, facility disruption, or disaster events.",
      },
    ],
  },
];

export const checklistTotalChecks = checklistCategories.reduce(
  (total, category) => total + category.questions.length,
  0,
);

export const checklistMaxScore = checklistTotalChecks;
