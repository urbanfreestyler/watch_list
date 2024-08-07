import { extendTheme } from '@chakra-ui/react';

// Custom color palette
// const colors = {
//   brand: {
//     50: '#e3f2f9',
//     100: '#c5e4f3',
//     200: '#a2d4ec',
//     300: '#7ac1e4',
//     400: '#47a9da',
//     500: '#0088cc', // Primary brand color
//     600: '#007ab8',
//     700: '#006ba1',
//     800: '#005885',
//     900: '#003f5e',
//   },
//   accent: {
//     50: '#f2e5ff',
//     100: '#dabfff',
//     200: '#c296ff',
//     300: '#a76cff',
//     400: '#8b43ff',
//     500: '#701aff', // Accent color
//     600: '#5b15cc',
//     700: '#471099',
//     800: '#320b66',
//     900: '#1d0633',
//   },
//   gray: {
//     50: '#f7fafc',
//     100: '#edf2f7',
//     200: '#e2e8f0',
//     300: '#cbd5e0',
//     400: '#a0aec0',
//     500: '#718096',
//     600: '#4a5568',
//     700: '#2d3748',
//     800: '#1a202c',
//     900: '#171923',
//   },
// };

// // Custom fonts
// const fonts = {
//   heading: "'Poppins', sans-serif",
//   body: "'Roboto', sans-serif",
// };

// // Custom global styles
// const styles = {
//   global: {
//     body: {
//       bg: 'gray.50',
//       color: 'gray.800',
//     },
//     h1: {
//       fontSize: '2xl',
//     },
//     h2: {
//       fontSize: 'xl',
//     },
//   },
// };

// // Custom components styling (for button)
// const components = {
//   Button: {
//     baseStyle: {
//       fontWeight: 'bold',
//       textTransform: 'uppercase',
//     },
//     variants: {
//       solid: {
//         bg: 'brand.500',
//         color: 'white',
//         _hover: {
//           bg: 'brand.600',
//         },
//       },
//       outline: {
//         borderColor: 'brand.500',
//         color: 'brand.500',
//         _hover: {
//           bg: 'brand.50',
//         },
//       },
//     },
//   },
//   Heading: {
//     baseStyle: {
//       fontWeight: 'bold',
//       color: 'gray.800',
//     },
//   },
// };

const theme = extendTheme({  styles: {
  global: (props) => ({
    body: {
      bg: mode('#2b1055', '#2b1055')(props),
      color: mode('whiteAlpha.900', 'whiteAlpha.900')(props),
    },
  }),
},
colors: {
  purple: {
    50: '#e4dbf9',
    100: '#baaff4',
    200: '#8f82ee',
    300: '#6454e7',
    400: '#472be2',
    500: '#2b1055', // Main background color
    600: '#211144',
    700: '#160d33',
    800: '#0c0922',
    900: '#030611',
  },
  teal: {
    50: '#e6fcf7',
    100: '#c3f7ea',
    200: '#9df1dd',
    300: '#75ebcf',
    400: '#53e5c2',
    500: '#3accad',
    600: '#2c9f8a',
    700: '#1f7367',
    800: '#124643',
    900: '#051b21',
  },
},
fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto', sans-serif`,
  }, 
components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        color: 'gray.800',
      },
    },
  },
});

export default theme;
