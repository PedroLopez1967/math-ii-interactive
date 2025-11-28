/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          light: "#818CF8",
        },
        secondary: "#0D9488",
        accent: "#F59E0B",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: {
          main: "#1E293B",
          muted: "#64748B",
        },
        success: "#10B981",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
}
