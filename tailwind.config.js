/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: ({colors}) => ({
        primary: {
          '50': "#2EA152",
          '100': "#2EA152",
          '200': "#2EA152",
          '300': "#58B475",
          '400': "#2EA152",
          '500': "#2EA152",
          '600': "#2EA152",
          '700': "#2EA152",
          '800': "#2EA152",
          '900': "#258142",
          '950': "#2EA152",
        },
        error: {
          '500':'#E71818'
        },
        warn:{
          '500': '#F26C21'
        },
        // 大多数文本的灰色
        gray: {
          '500': '#0000007F'
        }
      }),
      opacity: {
        90: '.9',
      },
      backgroundColor:{
        'main': '#2EA15219',
      },
      fontSize: {
        base: ['16px', '24px'],
        sm: ['14px', {
          lineHeight: '20px',
        }],
        '2xl': ['24px', {
          letterSpacing: '-0.01em',
        }],
        '3xl': ['32px', {
          letterSpacing: '-0.02em',
          lineHeight: '40px',
        }],
      },
      fontFamily:{
        'sourceSerif': ['SourceSerifPro-SemiBold'],
        "inter": ["Inter"],
        'roboto': ['Roboto-Regular'],
      }
    },
  },
  corePlugins: {
    container: false, // custom container class defined in styles/_compounds.scss
  },
};
