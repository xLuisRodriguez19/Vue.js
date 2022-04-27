module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        tiny: '.75rem',
      },
      colors: {
        cyan: {
          light: '#effafa',
          base: 'hsl(180, 29%, 50%)',
          dark: 'hsl(180, 8%, 52%)',
          darker: 'hsl(180, 14%, 20%)'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}