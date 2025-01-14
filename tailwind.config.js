/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        footerBg: '#373F51',
        cb807d: '#CB807D',
        e9afa3: '#E9AFA3',
        f8f9fa: '#F8F9FA',
        f5b7b1: '#F5B7B1',
      },
    },
  },
  plugins: [],
}

