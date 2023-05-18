/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1232px',
    },
    colors: {
      'primary':'#262626',
      'blue': '#1fb6ff',
      'white': '#fff',
      'purple': '#C873FF',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'error': '#F11D00',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#A8A8A8',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}