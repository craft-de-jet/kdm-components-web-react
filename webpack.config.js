var path = require('path');

const presets = [ "@babel/preset-env", "@babel/preset-react"];
const plugins = [
  "@babel/plugin-transform-react-jsx",
  "@babel/plugin-proposal-class-properties"
];

module.exports = {
  bail: true,
  entry: {
    'index': './src/components/index.js',
    'Card/index': './src/components/Card/index.js',
    'Layout/index': './src/components/Layout/index.js',
    'Widget/index': './src/components/Widget/index.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'kdmcomponents'
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      demos: path.resolve(__dirname, 'src/demos'),
      hocs: path.resolve(__dirname, 'src/hocs'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets,
            plugins
          }
        }
      },{
        test: /\.(css|scss|sass)$/,
        //loader: "style-loader!css-loader!sass-loader"
        loader: "sass-loader"
      },{
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    minimize: false
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
};
