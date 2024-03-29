import { defineField, defineType } from "sanity";

export const experiment = defineType({
  name: "experiment",
  title: "Experiment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
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
        source: "name",
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experimentType",
      title: "Experiment Type",
      type: "reference",
      to: [{ type: "experimentType" }],
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "embedUrl",
      title: "Experiment Embed URL",
      type: "url",
    }),
    defineField({
      name: "sponsor",
      title: "Sponsor",
      type: "reference",
      to: [{ type: "sponsor" }],
    }),
  ],
});
