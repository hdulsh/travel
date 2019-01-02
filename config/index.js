'use strict'


const path = require('path')  //// path是node.js的路径模块，用来处理路径统一的问题

module.exports = {
  dev: {
    // 引入当前目录下的dev.env.js，用来指明开发环境

    assetsSubDirectory: 'static', //// 编译输出的二级目录
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {}, //我们通过自己创建的服务器去请求目标服务器，然后在从我们客户端去请求我们自己创建的服务器，这就不存在跨域了
    /**proxyTable: {
      '/api': {
        target: 'http://www.abc.com',  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/api'   //重写接口
        }
      },
      cssSourceMap: false
    }*/
       //效果就是将本地8080端口的一个请求代理到了http://www.abc.com这一域名下 'http://localhost:8080/api' ===> 'http://www.abc.com/api'

    host: 'localhost',
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */


    devtool: 'cheap-module-eval-source-map',


    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // 导入prod.env.js配置文件，vue本地服务器启动时，打包的一些配置
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), //静态资源的根目录 也就是dist目录
    assetsSubDirectory: 'static',//静态资源根目录的子目录static，也就是dist目录下面的static
    assetsPublicPath: '/', //静态资源的公开路径，也就是真正的引用路径

    /**
     * Source Maps
     */

    productionSourceMap: true, //sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现

    devtool: '#source-map',

    //是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],//定义要压缩哪些类型的文件

    //下面是用来开启编译完成后的报告，可以通过设置值为true和false来开启或关闭
    //下面的process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
