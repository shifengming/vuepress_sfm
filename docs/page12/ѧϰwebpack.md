# 学习webpack
## 什么是webpack？

webpack可以看做是模拟打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其他的一些浏览器不能直接运行的拓展语言(Scss，TypeScript等)，并将其打包为合适的格式以供浏览器使用

## webpack可以做哪些事？

* 代码的转换(比如把es6转换成es5，把less转换成sass)
* 文件优化(比如在打包的过程中，压缩代码体积，合并文件等)
* 代码分割(比如在开发多页面的时候，公共页面的抽离，路由懒加载的功能)
* 模块合并(比如把多个模块合并成一个模块)
* 自动刷新(帮我们启动一个本地服务，来实现代码变更后可以更新我们的页面)
* 代码效验(校验我们的代码是否符合规范)
* 自动发布(打包完成后可以实现一个自动完成的功能，把打包后的代码发布到服务器上)

## 需要提前掌握的内容

* 需要node基础，以及npm的使用
* 掌握es6语法

##  webpack的基础配置

### 安装本地的webpack

* 在桌面上新建了一个文件夹webpack
* yarn init -y 初始化项目
* yarn add webpack webpack-cli -D 安装这两个依赖
* 新建一个打包的目录src

### webpack可以进行零配置

* 打包工具，把JS模块进行打包然后输出

* 打包支持js的模块化

### 手动配置webpack

* 默认配置文件的名字 webpack.config.js

  webpack.config.js文件：

  ~~~
  //webpack是node写出来的node的写法
  let path = require('path')	//从系统里导出一个path模块(审核文件路径)
  console.log(path.resolve('dist'))
  module.exports = {
      mode: 'development',//模式 默认两种 production development开发模式
      entry: './src/index.js',//入口
      output:{
          filename:'bundle.js',//打包后的文件名
          path: path.resolve(__dirname,'build')//路径必须是一个绝对路径,当前目录下产生一个dist目录(path.resole把dirname和dist连接起来，build会自动找到webpack就会去webpack.config.js文件里面)
      }
  }
  //bundle.js就是打包出来的结果
  ~~~

  src/a.js文件：

  ~~~
  // 写一些node语法
  //默认导出
  //导出以后去index.js里面引用它
  module.exports = 'sxm';
  ~~~

  src/index.js文件：

  ~~~
  let str = require('./a.js');
  console.log(str);
  ~~~

  然后在控制台npx webpack打包

  生成了一个build目录,里面有buildle.js,然后我新建了一个index.html文件

  ~~~
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
  //引入build.js
      <script src="./bundle.js"></script>
  </body>
  </html>
  ~~~

  再执行index.html文件，就可以看到打印出来的结果了

### 配置脚本

如果觉得命名太长了，就到package.json里面配置一些脚本

~~~
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server"
  },
~~~

然后在命令行就可以直接npm run build

--config指的是添加配置文件

webpack.config.js文件名

## HTML插件

通过执行这个命令在输出目录下执行

~~~
yarn add webpack-dev-server -D 
~~~

配一个脚本，生成内存中的打包

~~~
npx webpack-dev-server 
~~~

希望能进到build目录

就在webpack.config.js里面插入

~~~
devServer: {//开发服务器的配置
        port: 3000,
        progress: true,//希望在内存中打包看到一个进度条
        contentBase:'./build',//希望./build目录作为静态目录
        compress: true
    },
~~~

安装

~~~
yarn add html-webpack-plugin -D
~~~

再webpack.config.js里面添加

~~~
let HtmlWebpackPlugin = require('html-webpack-plugin')
~~~

~~~
    plugins:[//数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
        //在src里面新建一个index.html文件
            template: './src/index.html',
            filename: 'index.html',
            minify:{
                removeAttributeQuotes:true,//删除属性的双引号
                collapseWhitespace: true,//折叠空行
            },
            hash: true
        })
    ]
~~~

## 配置webpack中css模块

~~~
yarn add css-loader style-loader -D
~~~

~~~
yarn add less less-loader -D
~~~

~~~
yarn add mini-css-extract-plugin -D
~~~

~~~
yarn add postcss-loader autoprefixer
~~~

~~~
yarn add uglifyjs-webpack-plugin -D
~~~

### webpack.config.js里配置

