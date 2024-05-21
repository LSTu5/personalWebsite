/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sohne': ['sohne-var'],
        'chivo': ['Chivo'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        
      }
    }
  },
  plugins: [],
}

