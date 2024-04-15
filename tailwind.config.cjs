/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro","Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'crd':'0 15px 25px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addVariant })
    {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
