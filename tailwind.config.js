/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/styles/**/*.scss"],
  theme: {
    theme: {
      screens: {
        mobile: "360px",
        // => @media (min-width: 480px) { ... }
      },
    },
  },
  plugins: [],
};
