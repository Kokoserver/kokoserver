module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx, .svg}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#0B141D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
