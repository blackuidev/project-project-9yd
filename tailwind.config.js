/** @type {import('tailwindcss').Config} */
export default {
  // Ensure Tailwind scans the target folder created by 'create-lightswind'
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4F46E5',
        'secondary-indigo': '#6366F1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
