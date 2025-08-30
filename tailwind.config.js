/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {

      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        indie: ["Indie Flower", "cursive"],
        kalnia: ["Kalnia", "serif"],
        patrick: ["Patrick Hand SC", "cursive"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },

      colors: {
        yellow: {
          400: '#facc15',
          500: '#eab308',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};