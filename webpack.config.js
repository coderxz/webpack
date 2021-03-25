const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {//webpack配置对象
//入口
entry:{
  app: path.resolve(__dirname,'src/index.js')
},
//出口
output:{
  filename:'static/js/[name].bundle.js',
  path:path.resolve(__dirname,'dist')
},
//模块加载器(loader)
module:{
  rules:[
    //ES6转ES5
    {
      test: /\.js$/,
      // exclude: /node_modules/, //忽略那些文件
      include:[path.resolve(__dirname,'src')],//只针对哪些处理
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']//预设包:包含多个常用插件包的一个大包
        }
      }
    },
    //处理Vue文件
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    //处理css
    {
      test: /\.css$/i,
      use: ["vue-style-loader", "css-loader"],
    },
    //处理图片
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
          },
        },
      ],
    }
  ]
},
//插件
plugins:[
  new HtmlWebpackPlugin({
    template:'index.html',
    filename:'index.html'
  }),
  //处理vue的插件
  new VueLoaderPlugin()
],
devServer:{
  open:true,
  quiet:false
},
  //开启source-map调试
  devtool: 'cheap-modele-eval-scource-map',
//引入模块的
resolve:{
  extensions:['.js','.vue','.json'],//可以省略的后缀名
  alias:{ //路径别名(简写方式)
    'vue$': 'vue/dist/vue.esm.js',//表示精确匹配,
    '@':path.resolve(__dirname,'src'),
    '@components':path.resolve(__dirname,'src/components')
  }
}
}