/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sub: ["KBIZHanmaumGothic"],
        sans: ["Raleway", "Pretendard", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Pretendard", "Roboto"],
        body: ['"Open Sans"'],
      },
      colors: {
        primary: {
          darker: "#1f2937",
          dark: "#374151",
          default: "#6b7280",
          light: "#9ca3af",
          lighter: "#e5e7eb",
        },
        secondary: {
          darker: "#0369a1",
          dark: "#0284c7",
          default: "#0ea5e9",
          light: "#38bdf8",
          lighter: "#bae6fd",
        },
        tertiary: {
          darker: "#0e7490",
          dark: "#0891b2",
          default: "#06b6d4",
          light: "#22d3ee",
          lighter: "#a5f3fc",
        },
        text: {
          darker: "#1f2937",
          dark: "#374151",
          default: "#6b7280",
          light: "#9ca3af",
          lighter: "#e5e7eb",
        },
        border: {
          darker: "#1f2937",
          dark: "#374151",
          default: "#6b7280",
          light: "#9ca3af",
          lighter: "#e5e7eb",
        },
        background: {
          darker: "#1f2937",
          dark: "#374151",
          default: "#6b7280",
          light: "#9ca3af",
          lighter: "#e5e7eb",
          blue: "#eff6ff",
          yellow: "#fefce8",
          pink: "#fdf2f8",
          green: "#f0fdf4",
        },
        state: {
          active: "#38bdf8", // Sky 400
          success: "#10b981", // Emerald 500
          accent: "#fb7185", // Rose 400
          warning: "#fbbf24", // Amber 400
        },
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1180px",
        xl: "1280px",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        default: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
      borderWidth: {
        main: "1px",
        default: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
