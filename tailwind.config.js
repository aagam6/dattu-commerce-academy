/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      /* COLORS */
      colors: {

        primary: '#061547',

        secondary: '#0B1E5B',

        accent: '#FF7A1A',

        light: '#FFFFFF',

        dark: '#020817',

        muted: '#94A3B8',

      },

      /* FONTS */
      fontFamily: {

        sans: ['Plus Jakarta Sans', 'sans-serif'],

        display: ['Playfair Display', 'serif'],

      },

      /* SHADOWS */
      boxShadow: {

        premium:
          '0 20px 60px rgba(0,0,0,0.35)',

        accent:
          '0 15px 40px rgba(255,122,26,0.35)',

        soft:
          '0 10px 30px rgba(255,255,255,0.05)',

      },

      /* BACKDROP */
      backdropBlur: {

        xs: '2px',

      },

      /* ANIMATIONS */
      animation: {

        float:
          'float 5s ease-in-out infinite',

        glow:
          'glow 3s ease-in-out infinite',

        pulseSlow:
          'pulseSlow 4s ease-in-out infinite',

      },

      /* KEYFRAMES */
      keyframes: {

        float: {

          '0%, 100%': {

            transform: 'translateY(0px)',

          },

          '50%': {

            transform: 'translateY(-10px)',

          },

        },

        glow: {

          '0%, 100%': {

            opacity: '0.7',

          },

          '50%': {

            opacity: '1',

          },

        },

        pulseSlow: {

          '0%, 100%': {

            transform: 'scale(1)',

            opacity: '1',

          },

          '50%': {

            transform: 'scale(1.03)',

            opacity: '0.85',

          },

        },

      },

      /* CONTAINER */
      container: {

        center: true,

        padding: {

          DEFAULT: '1rem',

          sm: '2rem',

          lg: '4rem',

          xl: '5rem',

          '2xl': '6rem',

        },

      },

      /* BORDER RADIUS */
      borderRadius: {

        premium: '32px',

      },

    },

  },

  plugins: [],

};