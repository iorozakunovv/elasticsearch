/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '600px'}, //@media screen and (max-width: 600px)
      'sm': {'max': '400px'}, //@media screen and (max-width: 400px)
    },
    extend: {},
  },
  plugins: [],
}