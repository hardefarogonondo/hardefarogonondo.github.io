/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "awards.html"],
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
        "charcoal": "#212121",
        "sky-light": "#C5D1F5",
        "mint-green": "#98FF98",
        "cornflower-blue": "#6495ED"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "xxs": {"max": "359px"},
        "xs": {"max": "639px"},
        "lg-md": "1024px",
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
}