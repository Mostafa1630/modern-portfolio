import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      screens: {
        mobile: { max: "738px" },
        tablet: { max: "1024px" },
        desktop: { max: "1366px" },
      },
      colors: {
        bg: "#0c0c1d",
      },
    },
  },
  plugins: [],
};

export default config;
