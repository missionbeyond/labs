import { defineField, defineType } from "sanity";

export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsor",
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
        name: "abstract",
        title: "Abstract",
        type: "array",
        of: [{type: "block"}],
    }),
    defineField({
        name: "logo",
        title: "Logo",
        type: "image"
    })
  ],
});
