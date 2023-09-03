import solid from "solid-start/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid()],
  test: {
    environment: "jsdom",
    globals: true,
    deps: {
      optimizer: {
        web: {
          include: ["src/**/*.tsx?"],
        },
      },
    },
    setupFiles: ["./jest-dom-setup.ts"],
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
