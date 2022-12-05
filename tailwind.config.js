/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    screens: {
       xlsm: "442px",
      xsm: "520px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      smallMedium: "650px",
      medium: "770px",
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        height: "500px",
      },
      backgroundColor: {
        myColor: "rgb(252,128,25)",
        skillColor: "rgb(41,41,41)",
      },

      colors: {
        myColor: "rgb(252,128,25)",
      },
      fontFamily: {
        headline: ["PrincessSofia-Regular"],
        name: ["AbrilFatface-Regular"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wavingHand: "wave 2s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
