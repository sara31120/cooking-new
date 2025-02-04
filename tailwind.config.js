module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(231, 249, 253, 1)', 
      },
      fontFamily: {
        inter: ['Inter'], 
      },
    },
  },
  variants: {
    extend: {
      display: ["peer-checked"], // Enables peer-checked for display utilities
    },
  },
  plugins: [],
};





