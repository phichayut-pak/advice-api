module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)'
      },
      screens: {
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}