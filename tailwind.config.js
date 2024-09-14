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
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        rotate: "rotate 20s linear infinite"
      }
    },
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
