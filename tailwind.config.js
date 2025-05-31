/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      primary: '#1DA1F2',
      secondary: '#14171A',
      accent: '#657786',
      background: '#F5F8FA',
      text: '#14171A',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

