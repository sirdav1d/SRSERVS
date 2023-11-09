/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgHero: "url('/bgHero.webp')",
        bgBtn: 'linear-gradient(96deg, #080F8C 14.72%, #63CAF2 108.51%);'

      },
      colors: {
        lightSRBlue: '#63CAF2',
        midSRBlue: '#12A5DD',
        darkSRBlue: '#080F8C',
        lightSRGreen: '#25D366'
      },
      boxShadow: {
        titleShadow: '0px 0px 12px 1px #0097D9',

      },
      dropShadow: {
        logoShadow: '0px 0px 28px #f0f0f0',
        iconShadow: '0px 0px 4px #63CAF2'
      },
      backgroundSize: {
        btnSize: '180%'
      }
    },
  },
  plugins: [],
}

