/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#75758A',
        200: '#E1E1E6',
        100: '#C4C4CC',
      },

      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB'
      },

      transparent: 'transparent'

    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
