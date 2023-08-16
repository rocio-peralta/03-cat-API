/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './index.html'],
  theme: {
    extend:{
      colors:{
        yellow: '#EBF560',
        blue: '#294ABC'
        
      },
      fontFamily: {
        indieFlower: ['Indie Flower'],
    },
  }
  },
  plugins: [],
}
