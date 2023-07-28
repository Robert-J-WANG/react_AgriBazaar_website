export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'logo-move': 'logo-move 20s ease-in-out infinite', // Adjust the animation duration as needed
      },
      keyframes: {
        'logo-move': {
          '0%': { transform: 'translateX(-25rem)' },
          '50%': { transform: 'translateX(25rem)' },
          '100%': { transform: 'translateX(-25rem)' },
        },
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1790px',
        // => @media (min-width: 1536px) { ... }

        '4xl': '2400px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  },

  plugins: [],
};



