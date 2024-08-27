/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#fff",
        "main-dark-bg": "#12181a",
        "secondary-dark-bg": "#070d0e",
      },
      colors: {
       TextDark:"#e4e5e6",
      },
      keyframes: {
        spiner: {
          to :{ transform :'rotate(360deg)'}
        }
      },
      animation :{
        spiner:"spiner 3s linear infinite"
      }
    },
  },
  plugins: [],
}