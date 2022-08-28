/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lighter:'#58becd',
        light:'#7484bc',
        neutral:'#8965a3',
        dark:'#833357',
        darker:'#5a1650',
      }
    },
  },
  plugins: [],
}