import { defineArrayMember, defineField, defineType } from "sanity";

const metric = defineType({
  name: "metric",
  title: "Metric",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "string" }),
  ],
});

const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
    defineField({ name: "canonicalPath", title: "Canonical Path", type: "string" }),
  ],
});

const blogHeading = defineType({
  name: "blogHeading",
  title: "Heading",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "number",
      options: { list: [2, 3] },
      initialValue: 2,
    }),
    defineField({
      name: "anchor",
      title: "Anchor ID",
      type: "string",
      description:
        "Optional. Use lowercase words with hyphens, for example: planning-the-system",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare: ({ title }) => ({ title, subtitle: "Heading" }),
  },
});

const blogParagraph = defineType({
  name: "blogParagraph",
  title: "Paragraph",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare: ({ title }) => ({ title, subtitle: "Paragraph" }),
  },
});

const blogPlainText = defineType({
  name: "blogPlainText",
  title: "Plain Paragraph",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare: ({ title }) => ({ title, subtitle: "Plain paragraph" }),
  },
});

const blogImageBlock = defineType({
  name: "blogImageBlock",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
  ],
  preview: {
    select: {
      title: "caption",
      media: "image",
    },
    prepare: ({ title, media }) => ({
      title: title || "Image",
      subtitle: "Image block",
      media,
    }),
  },
});

const blogList = defineType({
  name: "blogList",
  title: "List",
  type: "object",
  fields: [
    defineField({
      name: "style",
      title: "List Style",
      type: "string",
      options: {
        list: [
          { title: "Bullet list", value: "bullet" },
          { title: "Numbered list", value: "number" },
        ],
        layout: "radio",
      },
      initialValue: "bullet",
    }),
    defineField({
      name: "items",
      title: "List Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      style: "style",
      firstItem: "items.0",
    },
    prepare: ({ style, firstItem }) => ({
      title: firstItem || "List",
      subtitle: style === "number" ? "Numbered list" : "Bullet list",
    }),
  },
});

const blogCallout = defineType({
  name: "blogCallout",
  title: "Callout / Important Note",
  type: "object",
  fields: [
    defineField({
      name: "tone",
      title: "Tone",
      type: "string",
      options: {
        list: [
          { title: "Important", value: "important" },
          { title: "Warning", value: "warning" },
          { title: "Note", value: "note" },
          { title: "Tip", value: "tip" },
        ],
        layout: "radio",
      },
      initialValue: "important",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Example: Important, Note, Compliance reminder",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      text: "text",
      tone: "tone",
    },
    prepare: ({ title, text, tone }) => ({
      title: title || text || "Callout",
      subtitle: `Callout: ${tone || "important"}`,
    }),
  },
});

const blogQuote = defineType({
  name: "blogQuote",
  title: "Quote",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "attribution",
      title: "Attribution",
      type: "string",
      description: "Optional source, person, or standard.",
    }),
  ],
  preview: {
    select: {
      title: "quote",
      subtitle: "attribution",
    },
    prepare: ({ title, subtitle }) => ({
      title: title || "Quote",
      subtitle: subtitle || "Quote block",
    }),
  },
});

const blogTableRow = defineType({
  name: "blogTableRow",
  title: "Table Row",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      title: "Cells",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      cells: "cells",
    },
    prepare: ({ cells }) => ({
      title: Array.isArray(cells) ? cells.join(" | ") : "Table row",
      subtitle: "Table row",
    }),
  },
});

const blogTable = defineType({
  name: "blogTable",
  title: "Table",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional short explanation shown above the table.",
    }),
    defineField({
      name: "columns",
      title: "Column Headings",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [defineArrayMember({ type: "blogTableRow" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "caption",
      columns: "columns",
    },
    prepare: ({ title, columns }) => ({
      title: title || "Table",
      subtitle: Array.isArray(columns) ? columns.join(" | ") : "Table",
    }),
  },
});

const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Studies",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Case Study Image",
      type: "image",
      description:
        "Recommended: a wide operational image. The website keeps the layout stable even when this is empty.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility and search engines.",
        }),
      ],
    }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "challenge", title: "Challenge", type: "text" }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "result", title: "Result", type: "text" }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [defineArrayMember({ type: "metric" })],
    }),
    defineField({
      name: "relatedServices",
      title: "Related Services",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

const post = defineType({
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "readingTime", title: "Reading Time", type: "string" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({
      name: "takeaways",
      title: "Takeaways",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({ type: "blogPlainText" }),
        defineArrayMember({ type: "blogHeading" }),
        defineArrayMember({ type: "blogParagraph" }),
        defineArrayMember({ type: "blogList" }),
        defineArrayMember({ type: "blogCallout" }),
        defineArrayMember({ type: "blogQuote" }),
        defineArrayMember({ type: "blogTable" }),
        defineArrayMember({ type: "blogImageBlock" }),
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
  ],
});

const careerOpening = defineType({
  name: "careerOpening",
  title: "Career Openings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "department", title: "Department", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full Time", "Part Time", "Contract", "Internship", "Remote"],
      },
    }),
    defineField({
      name: "summary",
      title: "Role Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "isOpen",
      title: "Open Position",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
      employmentType: "employmentType",
    },
    prepare: ({ title, location, employmentType }) => ({
      title,
      subtitle: [location, employmentType].filter(Boolean).join(" | "),
    }),
  },
});

const faq = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "FAQ ID",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const schemaTypes = [
  metric,
  seo,
  blogHeading,
  blogParagraph,
  blogPlainText,
  blogImageBlock,
  blogList,
  blogCallout,
  blogQuote,
  blogTableRow,
  blogTable,
  caseStudy,
  post,
  testimonial,
  careerOpening,
  faq,
];
