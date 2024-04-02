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
        "off-white": "#f9fbfd",
        "charcoal": "#333333",
        "night": "#171717",
        "lavender-love": "#ba6ae3",
        "soft-violet": "#9a84e8",
        "misty-lilac": "#f0edfc",
        "sky-light": "#c5d1f5",
        "soft-cloud": "#f2f2f6"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
}