module.exports = {
    components: 'src/components/**/*.js',
    highlightTheme: 'duotone-dark',
    title: 'Styled Loaders',
    webpackConfig: {
        resolve: {
            alias: {
                react: 'preact-compat',
                'react-dom': 'preact-compat'
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
}
