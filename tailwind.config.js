/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#059669",
        accent: "#F97316",
        background: "#F3F4F6",
        success: "#10B981",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
}
