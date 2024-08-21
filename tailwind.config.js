/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(45, 74, 170, 0.08) 0px 8px 24px 0px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
