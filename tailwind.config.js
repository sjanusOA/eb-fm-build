/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#1a1a1a',
        'brand-secondary': '#f8f8f8',
        'brand-accent': '#d4af37',
      },
    },
  },
  plugins: [],
}
