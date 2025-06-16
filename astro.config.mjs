// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  },
  site: 'https://yourwebsite.com',
  integrations: []
});
