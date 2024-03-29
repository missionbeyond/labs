import { defineField, defineType } from "sanity";

export const experimentType = defineType({
  name: "experimentType",
  title: "Experiment Type",
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
    })
  ],
});
