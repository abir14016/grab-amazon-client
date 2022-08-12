/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '13rem',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00c177",
          secondary: "#C3C7C8",
          accent: "#C8EDF4",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light"
    ],
  },
}
