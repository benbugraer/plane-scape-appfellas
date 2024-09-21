import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      textColor: {
        primary: "#4B0097",
        secondary: "#F6F4F8",
        tertiary: "#333",
      },
      backgroundColor: {
        primary: "#F6F4F8",
        secondary: "#4B0097",
        tertiary: "#ccc",
        cardBg: "#FFFFFF",
        btnBg: "#E6E0EB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    keyframes: {
      in: {
        "0%": { transform: "translateY(18px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      "in-reverse": {
        "0%": { transform: "translateY(0)", opacity: "0" },
        "100%": { transform: "translateY(18px)", opacity: "1" },
      },
    },
    animation: {
      in: "in .6s both",
      "in-reverse": "in-reverse .6s both",
    },
  },
  plugins: [],
};
export default config;
