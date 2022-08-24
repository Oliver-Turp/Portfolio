/** @type {import('tailwindcss').Config} */
module.exports = {
  // ADDITION TO DEFAULT
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  // DEFAULT
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
