/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: '#003366',
        lightBlue: '#1E90FF',
        lightGray: '#F5F5F5',
        darkGray: '#4D4D4D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
