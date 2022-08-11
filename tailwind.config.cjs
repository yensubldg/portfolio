/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#607B96",
        secondary: "#E5E9F0",
        tertiary: "#4D5BCE",
      },
      backgroundColor: {
        main: "#010C15",
        wrapper: "#011627",
      },
      boxShadow: {
        primary: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      borderColor: {
        wrapper: "#1E2D3D",
      },
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [
    ...require("./themes/multiples.js"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
