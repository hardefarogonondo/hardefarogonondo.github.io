/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        "off-white": "#F9FBFD",
        "night": "#171717",
        "soft-violet": "#9A84E8",
        "lavender-love": "#BA6AE3",
        "soft-cloud": "#F2F2F6",
        "charcoal": "#333333",
        "misty-lilac": "#F0EDFC",
        "sky-light": "#C5D1F5",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
}