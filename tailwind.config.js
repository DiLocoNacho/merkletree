module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Kalam: ['Kalam', 'sans-serif'],
      },
      colors: {
        'primary-light': '#014E54',
        'primary-dark': '#012A2F',
        secondary: '#E0B35C',
        tertiary: '#72D8C9',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
