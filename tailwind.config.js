/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Dark Navy extracted from 'Medi' in logo
          navy: {
            50: '#f0f5fa',
            100: '#e1ecf5',
            500: '#0a3d62',
            600: '#002f52',
            700: '#002544',
            800: '#001b33',
            900: '#001324',
          },
          // Medical Green/Emerald extracted from 'Care+' in logo
          green: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            500: '#059669',
            600: '#00a86b',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          // Medical Cyan/Blue accent extracted from Cross gradient
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            500: '#0284c7',
            600: '#0369a1',
            700: '#075985',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 37, 68, 0.05), 0 2px 4px -1px rgba(0, 37, 68, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 37, 68, 0.08), 0 4px 6px -2px rgba(0, 37, 68, 0.04)',
      },
    },
  },
  plugins: [],
};
