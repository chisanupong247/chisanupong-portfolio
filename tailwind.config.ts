import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1834",
        navy: "#102A56",
        blue: "#2563EB",
        cyan: "#06B6D4",
        mist: "#F4F7FB",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 42, 86, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
