import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://tools.loli.wang',
  outDir: "docs",
  integrations: [tailwind(), mdx({
    extendPlugins: false
  }), vue()]
});