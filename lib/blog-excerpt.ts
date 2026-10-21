import type { BlogPost } from "@/lib/types";

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

export function resolveBlogExcerpt(post: {
  excerpt?: string | null;
  title: string;
  body?: unknown;
}): string {
  const excerpt = cleanText(post.excerpt);
  if (excerpt) return excerpt;

  if (Array.isArray(post.body)) {
    for (const block of post.body) {
      let text = cleanText(block);
      if (block && typeof block === "object") {
        if (block._type === "blogParagraph" || block._type === "blogPlainText") {
          text = cleanText(block.text);
        } else if (
          block._type === "block" &&
          (!block.style || block.style === "normal") &&
          !block.listItem &&
          Array.isArray(block.children)
        ) {
          text = cleanText(block.children.map((child: { text?: unknown } | null) =>
            typeof child?.text === "string" ? child.text : "",
          ).join(""));
        }
      }
      if (text) return text;
    }
  }

  return cleanText(post.title);
}

export function withBlogExcerpt(post: BlogPost): BlogPost {
  return { ...post, excerpt: resolveBlogExcerpt(post) };
}
