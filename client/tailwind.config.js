/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fBlue':'#1877f3',
        'fRed':'#f12849',
        'fGrey':'#606770',
        'fBlack':'#1d1f23',
        'fFill':'#f0f2f5',
        'fButton':"#e4e6eb"
      }
    },
  },
  plugins: [],
}