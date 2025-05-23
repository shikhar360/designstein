import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        slide: "slide 50s linear infinite",
        move : "move 7s infinite",
      },
      keyframes :{
         slide : {
          "0%" : {
            transform : "translateX(0px)"
          },
          "100%":{
            transform : "translateX(-100%)"
          }
         },
          move: {
                  "0%": {
                    transform: "translate(0px , 5px) ",
                  },
                  "30%": {
                    transform: "translate(5px , 5px) ",
                  },
                  "70%": {
                    transform: "translate(5px , 0px) ",
                  },

                  "100%": {
                    transform: " translate(0px , 5px)",
                  },
                },
      }
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;