~~~
//webpack是node写出来的node的写法
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    optimization:{//优化项
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCss()
        ]
    },
    mode: 'development',//模式 默认两种 production development开发模式
    entry: './src/index.js',//入口
    output:{
        filename:'bundle.[hash:8].js',//打包后的文件名
        path: path.resolve(__dirname,'build')//路径必须是一个绝对路径,当前目录下产生一个dist目录
    },
    plugins:[//数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    module:{
        //loader
        rules:[//规则 css-loader解析@import这种语法的
            //style-loader 他是把css插入到head的标签中
            //loader的特点  希望单一
            //loader的用法  字符串只用一个loader
            //多个loader需要[]
            //loader的顺序，默认是从右向左执行
            //loader还可以写成 对象方式
            {
                //可以处理less文件
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    
                ]
            },
            {
                    //可以处理less文件 sass stylus node-sass sass-loader
                    // stylus stylus-loader
                    test:/\.less$/,
                    use:[
                        MiniCssExtractPlugin.loader,
                        'css-loader',//@import解析路径
                        'postcss-loader',
                        'less-loader'//把less转换成css
                    ]
            }
        ]
    }
}
~~~

### pastcss.config.js

~~~
module.exports = {
    plugins:[require('autoprefixer')]
}
~~~

### src/index.css

~~~
@import './a.css';
body{
    background: red;
    transform: rotate(45deg);
}
~~~

### src/a.js

~~~
// 写一些node语法
//默认导出
//导出以后去index.js里面引用它
module.exports = 'sxm';
~~~

### src/a.css

~~~
body{
    color:  yellow;
}
~~~

### src/index.html

~~~
<style>
    body{
        background: pink;
    }
</style>
<body>
    <!-- 模板 -->
    <div>内容</div>
</body>
~~~

### src/index.js

~~~
let str = require('./a.js');
console.log(str);
require('./index.css')
require('./index.less')
~~~

###  index.less

~~~
body{
    div{
        border: 1px solid #dadade
    }
}
~~~

## 转换成es6语法

~~~
yarn add babel-loader @babel/core @babel/preset-env -D
~~~

### webpack.config.js添加代码

~~~
{
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{//用babel-loader 需要把es6转换成es5
                        presets:[
                            '@babel/preset-env'
                        ]
                    }
                }
            },
~~~

### npx webpack

~~~
npx webpack //看是否把webpack进行转换
~~~

### src/index.js里添加

~~~
let fn = () => {
    console.log('log')
}
fn();
~~~

## 全局变量引入问题

~~~
yarn add jquery
~~~

~~~
yarn add expose-loader
~~~

~~~
1,expose-loader 暴露到window上
2,providePlugin 给每个人提供一个$
3,引入不打包方式
~~~

## 图片处理

### 在js中创建图片来引入

file-loader默认会在内部生成一张图片，到build目录下，把生成的图片的名字返回回来

src/index.js里面

~~~
import logo from './logo.jpg'//把图片引入，返回的结果是一个新的图片地址
let image = new Image();
image.src = './logo.jpg'//就是一个普通的字符串
document.body.appendChild(image);
~~~

### 在css引入background('url')

src/index.js里面

~~~
import './index.css'
~~~

webpack.config.js里面

~~~
 rules:[
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            },
         ]
~~~

src/index.css里面

~~~
div{
    width: 952px;height: 249px;
    background: url("./logo.jpg")
}
~~~

### img

src/index.html里面

~~~
<img src="./logo.jpg" alt="">
~~~

src/webpack.config.js

~~~
rules:[
            {
                test: /\.(png|jpg|gif)$/,
                //做一个限制，当我们的图片，小于多少k的生活，用base64来转化
                //否则用file-loader产生真实图片
                use: 'url-loader',
                options:{
                	limit: 200*1024
                }
            },
       ]
~~~

安装

~~~
yarn add url-loader -D
~~~

## 打包多页应用

### 新建一个文件webpack1

### 初始化项目

~~~
yarn init -y
~~~

### 安装插件

~~~
yarn add webpack webpack-cli -D
~~~

~~~
yarn add html-webpack -D
~~~

### 编写代码

新建一个src文件夹，里面创建index.js和other.js和index.html

创建一个webpack.config.js文件

webpack.config.js

