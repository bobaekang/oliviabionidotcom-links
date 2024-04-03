/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        primary: '#c27ba0',
        secondary: '#ff813f',
      },
    },
  },
  variants: {},
  plugins: [],
}
