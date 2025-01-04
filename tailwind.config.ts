import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'circle': '3px 4px 15px -3px rgba(0, 0, 0, 0.6)'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "75%": {
            width: "95%"
          },
          "100%": {
            width: "95%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadedown: {
          "0%": { opacity: '0', transform: "translate3d(0, -100%, 0)" },
          "100%": { opacity: '1', transform: "translate3d(0, 0, 0)" },
         },
         "fade-in-left": {
              "0%": {
                  opacity: '0',
                  transform: "translate3d(-100%, 0, 0)",
              },
              "100%": {
                  opacity: '1',
                  transform: "translate3d(0, 0, 0)",
              },
          },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        float: 'float 3s ease-in-out infinite',
        fadeintop: 'fadedown 1s ease-in 1',
        fadeinleft: 'fade-in-left 1s ease-in 1'
      }
    },
  },
  plugins: [],
} satisfies Config;
