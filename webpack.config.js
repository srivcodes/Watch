const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Utils: path.resolve(__dirname, 'src/Utils/'),
      Context: path.resolve(__dirname, 'src/Context/'),
      Components: path.resolve(__dirname, 'src/Components/'),
    },
  },
  devServer: {
    port: 3000,
    static: './public',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};