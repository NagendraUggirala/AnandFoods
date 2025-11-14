module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        anand: {
          50:  "#e0f2ff",   // LIGHT BLUE
          100: "#fef9c3",   // LIGHT YELLOW (no dark yellow)
          200: "#ffd700",   // GOLD
          300: "#ffffff",   // WHITE
          400: "#c0c0c0",   // SILVER
          500: "#ffa559",   // LIGHT ORANGE
          600: "#f8fafc"    // EXTRA LIGHT SHADE (off-white)
        }
      }
    }
  },
  plugins: [],
}

