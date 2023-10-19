/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      openSans: ["openSans", "sans-serif"],
    },
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1201px",

      "2xl": "1400px",
      
      "3xl": "1600px",
    },
  },
  plugins: [],
};
