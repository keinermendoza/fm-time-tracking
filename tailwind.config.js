/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "clr": {
          "red": "hsl(15, 100%, 70%)",
          "pink": "hsl(348, 100%, 68%)",
          "blue": "hsl(195, 74%, 62%)",
          "green": "hsl(145, 58%, 55%)",
          "violet": "hsl(264, 64%, 52%)",
          "orange": "hsl(43, 84%, 65%)",

          "black": "hsl(226, 43%, 10%)",
          "darkGray": "hsl(235, 46%, 20%)",
          "gray": "hsl(235, 45%, 61%)",
          "white": "hsl(236, 100%, 87%)",
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
      gridTemplateColumns: {
        "4fr":"repeat(4,1fr)"
      },
      gridTemplateRows: {
        "2fr":"repeat(2,1fr)"
      }
    },

  },
  plugins: [],
}

