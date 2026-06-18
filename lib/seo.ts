import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  imagePath?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

const defaultKeywords = [
  "Auxano Solutions",
  "Auxano Solutions Technology Limited",
  "IT solutions Nigeria",
  "IT solutions company in Nigeria",
  "IT company in Lagos",
  "managed IT support Nigeria",
  "managed IT services Lagos",
  "CCTV installation Lagos",
  "CCTV installation Nigeria",
  "access control installation Nigeria",
  "fire alarm installation Nigeria",
  "fire alarm system company Lagos",
  "ELV contractor Nigeria",
  "structured cabling company Lagos",
  "network infrastructure Nigeria",
  "network cabling Nigeria",
  "IT infrastructure services",
  "access control systems",
  "business IT support",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  imagePath = "/opengraph-image",
  imageAlt = title,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: MetadataOptions): Metadata {
  const pageUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(imagePath);
  const mergedKeywords = Array.from(
    new Set([...defaultKeywords, ...keywords].filter(Boolean)),
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    applicationName: "Auxano Solutions",
    authors: [{ name: "Auxano Solutions Technology Limited" }],
    category: "Technology services",
    classification: "Business",
    creator: "Auxano Solutions Technology Limited",
    publisher: "Auxano Solutions Technology Limited",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Auxano Solutions",
      type,
      locale: "en_NG",
      countryName: "Nigeria",
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}
