# JS常见比较
## 1. isNaN 和 Number.isNaN 函数的区别？

- isNaN：判断传入的参数是否能被转换成数字，如果可以转换为数字，返回 false；如果不能转换为数字，返回 true
  ```js
  console.log(isNaN(null)) //false
  console.log(isNaN(true)) //false
  console.log(isNaN(false)) //false
  console.log(isNaN(0)) //false
  console.log(isNaN(undefined)) //true
  console.log(isNaN('AB')) //true
  console.log(isNaN({ a: 1 })) //true
  console.log(isNaN(NaN)) //true
  ```
- Number.isNaN：判断传入的值是否全等于 NaN，如果是 NaN，返回 true，其他值都返回 false（Es6 新加的严格判断是否===NaN）
  ```js
  console.log(Number.isNaN(null)) //false
  console.log(Number.isNaN(true)) //false
  console.log(Number.isNaN(false)) //false
  console.log(Number.isNaN(0)) //false
  console.log(Number.isNaN(undefined)) //false
  console.log(Number.isNaN('AB')) //false
  console.log(Number.isNaN({ a: 1 })) //false
  console.log(Number.isNaN(NaN)) //true
  ```

由于 NaN 是唯一一个不等于自身的值，不像其他的值，可以用相等操作符来判断是否等于自身，NaN == NaN 和 NaN === NaN 都会返回 false，所以 isNaN()就诞生了

- NaN 有两个特点：
  1. 任何与 NaN 相关的操作都会返回 NaN
  2. NaN 与任何的值都不相等，而且它与本身也不相等
- NaN 作用：可以接收一个参数，原理是先尝试将参数转换为数值型，调用的是 Number()方法来确定该参数是否“不是数值”。不是数值就会返回 true,是数值就会返回 false
- Number()方法的原理也有点复杂，具体分两种情况:
  1. 参数为原始数据类型
     原始数据类型有：数值、字符串、布尔值、undefined、null,先对参数调用 valueOf 方法，再用 Number()方法进行判断.
  2. 参数为对象
     先对参数调用 valueOf 方法，再对参数调用 toString()方法，最后用 Number()方法进行判断。
- isNaN: 当我们向 isNaN 传递一个参数，它的本意是通过 Number()方法尝试将这参数转换成 Number 类型，如果成功返回 false，如果失败返回 true。所以`isNaN只是判断传入的参数是否能转换成数字，并不是严格的判断是否等于NaN`。
- Number.isNaN: 判断传入的参数是否严格的等于 NaN(也就是 ===)
- 两者的区别: Number.isNaN 与 isNaN 最的区别是，Number.isNaN`不存在类型转换的行为`。

## 2. undefined 与 undeclared 的区别？

- undefined: 在作用域声明后没有赋值
- undeclared: 在作用域中没有申明就访问

## 3. 为什么 8.toString()会报错？

在 8.toString()这条代码里，这个.有两个解释：1、小数点；2、方法调用，所以这里产生了一个歧义。

在这里因为这个点紧跟于一个数字之后，所以按照规范，解释器就把它判断为一个小数点，这行代码就变成了一个浮点数，但是问题就产生了，toString()不是一个数字，所以编译之后就报错了。

- 实现方式：
  1. `8..toString()` 这里第一个点是表示小数点，相当于（8.0）.toString()
  2. `8 .toString()` 这里用一个空格来告诉解释器，这个.是方法调用
  3. `(8).toString()` ()的优先级高，优先解释

## 4. var、let、const 的区别？

1. var 全局作用域，可以重复定义变量，会存在变量提升
2. let 块级作用域，必须先申明再使用，不能重复定义变量，在当前代码块内有效
3. const 块级作用域，用来定义常量，使用时必须初始化(即必须赋值)不能修改(**注意**：虽然 const 变量不能修改指针，但是可以修改值，比如我们定义一个对象，我们就可以修改对象里的属性值，但是不可以重写整个对象。)，在当前代码块内有效
4. var let const 最大的区别？var 在全局作用域声明的变量会挂载在 window 对象上(`会覆盖到window对象上的某个属性`)，let,const 不会。

`暂时性死区`：TDZ，在申明前访问会报错，此时变量属于暂时性死区

**扩展**：
es5 时候只有 var 定义变量，只有全局作用域和函数作用域。es6 新增 let 和 const，存在块级作用域

- 在全局作用域中或还是在局部作用域中，使用 var 关键字声明的变量，都会被提升到该作用域的最顶部，这就是我们常说的变量提升。（因为 javaScript 引擎，在代码预编译时，javaScript 引擎会自动将所有代码里面的 var 关键字声明的语句都会提升到当前作用域的顶端）

- 什么是块级声明呢？
  1. 只在当前函数下声明的变量有效
  2. 在代码块和{ }括号之内有效

## 5. null 和 undefined 的区别？

- 相同点：
  `undefined` 和 `null` 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 `undefined` 和 `null`
- 不同点：
  1. `null` 转换成数字是 `0`, `undefined` 转换数字是 `NaN`
  2. `undefined` 代表的含义是未定义， `null` 代表的含义是空对象
  3. `typeof null` 返回 `’object’`，`typeof undefined` 返回 `’undefined’`

**扩展**：为什么`typeof null` 为 `object`？

这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。
