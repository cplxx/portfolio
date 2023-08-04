// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'palete-0': '#40bdbd',
        'palete-1': '#0c4f87',
        'palete-2': '#d8d8d8',
        'palete-3': '#09090b',
        
      },
      fontFamily: {
        
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        animateBackground: {
          '0%': {
            'background-position': '0 0',
          },
          '100%': {
            'background-position': '0 100%',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        skew: {
          '0%': {
            transform: 'skewY(-4deg)',
          },
          '50%': {
            transform: 'skewY(4deg)',
          },
          '100%': {
            transform: 'skewY(-4deg)',
          },
        },
      },
      animation: {
        'bg-subindo': 'animateBackground 15s linear infinite',
        bounce: 'bounce 4s infinite',
        'skew-boat': 'skew 14s linear infinite', 
      },
    }, 
  },
  plugins: [
    
    require('tailwind-scrollbar'),
],
};
