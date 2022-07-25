module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
            fontSize: {
                '10xl': '8rem',
            },
            fontFamily: {
                'montserrat': ['Montserrat'],
                'abhaya-libre': ['Abhaya Libre'],
                'alegraya-sans': ['Alegreya Sans'],
            },
            letterSpacing: {
                widest: '.25em',
            }
        },
    colors: {
     // Configure your color palette here
     primary: {
      white: '#fffdf6',
       crayola: '#EF6F6C',
      green: '#7FB685',
      darkGreen: '#a5a58d',
      dark: '#3A3A3A',
     },
     secondary: {

     },
     neutrals: {

     },
   }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
