import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "rgba(255,255,255,0.035)",
        "panel-hover": "rgba(255,255,255,0.06)",
        line: "rgba(255,255,255,0.12)",
        "line-strong": "rgba(255,255,255,0.22)",
        text: "#ffffff",
        "text-muted": "rgba(255,255,255,0.65)",
        "text-faint": "rgba(255,255,255,0.38)",
        orange: {
          DEFAULT: "#f7931e",
          light: "#ffb24d",
          dark: "#c96e00",
        },
      },
      fontFamily: {
        display: ["var(--font-cairo)", "sans-serif"],
        body: ["var(--font-cairo)", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
      },
      backgroundImage: {
        "grad-orange":
          "linear-gradient(135deg, #ffb24d 0%, #f7931e 55%, #c96e00 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
