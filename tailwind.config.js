/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": "'Work Sans'",
        poppins: "Poppins",
        oswald: "Oswald",
      },
    },
    colors: {
      gray: {
        "100": "#eee",
        "200": "#e3e4e6",
        "300": "#222831",
        "400": "rgba(57, 62, 70, 0.75)",
        "500": "rgba(238, 238, 238, 0.5)",
        "600": "rgba(57, 62, 70, 0.5)",
        "700": "rgba(238, 238, 238, 0.75)",
        "800": "rgba(227, 228, 230, 0.55)",
      },
      white: "#fff",
      teal: "#00adb5",
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "24px",
      xl: "32px",
      "2xl": "40px",
      "3xl": "56px",
      "4xl": "64px",
    },
  },
  corePlugins: { preflight: false },
};
