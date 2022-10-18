# React生命周期

## 生命周期函数概念
React主要就是通过构建可复用组件来构建用户界面，通过状态渲染对应界面，每个组件都有自己的生命周期，它规定了组件的状态和方法需要在哪个阶段改变和执行

生命周期的钩子函数通俗的说就是在某一个时刻会被自动调用执行的函数
## 生命周期的三个阶段
* Mounting：已插入真实DOM（加载阶段）
* Updating：正在被重新渲染（更新阶段）
* Unmounting：已移出真实DOM（卸载阶段）
## React生命周期分类
### Mount
* constructor()
* render()
* componentDidMount()
### Update
* getDerivedStateFromProps()
* shouldComponentUpdate()
* getSnapshotBeforeUpdate()
* render()
* componentDidUpdate()
### Unmount
* componentWillUnmount()
## 生命周期图解
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/2/3/1700ba2061c447d7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
## 生命周期执行次数
> 通过上边这张图，我们很容易得到下边的结论
### Mount
#### constructor()
> 只执行一次
#### render()
> 执行多次
#### componentDidMount()
> 只执行一次
### Update
#### getDerivedStateFromProps()
> 执行多次
#### shouldComponentUpdate()
> 执行多次
#### getSnapshotBeforeUpdate()
> 执行多次
#### render()
> 执行多次
#### componentDidUpdate()
> 执行多次
### unmount
#### componentWillUnmount()
> 有条件的执行
## Mount加载过程
### constructor
#### 解释分析
~~~
constructor()
~~~
加载的时候调用一次，可以初始化state,接受两个参数：props和context
#### 使用例子
设置初始化状态以及绑定类方法
### render
#### 解释分析
~~~
render()
~~~
挂载渲染组件
#### 使用例子
它把属性和状态作为输入并且返回(需要渲染的)元素
### componentDidMount()
#### 解释分析
~~~
componentDidMount()
~~~
组件第一次渲染已完成，此时Dom节点已经生成，可在这调用ajax请求，返回数据setState后组件会重新渲染
#### 使用例子
发起异步请求去API获取数据的好时期
## Update更新过程
### getDerivedStateFromProps
#### 解释分析
~~~
getDerivedStateFromProps(nextProps, prevState)
~~~
根据当前的props来更新组件的state,每个render都会调用此方法
#### 使用例子
触发一些回调，如动画或页面跳转等
### shouldComponentUpdate
#### 解释分析
~~~
shouldComponentUpdate(nextProps, nextState)
~~~
组件接收新的props或state时调用，return true 就会更新dom， return false就能阻止更新，主要用于性能优化(部分更新)
#### 使用例子
性能优化(部分更新)
### getSnapshotBeforeUpdate
#### 解释分析
~~~
getSnapshotBeforeUpdate(prevProps, prevState)
~~~
在元素被渲染并写入DOM之前调用，使得组件能在发生更改之前从 DOM 中捕获一些信息，此生命周期的任何返回值将作为参数传递给
componentDidUpdate()
#### 使用例子
想获得聊天窗口中的滚动位置，可以通过这个方法获取信息
### render
#### 解释分析
~~~
render()
~~~
重新挂载(渲染)组件
#### 使用例子
创建虚拟dom,进行diff算法，更新dom树都在此进行
### componentDidUpdate
#### 解释分析
~~~
componentDidUpdate(prevProps,prevState)
~~~
会在更新(dom已经更新)后会被立即调用，首次渲染不会执行此方法
#### 使用例子
可以在这里获取dom
## Unmount卸载过程
### componentWillUnmount
#### 解释分析
~~~
componentWillUnmount ()
~~~
当组件要被从界面上移除的时候，就会调用。在这个函数中，可以做一些组件相关的清理工作
#### 使用例子
取消计时器、网络请求等
## 是否使用setState()
### componentDidMount()
> 使用
### getDerivedStateFromProps()
> 使用
### shouldComponentUpdate()
> 不使用
### getSnapshotBeforeUpdate()
> 不使用
### componentDidUpdate()
> 使用
### componentWillUnmount()
> 不使用