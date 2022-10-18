# CSS盒子模型
## 盒子模型
盒模型分为标准盒模型和怪异盒模型(IE模型)
* box-sizing：content-box   //标准盒模型
* box-sizing：border-box    //怪异盒模型

![cmd-markdown-logo](./image/contentBox.png)
![cmd-markdown-logo](./image/borderBox.png)

由图可得：盒模型的宽高只是内容（content）的宽高，而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高

## JS如何设置获取盒模型对应的宽和高
通过JS获取盒模型对应的宽和高，有以下几种方法：

1、dom.style.width/height 这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中设置的话，通过这种方法是获取不到dom的宽高的

2、dom.currentStyle.width/height 这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。但这种方式只有IE浏览器支持。

3、window.getComputedStyle(dom).width/heigth 这种方式的原理和2是一样的，这个可以兼容更多的浏览器，通用性好一些。

4、dom.getBoundingClientRect().width/height 这种方式是根据元素在视窗中的绝对位置来获取宽高的

5、dom.offsetWidth/offsetHeight 这个就没什么好说的了，最常用的，也是兼容最好的。