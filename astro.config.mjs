// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
/**
 * Pages that render <meta name="robots" content="noindex">. Listing them in the
 * sitemap too would send search engines contradictory signals, so they are
 * filtered out here. Keep this in step with `indexable={false}` in the pages.
 */
const NOINDEX = ['/connect-wiki', '/thank-you'];

export default defineConfig({
  site: 'https://www.opentreatments.org',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !NOINDEX.some((p) => path === p || path.startsWith(p + '/'));
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
