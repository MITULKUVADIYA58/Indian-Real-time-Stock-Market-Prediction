/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          accent: '#3d3d3d',
          text: '#e5e5e5'
        }
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.blue.400), 0 0 20px theme(colors.blue.600)',
        'neon-hover': '0 0 10px theme(colors.blue.400), 0 0 30px theme(colors.blue.600)'
      }
    },
  },
  plugins: [],
};