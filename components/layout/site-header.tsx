"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { IndustriesMegaMenu } from "@/components/layout/industries-mega-menu";
import { MobileNavigationSheet } from "@/components/layout/mobile-navigation-sheet";
import { ResourcesMegaMenu } from "@/components/layout/resources-mega-menu";
import { SolutionsMegaMenu } from "@/components/layout/solutions-mega-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type {
  IndustryProfile,
  NavItem,
  ResourceGroup,
  Service,
  SolutionCategory,
} from "@/lib/types";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  navigation: NavItem[];
  solutionCategories: SolutionCategory[];
  industries: IndustryProfile[];
  resourceGroups: ResourceGroup[];
  services: Service[];
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({
  navigation,
  solutionCategories,
  industries,
  resourceGroups,
  services,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:rgba(11,18,32,0.08)] bg-[color:rgba(247,250,255,0.88)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4 2xl:gap-6">
        <Link
          href="/"
          aria-label="Auxano Solutions home"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/image/AUxano.webp"
            alt="Auxano Solutions"
            width={100}
            height={500}
            className="h-8 w-auto object-contain md:h-12"
          />
        </Link>

        <div className="hidden flex-1 justify-center xl:flex">
          <NavigationMenu delayDuration={80} skipDelayDuration={140}>
            <NavigationMenuList className="gap-0.5 2xl:gap-1">
              {navigation.map((item) => {
                const active =
                  item.kind === "solutions"
                    ? pathname.startsWith("/services")
                    : item.kind === "industries"
                      ? pathname.startsWith("/industries")
                      : item.kind === "resources"
                        ? pathname.startsWith("/resources")
                        : isActivePath(pathname, item.href);

                if (item.kind === "solutions") {
                  return (
                    <SolutionsMegaMenu
                      key={item.label}
                      categories={solutionCategories}
                      services={services}
                      active={active}
                    />
                  );
                }

                if (item.kind === "industries") {
                  return (
                    <IndustriesMegaMenu
                      key={item.label}
                      industries={industries}
                      active={active}
                    />
                  );
                }

                if (item.kind === "resources") {
                  return (
                    <ResourcesMegaMenu
                      key={item.label}
                      groups={resourceGroups}
                      active={active}
                    />
                  );
                }

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                        active &&
                          "bg-white text-[var(--color-ink)] shadow-[0_12px_30px_rgba(11,18,32,0.08)]",
                      )}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-3 text-white xl:flex">
          <ButtonLink
            href="/book-consultation"
            className="whitespace-nowrap bg-[linear-gradient(135deg,#355C9A_100%,#4E73B8_50%,#6C8FD6_100%)] text-white"
          >
            Book Consultation
          </ButtonLink>
        </div>

        <div className="xl:hidden">
          <MobileNavigationSheet
            open={open}
            setOpen={setOpen}
            navigation={navigation}
            categories={solutionCategories}
            industries={industries}
            resourceGroups={resourceGroups}
            services={services}
            trigger={
              <button
                type="button"
                aria-label="Open menu"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:rgba(11,18,32,0.08)] bg-white",
                  open &&
                    "border-[color:rgba(47,107,255,0.22)] text-[var(--color-electric)]",
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            }
          />
        </div>
      </Container>
    </header>
  );
}