~~~
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //多入口
    mode: 'development',
    entry: {
        home: './src/index.js',
        other:'./src/other.js'
    },
    output:{
        //[name]home,other
        filename: '[name].js',
        path: path.resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            //代码块
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'other.html',
            //代码块
            chunks: ['other','home']
        }),
    ]
}
~~~

src/index.js

~~~
console.log('home')
~~~

src/other.js

~~~
console.log('other')
~~~

然后npx webpack打包

## 配置source-map

### 安装

~~~
yarn add @babel/core @babel/preset-env babel-cli babel-loader html-webpack-plugin webpack-dev-server -D
~~~

### webpack.config.js

~~~
1，源码调试，会单独生成一个sourcemap文件 出错了 辉表示 当前报错的列和行  大和全
	devtool: 'source-map',//添加映射文件，可以帮我们调试源代码
2，不会参数单独的文件，但是可以显示行和列
    devtool:'eval-source-map',
3，不会参数列，但是是一个单独的映射文件
    devtool: 'cheap-module-source-map',//产生后你可以保留起来
4，不会产生文件，集成在打包后的文件中，不会参数列
    devtool:'cheap-module-eval-source-map',
~~~

~~~
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //多入口
    mode: 'production',
    entry: {
        home: './src/index.js',
    },
    //配上一些规则
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    //1，源码调试，会单独生成一个sourcemap文件 出错了 辉表示 当前报错的列和行  大和全
    // devtool: 'source-map',//添加映射文件，可以帮我们调试源代码
    //2，不会参数单独的文件，但是可以显示行和列
    // devtool:'eval-source-map',
    //3，不会参数列，但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',//产生后你可以保留起来
    //4，不会产生文件，集成在打包后的文件中，不会参数列
    devtool:'cheap-module-eval-source-map',
    output:{
        filename: '[name].js',
        path: path.resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            //代码块
            chunks:['home']
        }),
    ]
}
~~~

### index.js

~~~
class Log{
    constructor(){
        comsole.log('出错了')
    }
}
let log = new Log()
~~~

## watch用法

~~~
//监控当前的变化
    watch: true,
    watchOptions:{//监控的选项
        poll:1000,//每秒 问我1000次
        aggregateTimeout: 500,//防抖 我一直输入代码1233444
        ignored: /node_modules/  //不需要进行监控哪个文件
    },
~~~

## webpack小插件应用

### cleanWebpackPlugin

清除webpack的插件

~~~
yarn add cleanWebpackPlugin -D
~~~

用法：

~~~
let CleanWebpackPlugin = require('clean-webpack-plugin')

new CleanWebpackPlugin('./dist')
~~~

### copyWebpackPlugin

~~~
yarn add copyWebpackPlugin -D
~~~

用法

~~~
let CopyWebpackPlugin = require('copy-webpack-plugin')

new CopyWebpackPlugin([{from:'./doc',to:'./dist'}])
~~~

### bannerPlugin

版权声明插件

~~~
yarn add bannerPlugin -D
~~~

用法

~~~
let webpack = require('webpack')

new webpack.BannerPlugin('make 2019 by jw')
~~~

## webpack跨域问题

### 重写方式

通过重写的方式，把请求代理到express服务器上

#### 新起一个服务

在根目录下边创建一个server.js文件，可以在浏览器上边http://localhost:3000/api/user访问

~~~
//express
let express = require('express');


let app = express();


app.get('/api/user',(req,res)=>{
    res.json({name:'小明'})
})

app.listen(3000);
~~~

#### src/index.js

~~~
let xhr = new XMLHttpRequest();

//http://localhost:8000 端口
xhr.open('GET','/api/user',true);

xhr.onload = function(){
    console.log(xhr.response)
}

xhr.send();
~~~

#### webpack.config.js

~~~
   devServer:{
        proxy:{//重写的方式，把请求代理到express服务器上
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{'/api':''}
        }//配置了一个代理
    },
~~~

### 单纯模拟数据

#### webpack.config.js

~~~
devServer:{
	before(app){//提供的方法，钩子
		app.get('/user',(req,res)=>{
			res.json({name:'小明'})
		})
	}
}
~~~

#### src/index.js

~~~
let xhr = new XMLHttpRequest();

//http://localhost:8000 端口
xhr.open('GET','/user',true);

