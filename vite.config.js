import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        challenges: resolve(__dirname, "src/challenges/index.html"),
        myReflections: resolve(__dirname, "src/my-reflections/index.html"),
      },
    },
  },
});