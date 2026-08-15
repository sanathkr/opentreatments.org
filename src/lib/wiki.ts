import { getCollection, type CollectionEntry } from 'astro:content';

export type WikiEntry = CollectionEntry<'wiki'>;

export interface WikiSection {
  entry: WikiEntry;
  children: WikiEntry[];
}

const byOrder = (a: WikiEntry, b: WikiEntry) => a.data.order - b.data.order;

/**
 * The wiki as a two-level tree: top-level sections, each with any child pages
 * that name it as their `parent`.
 */
export async function getWikiTree(): Promise<WikiSection[]> {
  const all = await getCollection('wiki');
  return all
    .filter((e) => !e.data.parent)
    .sort(byOrder)
    .map((entry) => ({
      entry,
      children: all.filter((c) => c.data.parent === entry.id).sort(byOrder),
    }));
}

/** URL for a wiki entry. `teams/research` -> `/connect-wiki/teams/research`. */
export const wikiUrl = (entry: WikiEntry) => `/connect-wiki/${entry.id}`;
