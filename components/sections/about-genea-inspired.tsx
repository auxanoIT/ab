"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ClipboardCheck,
  DatabaseBackup,
  Handshake,
  KeyRound,
  LifeBuoy,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Phone,
  Server,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { PartnerLogoMarquee } from "@/components/sections/partner-logo-marquee";
import { Container } from "@/components/ui/container";
import {
  StatMetricIcon,
  type StatMetricIconKind,
} from "@/components/ui/stat-metric-icon";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const metrics = [
  { value: "2012", label: "Founded", icon: "clipboard" },
  { value: "15+", label: "Years ICT delivery", icon: "award" },
  { value: "35%", label: "Client cost savings", icon: "savings" },
  { value: "24/7", label: "Dedicated support", icon: "headset" },
] satisfies Array<{
  value: string;
  label: string;
  icon: StatMetricIconKind;
}>;

const values = [
  {
    icon: UserCheck,
    title: "Customer-centric",
    description:
      "Every solution is shaped around the client environment, budget, operating pressure, and long-term support need.",
  },
  {
    icon: TrendingUp,
    title: "Results-driven",
    description:
      "We focus on measurable outcomes: lower operating cost, better uptime, clearer controls, and simpler vendor management.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      "Auxano blends proven infrastructure with modern IP-based, cloud, security, and hybrid technology where it makes business sense.",
  },
  {
    icon: Handshake,
    title: "Trusted teamwork",
    description:
      "Our engineers, project leads, and client teams work with open communication from discovery through handover and support.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent",
    description:
      "Scope, risk, documentation, commercial decisions, and post-deployment ownership stay visible throughout the engagement.",
  },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Surveillance & Access Control",
    description:
      "Design, installation, remediation, door access, and operator-ready security environments.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Structured LAN cabling, wireless, switching, routing, IP telephony, and documentation.",
  },
  {
    icon: LifeBuoy,
    title: "Managed IT Support",
    description:
      "Helpdesk, vendor management, staff augmentation, monitoring, and strategic planning.",
  },
  {
    icon: Server,
    title: "Data Centre & Servers",
    description:
      "Server build-out, virtualization, HVAC readiness, storage, and resource migration.",
  },
  {
    icon: KeyRound,
    title: "Cybersecurity",
    description:
      "Security reviews, threat mitigation, incident response, audits, and compliance support.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Recovery",
    description:
      "Proactive data protection, recovery planning, post-crash retrieval, and continuity support.",
  },
];

const leaders = [
  {
    name: "Olatunji Aduloju",
    role: "Managing Director",
    office: "Corporate Office, Lagos",
    contact: "olatunji@auxanosolutions.net",
    image: "/image/about/Olatunji Aduloju.jpeg",
  },
  {
    name: "Tosin Ayorinde",
    role: "IT Business & Technical Support Lead",
    office: "Corporate Office, Lagos",
    contact: "tosin@auxanosolutions.net",
    image: "/image/about/Tosin Ayorinde.jpeg",
  },
  {
    name: "Kayode Mejabi",
    role: "Regional Technical Support Lead",
    office: "Abuja Office",
    contact: "kayode@auxanosolutions.net",
    image: "/image/about/Kayode Mejabi.jpeg",
  },
  {
    name: "Mahmoud Khallaf",
    role: "Operations & Technical Lead, North Africa",
    office: "Cairo Office",
    contact: "mahmoudk@auxanosolutions.net",
    image: "/image/about/Mahmoud Khallaf.jpeg",
  },
];

