/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slideInDown: 'slideInDown 0.75s ease-in-out',
      },
      keyframes: {
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      }
    }
  },
  plugins: [],
}

