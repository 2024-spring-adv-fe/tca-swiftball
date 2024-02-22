/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "pastel"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

