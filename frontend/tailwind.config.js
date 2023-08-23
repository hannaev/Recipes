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
      violet: "#493657",
      pink: "#FF9B71",
      celadon: "#BEE5BF",
      honeydew: "#DFF3E3",
      apricot: "#FFD1BA",
      indigo: "#746DD9",
      raspberry: "#D81E5B"
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
