var path = require('path')

module.exports = {
  entry: './src/echarts-plus.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'echarts-plus.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}