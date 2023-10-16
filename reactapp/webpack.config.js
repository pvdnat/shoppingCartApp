let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'),

config = {
    output: {
        path: path.join(__dirname, '/dist'), //dist - distribution
        filename: 'index.bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    //api/helloworld >>>
    devServer: {
        port: 9990,
        // proxy: {
        //     '/about/*': 'http://localhost:9000',
        //   },
        // open: {
        //     target: ['index.html']},
        historyApiFallback : true //localhost:9092/user
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}

module.exports = config;