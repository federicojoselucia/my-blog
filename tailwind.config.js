const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],  
  darkMode: "class",
  theme: {
    fontFamily: {
        sans: ["inter", ...fontFamily.sans],
        mono: ["firacode", ...fontFamily.mono]
      },
    colors: {
      background: 'var(--color-background)',
      navbar: 'var(--color-navbar)',
      footer: 'var(--color-footer)',
      text:{
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-text-accent)',
      }
    }
  }
}
