import type { MetadataRoute } from "next";

import {
  getBlogPosts,
  getCaseStudies,
  getIndustries,
  getServices,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

type SitemapEntryInput = {
  path: string;
  lastModified?: Date | string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
};

const siteLastModified = new Date("2026-06-05T00:00:00.000Z");

const staticRoutes: SitemapEntryInput[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/services",
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    path: "/book-consultation",
    changeFrequency: "monthly",
    priority: 0.82,
  },
  {
    path: "/technology-security-checklist",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.78,
  },
  {
    path: "/case-studies",
    changeFrequency: "monthly",
    priority: 0.74,
  },
  {
    path: "/resources",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.68,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.62,
  },
  {
    path: "/careers",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

function toSitemapEntry({
  path,
  lastModified = siteLastModified,
  changeFrequency,
  priority,
}: SitemapEntryInput): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, industries, caseStudies, posts] = await Promise.all([
    getServices(),
    getIndustries(),
    getCaseStudies(),
    getBlogPosts(),
  ]);

  const dynamicRoutes: SitemapEntryInput[] = [
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...industries.map((industry) => ({
      path: industry.href,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((item) => ({
      path: `/case-studies/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.66,
    })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.64,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes]
    .map(toSitemapEntry)
    .sort((left, right) => left.url.localeCompare(right.url));
}
