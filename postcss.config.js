const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    /* eslint-enable global-require */
    require('autoprefixer'),
  ],
};
