/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'mainBlue': '#0090FF',
      'darkBlue': '#243B88',
      'mdBlue': '#72A4E5',
      'lwBlue': '#7FE7FF',
      'white':'#FFFFFF',
      'nearBlack': '#121212',
      'lwBlack': '#1E1E1E',
      'green': '#95E6A1',
      'gray':'#fB2B2B2',
      'lwGray':'#D9D9D9',
    }
  },
  plugins: [],
}
