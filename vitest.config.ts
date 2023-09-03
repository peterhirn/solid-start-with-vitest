import solid from "solid-start/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid()],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: ["./jest-dom-setup.ts"],
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
