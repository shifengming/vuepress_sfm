# JavaScript 数据类型

### 数据类型

1. 基本数据类型：undefined、null、boolean、string、number
2. 引用类型：object
3. 新增：Symbol

### 数据类型判断

- 方法一：`typeof`

```js
typeof 'tmc'           // string
typeof 666             // number
typeof true            // boolean
typeof undefined       // undefined
typeof null            // object
typeof [1, 2, 3]       // object
typeof {name: 'sxm'}   // object
typeof new Function()  // function
...
```

**注意**：`typeof`有以下几点需要注意：

1. 在基本类型中，除了`null`以外，使用`typeof`均可可到正确的数据类型
2. 在引用类型中，除了`function`以外，使用`typeof`检查数据类型都返回`object`类型

- 方法二：`instanceof`
  > 用来判断 xx 是否是 xx 的实例，是则返回`true`，否则返回`false` > **语法**：[对象] instanceof [构造函数]

```js
[] instanceof Array              // true
666 instanceof Number            // false
let num = new Number(666)
num instanceof Number            // true
new Date() instanceof Date       // true
new RegExp() instanceof RegExp   // true
...
```

**注意**：`instanceof`有以下几点需要注意：

1. 左侧必须是对象`object`，如果不是，直接返回`false`
2. `instanceof` 检查的是**原型**

- 方法二：`constructor`
  > `constructor` 原理是利用函数的原型对象的`constructor`属性指向其构造函数

```js
'tmc'.constructor === String             // true
false.constructor === Boolean            // true
[].constructor === Array                 // true
new Function().constructor === Function  // true
...
```

**注意**：`constructor`有以下几点需要注意：

1. `null`和`undefined`是无效对象，没有`constructor`

- 方法二：`toString`
  > `toString`是 `Object`原型上的方法，默认会返回`[[Class]]`

```js
Object.prototype.toString.call('tmc')           // [object String]
Object.prototype.toString.call(888)             // [object Number]
Object.prototype.toString.call(true)            // [object Boolean]
Object.prototype.toString.call(Symbol())        // [object Symbol]
Object.prototype.toString.call(undefined)       // [object Undefined]
Object.prototype.toString.call(null)            // [object Null]
Object.prototype.toString.call(new Function())  // [object Function]
Object.prototype.toString.call(new Date())      // [object Date]
Object.prototype.toString.call([])              // [object Array]
Object.prototype.toString.call(new RegExp())    // [object RegExp]
...
```

```sh
function checkType(content, Type) {
    return Object.prototype.toString.call(content) === `[object ${Type}]`
}

const flag = checkType('hello','String');

function checkType(Type) {
    return function(content) {
        return Object.prototype.toString.call(content) === `[object ${Type}]`
    }
}
```

**注意**：`toString`有以下几点需要注意：

1. 对于其他对象，我们需要通过 `call`、`apply`、`bind`来改变`this`的指向后才能返回正确的结果

以上四种判断数据类型的方法中，最好的方法也是笔者推荐的一种方式：`toString`!

> 扩展：obj.toString()的结果和 Object.prototype.toString.call(obj)的结果不一样，这是为什么？

这是因为 toString 为 Object 的原型方法，而 Array 、Function 等类型作为 Object 的实例，都重写了 toString 方法。不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法（Function 类型返回内容为函数体的字符串，Array 类型返回元素组成的字符串.....），而不会去调用 Object 上原型 toString 方法（返回对象的具体类型），所以采用 obj.toString()不能得到其对象类型，只能将 obj 转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用 Object 上原型 toString 方法。

**扩展**：新增两个原始数据类型

Record & Tuple：就是一个**只读**的 Object 和 Array

- 基本用法

```js
// Record
const myRecord = #{
  name: 'tmc',
  age: 27
}
// Tuple
const myTuple = #[1, 2, 3]
```

**特点**：其实就是在之前的对象和数组前面加了个#

- 特性

  1. 可读特性

  ```js
  const myRecord = #{
    name: 'tmc',
    age: 27
  }
  const myTuple = #[1, 2, 3]
  myRecord['sex'] = '男' // error
  myTuple.push(4) // error
  ```

  2. 非唯一性

  ```js
  const obj1 = {name: 'tmc'}
  const obj2 = {name: 'tmc'}
  console.log(obj1 === obj2) // false
  const arr1 = [1]
  const arr2 = [1]
  console.log(arr1 === arr2) // false
  因为每个生成的对象在内存中的地址都不一样
  const obj3 = #{name: 'tmc'}
  const obj4 = #{name: 'tmc'}
  console.log(obj1 === obj2) // true
  const arr3 = #[1]
  const arr4 = #[1]
  console.log(arr1 === arr2) // true
  只要内部内容一致，就是相等的
  ```

  3. 普通对象和数组的转换

  ```js
  const myRecord = Record({ name: 'tmc' }) // #{name: 'tmc'}
  const myTuple = Tuple([1, 2, 3]) // #[1, 2, 3]
  ```

  4. 支持扩展运算符

  ```js
  const myTuple = #[1, 2, 3]
  const myRecord = #{name: 'tmc'}

  const newTuple = #[...myTuple, 4, 5] // #[1, 2, 3, 4, 5]
  const newRecord = #{...myRecord, age: 27} // #{name: 'tmc', age: 27}
  ```

- 如何使用
  1. 安装 babel 插件
  ```sh
    # babel基本的库
    yarn add @babel/cli @babel/core @babel/preset-env -D
    # Record 和 Tuple 的Babel polyfill
    yarn add @babel/plugin-proposal-record-and-tuple @bloomberg/record-tuple-polyfill - D
  ```
  2. 根目录创建 `.babelrc`
  ```js
  {
    "presets": ["@babel/preset-env"],
    "plugins": [
      [
        "@babel/plugin-proposal-record-and-tuple",
        {
          "importPolyfill": true,
          "syntaxType": "hash"
        }
      ]
    ]
  }
  ```
  3. 直接使用
- 应用场景

  1. 用于保护一些数据，比如：函数的返回值、对象内部的静态属性...
  2. 既然具有只读的特性，即不可变对象，那应该也可以作为对象的 key 值
