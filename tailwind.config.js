/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-gradient":
          "linear-gradient(92deg, #EF7F1A 5.92%, #E74623 112.8%)",
        "custom-blue": "#151D38",
        "custom-orange": "#FF7300",
      },
    },
  },
  plugins: [],
};
