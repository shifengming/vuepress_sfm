# JS数组

本文对 js中数组常用的方法和属性 进行知识点总结
## 创建数组的三种方式
1，常规方法
```
  var arr = new Array ();
  arr[0]="abc";
  arr[1]="def"
```
2，简洁方式
```
var arr = new Array("abc","def");
```
3，字面量方式
```
var arr = [];
arr=["abc","def"];
```
或者
```
var arr=["abc","def"]
```
## 数组对象的属性
属性|描述
:--:|:--:
constructor |返回对创建此对象的数组函数的引用
length|设置或返回数组中元素的数目
prototype|使您有能力向对象添加属性和方法
## 数组对象常用的方法
### concat（）

> 连接两个或更多的数组，并返回结果

例子1：

在本例中，把 concat() 中的参数连接到数组 a 中
```
var a = [1,2,3];
console.log(a.concat(4, 5));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c756443823746d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

___
例子2：

在本例中，创建了两个数组，然后使用 concat() 把它们连接起来
```
var arr = new Array(2)
arr[0] = "abc"
arr[1] = "def"

var arr2 = new Array(2)
arr2[0] = "ABC"
arr2[1] = "DEF"

console.log(arr.concat(arr2));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c7573d1f364a4b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子3：

在本例中，创建了三个数组，然后使用 concat() 把它们连接起来
```
var arr = new Array(2)
arr[0] = "abc"
arr[1] = "def"

var arr2 = new Array(2)
arr2[0] = "ghi"
arr2[1] = "jkl"

var arr3 = new Array(2)
arr3[0] = "mno"
arr3[1] = "pqr"


console.log(arr.concat(arr2, arr3));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c757a75488c9e5~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### join（）
> 把数组的所有元素放入一个字符串，元素通过指定的分隔符进行分割（注：默认是以"逗号"分割）

例子1： 

在本例中，我们创建一个数组，然后把它的所有元素放入一个字符串
```
var arr = new Array(2)
arr[0] = "abc"
arr[1] = "def"
console.log(arr.join());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f1129d196187~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2： 

在本例中，我们使用分隔符来分隔数组中的元素
```
var arr = new Array(2)
arr[0] = "abc"
arr[1] = "def"
console.log(arr.join("."));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f313eac82be2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### pop（）
> 删除并返回数组的最后一个元素

例子1：

在本例中，创建一个数组，然后删除数组的最后一个元素（注意：这也会改变数组的长度）
```
var arr = new Array(3)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "hig"
console.log(arr);
console.log(arr.pop());
console.log(arr);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f3cd00ee4d68~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### push（）
> 向数组的末尾添加一个或更多元素，并返回新长度

例子1：

在本例中，创建一个数组，并通过添加一个元素来改变其长度
```
var arr = new Array(3)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"

console.log(arr)
console.log(arr.push("jlm"))
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f462305ac2d0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### reverse（）
> 颠倒数组中元素的顺序

例子1：

在本例中，创建一个数组，然后颠倒其元素的顺序
```
var arr = new Array(3)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
console.log(arr)
console.log(arr.reverse())
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f4d00afc7af4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### shift（）
> 删除并返回数组的第一个元素

例子1：

在本例中，创建一个数组，并删除数组的第一个元素 （注意：这也将改变数组的长度）
```
var arr = new Array(3)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
console.log(arr)
console.log(arr.shift())
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f539133157f6~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### slice（）
> 从某个已有的数组返回选定的元素

例子1：

在本例中，创建一个新数组，然后显示从其中选取的元素
```
var arr = new Array(6)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
arr[3] = "jkl"
arr[4] = "mno"
arr[5] = "pqr"
console.log(arr)
console.log(arr.slice(2,4))
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/10/16f8e83231a63a5c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

在本例中，创建一个新数组，然后显示从其中选取的元素
```
var arr = new Array(6)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
arr[3] = "jkl"
arr[4] = "mno"
arr[5] = "pqr"
console.log(arr)
console.log(arr.slice(2,4))
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f662fac9bad4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### sort（）
> 对数组的元素进行排序

例子1：

在本例中，将创建一个数组，并按字母顺序进行排序
```
var arr = new Array(6)
arr[0] = "abc"
arr[1] = "pqr"
arr[2] = "mno"
arr[3] = "jkl"
arr[4] = "ghi"
arr[5] = "def"
console.log(arr)
console.log(arr.sort())
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f6eab7d87349~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### splice（）
> 删除元素，并向数组添加新元素

例子1：

在本例中，创建一个新数组，并向其添加一个元素
```
var arr = new Array(6)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
arr[3] = "jkl"
arr[4] = "mno"
arr[5] = "pqr"
console.log(arr)
arr.splice(2,0, "zzz")
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f7bb32c0cc22~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

在本例中，删除位于 index 2 的元素，并添加一个新元素来替代被删除的元素
```
var arr = new Array(6)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
arr[3] = "jkl"
arr[4] = "mno"
arr[5] = "pqr"
console.log(arr)
arr.splice(2,1,"zzz")
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f822fb48be11~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子3：

