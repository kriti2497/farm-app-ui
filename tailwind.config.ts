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
      },
      // backgroundImage: {
      //   "shorten-desktop": "url('../public/images/bg-shorten-desktop.svg')",
      //   "shorten-mobile": "url('../public/images/bg-shorten-mobile.svg')",
      //   "boost-mobile": "url('../public/images/bg-boost-mobile.svg')",
      //   "boost-desktop": "url('../public/images/bg-boost-desktop.svg')",
      // },
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
