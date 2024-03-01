/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        "outfit" : ['Outfit']
      },
      colors: {
        "grayish_blue": "hsl(212, 45%, 89%)",
        "dark_blue": "hsl(218, 44%, 22%)",
        "light_gray": "hsl(212, 45%, 89%)"
      }
    },
  },
  plugins: [],
}

