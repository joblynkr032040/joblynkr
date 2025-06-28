/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '22': '5.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        '2xl': '2rem',
      },

      // ✅ Move animation & keyframes INSIDE extend
      animation: {
        scrollLeft: 'scrollLeft 35s linear infinite',
        scrollRight: 'scrollRight 35s linear infinite',
      },
     keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    }
  },
  plugins: [],
}
