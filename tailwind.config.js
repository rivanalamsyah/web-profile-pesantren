/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1120', // Deep slate/black
          surface: '#1E293B', // Slate 800
          gold: '#D4AF37', // Gold metallic
          emerald: '#059669', // Islamic Green
          text: '#F8FAFC', // Slate 50
          muted: '#94A3B8' // Slate 400
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
