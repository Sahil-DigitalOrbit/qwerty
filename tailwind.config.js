/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'linear-dark': 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(19, 18, 18, 1))',
      },
      colors: {
        headerText: "#6F5B35",
        headerBg: '#FFFDEC'
      },
      fontFamily: {
        baskervville: 'Baskervville',
        RobotoFlex: 'Roboto Flex',
        bonaNova: 'Bona Nova',
      },
    },
  },
  plugins: [],
}