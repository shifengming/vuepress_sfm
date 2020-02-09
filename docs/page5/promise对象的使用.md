# promise对象的使用


## 什么是异步编程？

![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/19/16fbc56fce735467?w=255&h=255&f=jpeg&s=8334)
* 从服务器获取数据，这个过程就叫做异步编程

* 在node.js中去读取文件，这个过程也是异步的

## 关于异步的解决方案目前有四种：
* callback(回调函数)
* generato + co库
* promise
* async+await

今天就来为大家重要讲解一下promise,彻底的弄懂它
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/19/16fbc5942117c73c?w=500&h=500&f=jpeg&s=26811)
# 学习之前
在学习之前我们需要弄懂以下的：
* 了解Promise
* es6   (主要是es6的箭头函数和es6的类)
* this的指向问题
* 关于promise/A+规范
~~~
参考文档：https://promisesaplus.com/
~~~
# 术语
## 解决（fulfill）

指一个 promise 成功时进行的一系列操作，如状态的改变、回调的执行。虽然规范中用 fulfill 来表示解决，但在后世的 promise 实现多以 resolve 来指代之

## 拒绝（reject）

指一个 promise失败时进行的一系列操作

## 终值（eventual value）

所谓终值，指的是 promise 被解决时传递给解决回调的值，由于 promise 有一次性的特征，因此当这个值被传递时，标志着 promise 等待态的结束，故称之终值，有时也直接简称为值（value）

## 据因（reason）

也就是拒绝原因，指在 promise 被拒绝时传递给拒绝回调的值

## Promise

promise是一个拥有then方法的对象或函数，其行为符合本规范

## thenable

是一个定义了then方法的对象或函数

## 值（value）

指任何JavaScript的合法值（包括undefined、thenable和promise）

## 异常（exception）

是适用throw语句抛出的一个值
# 异步回调
## 回调地域
在需要多个操作的时候，会导致多个回调函数嵌套，导致代码不够直观，就是常说的回调地狱
## 并行结果
如果几个异步操作之间并没有前后顺序之分,但需要等多个异步操作都完成后才能执行后续的任务，无法实现并行节约时间
# promise理解
Promise本意是承诺，在程序中的意思就是承诺我过一段时间后会给你一个结果：

什么时候会用到过一段时间？

是异步操作

异步是指可能比较长时间才有结果的才做，例如网络请求、读取本地文件等
# Promise的状态
> 一个Promise的当前状态必须为以下三种状态中的一种

## 等待态（Pending）

> 处于等待态时，promise需满足以下条件：

可以迁移至执行态或拒绝态

## 执行态（Fulfilled）

> 处于执行态时，promise 需满足以下条件：

不能迁移至其他任何状态

必须拥有一个不可变的终值

## 拒绝态（Rejected）

> 处于拒绝态时，promise需要满足以下条件

不能迁移至其他任何状态

必须拥有一个不可变的据因

# Then方法

> 一个promise必须提供一个then方法以访问其当前值、终值和据因

**promise的then方法接受两个参数：**

~~~
promise.then(onFulfilled, onRejected)
~~~

**onFulfilled 和 onRejected 都是可选参数**

* 如果onFullfilled不是函数，其必须被忽略
* 如果onRejected不是函数，其必须被忽略

## onFulfilled特性
> 如果onFulfilled是函数：
* 当promise执行结束后其必须被调用，其第一个参数为promise的终值
* 在promise执行结束前其不可被调用
* 其调用次数不可超过一次

## onRejected特性
> 如果onRejected是函数：
* 当 promise 被拒绝执行后其必须被调用，其第一个参数为 promise 的据因
* 在 promise 被拒绝执行前其不可被调用
* 其调用次数不可超过一次

## 调用时机

onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用

## 调用要求

onFulfilled 和 onRejected 必须被作为函数调用（即没有 this 值）

## 多次调用

> then 方法可以被同一个promise调用多次

