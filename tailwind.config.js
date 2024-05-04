/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: '#252329',
        darklight: '#666666',
        border: '#3e3b45',
        copylight: '#d9d9d9',
        copy: '#fbfbfb',
        purple: '#8264b4'
      }
    }
  },
  plugins: []
};
