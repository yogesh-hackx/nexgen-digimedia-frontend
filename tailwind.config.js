module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#00A75D",
        accent: "",
        lightViolet: "#DD7FED",
        softWhite: "#F0F0F0",
        softBlack: "#060709",
        softGray: "#0E0F11",
        gradientStart: "#7F00FF",
        gradientEnd: "#E100FF",
        _2: "#20E9BC",
        _3: "#F2C94C",
        _4: "#FF374F",
      },
      boxShadow: {
        blackLeft:
          "4px 47px 36px #000000, 4px 4px 28px rgba(255, 255, 255, 0.16)",
        gradientLeft:
          "4px 24px 36px #7200E2, 4px 4px 36px rgba(255, 255, 255, 0.06)",
        gradientRight:
          "-4px -24px 36px rgba(135, 0, 196, 0.36), -4px -4px 36px rgba(255, 255, 255, 0.06)",
      },
      spacing: {
        "128": "28rem",
        "192": "32rem",
        "256": "36rem",
      },
      screens: {
        circ1600: { max: "1600px" },
        circ1400: { max: "1450px" },
        circ1200: { max: "1200px" },
      },
    },
    fontFamily: {
      sans: ["Manrope", "Arial", "sans-serif"],
      hand: ["Caveat", "Arial"],
    },
    lineHeight: {
      "12": "3.4rem",
    },
  },
  variants: {},
  plugins: [],
};
