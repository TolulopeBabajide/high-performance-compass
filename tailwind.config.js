/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        backgroundImage: {
          'gradient-to-tr': 'linear-gradient(to top right, #dbeafe, #ede9fe, #fce7f3)', // soft blue/purple/pink
        },
        animation: {
          'gradient-x': 'gradient-x 8s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        colors: {
          softBlue: '#dbeafe',
          softPurple: '#ede9fe',
          softPink: '#fce7f3',
        },
        boxShadow: {
          'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
          'hovered': '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    plugins: [],
  }
  