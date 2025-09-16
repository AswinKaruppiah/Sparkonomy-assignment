/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8134AF",
        secondary: "#999999",
        "primary-gray": "#6B7280",
        "light-gray": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
