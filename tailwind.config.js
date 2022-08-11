/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00C177",
          secondary: "#f6d860",
          accent: "#C8EDF4",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light"
    ],
  },
}
