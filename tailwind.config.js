/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: { 
      colors: {
        customGreen: '#B2C6B6',
      },
      boxShadow: {
        'custom-green': '0 4px 8px rgba(178, 198, 182, 0.6)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],}

