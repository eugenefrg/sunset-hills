module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat','sans-serif'],
      serif: ['Montserrat','serif'],
    },
    colors: {
      background1: "#AA6465",
      white: "#FFFFFF",
      orange: "#E6645B",
      purple: "#2B1535"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
