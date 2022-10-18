# Javscript继承
### 预备知识

- 1. 构造函数的属性
  ```js
  function A(name) {
    this.name = name // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1] // 实例引⽤属性 (该属性，强调私⽤，不共享)
    this.say = function() {
      // 实例引⽤属性 (该属性，强调复⽤，需要共享)
      console.log('hello')
    }
  }
  ```

**注意**：数组和⽅法都属于‘实例引⽤属性’，但是数组强调私有、不共享的。⽅法需要复⽤、共享。 在构造函数中，⼀般很少有数组形式的引⽤属性，⼤部分情况都是：`基本属性 + ⽅法`。

- 2. 什么是原型对象

简单来说，每个函数都有 `prototype` 属性，它就是`原型对象`，通过函数实例化出来的对象有个 `__proto__` 属性，指向`原型对象`。

    ~~~js
    let a = new A()
    a.__proto__ == A.prototype
    // prototype的结构如下
    A.prototype = {
        constructor: A,
        ...其他的原型属性和⽅法
    }
    ~~~

- 3. 原型对象的作用

  原型对象的⽤途是`为每个实例对象存储共享的⽅法和属性`，它仅仅是⼀个普通对象⽽已。**并且所有的实例是共享同⼀个原型对象，因此有别于实例⽅法或属性，原型对象仅有⼀份**。⽽实例有很多份，且实例属性和⽅法是独⽴的。在构造函数中：为了属性(实例基本属性)的私有性、以及⽅法(实 例引⽤属性)的复⽤、共享。我们提倡：

  - 将属性封装在构造函数中
  - 将方法定义在原型对象上

  ```js
  function A(name) {
    this.name = name // (该属性，强调私有，不共享)
  }
  A.prototype.say = function() {
    // 定义在原型对象上的⽅法 (强调复⽤，需要共享)
    console.log('hello')
  }
  // 不推荐的写法：[原因](https://blog.csdn.net/kkkkkxiaofei/article/details/46474303)
  A.prototype = {
    say: function() {
      console.log('hello')
    },
  }
  ```

### 方式一、原型链继承

- 核⼼：将⽗类实例作为⼦类原型
- 优点：⽅法复⽤
  1. 由于⽅法定义在⽗类的原型上，复⽤了⽗类构造函数的⽅法。⽐如 say ⽅法。
- 缺点：

  1. 创建⼦类实例的时候，不能传⽗类的参数（⽐如 name）。
  2. ⼦类实例共享了⽗类构造函数的引⽤属性，⽐如 arr 属性。
  3. ⽆法实现多继承。

  ```js
  function Parent(name) {
    this.name = name || '⽗亲' // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1] // (该属性，强调私有)
  }
  Parent.prototype.say = function() {
    // -- 将需要复⽤、共享的⽅法定义在⽗类原型上
    console.log('hello')
  }
  function Child(like) {
    this.like = like
  }
  Child.prototype = new Parent() // 核⼼，但此时Child.prototype.constructor==Parent
  Child.prototype.constructor = Child // 修正constructor指向
  let boy1 = new Child()
  let boy2 = new Child()
  // 优点：共享了⽗类构造函数的say⽅法
  console.log(boy1.say(), boy2.say(), boy1.say === boy2.say) // hello , hello , true
  // 缺点1：不能向⽗类构造函数传参
  console.log(boy1.name, boy2.name, boy1.name === boy2.name) // ⽗亲，⽗亲，true
  // 缺点2: ⼦类实例共享了⽗类构造函数的引⽤属性，⽐如arr属性
  boy1.arr.push(2) // 修改了boy1的arr属性，boy2的arr属性，也会变化，因为两个实例的原型上(Child.prototype)有了⽗类构造函数的实例属性arr； 所以只要修改了boy1.arr，boy2.arr的属性也会变化。
  console.log(boy2.arr) // [1,2]

  注意1：修改boy1的name属性，是不会影响到boy2.name。因为设置boy1.name相当于在⼦类实例新增了name属性。

  注意2： console.log(boy1.constructor); // Parent 你会发现实例的构造函数居然是Parent。 ⽽实际上，我们希望⼦类实例的构造函数是Child,所以要记得修复构造函数指向。 修复如下：Child.prototype.constructor = Child;
  ```

