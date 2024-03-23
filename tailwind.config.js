/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
    },
    extend: {},
  },
  plugins: [],
};
