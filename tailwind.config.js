/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#54B192',
        'gray': '#62687E',
        'light-green': '#EAEEED',
        'dark-green': '#26634F',
        'bootstrap': '#563D7C',
        'jquery': '#0769AD',
        'react': '#04D8F9',
        'tailwind': '#0F9EE1',
        'typescript': '#007ACC',
        "html": "#E34C26",
        "css": "#264DE4",
        "javascript": "#F0DB4F",
        "jquery": "#0769AD",
      }
    },
  },
  plugins: [],
}

