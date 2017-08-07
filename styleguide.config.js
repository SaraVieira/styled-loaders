module.exports = {
  components: 'packages/styled-loaders-preact/components/**/*.js',
  webpackConfig: {
     module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    },
    resolve: {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      }
    }
  }
};
