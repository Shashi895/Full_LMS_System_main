/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E46E5",
        orbit: "#7C3AED",
        dark: "#1E1E2F",
        light: "#F5F7FA",
        bordergray: "#D1D5DB",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
