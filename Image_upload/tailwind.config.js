/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "views/**/*.{html,js,ejs}", // Fix: remove the extra comma
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

