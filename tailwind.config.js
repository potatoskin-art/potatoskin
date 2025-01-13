/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DMSans'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 600,
      },
    }
  },
  plugins: []
}