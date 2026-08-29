import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/data-cabling",
        destination: "/services/structured-lan-cabling",
        permanent: true,
      },
      {
        source: "/elementor-53",
        destination: "/services/it-consultancy-audit-services",
        permanent: true,
      },
      {
        source: "/it-audit-services",
        destination: "/services/it-consultancy-audit-services",
        permanent: true,
      },
      {
        source: "/it-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/services/sales-of-it-hardware",
        permanent: true,
      },
      {
        source: "/governance-risk-compliance",
        destination: "/services/it-consultancy-audit-services",
        permanent: true,
      },
      {
        source: "/it-assessment",
        destination: "/services/it-consultancy-audit-services",
        permanent: true,
      },
      {
        source: "/business-continuity-disaster-recovery",
        destination: "/services/it-consultancy-audit-services",
        permanent: true,
      },
      {
        source: "/data-protection-services",
        destination: "/services/it-consultancy-audit-services",
        permanent: true,
      },
      {
        source: "/network-monitoring",
        destination: "/services/it-managed-services-staff-outsourcing",
        permanent: true,
      },
      {
        source: "/it-migration",
        destination: "/services/it-project-management",
        permanent: true,
      },
      {
        source: "/2022/02/14/elementor-7",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/product/:path*",
        destination: "/services/desktop-laptop-sales",
        permanent: true,
      },
      {
        source: "/product-category/:path*",
        destination: "/services/desktop-laptop-sales",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31_536_000,
    qualities: [56, 70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  transpilePackages: ["next-sanity", "sanity"],
};

export default nextConfig;
