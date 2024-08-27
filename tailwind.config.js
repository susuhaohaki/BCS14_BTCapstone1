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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
