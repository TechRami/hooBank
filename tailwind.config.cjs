/** @type {import('tailwindcss').Config} */
/** @type {@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;800&display=swap');} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xll: '1500px'
    },
    colors: {
      transparent: 'transparent',
      'primary': '#00040F',
      'blue': '#33BBCF',
      'white': '#FFFFFF',
      'black': '#272727',
      'lightblack': '#11101D',
      'lightpurple': '#E9E3FF',
      'gray': '#696969',
      'lightgray': '#B8B8B8',
      'white': '#FBFBFB',
      'purewhite': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      minWidth: {
        '1/2': '50%',
        '1/4': '25%',
      },
      maxWidth: {
        'lg': '1632px',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '6rem',
      }
    }
  },
  plugins: [],
}