xhr.onload = function(){
    console.log(xhr.response)
}

xhr.send();
~~~

### 有服务端，不用代理

有服务端，不用代码来处理，能不能在服务端中启动webpack 端口用服务端端口

#### server.js

~~~
//express
let express = require('express');
let app = express();
let webpack = require('webpack')

//中间件
let middle = require('webpack-dev-middleware');
let config = require('./webpack.config.js')
let compiler = webpack(config)

app.use(middle(compiler));

app.get('/user',(req,res)=>{
    res.json({name:'小明'})
})

app.listen(3000);
~~~

安装        webpack开发服务的一个中间件

~~~
yarn add webpack-dev-middleware -D
~~~

## resolve属性的配置

### 安装

~~~
yarn add css-loader style-loader -D
~~~

~~~
yarn add bootstrap  //这个是一个css框架
~~~

### index.js

~~~
// import 'bootstrap';
import './index.css'
let xhr = new XMLHttpRequest();

//http://localhost:8000 端口
xhr.open('GET','/api/user',true);

xhr.onload = function(){
    console.log(xhr.response)
}

xhr.send();
~~~

### webpack.config.js

~~~
    rules:[
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
          ]
    
    
    resolve:{//解析 第三方包
        modules:[path.resolve('node_modules')],
        extensions:['.js','.css','.json','.vue'],
        // mainFields:['style',main],
        mainFiles:[],//入口文件的名字index.js
        // alias:{//别名 vue vue.runtime
        //     bootstrap:'bootstrap/dist/css/bootstrap.css'
        // }
    },
~~~

## 定义环境变量

### webpack.config.js

~~~
    plugins: [
        new HtmlWebpackPlugin.DefinePlugin({
            DEV:JSON.stringify('production'),
            FLAG: 'true',
            EXPORESSION:JSON.stringify('1+1')
        }),
        ]
~~~

### src/index.js

~~~
let url = '';
if(DEV){
    url = 'http://localhost:3000'
}else{
    url='https://shifengming.github.io/'
}
console.log(url,'----');
console.log(typeof FLAG);
console.log(EXPORESSION)
~~~

## 区别不同环境

### 安装

~~~
yarn add webpack-merga -D
~~~

### 新建

* 新建一个webpack.dev.js
* 新建一个webpack.prod.js
* 把webpack.config.js名称改为webpack.base.js

### webpack.dev.js

~~~
let {smart} = require('webpack-merge');
let base = require('./webpack.base.js');

module.exports = smart(base,{
    mode: 'development',
    devServer:{
        
    },
    devtool:'source-map'
})
~~~

### webpack.prod.js

~~~
let {smart} = require('webpack-merge');
let base = require('./webpack.base.js');

module.exports = smart(base,{
    mode: 'production',
    optimization:{
        minimizer:[

        ]
    },
    plugins:[
        
    ]
})
~~~

## noParse

### 搭建环境

* 新建一个webpack3
* yarn init -y初始化项目
* 项目新建webpack.config.js文件
* 新建public文件夹，里面建index.html文件
* 新建src文件夹，里面建index.js文件

### 安装配置

~~~~
yarn add webpack webpack-cli html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react -D
~~~~

### 编写代码

#### webpack.config.js

~~~
let path = require('path');
let HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module:{
        rules:[
            {test:/\.js$/,use:{
                loader:'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }}
        ]
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
~~~

#### 执行

~~~
npx webpack
~~~

### jquery

#### 安装

~~~
yarn add jquery -D
~~~

#### src/index.js

~~~
import jquery from 'jquery'
~~~

#### webpack.config.js

~~~
noParse:/jquery/,     //不去解析jquery包
~~~

## lgnorePlugin

### 安装

~~~
yarn add moment -D
~~~

~~~
yarn add webpack-dev-server -D
~~~

### src/index.js

~~~
import moment from 'moment'

//设置语言

//手动引入所需要的语言
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

let r = moment().endOf('day').fromNow();

console.log(r);
~~~

### webpack.config.js

~~~
    plugins:[
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
~~~

## dllplugin

动态连接库

### 安装

~~~
yarn add react react-dom -D
~~~

### webpack.config.js

~~~
  let webpack = require('webpack');
  
  devServer:{
        port: 3000,
        open: true,
        contentBase:'./dist'
    },
   
   options:{
       presets:[
           '@babel/preset-env',
           '@babel/preset-react'
       ]
   }
   
   plugins:[
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,'dist','manifest.json')
        }),
 ]
~~~

### index.js

~~~
import React from 'react';
import {render} from 'react-dom'

render(<h1>jsx</h1>,window.root)
~~~

### 新建webpack.config.react.js

~~~
let path = require('path');
let webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry:{
        react:['react','react-dom'],
    },
    output:{
        filename:'_dll_[name].js',//产生的文件名
        path: path.resolve(__dirname,'dist'),
        library:'_dll_[name]',//_dll_react
        libraryTarget: 'var' //commonjs var this ...
    },
    plugins:[
        new webpack.DllPlugin({//name == library
            name:'_dll_[name]',
            path: path.resolve(_dirname,'dist','manifest.json')
        })
    ]
}
~~~

