/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/*.html"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ad94",

          secondary: "#aa5300",

          accent: "#7ED4AD",

          neutral: "#0c0204",

          "base-100": "#f2f2f2",

          info: "#00a1fe",

          success: "#3d7e00",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
