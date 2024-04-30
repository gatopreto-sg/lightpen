/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'baseblack': '#1B1B1B',
        'supportblack': '#252525',
        'basetext': '#F5F5F5'
      }
    },
  },
  plugins: [],
}