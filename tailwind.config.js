/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(45, 74, 170, 0.08) 0px 8px 24px 0px",
        solid_l: "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
      },
      backgroundColor: {
        primary: "#006bff",
        dark: "#181c31",
        blacksection: "#1c2136",
        hoverdark: "#252a42",
        titlebgdark: "#46495a",
        btndark: "#292e45",
      },
      borderColor: {
        strokedark: "#2d2f40",
      },
      fontSize: {
        hero: "44px",
      },
      lineHeight: {
        hero: "58px",
      },
      stroke: {
        strokedark: "#2d2f40",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
