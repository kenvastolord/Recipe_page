/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'serif': ['Young Serif', 'serif'],
      }
    },
  },
  plugins: [],
}

