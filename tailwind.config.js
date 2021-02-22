const daisyui = require('daisyui');
const daisyuiColors = require('daisyui/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: daisyuiColors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    daisyui,
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
};
