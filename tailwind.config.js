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
        "cream": "#F4F1DE",
        "charcoal": "#333D47",
        "umber": "#5E503F",
        "terra-cotta": "#E07A5F",
        "teal": "#008080",
        "charcoal-gray": "#555D67",
        "dark-charcoal": "#262E33",
        "warm-gray": "#ADA9A5",
        "warm-orange": "#F2B880",
        "light-teal": "#4DB3A4",
        "smoky-gray": "#40474D",
        "metallic-gold": "#C0A080",
        "warm-olive": "#6B8E23"
      },
      screens: {
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
}