module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [

    ]
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        loaders: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }
          { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' }]
        }]
    }
  }
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
