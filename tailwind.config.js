/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
    fontFamily: {
      "body": ["Be Vietnam Pro", "sans-serif"],
    },
    colors: {
      "bright-red": "hsl(12, 88%, 59%)",
      "dark-blue": "hsl(228, 39%, 23%)",
      "dark-grayish-blue": "hsl(227, 12%, 61%)",
      "very-dark-blue": "hsl(233, 12%, 13%)",
      "very-pale-red": "hsl(13, 100%, 96%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      "white": "#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
}

