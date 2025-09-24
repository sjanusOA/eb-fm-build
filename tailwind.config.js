/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#8B4513',
        'brand-secondary': '#D2B48C',
        'brand-accent': '#CD853F',
      },
    },
  },
  plugins: [],
}