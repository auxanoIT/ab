import { createClient } from "next-sanity";

export const apiVersion = "2026-04-02";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const previewToken = process.env.SANITY_API_READ_TOKEN;

export const isSanityEnabled = Boolean(projectId);

export function getSanityClient(preview = false) {
  if (!isSanityEnabled) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !preview,
    perspective: preview ? "drafts" : "published",
    token: preview ? previewToken : undefined,
  });
}

type SanityFetchOptions = {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  preview?: boolean;
};

export async function sanityFetch<T>({
  query,
  params,
  tags,
  preview = false,
}: SanityFetchOptions) {
  const client = getSanityClient(preview);

  if (!client) {
    return null;
  }

  return client.fetch<T>(query, params ?? {}, {
    next: {
      tags,
      revalidate: preview ? 0 : false,
    },
  });
}
