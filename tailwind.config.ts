import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#07060f",
        deep: "#0d0b1e",
        mid: "#14112a",
        surface: "#1c1836",
        card: "#211f3a",
        rim: "#2e2a50",
        gold: "#c9933a",
        "gold-soft": "#e0b86a",
        "gold-glow": "#f5d890",
        lilac: "#a48fcb",
        "lilac-soft": "#c8b8e8",
        rose: "#c8708a",
        teal: "#5eccc0",
        white: "#f2eeff",
        muted: "#8e8aaa",
        text: "#d8d2f0",
      },
      fontFamily: {
        display: ["Cinzel Decorative", "serif"],
        title: ["Cinzel", "serif"],
        body: ["Lato", "sans-serif"],
        editorial: ["Playfair Display", "serif"],
      },
      animation: {
        "blob-pulse": "blobPulse 8s ease-in-out infinite",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.9s forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        blobPulse: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        scrollLine: {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(0.5) translateY(-8px)" },
          "50%": { opacity: "1", transform: "scaleY(1) translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.7)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
