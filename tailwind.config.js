module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          clay: "#d97757",
          gold: "#f4b942",
          night: "#0f172a",
          cream: "#fff8f1",
          sand: "#f6ede3",
        },
      },
      boxShadow: {
        glow: "0 24px 90px rgba(217, 119, 87, 0.22)",
      },
    },
  },
};
