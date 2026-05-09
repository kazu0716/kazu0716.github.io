import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kazu0716.github.io",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});