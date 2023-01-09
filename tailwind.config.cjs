/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'raleway': ['"Raleway"', 'sans-serif'],
          'ninja': ['"NINJA"', 'sans-serif'],
      },
  },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
