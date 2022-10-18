# vue生命周期
## 生命周期介绍</font>
简单说就是一个组件从开始到最后消亡所经历的各种状态，就是一个组件的生命周期
## vue的生命周期图
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/6/16c65f1e4f5cdde4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## beforeCreate（创建前）
> beforeCreate（初始化页面前）

详情：实例初始化之后，组件被创建时，这时候 el，data，message 都是 underfined

场景：可以加入 loading 事件；在服务器端的应用场景中，这个时候发送数据请求比较多一些

---
## created（创建后）
> created（初始化界面后）

详情：实例创建完成后，data、methods 被初始化

场景：结束 loading 事件；推荐这个时候发送请求数据，尤其是返回的数据与绑定事件有关时	

---
## beforeMount（载入前）
> beforeMount（渲染dom前）

详情：完成el和data初始化，在挂载开始之前被调用

场景：可以发送数据请求

注意：在服务器端渲染期间不会被调用

---
## mounted（载入后）
> mounted（渲染dom后）

详情：vue实例已经挂载到页面中

场景：获取 el 中 DOM 元素，进行 DOM 操作；如果返回的数据操作依赖 DOM 完成，推荐这个时候发送数据请求

注意：在服务器端渲染期间不会被调用

---
## beforeUpdate（更新前）
> beforeUpadated（更新数据前）

详情：数据更新时调用

场景：挂载完成之前访问现有DOM，比如手动移除已添加的事件监听器；也可以进一步修改数据

注意：在服务器渲染期间不会被调用，只有初次渲染会在服务端调用

---
## updated（更新后）
> updated（更新数据后）

详情：由于数据更改，重新渲染时调用

场景：可执行依赖与DOM的操作

注意：服务器端渲染期间不会被调用

---
## beforeDestory（销毁前）
> beforeDestory（卸载组件前）

详情：实例销毁之前调用

场景：实例销毁之前，执行清理任务，比如：清除定时器等

注意：服务器端渲染期间不会被调用

---
## destoryed（销毁后）
> destroyed（卸载组件后）

详情：vue实例销毁后调用。调用后，Vue实例指示的所有东西都会被解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

场景：提示已删除

注意：服务器端渲染期间不会被调用

---
## 生命周期代码的执行效果
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
</head>
<body>

<div id="app">
    <p>{{ message }}</p>
    <button v-on:click="change()">change</button>
    <button v-on:click="destroy()">destroy</button>
</div>

<script type="text/javascript">

    var app = new Vue({
        el: '#app',
        data: {
            message: 18
        },
        beforeCreate: function () {
            console.group('beforeCreate 创建前');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        created: function () {
            console.group('created 创建完毕');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data + JSON.stringify(this.$data));
            console.log("message: " + this.message)
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        mounted: function () {
            console.group('mounted 挂载结束');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        updated: function () {
            console.group('updated 更新完成');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        destroyed: function () {
            console.group('destroyed 销毁完成');
            console.log("el: " + this.$el);
            console.log("data: " + this.$data);
            console.log("message: " + this.message)
        },
        methods: {
            change() {
                app.message++;
            },
            destroy() {
                app.$destroy();
            }
        }
    })
</script>
</body>
</html>
```
页面运行效果

![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/7/16c6abe45528908b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

点击change的效果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/7/16c6ac036f655af3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

点击destroy的效果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/7/16c6ac0abe416945~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)