import { linear } from 'svelte/easing'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily:{
      heading: ['Poppins', 'sans-serif']
    },
    colors: {
      blue0:'rgba(109, 149, 252, 0)',
      blue67:'rgba(109, 149, 252, 0.67)',
      blue: '#6D95FC'
    },
    fontSize: {
      base: '21px',
      l: '17px',
      xl: '50px',
      sm: '14',
    }
  },
  plugins: [],
}

