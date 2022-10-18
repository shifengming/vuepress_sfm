# this理解

**this 永远指向最后调用它的那个对象**

> this 的指向分以下几种情况：

- 默认绑定: 浏览器中函数体内的 this 默认绑定到全局对象 window 当中，node 环境下是 gobal 对象，use strict 下两个都是 undefined
- 隐式绑定: 如果函数调用时，前面存在调用它的对象，那么 this 就会隐式绑定到这个对象上
- 显式绑定: 使用 call，apply，bind 方法
- new 绑定: 使用 new 方法调用构造函数创建对象
- 箭头函数绑定: 箭头函数没有自己的 this，它的 this 是派生来的

**箭头函数**：箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined

> call 的实现原理 fn.call(thisArg, arg1, arg2, arg3 ...)

```js
Function.prototype.tmcCall = function(ctx, ...args) {
  ctx = ctx || window
  ctx.fn = this
  const result = ctx.fn(...args)
  delete ctx.fn()
  return result
}
```

> apply 的实现原理 fn.apply(thisArg, [arg1, arg2, arg3...])

```js
Function.prototype.tmcApply = function(context = window) {
  context.fn = this
  let result
  if (arguments[1]) {
    // 判断是否有第二个参数
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```

> bind 的实现原理

```js
Function.prototype.bind = function(context) {
  if (typeof this != 'function') {
    throw Error('not a function')
  }
  let _this = this
  let args = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {
      return _this.apply(this, args.concat([...arguments]))
    } else {
      return _this.apply(context, args.concat([...arguments]))
    }
  }
}
```

> instanceof 的实现原理 核心：原型链的查找

```js
function myInstanceof(left, right) {
  // 基本数据类型直接返回false
  if (typeof left !== 'object' || left == null) return false
  // getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left)
  while (true) {
    // 找到尽头还没找到
    if (proto == null) return false
    if (proto == right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
```

> 三者的区别？

- 相同点：

1. 都是用来改变函数的 `this` 指向的
2. 第一个参数都是 `this` 要指向的对象

- 不同点：

1. `call` 的参数是一个一个的，`apply` 接受数组或类数组作为参数
2. `call` 和 `apply` 在调用函数后会立即执行，`bind` 调用后会返回一个函数