## happypack

webpack通过happypack实现多线程打包

### 安装

~~~
yarn add happypack
~~~

~~~
yarn add style-loader css-loader -D
~~~

### webpack.config.js

~~~
let Happypack = require('happypack');

rules:[
 	use: {
		 loader: 'babel-loader',
 		 options:{
            presets:[
             '@babel/preset-env',
             '@babel/preset-react'
		 ]
 		}
	}
]

plugins:[
        new Happypack({
            id:'js',
            use:[
                
            ]
        }),
 ]
~~~

## webpack自带优化

* import 在生产环境下 会自动去除掉没用的代码

* tree-shaking 把没用的代码 自动删除掉

* es6模块会把结果放在defalut上

* scope hosting作用域提升

## 抽离公共代码

在多个页面中抽取页面的代码

src里面新建a.js   b.js   c.js   other.js

### webpack.config.js

~~~
module.exports = {
    //优化
    optimization:{
        splitChunks:{
            //分离代码块
            cacheGroups:{
                //缓存组
                common:{
                    //公共的模块
                    chunks: 'initial',
                    minSize:0,
                    minChunks:2,
                },
                vendor:{
                    priority:1,
                    test:/node_modules/,//把你抽离出来
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2,
                }
            }
        }
    },
}
~~~

### other.js

~~~
import './a'
import './b'
console.log('other.js');

import $ from 'jquery'
console.log($);
~~~

### a.js

~~~
console.log('a~~~');
~~~

### b.js

~~~
console.log('b~~~');
~~~

### c.js

~~~
import $ from 'jquery'

console.log($);
~~~

### index.js

~~~
import './a'
import './b'
console.log('other.js');

import $ from 'jquery'
console.log($);
~~~

## 懒加载

安装插件

~~~
yarn add @babel/plugin-syntax-dynamic-import -D
~~~

再webpack.config.js里面引入一下

~~~
plugins:[
	'@babel/plugin-syntax-dynamic-import'
]
~~~

### src/index.js

~~~
let button = document.createElement('button');
button.innerHTML = 'good'
// vue懒加载 react懒加载
button.addEventListener('click',function(){
    //es6菜案中的语法,jsonp实现动态加载文件
    import('./source.js').then(data => {
        console.log(data)
    })
});

document.body.appendChild('button');
~~~

### src/source.js

~~~
export default 'sxm'
~~~

## 热更新

以前每次页面更新都要重新更新，热更新是只更新某个部分

### webpack.config.js

~~~
devServer:{
	hot: true,
}

plugins:[
	//热更新插件
  new webpack.NamedModulesPlugin(),//打印更新的模块路径
  new webpack.HotModuleReplacementPlugin() //热更新插件
]
~~~

### src/index.js

~~~
import str from './source'
console.log(str);
if(module.hot){
    module.hot.accept('./source',()=>{
        let str = require('./source')
        console.log(str);
    })
}
~~~

### src/source.js

~~~
export default 'sxm1'
~~~

## tapable介绍

### 概念

webpack本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是Tapable，Tapable有点类似于nodejs的events库，核心原理也是依赖于发布订阅模式

### 安装

~~~
yarn add tapable
~~~

### 同步钩子代码编写

