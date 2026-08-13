import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const language = z.enum(['en', 'es']);

const journal = defineCollection({
	loader: glob({ base: './src/content/journal', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		type: z.enum(['thought', 'movie', 'book', 'cooking', 'tech', 'life']),
		subject: z.string().optional(),
		author: z.string().optional(),
		rating: z.number().min(0).max(5).optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		language,
		slug: z.string(),
		translationKey: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.number(),
		status: z.enum(['active', 'finished', 'paused', 'experiment']),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		language,
		slug: z.string(),
		translationKey: z.string().optional(),
	}),
});

export const collections = { journal, projects };
