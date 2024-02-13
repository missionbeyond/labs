import { z, defineCollection  } from 'astro:content';

const pageCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        footer: z.string(),
        footerLink: z.string(),
        footerOrder: z.number()
    })
});

const experimentCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        abstract: z.string()
    })
});

export const collections = {
    "pages": pageCollection,
    "experiments": experimentCollection
}