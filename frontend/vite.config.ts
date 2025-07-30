import type { ConfigEnv } from "vite";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";
import tailwindcss from "@tailwindcss/vite";
import path from "path"

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    // envDir: "./",
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js",
      },
    },
    // base: "/static",
    server: {
      host: env.VITE_DEV_HOST,
      port: parseInt(env.VITE_DEV_PORT, 10),
    },
    build: {
      emptyOutDir: true,
      manifest: true,
      outDir: "../assets",
      minify: true,
      cssCodeSplit: true,
      rollupOptions: {
        input: {
          app: "./src/main.ts",
        },
      },
    },
    plugins: [
      vue(),
      tailwindcss(),
      createSvgSpritePlugin({
        symbolId: "icon-[name]",
        include: ['**/components/icons/*.svg'],
      }),
    ],
  });
};