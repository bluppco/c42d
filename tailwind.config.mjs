/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  	theme: {
    	extend: {
      		colors: {
        		baseBackground: "#1c1e26",
        		brandYellow: "#fed441",
      		},
      		fontFamily: {
        		libreBaskerville: ["Libre Baskerville"],
      		},
			container: {
				screens: {
				  	'mac': '1440px',
				},
			},
    	},
  	},
  	plugins: [],
};