* 当 promise 成功执行时，所有 onFulfilled 需按照其注册顺序依次回调

* 当 promise 被拒绝执行时，所有的 onRejected 需按照其注册顺序依次回调

## 返回

then 方法必须返回一个 promise 对象
# 准备
> 在开始之前我们需要创建三个文件

* index.js进行原生的Promise演示
* promise.js进行自定义的Promise演示
* test.js是对promise.js进行测试
# promise初体验
## 一个最基本的Promise长什么样？
> 代码如下：

<font face="楷体">**index.js**</font>
~~~
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    })
}).then(value => {
    console.log('value',value)
},reason => {
    console.log('reason',reason)
})
~~~

<font face="楷体">**运行结果：**</font>
~~~
value 1
~~~

## 原生的promise它的参数不是函数的时，会发生什么？
> 代码如下：

<font face="楷体">**index.js**</font>
~~~
new Promise(1)
~~~
<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }
    }
}
~~~
<font face="楷体">**运行结果：**</font>
~~~
Promise resolver 1 is not a function
~~~
## 这是一个最基本的promise
> 代码如下

<font face="楷体">**index.js**</font>
~~~
new Promise((resolve, reject) => {
    console.log('早上好！')
        resolve(1)
})
~~~
<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }
        const resolve = function (){

        }
        const reject = function (){

        }
        executor(resolve,reject)
    }
}
~~~
<font face="楷体">**运行结果：**</font>
~~~
早上好！
~~~
## 再把上边代码测试一下
> 代码如下：

<font face="楷体">**promise.js**</font>
~~~
class Promise {
  constructor(executor){
      //不能相信用户的输入，所以这里要做参数效验
      if(typeof executor !== 'function'){
          throw new TypeError('Promise resolver ${executor} is not a function')
      }
      //记录状态和值的改变
      //初始化值
      this.value = null //终值
      this.reason = null //拒因
      this.state = 'pending' //状态

      const resolve = value => {
          //成功后的一系列操作（状态的改变，成功回调的执行）
          if(this.state === 'pending'){
              //状态进行改变
              this.state = 'fulfilled'
              //执行成功的回调，把终值进行赋值
              this.value = value
          }
      }
      const reject = reason =>{
          //失败后的一系列操作（状态的改变，失败回调的执行）
          if(this.state === 'pending'){
              //状态进行改变
              this.state = 'rejected'
              //执行成功的回调，把据因进行赋值
              this.reason = reason
          }
      }
      executor(resolve,reject)
  }
}
module.exports = Promise
~~~
<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

new Promise((resolve, reject) => {
    console.log('早上好！')
        resolve(1)
})
~~~
<font face="楷体">**运行结果：**</font>
~~~
早上好！
~~~
# promise初步实现
## 把上边的代码进行优化
> 优化后的代码如下

<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //不能相信用户的输入，所以这里要做参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.initValue()
        this.initBind()

        executor(this.resolve,this.reject)
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    //进行代码的优化
    initValue(){
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = 'pending' //状态
    }
    resolve(value){
        //成功后的一系列操作（状态的改变，成功回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = 'fulfilled'
            //执行成功的回调，把终值进行赋值
            this.value = value
        }
    }
    reject(reason){
        //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = 'rejected'
            //执行成功的回调，把据因进行赋值
            this.reason = reason
        }
    }
    then() {}
}
module.exports = Promise
~~~
<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

new Promise((resolve, reject) => {
    console.log('早上好！')
        resolve(1)
})
~~~
<font face="楷体">**运行结果：**</font>
~~~
早上好！
~~~
## 测试通过后，下一步then方法
> 代码如下：

