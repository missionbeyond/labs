import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "footerGroup",
      title: "Footer Group",
      type: "string",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "string",
    }),
    defineField({
      name: "footerOrder",
      title: "Footer Order",
      type: "number",
    }),
  ],
});
