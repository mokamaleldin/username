import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: {
          light: "#F4F2F3", // Light gray
          lavender: "#C0A9BD", // Lavender color
          slate: "#94A7AE",   // Slate blue/gray
          moss: "#64766A",    // Moss green
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
