// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in your hosting dashboard (e.g. https://thesecondvisit.in).
// It is used for canonical URLs, Open Graph tags and the sitemap.
const site = process.env.SITE_URL || 'https://thesecondvisit.example';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
