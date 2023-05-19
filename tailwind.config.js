/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.03)' },
        },
        chatBoxClose: {
          '0%': { 'border-radius': '0px', height: '16rem', width: '16rem' },
          '100%': {
            'border-radius': '9999px',
            height: '3rem',
            width: '3rem',
          },
        },
        'opacity-to-zero': {
          '0%': { opacity: 1 },
          '85%': { opacity: 0 },
          '100%': { display: 'none' },
        },
        'opacity-to-one': {
          '0%': { display: 'none' },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'scale-up': '100ms ease-in forwards scale',
        'chat-box-close-200': '200ms ease-in-out forwards chatBoxClose',
        'chat-box-close-300': '300ms ease-in-out forwards chatBoxClose',
        'chat-box-close-400': '400ms ease-in-out forwards chatBoxClose',
        'chat-box-close-500': '500ms ease-in-out forwards chatBoxClose',
        'chat-box-close-600': '600ms ease-in-out forwards chatBoxClose',
        'opacity-to-zero': '200ms ease-in forwards opacity-to-zero',
        'opacity-to-one-200': '200ms ease-in forwards opacity-to-one',
        'opacity-to-one-400': '400ms ease-in forwards opacity-to-one',
        'opacity-to-one-600': '600ms ease-in forwards opacity-to-one',
        'opacity-to-one-800': '800ms ease-in forwards opacity-to-one',
        'opacity-to-one': '1000ms ease-in forwards opacity-to-one',
      },
    },
  },
  plugins: [require('daisyui')],
};
