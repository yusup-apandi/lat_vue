/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#eaeaf1',
          '100': '#bdbdd2',
          '200': '#9d9dbd',
          '300': '#71719f',
          '400': '#55558c',
          '500': '#2b2b6f',
          '600': '#272765',
          '700': '#1f1f4f',
          '800': '#18183d',
          '900': '#12122f',
        },
        'secondary': {
          '50': '#fef7ea',
          '100': '#fde6bd',
          '200': '#fcda9d',
          '300': '#fbc970',
          '400': '#fabf55',
          '500': '#f9af2a',
          '600': '#e39f26',
          '700': '#b17c1e',
          '800': '#896017',
          '900': '#694a12',
        },
      },
    },
  },
  plugins: [],
}