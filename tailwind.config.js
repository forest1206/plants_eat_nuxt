const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.coolGray,
      white: {
        DEFAULT: '#FFFFFF',
      },
      green: {
        lighter: '#9FCAD0',
        light: '#65E28C',
      },
      red: {
        lighter: '#FD989F',
        light: '#F27171',
        DEFAULT: '#F27171',
      },
      blue: {
        light: '#9AD6FF',
        riptide: '#84E4D0',
        DEFAULT: '#407CDE',
      },
      yellow: {
        DEFAULT: '#FFB015',
        dark: '#FDBF99',
      },
      violet: {
        DEFAULT: '#C4A8FE',
        dark: '#9B99FE',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
