/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient': "linear-gradient(90.35deg, #2563EB 0.36%, #D946EF 201.02%)",
        'card-bg': 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
        'contact-bg': ' linear-gradient(180deg, rgba(254, 254, 255, 0.0145) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },

      borderRadius: {
        '10': '10px',
        'card-border': '34px'
      },

      boxShadow: {
        'card': '0px 22px 18px rgba(0, 0, 0, 0.05)',
        'user-card': '0px 22px 18px rgba(0, 0, 0, 0.05)',
      },

      spacing: {
        '100': '100px'
      },

      fontSize: {
        '15': '12px',
      },

      screens: {
        '500': '500px',
        'sm': '640px',
        '900': '900px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      fontFamily: {
        sans: ['sans'],
      },

      colors: {
        'dark': '#111827',
        'light-white': '#F9FAFB',
        'white': '#FFFFFF'
      },
    },
  },
  plugins: [],
}