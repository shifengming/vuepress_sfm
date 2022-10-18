# Flex布局
# 什么是flex布局？
Flex是Flexible Box的缩写，意味"弹性布局"，任何一个容器都可以指定为Flex布局
# flex的基本概念？
* Flex布局元素，称为Flex容器，简称"容器"。它的所有子元素自动成为容器元素，简称"项目"。
* 容器默认存在两根轴：水平的主轴(main axis)和垂直的交叉轴(cross axis)。主轴的排列方式：从左到右；交叉轴的排列方式：从上到下;

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/1/16c4c78b16de9b8a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
# 容器的属性
## 1、flex-direction :属性决定主轴的方向  (即项目的排列方式）
> flex-direction：row （主轴水平方向，起点在左端）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6071c2c2e0adc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6074c2a380444~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> flex-direction：row-reverse  （主轴水平方向，起点在右端）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60778864789ae~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6077f3f9c43c3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

> flex-direction：column   （主轴垂直方向，起点在上沿）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c607a14fbc7ccb~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c607a60b60d464~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

> flex-direction：column-reverse  （主轴在垂直方向，起点在下沿）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c607ba3386e107~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c607c116178fae~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 2、flex-wrap : 默认情况下，项目都排在一条线（又称"轴线"上）
> flex-wrap：nowarp （不换行，默认的)

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60806d0c44407~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6080e345bf9d8~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> flex-wrap：wrap  （换行，第一行在上面）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6082e1f32c6a6~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60833e70785e2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> flex-wrap：wrap-reverse （换行，第一行在下面）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6084777124f0c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6084cd771bc9f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 3、flex-flow：是flex-direction 属性和flex-wrap属性的简写，默认值row、nowrap 
## 4、justify-content：属性定义了项目在主轴上的对齐方式
> justify-content：flex-start （左对齐，默认值）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6088252d73cd9~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6088781315f30~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> justify-content：flex-end（右对齐）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c608bdfb4d22c2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c608c274396927~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> justify-content：center （居中）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c608d68dfb5762~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c608daaabe4702~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> justify-content：space-between （两端对齐，项目之间的间隔相等）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c608eb7b8c762d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c608f072c792b0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> justify-content：space-around （每个项目两侧的间距相等）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6090962ad347f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6090cd725c21e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 5、align-items :定义项目交叉轴上如何对齐（单行）
> align-items：flex-start （交叉轴起点对齐）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6091fbde8dc3d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6092430f93eee~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> align-items: flex-end （交叉轴终点对齐）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60937a96283c3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6093b727a7c59~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> >align-items：center （垂直方向，中间开始）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6094c0b2b5447~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6095027ebd2aa~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> align-items：baseline （项目第一行文字的基线对齐）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60965ed753a48~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6096b2510a727~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> align-items：stretch （默认值，如果项目未设置高度或设为auto,将占满整个容器的高度)

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/6/16c62914b0220af0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/6/16c62917abc5f57e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 6、align-content :多行轴线对齐（用法同align-items ）
# flex项目属性
## 1、order 定义项目排列顺序
> order：number （数值越小越靠前，默认为0）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60de71ab83ddd~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60dea36704c6f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 2、flex-grow 定义项目放大比例
> flex-grow ：number（默认0，如果有剩余空间也不放大，值为1放大，2是1的双倍大小，此类推）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60ec7d622324a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60ed1ac194c9a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 3、flex-shrink 定义项目缩小比例
> flex-shrink ：number （默认为1，如果空间不足则会缩小，值为0不能缩小）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60e0c563ed07e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60e13d728c13a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
##  4、flex-basis 定义项目自身大小
> flex-basis ：number/auto （默认auto，可设置固定的值50px/50%）

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60e204803850b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60e2522d476f5~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 5、flex：属性是flex-grow，flex-shrink ,flex-basis的简写，默认值为0、1、auto
## 6、align-self 项目自身对齐
> align-self ：auto | flex-start | flex-end | center | baseline | stretch

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60e33b38a783b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c60e371d96aec7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)