<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //不能相信用户的输入，所以这里要做参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.initValue()
        this.initBind()

        executor(this.resolve,this.reject)
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    //进行代码的优化
    initValue(){
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = 'pending' //状态
    }
    resolve(value){
        //成功后的一系列操作（状态的改变，成功回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = 'fulfilled'
            //执行成功的回调，把终值进行赋值
            this.value = value
        }
    }
    reject(reason){
        //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = 'rejected'
            //执行成功的回调，把据因进行赋值
            this.reason = reason
        }
    }
    then(onFulfilled, onRejected) {
        //  参数效验
        if (typeof onFulfilled !== 'function'){
            onFulfilled = function(value) {
                return value
            }
        }
        if (typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
        if(this.state === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.state === 'rejected'){
            onRejected(this.reason)
        }
    }
}
module.exports = Promise
~~~

<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

new Promise((resolve, reject) => {
    console.log('早上好！')
        resolve(1)
}).then(value=> {
    console.log('value',value)
},reason => {   
    console.log('reason',value)
})
~~~
<font face="楷体">**运行结果：**</font>
~~~
早上好！
value 1
~~~
## 将上边的代码再次进行优化
> 代码如下：

<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //不能相信用户的输入，所以这里要做参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.initValue()
        this.initBind()

        executor(this.resolve,this.reject)
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    //进行代码的优化
    initValue(){
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = Promise.PENDING //状态
    }
    resolve(value){
        //成功后的一系列操作（状态的改变，成功回调的执行）
        if(this.state === Promise.PENDING){
            //状态进行改变
            this.state = Promise.FULFILLED
            //执行成功的回调，把终值进行赋值
            this.value = value
        }
    }
    reject(reason){
        //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = Promise.REJECTED
            //执行成功的回调，把据因进行赋值
            this.reason = reason
        }
    }
    then(onFulfilled, onRejected) {
        //  参数效验
        if (typeof onFulfilled !== 'function'){
            onFulfilled = function(value) {
                return value
            }
        }
        if (typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
        if(this.state === Promise.FULFILLED){
            onFulfilled(this.value)
        }
        if(this.state === Promise.REJECTED){
            onRejected(this.reason)
        }
    }
}
Promise.PENDING = 'pending'
Promise.FULFILLED = 'fulfilled'
Promise.REJECTED = 'reject'

module.exports = Promise
~~~
<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

new Promise((resolve, reject) => {
    console.log('早上好！')
        resolve(1)
}).then(value=> {
    console.log('value',value)
},reason => {   
    console.log('reason',value)
})
~~~

<font face="楷体">**运行结果：**</font>
~~~
早上好！
value 1
~~~
# 异步解决实现
## 先看一下这段代码的执行顺序是什么样的？
> 代码如下

<font face="楷体">**index.js**</font>
~~~
console.log('1')
new Promise((resolve, reject) => {
    console.log('2')
        resolve(1)
    }).then(value => {
    console.log('4')
    console.log('value',value)
},reason => {
    console.log('reason',reason)
})
console.log('3')
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
2
3
4
value 1
~~~
## 在测试文件运行这段代码执行顺序会是什么样？
> 代码如下

<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

console.log('1')
new Promise((resolve, reject) => {
    console.log('2')
        resolve(1)
    }).then(value => {
    console.log('4')//立即执行了
    console.log('value',value)//立即执行了
},reason => {
    console.log('reason',reason)
})
console.log('3')
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
2
4
value 1
3
~~~
## 如何来模拟异步呢？

在promise.js里面添加代码，利用setTimeout,再运行test.js
> 代码如下：

