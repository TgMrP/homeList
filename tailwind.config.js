const daisyui = require('daisyui');
const daisyuiColors = require('daisyui/colors');

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
  plugins: [daisyui, require('@tailwindcss/typography'),],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
};
