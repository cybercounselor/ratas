import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), alpinejs()],
  output: "server",
  adapter: vercel(),
  build: {
    rollupOptions: {
      external: ['@astrojs/rss']
    }
  }
});