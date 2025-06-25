/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {

       boxShadow: {
      'custom-glow': '0 0 40px 10px rgba(59,130,246,0.4)',
    },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px 2px rgba(255,255,255,0.3), 0 0 10px 10px rgba(59, 130, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 20px 2px rgba(147, 197, 253, 0.4), 0 0 20px 20px rgba(191, 219, 254, 0.3)' 
          },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        glow: 'glow 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};