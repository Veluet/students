module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ff5a4a",
          100: "#ff5040",
          200: "#f84636",
          300: "#ee3c2c",
          400: "#e43222",
          500: "#da2818",
          600: "#d01e0e",
          700: "#c61404",
          800: "#bc0a00",
          900: "#b20000",
        },
        secondary: {
          50: "#62bfd9",
          100: "#58b5cf",
          200: "#4eabc5",
          300: "#44a1bb",
          400: "#3a97b1",
          500: "#308da7",
          600: "#26839d",
          700: "#1c7993",
          800: "#126f89",
          900: "#08657f",
        },
        tertiary: {
          50: "#fff88d",
          100: "#ffee83",
          200: "#ffe479",
          300: "#ffda6f",
          400: "#f5d065",
          500: "#ebc65b",
          600: "#e1bc51",
          700: "#d7b247",
          800: "#cda83d",
          900: "#c39e33",
        },
        accent: {
          50: "#b0a6ff",
          100: "#a69cf6",
          200: "#9c92ec",
          300: "#9288e2",
          400: "#887ed8",
          500: "#7e74ce",
          600: "#746ac4",
          700: "#6a60ba",
          800: "#6056b0",
          900: "#564ca6",
        },
        base: {
          50: "#4f555e",
          100: "#454b54",
          200: "#3b414a",
          300: "#313740",
          400: "#272d36",
          500: "#1d232c",
          600: "#131922",
          700: "#090f18",
          800: "#00050e",
          900: "#000004",
        },
      },
    },
  },
};