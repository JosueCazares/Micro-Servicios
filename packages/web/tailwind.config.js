/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'color-success': '#00C853',
      'color-options': '#43A047',
      'color-delete': '#B71C1C',
      'color-default': '#546E7A',
      'color-info': '#1f92b5',
    
    },
    fontFamily: {
      Lato: "'Lato', sans-serif",
      Bebas: "'Bebas Neue', cursive",
      Roboto: "Roboto', 'sans-serif",
    }
  },
  plugins: [],

}

