import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    footer: z.string(),
    footerLink: z.string(),
    footerOrder: z.number(),
  }),
});

const experimentCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    experimentType: z.string(),
    abstract: z.string(),
    embedUrl: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

const jobCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    openingDate: z.string(),
    closingDate: z.string(),
    startDate: z.string(),
    location: z.string(),
    wfhDays: z.number(),
    experience: z.string(),
    summary: z.array(z.string()).optional(),
    highlight: z
      .array(
        z.object({
          term: z.string(),
          definition: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  pages: pageCollection,
  experiments: experimentCollection,
  jobs: jobCollection,
};
