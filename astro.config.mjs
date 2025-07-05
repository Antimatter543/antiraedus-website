// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/antiraedus-website/',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  },
  // site: 'https://yourwebsite.com',
  integrations: []
});
