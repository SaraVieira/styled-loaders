module.exports = {
  components: 'packages/styled-loaders-react/components/**/*.js',
  highlightTheme: 'duotone-dark',
  title: 'Styled Loaders',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
};