<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //不能相信用户的输入，所以这里要做参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.initValue()
        this.initBind()

        try{
            executor(this.resolve, this.reject)
        }catch(e){
            this.reject(e)
        }
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    //进行代码的优化
    initValue(){
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = Promise.PENDING //状态
    }
    resolve(value){
        //成功后的一系列操作（状态的改变，成功回调的执行）
        if(this.state === Promise.PENDING){
            //状态进行改变
            this.state = Promise.FULFILLED
            //执行成功的回调，把终值进行赋值
            this.value = value
        }
    }
    reject(reason){
        //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = Promise.REJECTED
            //执行成功的回调，把据因进行赋值
            this.reason = reason
        }
    }
    then(onFulfilled, onRejected) {
        //  参数效验
        if (typeof onFulfilled !== 'function'){
            onFulfilled = function(value) {
                return value
            }
        }
        if (typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
        if(this.state === Promise.FULFILLED){
            setTimeout(() => {
                onFulfilled(this.value)
            })
        }
        if(this.state === Promise.REJECTED){
            setTimeout(() => {
                onRejected(this.reason)
            })
        }
    }
}
Promise.PENDING = 'pending'
Promise.FULFILLED = 'fulfilled'
Promise.REJECTED = 'reject'

module.exports = Promise
~~~
<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

console.log('1')
new Promise((resolve, reject) => {
    console.log('2')
        resolve(1)
    }).then(value => {
    console.log('4')
    console.log('value',value)
},reason => {
    console.log('reason',reason)
})
console.log('3')
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
2
3
4
value 1
~~~
## 假如在test.js里面抛出一个异常，会是怎么样？
> 代码如下：

<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

console.log('1')
new Promise((resolve, reject) => {
    throw new Error('You write wrong')
    // console.log('2')
        resolve(1)
    }).then(value => {
    console.log('4')
    console.log('value',value)
},reason => {
    console.log('reason',reason)
})
console.log('3')
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
3
reason Error: You write wrong
~~~
上边是直接在最外层进行一个抛出
## 假设我们把代码放原生的promise里，会是怎样？
> 代码如下：

<font face="楷体">**index.js**</font>
~~~
const Promise = require('./promise.js')

console.log('1')
new Promise((resolve, reject) => {
    throw new Error('You write wrong')
    // console.log('2')
        resolve(1)
    }).then(value => {
    console.log('4')
    console.log('value',value)
},reason => {
    console.log('reason',reason)
})
console.log('3')
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
3
reason Error: You write wrong
~~~
## 如果是test.js里是异步的会是什么样？
> 代码如下：

<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

console.log('1')
new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hello!')
            resolve(1)
        })
    }).then(value => {
    console.log('4')
    console.log('value',value)
},reason => {
    console.log('reason',reason)
})
console.log('3')
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
3
hello!
~~~
**不知道大家有没有发现 '4' 没有执行，这是什么原因呢？**

因为此时并没有直接进入setTimeout里面，而是进行了.then操作
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/18/16fb947d198dd677?w=384&h=394&f=png&s=31144)
我们在promise.js里面看到，

此时.then操作的状态等于'pending',

它不等于'fulfilled',也不等于'reject',

所以它并没有执行这两个回调函数中的任意一个，所以.then方法并没有执行
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/18/16fb9486f497074e?w=624&h=508&f=png&s=45586)
**怎么解决这个问题呢？**

> 首先在promise.js里面肯定要追加一个状态的判断

## 在promise.js里追加一个状态的判断
> 代码如下：

<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //不能相信用户的输入，所以这里要做参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.initValue()
        this.initBind()

        try{
            executor(this.resolve, this.reject)
        }catch(e){
            this.reject(e)
        }
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    //进行代码的优化
    initValue(){
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = Promise.PENDING //状态
        this.onFulfilledCallbacks = []//成功回调
        this.onRejectedCallbacks = [] //失败回调
    }
    resolve(value){
        //成功后的一系列操作（状态的改变，成功回调的执行）
        if(this.state === Promise.PENDING){
            //状态进行改变
            this.state = Promise.FULFILLED
            //执行成功的回调，把终值进行赋值
            this.value = value
            //成功或者失败以后进行这两个数组的执行
            this.onFulfilledCallbacks.forEach((fn) => fn(this.value)
            )}
    }
    reject(reason){
        //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = Promise.REJECTED
            //执行成功的回调，把据因进行赋值
            this.reason = reason
            this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        }
    }
    then(onFulfilled, onRejected) {
        //  参数效验
        if (typeof onFulfilled !== 'function'){
            onFulfilled = function(value) {
                return value
            }
        }
        if (typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
        if(this.state === Promise.FULFILLED){
            setTimeout(() => {
                onFulfilled(this.value)
            })
        }
        if(this.state === Promise.REJECTED){
            setTimeout(() => {
                onRejected(this.reason)
            })
        }
        //在promise.js里面肯定要追加一个状态的判断
        if(this.state === Promise.PENDING){
            this.onFulfilledCallbacks.push((value) => {
                setTimeout(() => {
                    onFulfilled(value)
                })
            })
            this.onRejectedCallbacks.push((reason) => {
                setTimeout(() => {
                    onRejected(this.reason)
                })
            })
        }
    }
}
Promise.PENDING = 'pending'
Promise.FULFILLED = 'fulfilled'
Promise.REJECTED = 'reject'

