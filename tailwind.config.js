/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "linear-gradient(to right, rgb(0,0,0,0), rgb(0,0,0,0)), url('/src/assets/images/hero.jpg')",  
        "discover": "url('/src/assets/images/discover.svg')",  
        "light": "radial-gradient(#60e9f3, rgba(0,0,0,0))",
        'light-gradient': "radial-gradient(circle, rgba(96, 233, 243, 0.9) 0%, rgba(96, 233, 243) 40%, rgba(96, 233, 243, 0) 80%)",

      },
      colors:{
        "primary" : "#1F4B43",
        "secondary": "#DBA94D",
        "primary2" : "#5EB670",
        "black" : "#011948",
        "black2" : "#35384B",
        "black3" : "#141115",
        "green": "#40B25B",
        "purple": "#8558F7",
      }
    },
  },
  plugins: [],
}

