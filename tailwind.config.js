/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)', // Example custom shadow
          cardShadowPink: '5px 1px 150px 80px rgba(255, 105, 180, 0.1), 0 2px 4px -1px rgba(255, 105, 180, 0.06)',
          cardShadowBlue: '5px 1px 150px 80px rgba(0, 123, 255, 0.1), 0 2px 4px -1px rgba(0, 123, 255, 0.06)',
          cardShadowPurple: '5px 1px 150px 80px rgba(128, 0, 128, 0.1), 0 2px 4px -1px rgba(128, 0, 128, 0.06)',
      },
    },
  },
  plugins: [],
}