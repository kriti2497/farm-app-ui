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
        "hamburger-gray": "#F9F4EE",
        button: "#FFFCFA",
        subtext: "#7A7777",
      },
      backgroundImage: {
        "farm-bg-1": "url('../../public/hero-bg.png')",
        "farm-bg-2": "url('../../public/hero-bg-2.jpg')",
        "farm-bg-3": "url('../../public/hero-bg-3.jpg')",
        "farm-bg-4": "url('../../public/hero-bg-4.jpg')",
        "farm-bg-5": "url('../../public/hero-bg-5.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
