/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "#F0F2F5",
      },
      fontFamily: {
        starborn: ["Starborn", "fantasy"],
      },
      fontSize: {
        "starborn-xs": ["12px", "16px"],
        "starborn-sm": ["14px", "20px"],
        "starborn-ml": ["30px", "36px"],
      },
      width: {
        "600px": "600px",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      mlarge: "20px",
      large: "38px",
      full: "9999px",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
