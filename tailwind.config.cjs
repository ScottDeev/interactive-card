/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'ui-white': 'hsl(0, 0%, 100%)',
        'error': 'hsl(0, 100%, 66%)'
      },
      backgroundImage: {
        cardFrontBg: "url('/src/assets/bg-card-front.png')",
        cardBackBg: "url('/src/assets/bg-card-back.png')",
        bgMainDesktop: "url('/src/assets/bg-main-desktop.png')",
        bgMainMobile: "url('/src/assets/bg-main-mobile.png')"
      },
      backgroundColor: {
        btn: 'hsl(278, 68%, 11%)'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
