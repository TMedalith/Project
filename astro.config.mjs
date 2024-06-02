import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
/** @type {import('tailwindcss').Config} */

// https://astro.build/config
export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [],
  integrations: [tailwind()]
});