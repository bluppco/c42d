/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: "2rem",
      screens: {
        md: "600px",
        lg: "728px",
        xl: "984px",
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        baseBackground: "#1c1e26",
        brandYellow: "#fed441",
      },

      fontFamily: {
        serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
