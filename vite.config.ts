
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "github_pages",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    // 静的生成はNitro側に任せる
    prerender: {
      enabled: false,
    },
  },

  vite: {
    base: "/TrailRunClub-Hashittare/",
  },
});
