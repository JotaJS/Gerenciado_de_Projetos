/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',  
    },
  },
  extend: {},

  fontFamily: {
    sans: ['Helvetica Neue','Open Sans', 'ui-sans-serif', 
    'system-ui', '-apple-system', 'system-ui','Segoe UI', 'Roboto',
    'sans-serif', 
  
          ],
    serif:[],
    mono:[],

    
  },

  plugins: [],
}