在本例中我们将删除从 index 2 ("ghi") 开始的三个元素，并添加一个新元素 ("zzz") 来替代被删除的元素
```
var arr = new Array(6)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
arr[3] = "jkl"
arr[4] = "mno"
arr[5] = "pqr"
console.log(arr)
arr.splice(2,3,"zzz")
console.log(arr)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7f882f6022f8b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toSourse（）
> 返回该对象的源代码

例子1：

toSource() 方法的用法
```
function employee(name,job,born)
{
    this.name=name;
    this.job=job;
    this.born=born;
}
var bill=new employee("Bill Gates","Engineer",1985);
document.write(bill.toSource());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7ff865c74d6c2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toString（）
> 把数组转换为字符串，并返回结果

例子1：

toString() 方法的用法
```
var arr = new Array(3)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
console.log(arr.toString());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7fa367410fe94~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toLocaleString（）
> 把数组转换为本地数组，并返回结果

例子1：
```
var arr = new Array(3)
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
console.log(arr.toLocaleString());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7fe7cd6375a19~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### unshift（）
> 向数组的开头添加一个或更多元素，并返回新的长度

例子1：

在本例中，创建一个数组，并把一个元素添加到数组的开头，并返回数组的新长度
```
var arr = new Array()
arr[0] = "abc"
arr[1] = "def"
arr[2] = "ghi"
console.log(arr);
console.log(arr.unshift("zzz"));
console.log(arr);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7fe6cbe3ebcbf~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### valueOf（）
> 返回数组对象的原始值

例子1：

```
var arr = new Array(1,2,3)
console.log(arr.valueOf());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c7ff21cb4615a3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
## 数组对象的几种遍历方法
### 1，普通的for循环
> 最简单的一种，也是使用频率最高的一种，虽然性能不弱，但仍有优化空间

例子1：
```
let arr1 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c8001aeaabfd56~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### 2，优化版的for循环
> 使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显

例子1：
```
let arr = [1, 2, 3, 4, 5];
for (i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c8005758d21ae7~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
说明：使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显

---
### 3，forEach()循环
> 数组自带的foreach循环，使用频率较高，实际上性能比普通for循环弱

例子1：
```
var arr = [1,2,3,4,5]
arr.forEach(function (value) {
    console.log(value)
})
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c800bdedb6f272~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### 4，for-in循环
> 在众多的循环遍历方式中,它的效率是最低的；for...in循环会遍历一个object所有的可枚举属性，for...in循环主要是为遍历对象而设计的，不适用于遍历数组

例子1：
```
var arr =[1,2,3,4,5]
for(var item in arr){
    console.log(arr[item])
}
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c80134d627e3cf~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### 5，map循环
> 这种方式也是用的比较广泛的，虽然用起来比较优雅，但实际效率还比不上foreach

例子1：
```
var arr =[1,2,3,4,5]
arr.map(function (value) {
    console.log(value)
})
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c8016c0057dec2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
## es6数组新增方法
### foreach（）
> foreach遍历数组，无返回值，不改变原数组，仅仅只是遍历，常用于注册组件、指令等等

forEach()有三个参数
* 第一个参数是当前元素
* 第二个参数是当前元素的索引
* 第三个参数是当前元素所属的数组

```
let array = [1, 2, 3, 4];
array.forEach((item, index, arr) => {
console.log(item);
});
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8aa694144d879~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### map（）
> map遍历数组，返回一个新数组，不改变原数组,主要作用是创建一个新的数组

```
let array = [1, 2, 3, 4 ,5];
let temp = array.map((item, index, arr) => {
return item + 1;
});
console.log(temp);
console.log(array);
```

运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8aa947e50628a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### filter（）
> filter过滤掉数组中不满足条件的值,返回一个新数组,不改变原数组

```
let array = [1, 2, 3, 4, 5];
let temp = array.filter((item, index, arr) => {
return item > 3;
});
console.log(temp);
console.log(array);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8aac71dbc453c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### reduce（）
> reduce让数组的前后两项进行某种计算,然后返回其值，并继续计算,不改变原数组,返回计算的最终结果，从数组的第二项开始遍历

```
let array = [1, 2, 3, 4, 5];
let total = array.reduce((a, b) => {
  return a + b;
});
console.log(total);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8aaf6bdaff3e9~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### some（）
> 遍历数组每一项,有一项返回true,则停止遍历，结果返回true。不改变原数组

```
let array = [1, 2, 3, 4, 5];
array.some((item, index, arr) => {
  console.log(item);
  return item > 3;
});
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8ab21bd4a8a12~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### every（）
> 遍历数组每一项，每一项返回true,最终结果为true.有一项返回false,停止遍历,结果返回为false。不改变原数组

```
let array = [1, 2, 3, 4, 5];
let bo = array.every((item, index, arr) => {
  return item > 2;
});
console.log(bo);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8ab482a357550~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)