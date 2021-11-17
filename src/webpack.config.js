//const port = process.env.PORT || 4200;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path/posix');
const webpack = require('webpack');

module.exports={
   
mode: Production,

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
      },

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      },
      resolve: {
        alias: {
          components: path.resolve(__dirname, '.src/webpack.config.js'),
        },
        extensions: ['.js', '.ts','.html','.css'],
    
   module:{  
       rules:[
           {
             test:/\.html$/,
             loader: 'html-loader'  
           },

           {
               test:/\.(png|jpeg|gif|svg)$/,
               loader: 'file-loader?name=assets/[name].[hash].[ext]'
           },

           {
               test:/\.txt$/,
               loader: 'raw-loader'
           }
       ]
   },

    Plugin:[{
      //  new webpack.ContextReplacement.plugin(),

      new :webpack.optimize.commonschunkplugins({
          name:['app','vendor','polyfills']
      }),

      new :HtmlWebpackPlugin({
          template: 'src/index.html'
      })

    }]
} 
}