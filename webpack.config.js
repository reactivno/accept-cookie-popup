const path = require( 'path' );
const HtmlPlugin = require( 'html-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

const isProd = process.env.NODE_ENV === 'production';
const PLUGIN_NAME = 'accept-cookie-popup';

const DEV_PLUGINS = [
  new HtmlPlugin( {
    template: 'src/index.html',
  } ),
];

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/main.js',
  output: {
    filename: `${PLUGIN_NAME}.min.js`,
    path: path.resolve( __dirname, 'dist' ),
    clean: true,
  },
  devtool: isProd ? false : 'source-map',
  optimization: {
    minimizer: [ new TerserPlugin() ],
  },
  plugins: isProd ? [] : DEV_PLUGINS,
  module: {
    rules: [ {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          },
        },
      },
    ],
  },
};
