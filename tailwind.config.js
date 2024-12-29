/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aquamarine: '#23F0C7',
        lightcoral: '#EF767A',
        tropicalindigo: '#7D7ABC',
        ultraviolet: '#6457A6',
        mustard: '#FFE347'
      },
    },
  },
  plugins: [],
}

