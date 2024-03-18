/** @type {import('tailwindcss').Config} */

// primary: {
//   50: "#eff6ff",
//   100: "#dbeafe",
//   200: "#bfdbfe",
//   300: "#93c5fd",
//   400: "#60a5fa",
//   500: "#3b82f6",
//   600: "#2563eb",
//   700: "#1d4ed8",
//   800: "#1e40af",
//   900: "#1e3a8a",
//   950: "#172554",
// },

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e7f5ff",
          100: "#d3ecff",
          200: "#b0daff",
          300: "#81bfff",
          400: "#4f94ff",
          500: "#2868ff",
          600: "#0439ff",
          700: "#0037ff",
          800: "#002ac5",
          900: "#0b2fa4",
          950: "#071a5f",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
