/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        yel: "hsl(47, 88%, 63%)",
        gral: "hsl(0, 0%, 50%)",
      },
      fontFamily: {
        figtree: "Figtree",
      },
    },
  },
  plugins: [],
};
