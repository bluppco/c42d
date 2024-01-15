/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        baseBackground: "#1c1e26",
        brandYellow: "#fed441",
      },
    },
  },
  plugins: [],
};
