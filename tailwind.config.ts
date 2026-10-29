import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#142536",
          50: "#f3f5f8",
          100: "#e3e7ee",
          200: "#ccd4df",
          300: "#9fb0c3",
          400: "#6d86a4",
          500: "#496382",
          600: "#364d69",
          700: "#293c52",
          800: "#1d2d3e",
          900: "#142536",
          950: "#0b1520",
        },
        gold: {
          DEFAULT: "#B79A62",
          50: "#fbf9f4",
          100: "#f5f0e4",
          200: "#ebdcc4",
          300: "#dfc49c",
          400: "#ceab75",
          500: "#B79A62",
          600: "#9e7f4c",
          700: "#7c623b",
          800: "#604d31",
          900: "#4a3c27",
        },
        ivory: {
          DEFAULT: "#F8F6F1",
          50: "#ffffff",
          100: "#fdfcfb",
          200: "#F8F6F1",
          300: "#ede9df",
          400: "#dfd8c7",
        },
        subtext: "#717780",
      },
      fontFamily: {
        sans: ["'Alexandria'", "'IBM Plex Sans Arabic'", "'Inter'", "sans-serif"],
        arabic: ["'Alexandria'", "'IBM Plex Sans Arabic'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(20, 37, 54, 0.08), 0 4px 6px -2px rgba(20, 37, 54, 0.02)",
        "luxury-lg": "0 20px 40px -15px rgba(20, 37, 54, 0.12), 0 8px 12px -4px rgba(20, 37, 54, 0.04)",
        "gold-glow": "0 0 25px -5px rgba(183, 154, 98, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
