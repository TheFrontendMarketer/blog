import { defineCollection, z } from 'astro:content';

export const collections = {
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().max(200),
            category: z.string(),
            tags: z.string(),
            image: z.string(),
		}),
	}),
};