### 方式二、借用构造函数

- 核⼼：借⽤⽗类的构造函数来增强⼦类实例，等于是复制⽗类的实例属性给⼦类。
- 优点：实例之间独⽴
  1. 创建⼦类实例，可以向⽗类构造函数传参数。
  2. ⼦类实例不共享⽗类构造函数的引⽤属性。如 arr 属性
  3. 可实现多继承（通过多个 call 或者 apply 继承多个⽗类）
- 缺点：

  1. ⽗类的⽅法不能复⽤（由于⽅法在⽗构造函数中定义，导致⽅法不能复⽤(因为每次创建⼦类实例都要创建⼀遍⽅法)。 ⽐如 say ⽅法。(⽅法应该要复⽤、共享)）
  2. ⼦类实例，继承不了⽗类原型上的属性。(因为没有⽤到原型)

  ```js
  function Parent(name) {
    this.name = name // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1] // (该属性，强调私有)
    this.say = function() {
      // 实例引⽤属性 (该属性，强调复⽤，需要共享)
      console.log('hello')
    }
  }
  function Child(name, like) {
    Parent.call(this, name) // 核⼼ 拷⻉了⽗类的实例属性和⽅法
    this.like = like
  }
  let boy1 = new Child('⼩红', 'apple')
  let boy2 = new Child('⼩明', 'orange')
  // 优点1：可向⽗类构造函数传参
  console.log(boy1.name, boy2.name) // ⼩红， ⼩明
  // 优点2：不共享⽗类构造函数的引⽤属性
  boy1.arr.push(2)
  console.log(boy1.arr, boy2.arr) // [1,2] [1]
  // 缺点1：⽅法不能复⽤
  console.log(boy1.say === boy2.say) // false (说明，boy1和boy2的say⽅法是独⽴，不是共享的)
  // 缺点2：不能继承⽗类原型上的⽅法
  Parent.prototype.walk = function() {
    // 在⽗类的原型对象上定义⼀个walk⽅法。
    console.log('我会⾛路')
  }
  boy1.walk // undefined (说明实例，不能获得⽗类原型上的⽅法)
  ```

### 方式三、组合继承

- 核⼼：通过调⽤⽗类构造函数，继承⽗类的属性并保留传参的优点；然后通过将⽗类实例作为 ⼦类原型，实现函数复⽤。
- 优点：
  1. 保留构造函数的优点：创建⼦类实例，可以向⽗类构造函数传参数。
  2. 保留原型链的优点：⽗类的⽅法定义在⽗类的原型对象上，可以实现⽅法复⽤。
  3. 不共享⽗类的引⽤属性。⽐如 arr 属性
- 缺点：
  1. 由于调⽤了 2 次⽗类的构造⽅法，会存在⼀份多余的⽗类实例属性，具体原因⻅⽂末。

**注意**：'组合继承'这种⽅式，要记得修复 Child.prototype.constructor 指向 第⼀次 Parent.call(this);从⽗类拷⻉⼀份⽗类实例属性，作为⼦类的实例属性，第⼆次 Child.prototype = new Parent();创建⽗类实例作为⼦类原型，Child.prototype 中的⽗类属性和⽅法 会被第⼀次拷⻉来的实例属性屏蔽掉，所以多余。

    ~~~js
    function Parent(name) {
        this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
        this.arr = [1]; // (该属性，强调私有)
    }
    Parent.prototype.say = function() { // --- 将需要复⽤、共享的⽅法定义在⽗类原型上
        console.log('hello')
    }
    function Child(name,like) {
        Parent.call(this,name,like) // 核⼼ 第⼆次
        this.like = like;
    }
    Child.prototype = new Parent() // 核⼼ 第⼀次
    Child.prototype.constructor = Child // 修正constructor指向
    let boy1 = new Child('⼩红','apple')
    let boy2 = new Child('⼩明','orange')
    // 优点1：可以向⽗类构造函数传参数
    console.log(boy1.name,boy1.like); // ⼩红，apple
    // 优点2：可复⽤⽗类原型上的⽅法
    console.log(boy1.say === boy2.say) // true
    // 优点3：不共享⽗类的引⽤属性，如arr属性
    boy1.arr.push(2)
    console.log(boy1.arr,boy2.arr); // [1,2] [1] 可以看出没有共享arr属性。
    // 缺点1：由于调⽤了2次⽗类的构造⽅法，会存在⼀份多余的⽗类实例属性
    ~~~

    其实Child.prototype = new Parent() console.log(Child.prototype.__proto__ === Parent.prototype); // true 因为Child.prototype等于Parent的实例，所以__proto__指向Parent.prototype

