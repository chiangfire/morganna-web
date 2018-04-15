'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].min.[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].min.[chunkhash].js')
    },
    plugins: [
	    /**
		 * http://vuejs.github.io/vue-loader/en/workflow/production.html 切换运行环境
		 */
	    new webpack.DefinePlugin({
	        'process.env': env
	    }),
	    /**
		 * 打包代码压缩
		 */
	    new UglifyJsPlugin({
	        uglifyOptions: {
	            compress: {
	                warnings: false
	            },
	            output: {
	                comments: false,
	                beautify: false
	            }
	        },
	        sourceMap: config.build.productionSourceMap,
	        parallel: true
	    }),
        /**
	     * 将CSS提取到公共文件中
	     */
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            /**
		    * 抽离css
		    */
            allChunks: true,
        }),
         /**
	      * 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
	      */
        new OptimizeCSSPlugin({cssProcessorOptions: config.build.productionSourceMap ? { safe: true, map: { inline: false } }  : { safe: true }}),
	    /**
		 * see https://github.com/ampedandwired/html-webpack-plugin
		 * 生成html自动引入css文件和js文件
		 */
	    new HtmlWebpackPlugin({
	        filename: config.build.index,
	        template: 'index.html',
	        inject: true,
	        minify: {
	            removeComments: true,
	            collapseWhitespace: true,
	            removeAttributeQuotes: true
	        },
	       /**
			* 按dependency的顺序引入
			*/
	        chunksSortMode: 'dependency'
	    }),
	    /**
		 * 模块内容转哈希值
		 */
	    new webpack.HashedModuleIdsPlugin(),
	    /**
		 * 提升作用域 <将一些有联系的模块，放到一个闭包函数，通过减少闭包函数数量从而加快JS的执行速度>
		 */
	    new webpack.optimize.ModuleConcatenationPlugin(),
	    /**
		 * 分离第三方库
		 */
	    new webpack.optimize.CommonsChunkPlugin({
	        name: 'vendor',
	        minChunks (module) {
		        return (module.resource &&  /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0)
	        }
	    }),
	    /**
		 * 运行时代码提取到单独的manifest文件中，防止<列 vendor.js>变化导致其hash值变化
		 */
	    new webpack.optimize.CommonsChunkPlugin({
	        name: 'manifest',
	        minChunks: Infinity
	    }),
	    /**
		 * see:
		 * https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
		 * 抽离重用代码为公共模块
		 */
	    new webpack.optimize.CommonsChunkPlugin({
	        name: 'app',
	        async: 'vendor-async',
	        children: true,
	        minChunks: 3
	    }),
	    /**
		 * 复制静态资源,将static文件内的内容复制到指定文件夹
		 */
	    new CopyWebpackPlugin([{
	        from: path.resolve(__dirname, '../static'),
	        to: config.build.assetsSubDirectory,
	        ignore: ['.*']
	    }])
	    
    ]
})

if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
    }))
}

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
