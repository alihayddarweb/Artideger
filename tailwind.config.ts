import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "oklch(0.55 0.2 259)",
        "primary-foreground": "oklch(1 0 0)",
        accent: "oklch(0.65 0.2 259)",
        "accent-foreground": "oklch(1 0 0)",
      },
    },
  },
  plugins: [require("tailwindcss/plugin")(function ({ addUtilities }) {
    addUtilities({
      ".font-poppins": {
        fontFamily: "Poppins, sans-serif",
      },
    });
  })],
};

export default config as any;
