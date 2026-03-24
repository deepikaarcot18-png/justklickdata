export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        soft: "#f6faf7",
        dark: "#0f172a",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
}