/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-6": "rgba(0, 0, 0, 0.6)",
        "gray-5": "rgba(0, 0, 0, 0.5)",
        "gray-light": "#ABB6C5",
        "live": "#317C2E",
        "paused": " #D1A307",
        "exhausted": "#FC3F3F",
        "navbar-black": "#001738",
      },
      backgroundColor: {
        "document": "#f6f9ff",
        "table-heading": "#F8F8F8",
        "live": "#E1FFE0",
        "paused": "#FFF8E0",
        "exhausted": "#FFDEDE",
        "button": "#0F6EFF",
        "light-gray": "#E4EAF2",
        "gray": "#ABB5C2",
        lightBlue: "rgba(15, 110, 255, 0.1)",
        progressBar: "rgba(218, 218, 218, 0.54)"
      },
      fontSize: {
        xs: "10px",
        small: "12px",
        base: "14px",
        lg: "16px",
        xl: "24px"
      },
      fontWeight: {
        normal: 400,
        semiBold: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}