/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: {
    relative: true,
    files: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      serif: ["Source Sans 3", "serif"],
    },
    extend: {
      colors: {
        main: {
          DEFAULT: "#705372",
          50: "#D1C1D2",
          100: "#C7B4C8",
          200: "#B39AB5",
          300: "#A07FA2",
          400: "#8A668D",
          500: "#705372",
          600: "#564057",
          700: "#3C2C3D",
          800: "#221922",
          900: "#080608",
        },
        "common-light": "#fffbff",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
