const tailwindcss = require('./node_modules/react-scripts/node_modules/tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss({
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    }),
    autoprefixer(),
  ],
};
