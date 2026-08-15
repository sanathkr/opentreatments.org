import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The Connect Wiki, migrated off the Super.site/Notion instance.
 * Each Markdown file under src/content/wiki becomes a page at
 * /connect-wiki/<path>, so teams/research.md -> /connect-wiki/teams/research.
 */
const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Sort order within its level. */
    order: z.number(),
    /** id of the parent page, for the nested team pages. */
    parent: z.string().optional(),
  }),
});

export const collections = { wiki };
