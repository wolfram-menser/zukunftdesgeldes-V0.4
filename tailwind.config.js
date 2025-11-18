/** @type {import('tailwindcss').Config} */
import relume from "@relume_io/relume-tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [relume],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          900: "#0c4a6e"
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717"
        },
        brand: {
          DEFAULT: '#05668D',
          600: '#045A7F',
          400: '#427AA1',
          surface: '#EBF2FA',
          accent: '#A5BE00',
          success: '#679436',
          text: '#0F172A',
          muted: '#475569'
        }
      }
    }
  },
  plugins: []
};
