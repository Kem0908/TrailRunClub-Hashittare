
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "github_pages",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },

  vite: {
    base: "/TrailRunClub-Hashittare/",
  },
});
