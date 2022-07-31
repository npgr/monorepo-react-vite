/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#f3f4f6',
      },
      width: {
        sidebar: 'fit-content',
      },
      padding: {
        sidebar: '2rem',
      },
    },
  },
  plugins: [],
};
