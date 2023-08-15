/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#F5F6F6",
          default: "#6F6C6C",
        },
        black: {
          default: "#181413",
          darker: "#161414",
        },
        green: "#03A703",
      },
    },
  },
  plugins: [],
};
