/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/about.html', './src/programs.html', './src/informationsystems.html', './src/communication.html', './src/mathematics.html', './src/admission.html', './src/apply.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
};