~~~
class SyncHook{//钩子是同步的
    constructor(args){ //args => ['name']
        this.tasks = [];
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(...args){
        this.tasks.forEach((task) => task(...args));
    }
}
let hook = new SyncHook(['name']);
hook.tap('react',function(name){
    console.log('react',name)
})
hook.tap('node',function(name){
    console.log('node',name)
})
hook.call('xm')
~~~

### 同步钩子对应的源码实现

~~~
let {SyncHook} = require('tapable');

class Lesson {
    constructor(){
        this.hooks = {
            arch: new SyncHook(['name']),
        }
    }
    tap(){
        //注册监听函数
        this.hooks.arch.tap('node',function(name){
            console.log('node',name)
        });
        this.hooks.arch.tap('react',function(name){
            console.log('react',name)
        });
    }
    start(){
        //触发事件执行
        this.hooks.arch.call('xm');

    }
}
let l = new Lesson();
l.tap();//注册了这两个事件
l.start();//启动钩子
~~~

## tapable

### 钩子

~~~
Tapable里面包含Sync*和Async*

同步Sync*里面包含SyncHook、SyncBailHook、SyncWaterfallHook、SyncLoopHook

异步Async*里面包含AsyncParallel*和AsyncSeries*

AsyncParallel*里面包含AsyncParallelHook和AsyncParallelBailHook

AsyncSeries*里面包含AsyncSeriesHook、AsyncSeriesBailHook、AsyncSeriesWaterfallHook
~~~

### SyncBailHook

~~~
class SyncBailHook {//钩子是同步的
    constructor(args){
        this.tasks = [];
    }
    tap(name,task){
        this.tasks.push(task);
    }
    call(...args){
        let ret;//当前这个函数的返回值
        let index = 0;//当前要先执行第一个
        do{
            ret = this.tasks[index++](...args)
        }while(ret === undefined && index < this.tasks.length);
    }
}
let hook = new SyncBailHook(['name']);
hook.tap('react',function(name){
    console.log('react',name);
    //return '停止向下执行'
});
hook.tap('node',function(name){
    console.log('node',name);
    //return '停止向下执行'
});
hook.call('xm')
~~~

### SyncLoopHook

同步遇到某个不返回undefined的监听函数会多次执行

### AsyncParrelleHook

异步的钩子串行，并需要等待所有并发的异步事件执行后在执行回调方法

### AsyncSeriesHook

异步

### AsyncSeriesWaterfall

## 手写webpack

### webpack打包

~~~
yarn init -y
yarn add webpack webpack-cli -D
~~~

### 新建一个项目webpack

里面建一个文件webpack.config.js

~~~
let path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}
~~~

src/index.js

~~~
let str = require('./a.js');
console.log(str);
~~~

src/a.js

~~~
let b = require('./base/b.js')
module.exports = 'a'+b;
~~~

src/base/b.js

~~~
module.exports = 'b'
~~~

### 新建一个项目webpack2

yarn init -y初始化项目后

package.json里面添加

~~~
"bin":{
	"xm-pack":"./bin-xm-pack.js"
}
~~~

新建一个bin/xm-pack.js

~~~
//当前这个代码需要使用node环境来执行
#! /usr/bin/env node
console.log('start');
~~~

### npm link

想把webpack2里面的xm-pack.js运用到全局上

~~~
npm link
npm link xm-pack
~~~

~~~
npx xm-pack  就可以更改webpack里面的打包文件dist内容
~~~

## webpack分析与处理

需要找到当前执行名的路径，拿到webpack.config.js

### bin/xm-pack.js

~~~
#! /usr/bin/env node

console.log('start11')

//需要拿到当前执行名的路径，拿到webpack.config.js
let path = require('path');

//config配置文件
let config = require(path.resolve(__dirname));

let Compiler = require('../lib/Compiler.js')
let Compiler = new Compiler();
//标识运行编译
compiler.run();
~~~

### lib/Compiler.js

~~~
class Compiler{
    constructor(config){
        //entr output
        this.config = config;
        //需要保存入口文件的路径
        this.entryId; //'./src/index.js'
        //需要保存所有的模块依赖
        this.modules = {};
        this.entry = config.entry;//入口路径
        //工作路径
        this.root = process.cwd();
    }
    buildModule(modulePath,isEntry){

    }
    emitFile(){

    }
    run(){
        //执行  并且创建模块的依赖关系
        this.buildModule(path.resolve(this.root,this.entry),true);
        //打包后的文件
        this.emitFile();
    }
}
module.exports = Compiler
~~~

