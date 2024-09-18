/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
