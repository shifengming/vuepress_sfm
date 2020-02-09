# Flex布局
# 什么是flex布局？
Flex是Flexible Box的缩写，意味"弹性布局"，任何一个容器都可以指定为Flex布局
# flex的基本概念？
* Flex布局元素，称为Flex容器，简称"容器"。它的所有子元素自动成为容器元素，简称"项目"。
* 容器默认存在两根轴：水平的主轴(main axis)和垂直的交叉轴(cross axis)。主轴的排列方式：从左到右；交叉轴的排列方式：从上到下;

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/1/16c4c78b16de9b8a?w=563&h=333&f=png&s=10005)
# 容器的属性
## 1、flex-direction :属性决定主轴的方向  (即项目的排列方式）
> flex-direction：row （主轴水平方向，起点在左端）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6071c2c2e0adc?w=2576&h=502&f=png&s=133449)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6074c2a380444?w=1222&h=274&f=png&s=10492)
> flex-direction：row-reverse  （主轴水平方向，起点在右端）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60778864789ae?w=2594&h=500&f=png&s=105509)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6077f3f9c43c3?w=1218&h=264&f=png&s=10514)

> flex-direction：column   （主轴垂直方向，起点在上沿）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c607a14fbc7ccb?w=2576&h=502&f=png&s=104665)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c607a60b60d464?w=1224&h=766&f=png&s=15875)

> flex-direction：column-reverse  （主轴在垂直方向，起点在下沿）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c607ba3386e107?w=2586&h=498&f=png&s=105731)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c607c116178fae?w=1228&h=770&f=png&s=19066)

## 2、flex-wrap : 默认情况下，项目都排在一条线（又称"轴线"上）
> flex-wrap：nowarp （不换行，默认的)

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60806d0c44407?w=2525&h=640&f=png&s=248335)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6080e345bf9d8?w=1226&h=276&f=png&s=13757)
> flex-wrap：wrap  （换行，第一行在上面）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6082e1f32c6a6?w=2533&h=640&f=png&s=218151)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60833e70785e2?w=1222&h=524&f=png&s=17065)
> flex-wrap：wrap-reverse （换行，第一行在下面）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6084777124f0c?w=2596&h=606&f=png&s=111336)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6084cd771bc9f?w=1224&h=532&f=png&s=19404)
## 3、flex-flow：是flex-direction 属性和flex-wrap属性的简写，默认值row、nowrap 
## 4、justify-content：属性定义了项目在主轴上的对齐方式
> justify-content：flex-start （左对齐，默认值）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6088252d73cd9?w=2588&h=502&f=png&s=104207)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6088781315f30?w=1228&h=278&f=png&s=11985)
> justify-content：flex-end（右对齐）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c608bdfb4d22c2?w=2586&h=488&f=png&s=102240)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c608c274396927?w=1224&h=274&f=png&s=11536)
> justify-content：center （居中）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c608d68dfb5762?w=2600&h=496&f=png&s=102741)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c608daaabe4702?w=1224&h=270&f=png&s=11207)
> justify-content：space-between （两端对齐，项目之间的间隔相等）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c608eb7b8c762d?w=2608&h=486&f=png&s=108512)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c608f072c792b0?w=1218&h=272&f=png&s=11064)
> justify-content：space-around （每个项目两侧的间距相等）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6090962ad347f?w=2602&h=468&f=png&s=96228)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6090cd725c21e?w=1222&h=284&f=png&s=11416)
## 5、align-items :定义项目交叉轴上如何对齐（单行）
> align-items：flex-start （交叉轴起点对齐）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6091fbde8dc3d?w=2578&h=500&f=png&s=117350)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6092430f93eee?w=1218&h=626&f=png&s=15370)
> align-items: flex-end （交叉轴终点对齐）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60937a96283c3?w=2596&h=494&f=png&s=103188)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6093b727a7c59?w=1222&h=624&f=png&s=16117)
> >align-items：center （垂直方向，中间开始）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6094c0b2b5447?w=2594&h=492&f=png&s=102473)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6095027ebd2aa?w=1220&h=626&f=png&s=16236)
> align-items：baseline （项目第一行文字的基线对齐）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60965ed753a48?w=2580&h=492&f=png&s=105068)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c6096b2510a727?w=1214&h=618&f=png&s=14666)
> align-items：stretch （默认值，如果项目未设置高度或设为auto,将占满整个容器的高度)

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/6/16c62914b0220af0?w=2572&h=462&f=png&s=112201)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/6/16c62917abc5f57e?w=1214&h=268&f=png&s=11197)
## 6、align-content :多行轴线对齐（用法同align-items ）
# flex项目属性
## 1、order 定义项目排列顺序
> order：number （数值越小越靠前，默认为0）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60de71ab83ddd?w=2566&h=572&f=png&s=128996)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60dea36704c6f?w=1220&h=268&f=png&s=13074)
## 2、flex-grow 定义项目放大比例
> flex-grow ：number（默认0，如果有剩余空间也不放大，值为1放大，2是1的双倍大小，此类推）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60ec7d622324a?w=2604&h=568&f=png&s=147676)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60ed1ac194c9a?w=1216&h=262&f=png&s=12793)
## 3、flex-shrink 定义项目缩小比例
> flex-shrink ：number （默认为1，如果空间不足则会缩小，值为0不能缩小）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60e0c563ed07e?w=2282&h=640&f=png&s=264247)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60e13d728c13a?w=1220&h=266&f=png&s=15500)
##  4、flex-basis 定义项目自身大小
> flex-basis ：number/auto （默认auto，可设置固定的值50px/50%）

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60e204803850b?w=2578&h=572&f=png&s=150760)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60e2522d476f5?w=1224&h=270&f=png&s=11049)
## 5、flex：属性是flex-grow，flex-shrink ,flex-basis的简写，默认值为0、1、auto
## 6、align-self 项目自身对齐
> align-self ：auto | flex-start | flex-end | center | baseline | stretch

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60e33b38a783b?w=2544&h=640&f=png&s=346703)
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2019/8/5/16c60e371d96aec7?w=1222&h=624&f=png&s=13608)