const offices = [
  {
    title: "Corporate Office",
    location: "Lagos, Nigeria",
    address:
      "26, Adeshina Street, Off Oluwole Philips, Obafemi Awolowo Way, Ikeja, Lagos.",
    phone: "08034247062",
    email: "info@auxanosolutions.net",
  },
  {
    title: "Abuja Office",
    location: "FCT, Nigeria",
    address:
      "4th Floor, ChurchGate Tower C, Constitution Avenue, Central Business District, FCT, Nigeria.",
    phone: "0702-639-3446",
    email: "kayode@auxanosolutions.net",
  },
  {
    title: "Cairo Office",
    location: "Cairo, Egypt",
    address:
      "53, Capital Mall, behind the Court, Fifth Settlement, New Cairo, Egypt.",
    phone: "+20 101 639 7193",
    email: "mahmoudk@auxanosolutions.net",
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? undefined : fadeUp}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  center = false,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  inverse?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p
        className={
          inverse
            ? "text-sm font-semibold uppercase tracking-normal text-white/70"
            : "text-sm font-semibold uppercase tracking-normal text-[#ed6a39]"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          inverse
            ? "mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl"
            : "mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            inverse
              ? "mt-5 text-pretty text-base leading-8 text-white/72 sm:text-lg"
              : "mt-5 text-pretty text-base leading-8 text-[var(--color-muted)] sm:text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      style={variant === "secondary" ? { color: "#0b1220" } : undefined}
      className={
        variant === "primary"
          ? "inline-flex items-center gap-2 rounded-full bg-[#f97316] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
          : "inline-flex items-center gap-2 rounded-full border border-[color:rgba(10,48,71,0.16)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[color:rgba(47,107,255,0.4)]"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function AboutGeneaInspired() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[#f7faff] text-[var(--color-ink)]">
      <section className="overflow-hidden bg-white">
        <div className="relative hidden min-h-[35rem] md:block">
          <Image
            src="/image/It_management.jpg"
            alt="Auxano ICT support specialist reviewing a mobile work order"
            fill
            priority
            className="object-cover object-[center_36%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.96)_30%,rgba(255,255,255,0.72)_48%,rgba(255,255,255,0.18)_68%,rgba(255,255,255,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0)_22%,rgba(255,255,255,0)_78%,rgba(255,255,255,0.75)_100%)]" />

          <Container className="relative flex min-h-[35rem] items-center">
            <motion.div
              className="max-w-[34rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="mt-4 max-w-[30rem] text-balance text-[2.65rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--color-ink)] lg:text-[3.2rem]">
                Reliable ICT support since 2012.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                Auxano Solutions Technology Limited delivers specialized and
                cost-effective ICT services that help organizations streamline
                operations, secure assets, and scale efficiently.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-0.5"
                >
                  Book Consultation
                </Link>
                <a
                  href="#about-purpose"
                  aria-label="Scroll to about purpose"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/18 bg-white/70 text-black backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <ArrowDown className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </Container>
        </div>

        <div className="md:hidden">
          <div className="relative min-h-[19rem] bg-[var(--color-cloud)]">
            <Image
              src="/image/It_management.jpg"
              alt="Auxano ICT support specialist reviewing a mobile work order"
              fill
              priority
              className="object-cover object-[center_32%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.78)_100%)]" />
          </div>

          <Container className="overflow-hidden bg-[#f4f6f8] py-10">
            <h1 className="mt-4 max-w-[20rem] text-[1.65rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[var(--color-ink)]">
              Reliable ICT support since 2012.
            </h1>
            <p className="mt-5 max-w-[20rem] text-sm leading-7 text-[var(--color-muted)]">
              Auxano delivers cost-effective ICT services that help
              organizations streamline operations, secure assets, and scale
              efficiently.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold !text-white transition hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
              <a
                href="#about-purpose"
                aria-label="Scroll to about purpose"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/18 bg-white text-black"
              >
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-white pb-14 pt-4 sm:pb-18">
        <Container>
          <div className="overflow-hidden rounded-[1.75rem] border border-[color:rgba(11,18,32,0.08)] bg-white">
            <div className="grid divide-y divide-[color:rgba(53,92,154,0.18)] md:grid-cols-4 md:divide-x md:divide-y-0">
              {metrics.map((metric) => {
                return (
                  <article
                    key={metric.label}
                    className="relative flex min-h-[16rem] flex-col items-center justify-center px-6 py-9 text-center"
                  >
                    <StatMetricIcon kind={metric.icon} />
                    <p className="mt-8 text-[3.5rem] font-semibold leading-none tracking-normal text-[#123f91] sm:text-[4rem]">
                      {metric.value}
                    </p>
                    <span className="mt-6 h-1 w-16 rounded-full bg-[#f97316]" />
                    <p className="mt-6 text-lg font-semibold text-[#1f2937]">
                      {metric.label}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="about-purpose" className="bg-white py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]  text-[#ed6a39]">
              Our Purpose
            </p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Enhancing productivity, reducing operating costs, and helping
              organizations grow through dependable ICT systems.
            </h2>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#eef4ff] py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative h-96 overflow-hidden rounded-lg bg-[#0A3047]">
              <Image
                src="/image/IT Infrastructure.png"
                alt="Secure infrastructure access system representing Auxano enterprise ICT delivery"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A3047]">
                Enterprise-grade delivery
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Specialized, cost-effective ICT services across Nigeria and North
              Africa.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              <p>
                Auxano Solutions Technology Limited delivers ICT services that
                help businesses streamline operations, secure assets, and scale
                efficiently.
              </p>
              <p>
                Since 2012, our team has deployed enterprise-grade IT
                infrastructure, surveillance, access control, networks,
                software, hardware, and managed support for organizations across
                telecoms, finance, energy, manufacturing, and services.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <PartnerLogoMarquee />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="Company Values"
            title="The working standards behind every Auxano engagement."
            description="These principles guide how our engineers, technical leads, and project teams make decisions before, during, and after delivery."
            center
          />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.04}>
                  <article className="group h-full rounded-lg border border-[color:rgba(10,48,71,0.1)] bg-white p-5 shadow-[0_18px_48px_rgba(10,48,71,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#ed6a39]/40">
                    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#ed6a39]/15 bg-[#ed6a39]/10 text-[#ed6a39] shadow-[0_14px_30px_rgba(237,106,57,0.14)] transition duration-300 group-hover:border-[#ed6a39] group-hover:bg-[#ed6a39] group-hover:text-white">
                      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ed6a39] transition group-hover:bg-white/85" />
                      <span className="absolute -bottom-3 -left-3 h-9 w-9 rounded-full border border-[#ed6a39]/20 transition group-hover:border-white/30" />
                      <Icon className="relative h-6 w-6 stroke-[2.2]" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#355C9A_100%,#4E73B8_50%,#6C8FD6_100%)] py-16 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionIntro
              eyebrow="The Auxano Promise"
              title="Dependable technology is only one part of the result."
              description="Auxano stays committed to outstanding support, clear handover, and continuous ownership after deployment."
              inverse
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <article className="min-h-52 rounded-lg border border-white/12 bg-white/[0.07] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.11]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#0A3047]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {service.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#eef4ff] py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="Leadership"
            title="Office and technical leads for client success."
            center
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 0.05}>
                <article className="group overflow-hidden rounded-lg border border-[color:rgba(10,48,71,0.1)] bg-white shadow-[0_20px_55px_rgba(10,48,71,0.08)]">
                  <div className="relative aspect-[4/4.6] overflow-hidden bg-[#0A3047]">
                    <Image
                      src={leader.image}
                      alt={`${leader.name}, ${leader.role}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold text-[#f97316]">
                      {leader.role}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
                      {leader.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {leader.office}
                    </p>
                    <a
                      href={`mailto:${leader.contact}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-electric)]"
                    >
                      Contact
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="Our Offices"
            title="Local presence for projects across Nigeria and North Africa."
            center
          />
          <div className="mt-11 grid gap-5 lg:grid-cols-3">
            {offices.map((office, index) => (
              <Reveal key={office.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-[color:rgba(10,48,71,0.1)] bg-[#f7faff] p-6 shadow-[0_18px_50px_rgba(10,48,71,0.06)]">
                  <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
                    {office.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-electric)]">
                    {office.location}
                  </p>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                    <p className="flex gap-3">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f97316]" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex gap-3">
                      <Phone className="mt-1 h-4 w-4 shrink-0 text-[#f97316]" />
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex gap-3">
                      <Mail className="mt-1 h-4 w-4 shrink-0 text-[#f97316]" />
                      <span>{office.email}</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(135deg,#355C9A_100%,#4E73B8_50%,#6C8FD6_100%)] py-16 text-white sm:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s design the right ICT solution for your business.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              Talk to Auxano about infrastructure, networking, security, managed
              support, audits, relocation, procurement, or a phased technical
              rollout.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-wrap gap-3 lg:justify-end">
            <CtaLink href="/book-consultation">Talk to Sales</CtaLink>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
