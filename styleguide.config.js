module.exports = {
  components: 'packages/styled-loaders-react/components/**/*.js',
  webpackConfig: {
     module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    // resolve: {
    //   alias: {
    //     react: 'preact-compat',
    //     'react-dom': 'preact-compat'
    //   }
    // }
  }
};
