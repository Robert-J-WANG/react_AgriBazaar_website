export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'logo-move': 'logo-move 15s ease-in-out infinite', // Adjust the animation duration as needed
      },
      keyframes: {
        'logo-move': {
          '0%': { transform: 'translateX(0vw)' },
          '50%': { transform: 'translateX(55vw)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};



