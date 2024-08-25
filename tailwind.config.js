/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "bike-primary": "#E76F51",
        "bike-primary-bg": "rgba(231, 111, 81, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
