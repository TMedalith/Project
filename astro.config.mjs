import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
/** @type {import('tailwindcss').Config} */

import netlify from "@astrojs/netlify";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [],
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});