### 方式四、组合继承优化 1

- 核⼼： 通过这种⽅式，砍掉⽗类的实例属性，这样在调⽤⽗类的构造函数的时候，就不会初始化两次实 例，避免组合继承的缺点。
- 优点：
  1. 只调⽤⼀次⽗类构造函数。
  2. 保留构造函数的优点：创建⼦类实例，可以向⽗类构造函数传参数。
  3. 保留原型链的优点：⽗类的实例⽅法定义在⽗类的原型对象上，可以实现⽅法复⽤。
- 缺点：
  1. 修正构造函数的指向之后，⽗类实例的构造函数指向，同时也发⽣变化(这是我们不希望的)

**注意**：'组合继承优化 1'这种⽅式，要记得修复 Child.prototype.constructor 指向 原因是：不能判断⼦类实例的直接构造函数，到底是⼦类构造函数还是⽗类构造函数。

    ~~~js
    function Parent(name) {
        this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
        this.arr = [1]; // (该属性，强调私有)
    }
    Parent.prototype.say = function() { // --- 将需要复⽤、共享的⽅法定义在⽗类原型上
        console.log('hello')
    }
    function Child(name,like) {
        Parent.call(this,name,like) // 核⼼
        this.like = like;
    }
    Child.prototype = Parent.prototype // 核⼼ ⼦类原型和⽗类原型，实质上是同⼀个
    <!--这⾥是修复构造函数指向的代码-->
    Child.prototype.constructor = Child
    let boy1 = new Child('⼩红','apple')
    let boy2 = new Child('⼩明','orange')
    let p1 = new Parent('⼩爸爸')
    // 优点1：可以向⽗类构造函数传参数
    console.log(boy1.name,boy1.like); // ⼩红，apple
    // 优点2：可复⽤⽗类原型上的⽅法
    console.log(boy1.say === boy2.say) // true
    // 缺点1：当修复⼦类构造函数的指向后，⽗类实例的构造函数指向也会跟着变了。
    没修复之前：console.log(boy1.constructor); // Parent
    修复代码：Child.prototype.constructor = Child
    修复之后：console.log(boy1.constructor); // Child
    console.log(p1.constructor);// Child 这⾥就是存在的问题(我们希望是Parent)
    具体原因：因为是通过原型来实现继承的，Child.prototype的上⾯是没有constructor属性的， 就会往上找，这样就找到了Parent.prototype上⾯的constructor属性；当你修改了⼦类实例的 constructor属性，所有的constructor的指向都会发⽣变化。
    ~~~

### 方式五、组合继承优化 2 ⼜称 寄⽣组合继承 --- 完美⽅式

    ~~~js
    function Parent(name) {
        this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
        this.arr = [1]; // (该属性，强调私有)
    }
    Parent.prototype.say = function() { // --- 将需要复⽤、共享的⽅法定义在⽗类原型上
        console.log('hello')
    }
    function Child(name,like) {
        Parent.call(this,name,like) // 核⼼
        this.like = like;
    }
    // 核⼼ 通过创建中间对象，⼦类原型和⽗类原型，就会隔离开。不是同⼀个啦，有效避免了⽅式4的缺点。
    Child.prototype = Object.create(Parent.prototype) // 这⾥是修复构造函数指向的代码
    Child.prototype.constructor = Child
    let boy1 = new Child('⼩红','apple')
    let boy2 = new Child('⼩明','orange')
    let p1 = new Parent('⼩爸爸')
    注意：这种⽅法也要修复构造函数的
    修复代码：Child.prototype.constructor = Child
    修复之后：console.log(boy1.constructor); // Child
    console.log(p1.constructor); // Parent 完美😊
    ~~~

