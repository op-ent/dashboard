const { withTheme } = require("@op-ent/unstyled-ui-theme");

/** @type {import('tailwindcss').Config} */
module.exports = withTheme({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
});
