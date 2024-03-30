/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'fade-out-up': 'fadeOutUp 0.5s ease-in',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      colors: {
        primary: {
          blue: '#3A96DD',
          white: '#FFFFFF',
          black: '#050D18'
        },
        secondary: {
          yellow: '#EBA41F',
          red: '#EB1F2B'
        },
        color: {
          primary: '#050D18',
          secondary: '#50555D'
        },
        white: '#FFFFFF',
        black: '#000000',
        facebook: '#4267B2',
        blue: {
          10: '#d7eaf8',
          30: '#b0d5f1',
          50: '#88c0ea',
          70: '#61abe3',
          100: '#3a96dd'
        },
        brown: {
          10: '#f8e5d7',
          30: '#f1ccb0',
          50: '#eab388',
          70: '#e39a61',
          100: '#dd813a'
        },
        yellow: {
          10: '#FDF5E8',
          30: '#F9E3BB',
          50: '#F5D18F',
          70: '#F1BF62',
          100: '#EBA41F'
        },
        red: {
          10: '#FDE8E9',
          30: '#F9BBBF',
          50: '#F58F95',
          70: '#F1626A',
          100: '#EB1F2B'
        },
      }
    },
  },
  plugins: [],
}
