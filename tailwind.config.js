/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "body-bg": "#F5F5F5",
      },
      container: {
        center: true,
      },
      width: {
        90: "90%",
        95: "95%",
      },
    },
  },
  plugins: [],
};
