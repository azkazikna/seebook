/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'register.html', 'login.html', 'allbook.html', 'book.html', 'profile.html', 'blog.html'],
  theme: {
    extend: {
      colors: {
        primary: '#EBC788',
        dark: '#818F8F',
        darken: '#3E5351',
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
