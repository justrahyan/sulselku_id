/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gabriela: "Gabriela",
        poppins: "Poppins",
      },
      colors: {
        primary: "#1F5293",
        secondary: "#508C9B",
        paragraph: "#1E1E1E",
        "dark-blue": "#00224D",
        "white-new": "#FBFCF8",
        "sky-blue": "#DDF2FF",
        "grey-primary": "#AAAAAD",
        "grey-second": "#959595",
        "yellow-new": "#E9B854",
        "red-new": "#F50302",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