## 创建依赖关系

### bin/xm-pack.js

~~~
#! /usr/bin/env node

console.log('start11')

//需要拿到当前执行名的路径，拿到webpack.config.js
let path = require('path');

//config配置文件
let config = require(path.resolve('webpack.config.js'));

let Compiler = require('../lib/Compiler.js')
let Compiler = new Compiler();
//标识运行编译
compiler.run();
~~~

### lib/Compiler.js

~~~
let fs = require('fs');
let 
class Compiler{
    constructor(config){
        //entr output
        this.config = config;
        //需要保存入口文件的路径
        this.entryId; //'./src/index.js'
        //需要保存所有的模块依赖
        this.modules = {};
        this.entry = config.entry;//入口路径
        //工作路径
        this.root = process.cwd();
    }
    //获取源码
    getSource(modulePath){
        let content = fs.readFileSync(modulePath,'utf8')
        return content
    }
    //解析源码
    parse(source,parentPath){//AST解析语法树
        console.log(source,parentPath)
    }
    //构建模块
    buildModule(modulePath,isEntry){
        //拿到模块的内容
        let source = this.getSource(modulePath)
        //拿到模块id modulePath = modulePath - this.root src/index.js
        let moduleName = './'+path.relative(this.root,modulePath);
        if(isEntry){
            this.entryId = moduleName;//保存入口的名字
        }
        //解析需要把source源码进行改造，返回一个依赖列表
        let {sourceCode, dependencies} = this.parse(source,path.dirname(moduleName));// ./src
        //把相对路径和模块中的内容 对应起来
        this.modules[moduleName] = sourceCode;
        console.log(source,moduleName)

    }
    emitFile(){//发射文件

    }
    run(){
        //执行  并且创建模块的依赖关系
        this.buildModule(path.resolve(this.root,this.entry),true);
        //打包后的文件
        this.emitFile();
    }
}
module.exports = Compiler
~~~

## AST递归解析

~~~
yarn add babylon @babel/traverse @babel/types @babel/generator -D
~~~

## 生成打包结果

~~~
yarn add ejs
~~~

## 增加loader

~~~
yarn add tabpable
~~~

## loader

### 概念

webpack只能处理javascript的模块，如果要处理其他类型的文件，需要使用loader进行转换，loader是webpack中一个重要的概念，它是指用来将一段代码转换成另一段代码的webpack加载器

### 配置loader

~~~
let path = require('path');
module.exports = {
	mode: 'development',
	entry:"./src/index.js",
	output:{
		filename: 'buildle.js',
		path: path.resolve(_dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:'loader1'
			}
		]
	}
}
~~~

### 写一个简单的loader

在根目录下创建loaders文件夹，增加loader1,loader就是一个函数参数是匹配到文件的内容，返回结果会作为最新的内容

~~~
function loader(source){
	return 'hello';
}
module.exports = loader
~~~

### 配置多个loader

~~~
module:{
	rules:[
		{test:/\.js$/,use:'loader1'},
		{test:/\.js$/,use:'loader2'},
		{test:/\.js$/,use:'loader3'}
	]
}
~~~

默认执行顺序，从下到上，从右向左

### loader的分类

前置loader pre

普通loader normal

后置loader post

inlineloader

执行属性是：pre+normal+inline+post

### 符号的含义

-! 禁用前置和正常loader

! 禁用普通loader

!! 禁用前置和后置和正常loader

### pitchLoader和normlLoader

每个loader都有两部分组成pitchLoader和normalLoader,pitch和normal的执行顺序正好相反，当pitch没用定义或者没用返回值时，先会依次执行pitch在获取资源执行loader，如果定义的某个pitch有返回值会跳过读取资源和自己的loader

### loader的特点

第一个loader要返回js脚本

每个loader只做一件内容，为了使loader在更多场景链式调用

每一个loader都是一个模块

每个loader都是无状态的，确保loader在不同模块之间不保存状态

## babel-loader实现

### 安装插件

安装babel和babel相关插件

~~~
yarn add @babel/core babel-loader @babel/preset-env
~~~

## 实现file-loader和url-loader

~~~
yarn add mime
~~~

## less-loader和css-loader

~~~
yarn add less
~~~