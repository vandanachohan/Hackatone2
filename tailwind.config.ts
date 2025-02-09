import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx ,html}",
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
        rye: ["Rye", "cursive"],
        "libre-bodoni": ["Libre Bodoni", "serif"],
        roboto: ["Roboto", "sans-serif"],
        ClashDisplay:["Clash Display"]
      },
    },
  },
  plugins: [],
};

export default config