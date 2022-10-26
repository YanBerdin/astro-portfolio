/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  theme: {
    extend: {
      future: {
        hoverOnlyWhenSupported: true
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif']
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        fade: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' }
        },
        scale: {
          '0%': { scale: 0 },
          '70%': { scale: 0 },
          '100%': { scale: 1 }
        },
        box-shadow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)' }
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.61, 1, 0.88, 1)'
      },
      animation: {
        'waving-hand': 'scale 3s ease-in-out, wave 2.5s linear infinite 2s',
        'content-fade': 'fade 0.4s ease'
      },
      backgroundImage: {
        laptop: "url('/laptop-animate.svg')"
      }
    }
  },
  daisyui: {
    themes: ['night', 'winter']
  }
};