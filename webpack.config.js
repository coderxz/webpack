const path = require('path')
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
    //处理css
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
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
  })
],
devServer:{
  open:true,
  quiet:false
}
}