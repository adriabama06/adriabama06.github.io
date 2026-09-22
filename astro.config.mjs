// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://adriabama06.github.io',
  base: '/',
  integrations: [
    sitemap({
      // Adds <xhtml:link rel="alternate" hreflang="..." /> entries to every
      // <url> in the sitemap so search engines know which language each
      // route (and its translations) is targeting.
      // 'es' has no URL prefix (it's the default language), so it must be
      // set as the defaultLocale for the mapping to work correctly.
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
          ca: 'ca-ES',
        },
      },
    }),
  ],
});
