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
        deep: {
          base: "#1e0952", // subtly deepened violet
          section: "#16052F",
        },
        surface: {
          DEFAULT: "#240A47", // cards with glassmorphic transparency
        },
        accent: {
          vibrant: "#7B2CBF",
          glow: "#9D4EDD",
          lavender: "#E0AAFF",
        },
        pure: {
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
  },
  plugins: [],
};

export default config;