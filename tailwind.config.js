module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        tiny: '.75rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}