module.exports = Promise
~~~
<font face="楷体">**运行结果：**</font>
~~~
1
3
hello!
4
value 1
~~~
# 链式调用的简单解决方案
## 如何实现链式调用
> 代码如下：

<font face="楷体">**index.js**</font>
~~~
new Promise((resolve, reject) => {
        resolve(1)
    })
    .then(
        value => {
         return 'good' + value
    },
    reason => {
        console.log('reason',reason)
    }
    )
    .then(
        value => {
        console.log('value',value)
    },
    reason => {
        console.log('reason',reason)
}
)
~~~
<font face="楷体">**运行结果：**</font>
~~~
value good1
~~~
## 如何才能做到链式调用呢？

实现链式调用，且改变了后面的then的值，必须通过新的实例

> 代码如下：

<font face="楷体">**index.js**</font>
~~~
new Promise((resolve, reject) => {
    // throw new Error('You write wrong')
    // console.log('2')
        resolve(1)
    })
    .then(
        value => {
         throw new Error('use')
         return 'good' + value
    },
    reason => {
        console.log('reason',reason)
    }
    )
    .then(
        value => {
        console.log('value',value)
    },
    reason => {
        console.log('reason',reason)
}
)
~~~
<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor){
        //不能相信用户的输入，所以这里要做参数效验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.initValue()
        this.initBind()

        try{
            executor(this.resolve, this.reject)
        }catch(e){
            this.reject(e)
        }
    }
    //绑定 this
    initBind(){
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    //进行代码的优化
    initValue(){
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = Promise.PENDING //状态
        this.onFulfilledCallbacks = []//成功回调
        this.onRejectedCallbacks = [] //失败回调
    }
    resolve(value){
        //成功后的一系列操作（状态的改变，成功回调的执行）
        if(this.state === Promise.PENDING){
            //状态进行改变
            this.state = Promise.FULFILLED
            //执行成功的回调，把终值进行赋值
            this.value = value
            //成功或者失败以后进行这两个数组的执行
            this.onFulfilledCallbacks.forEach((fn) => fn(this.value)
            )}
    }
    reject(reason){
        //失败后的一系列操作（状态的改变，失败回调的执行）
        if(this.state === 'pending'){
            //状态进行改变
            this.state = Promise.REJECTED
            //执行成功的回调，把据因进行赋值
            this.reason = reason
            this.onRejectedCallbacks.forEach(fn => fn(this.reason))
        }
    }
    then(onFulfilled, onRejected) {
        //  参数效验
        if (typeof onFulfilled !== 'function'){
            onFulfilled = function(value) {
                return value
            }
        }
        if (typeof onRejected !== 'function'){
            onRejected = function(reason){
                throw reason
            }
        }
        // 实现链式调用，且改变了后面的then的值，必须通过新的实例
        let promise2 = new Promise((resolve, reject) => {
            if(this.state === Promise.FULFILLED){
                setTimeout(() => {
                    try{
                        const x = onFulfilled(this.value)
                        resolve(x)
                    }catch(e){
                        reject(e)
                    }
                })
            }
            if(this.state === Promise.REJECTED){
                setTimeout(() => {
                    try{
                        const x = onRejected(this.reason)
                        resolve(x)
                    }catch(e){
                        reject(e)
                    }
                })
            }
            //在promise.js里面肯定要追加一个状态的判断
            if(this.state === Promise.PENDING){
                this.onFulfilledCallbacks.push((value) => {
                    setTimeout(() => {
                        try{
                            const x = onFulfilled(value)
                            resolve(x)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
                this.onRejectedCallbacks.push((reason) => {
                    setTimeout(() => {
                        try{
                            const x = onRejected(this.reason)
                            resolve(x)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
            }
        })
        return promise2
    }
}
Promise.PENDING = 'pending'
Promise.FULFILLED = 'fulfilled'
Promise.REJECTED = 'reject'
Promise.resolvePromise = function(promise2, x, resolve, reject){}

module.exports = Promise
~~~
<font face="楷体">**运行结果：**</font>
~~~
reason Error: use
~~~
# 链式调用的终极解决方案和测试
## 当返回值不是一个普通数值或一个基本类型，会是什么样情况？
> 代码如下：

<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

new Promise((resolve, reject) => {
    // throw new Error('You write wrong')
    // console.log('2')
        resolve(1)
    })
    .then(
        value => {
         return new Promise((resolve) => {
             resolve(1)
         })
    },
    reason => {
        console.log('reason',reason)
    }
    )
    .then(
        value => {
        console.log('value',value)
    },
    reason => {
        console.log('reason',reason)
}
)
~~~
<font face="楷体">**运行结果：**</font>
~~~
value Promise {
  value: 1,
  reason: null,
  state: 'fulfilled',
  onFulfilledCallbacks: [],
  onRejectedCallbacks: [],
  resolve: [Function: bound resolve],
  reject: [Function: bound reject] }
~~~
<font face="楷体" color=#CD2626>**分析结果可知：**</font>

 当x的值不是基本值的时候，而是promise实例得时候，必须等待这一个promise的时候结束，才能进行进一步执行
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/19/16fbbeeff141ee0f?w=602&h=327&f=png&s=26170)
所以规范提出了一个解决方案
针对resolvePromise的具体解决过程
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/19/16fbbf120bafe8d7?w=668&h=280&f=png&s=28283)
首先是判断promise2和x的值是否是相等的

如果相等的话，就抛出一个TypeError,是为了避免循环调用的问题

我们可以通过代码看一下：

<font face="楷体">**index.js**</font>

~~~
let p1 = new Promise((resolve) => {
    resolve(1)
})
let p2 = p1.then(() => {
    return p2
})
~~~
<font face="楷体">**运行结果：**</font>
~~~
TypeError: Chaining cycle detected for promise
~~~
链式调用出现了问题

## 在promise.js里面处理一下

<font face="楷体">**promise.js**</font>
~~~
class Promise {
    constructor(executor) {
      // 参数校检
      if (typeof executor !== 'function') {
        throw new TypeError(`Promise resolver ${executor} is not a function`)
      }
  
      this.initValue()
      this.initBind()
  
      try {
        executor(this.resolve, this.reject)
      } catch (e) {
        this.reject(e)
      }
    }
  
    // 绑定 this
    initBind() {
      this.resolve = this.resolve.bind(this)
      this.reject = this.reject.bind(this)
    }
  
    // 初始化值
    initValue() {
      this.value = null // 终值
      this.reason = null // 拒因
      this.state = Promise.PENDING // 状态
      this.onFulfilledCallbacks = [] // 成功回调
      this.onRejectedCallbacks = [] // 失败回调
    }
  
    resolve(value) {
      // 成功后的一系列操作(状态的改变, 成功回调的执行)
      if (this.state === Promise.PENDING) {
        this.state = Promise.FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn(this.value))
      }
    }
  
    reject(reason) {
      // 失败后的一系列操作(状态的改变, 失败回调的执行)
      if (this.state === 'pending') {
        this.state = Promise.REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
  
    then(onFulfilled, onRejected) {
      // 参数校检
      if (typeof onFulfilled !== 'function') {
        onFulfilled = function(value) {
          return value
        }
      }
  
      if (typeof onRejected !== 'function') {
        onRejected = function(reason) {
          throw reason
        }
      }
  
      // 实现链式调用, 且改变了后面then的值, 必须通过新的实例
      let promise2 = new Promise((resolve, reject) => {
        if (this.state === Promise.FULFILLED) {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              Promise.resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        }
  
        if (this.state === Promise.REJECTED) {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              Promise.resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        }
  
        if (this.state === Promise.PENDING) {
          this.onFulfilledCallbacks.push(value => {
            setTimeout(() => {
              try {
                const x = onFulfilled(value)
                Promise.resolvePromise(promise2, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
            })
          })
  
          this.onRejectedCallbacks.push(reason => {
            setTimeout(() => {
              try {
                const x = onRejected(this.reason)
                Promise.resolvePromise(promise2, x, resolve, reject)
              } catch (e) {
                reject(e)
              }
            })
          })
        }
      })
  
      return promise2
    }
  }
  
  Promise.PENDING = 'pending'
  Promise.FULFILLED = 'fulfilled'
  Promise.REJECTED = 'reject'
  Promise.resolvePromise = function(promise2, x, resolve, reject) {
    // x 与 promise 相等
    if (promise2 === x) {
      reject(new TypeError('Chaining cycle detected for promise'))
    }
  
    let called = false
    if (x instanceof Promise) {
      // 判断 x 为 Promise
      x.then(
        value => {
          Promise.resolvePromise(promise2, value, resolve, reject)
        },
        reason => {
          reject(reason)
        }
      )
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      // x 为对象或函数
      try {
        const then = x.then
        if (typeof then === 'function') {
          then.call(
            x,
            value => {
              if (called) return
              called = true
              Promise.resolvePromise(promise2, value, resolve, reject)
            },
            reason => {
              if (called) return
              called = true
              reject(reason)
            }
          )
        } else {
          if (called) return
          called = true
          resolve(x)
        }
      } catch (e) {
        if (called) return
        called = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  }
  
  module.exports = Promise
~~~
<font face="楷体">**test.js**</font>
~~~
const Promise = require('./promise.js')

new Promise((resolve, reject) => {
    // throw new Error('You write wrong')
    // console.log('2')
        resolve(1)
    })
    .then(
        value => {
         return new Promise((resolve) => {
             resolve(new Promise((resolve,reject) => {
                 resolve('333')
             })
             )
         })
    },
    reason => {
        console.log('reason',reason)
    }
    )
    .then(
        value => {
        console.log('then 2 value:',value)
    },
    reason => {
        console.log('reason',reason)
}
)
~~~
<font face="楷体">**运行结果：**</font>
~~~
then 2 value: 333
~~~
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/19/16fbc192d69307a2?w=1200&h=1208&f=jpeg&s=42976)
# 如何验证我们的promise是否正确

## 首先
我们需要安装一个promises-aplus-tests
~~~
npm install promises-aplus-tests
~~~
用来测试自己的promise 符不符合promisesA+规范

## 然后
把下边这段代码copy到promise.js里面
~~~
Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
module.exports = Promise;
~~~

## 最后
执行输入npx promises-aplus-tests 你要测试的文件(promise.js)
~~~
npx promises-aplus-tests promise.js
~~~
![cmd-markdown-logo](https://user-gold-cdn.xitu.io/2020/1/19/16fbc120a5289ece?w=632&h=50&f=png&s=5680)
以上，我们就完成了一个基于Promise A+规范的Promise
# 最后扩展
## 源码地址
~~~
https://github.com/shifengming/promise
~~~