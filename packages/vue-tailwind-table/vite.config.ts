import { resolve } from "path"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  server: {
    host: "localhost",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    emptyOutDir: true,
    copyPublicDir: false,
    target: "es2019",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "tailwind-vue-table",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue", "d3", "moment-timezone"],
      output: {
        sourcemap: true,
        exports: "named",
        globals: {
          vue: "Vue", // Make sure this is aligned with Vue 3
        },
      },
    },
  },
})
