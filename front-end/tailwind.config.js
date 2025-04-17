/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primaryRed' : '#B82C2E	',
        'secondaryRed' : '#D43638'
      }
    },
  },
  plugins: [],
}