### 其他相关问题

- Object.create(object, propertiesObject)

  Object.create()⽅法创建⼀个新对象，使⽤第⼀个参数来提供新创建对象的`__proto__`（以第⼀个参 数作为新对象的构造函数的原型对象）； ⽅法还有第⼆个可选参数，是添加到新创建对象的属性，写法如下。

  ```js
  const a = Object.create(Person.prototype, {
    age: {
      value: 12,
      writable: true,
      configurable: true,
    },
  })
  ```

  **扩展**：new 与 Object.create() 的区别？

  new 产⽣的实例，优先获取构造函数上的属性；构造函数上没有对应的属性，才会去原型上查找； 如果构造函数中以及原型中都没有对应的属性，就会报错。

  Object.create() 产⽣的对象，只会在原 型上进⾏查找属性，原型上没有对应的属性，就会报错。

  ```js
  let Base1 = function() {
    this.a = 1
  }
  let o1 = new Base1()
  let o2 = Object.create(Base1.prototype)
  console.log(o1.a) // 1
  console.log(o2.a) // undefined
  let Base2 = function() {}
  Base2.prototype.a = 'aa'
  let o3 = new Base2()
  let o4 = Object.create(Base2.prototype)
  console.log(o3.a) // aa
  console.log(o4.a) // aa
  let Base3 = function() {
    this.a = 1
  }
  Base3.prototype.a = 'aa'
  let o5 = new Base3()
  let o6 = Object.create(Base3.prototype)

  console.log(o5.a) // 1
  console.log(o6.a) // aa
  ```

- new 的过程？

  1. 创建新对象（如 obj）。
  2. 将新对象的*proto*指向构造函数的 prototype 对象。
  3. 执⾏构造函数，为这个新对象添加属性，并将 this 指向创建的新对象 obj。
  4. 当构造函数本⾝返回值为对象时，返回该对象，否则返回新对象。

  ```js
  //创建Person构造函数，参数为name,age
  function Person(name,age){
      this.name = name;
      this.age = age;
  }
  function _new(){
      //1.拿到传⼊的参数中的第⼀个参数，即构造函数名Func
      var Func = [].shift.call(arguments);
      //2.创建⼀个空对象obj,并让其继承Func.prototype
      var obj = Object.create(Func.prototype);
      //3.执⾏构造函数，并将this指向创建的空对象obj
      const result = Func.apply(obj,arguments)
      //4.当函数也有返回值且为对象时返回该对象，否则返回创建的新对象obj
      return (result instanceOf Object ? result : obj)
  }
  let ming = _new(Person,'tmc', 18);
  console.log(ming);
  ```

  `[].shift.call`表⽰删除并返回`arguments[0]`。也可以通过以下⽅式取得函数名和函数的参数：

  ```js
  function _new(Func, ...params){ ... }
  ```

  `Object.create`创建`obj`，使得`obj.__proto__ = Func.prototype`

- 为什么‘组合继承’这种⽅式，会执⾏两次⽗类构造函数？

  1. 第⼀次：Child.prototype = new Parent()

     new 的过程’的第三步，其实就是执⾏了⽗类构造函数。

  2. 第⼆次：Parent.call(this,name,like)

     call 的作⽤是改变函数执⾏时的上下⽂。⽐如：A.call(B)。其实，最终执⾏的还是 A 函数，只不过是 ⽤ B 来调⽤⽽已。所以，你就懂了 Parent.call(this,name,like) ,也就是执⾏了⽗类构造函数 Person。
