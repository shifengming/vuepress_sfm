# BFC
BFC全英文拼写为 Block Formatting Context 直译为“块级格式化上下文”

## BFC的原理
1、内部的box会在垂直方向，一个接一个的放置

2、每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）

3、box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠

4、bfc的区域不会与浮动区域的box重叠

5、bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的
计算bfc高度的时候，浮动元素也会参与计算

## 创建BFC
1、float属性不为none（脱离文档流）

2、position为absolute或fixed

3、display为inline-block,table-cell,table-caption,flex,inine-flex

4、overflow不为visible

5、根元素

## BFC应用场景
1、自适应两栏布局

2、清除内部浮动

3、防止垂直margin重叠