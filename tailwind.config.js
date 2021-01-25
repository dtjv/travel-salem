const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        display: ['Caveat'],
      },
      colors: {
        gray: colors.trueGray,
        teal: colors.teal,
        cyan: colors.cyan,
        orange: colors.orange,
        amber: colors.amber,
      },
      spacing: {
        104: '26rem',
        112: '28rem',
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'first', 'last'],
      padding: ['responsive', 'first', 'last'],
      width: ['responsive', 'first', 'last'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
