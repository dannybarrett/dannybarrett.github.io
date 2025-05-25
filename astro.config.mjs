// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://dannybarrett.github.io",
  integrations: [solidJs(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});