/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "puro-theme": {
          extend: "light",
          colors: {
            background: "#FFFFFF",
            foreground: "#FFFFFF",
            primary: {
              DEFAULT: "#67BBC4",
              foreground: "#000000"
            },
            secondary: {
              DEFAULT: "#1A535C",
              foreground: "#F7FFF7"
            },
          }
        }
      }
    })
  ]
};
