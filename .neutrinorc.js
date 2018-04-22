module.exports = {
  use: [
    '@neutrinojs/airbnb',
    '@neutrinojs/react-components',
    '@neutrinojs/mocha',
    [
      '@neutrinojs/style-loader',
      { extractId: 'extract', extract: { plugin: { filename: '[name].css' } } },
    ],
  ]
};
