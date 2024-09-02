/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import plugin from '@tailwindcss/typography'
import themes from './themes.config'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      themes
    ],
  },
  plugins: [
    plugin,
    daisyui,
  ],
}
