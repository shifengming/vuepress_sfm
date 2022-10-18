# JS字符串

## 字符串属性
属性|描述
:--:|:--:
constructor |返回创建字符串属性函数
length|返回字符串的长度
prototype|允许您向对象添加属性和方法
## 字符串方法
### charAt（）

> 返回在指定位置的字符

例子1：

返回字符串中的第三个字符
```
var str = "HELLO WORLD";
var n = str.charAt(2)
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c8096352997b0d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

返回字符串中的最后一个字符
```
var str = "HELLO WORLD";
var n = str.charAt(str.length-1);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c8099f1e66c9d9~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### charCodeAt（）

> 返回在指定的位置的字符的Unicode编码

例子1：

返回字符串第一个字符的 Unicode 编码
```
var str = "HELLO WORLD";
var n = str.charCodeAt(0);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c809db69e1a263~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

返回字符串中最后一个字符的 Unicode 编码
```
var str = "HELLO WORLD";
var n = str.charCodeAt(str.length-1);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c80a0c8a0f8ea0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### concat（）

> 连接两个或更多字符串，并返回新的字符串

例子1：

连接两个字符串
```
var str1 = "Hello ";
var str2 = "world!";
var n = str1.concat(str2);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c80a9775518fbd~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

连接3个字符串
```
var str1="Hello ";
var str2="world!";
var str3=" Have a nice day!";
var n = str1.concat(str2,str3);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c80abe657e6e42~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### fromCharCode（）

> 将Unicode编码转为字符

例子1：

将 Unicode 编码转为一个字符
```
var n = String.fromCharCode(65);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c80b04b845b0ae~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

将 Unicode 编码转换为一个字符串
```
var n = String.fromCharCode(72,69,76,76,79);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/11/16c80b3230cba9fc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### indexOf（）

> 返回某个指定的字符串值在字符串中首次出现的位置

例子1：

查找字符串 "welcome"
```
var str="Hello world, welcome to the universe.";
var n=str.indexOf("welcome");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8435367f69dee~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

在字符串查找字符 "e" 第一次出现的位置
```
var str="Hello world, welcome to the universe.";
var n=str.indexOf("e");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8439876c6b2bc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子3：

在字符串第五个位置开始查找字符 "e" 第一次出现的位置
```
var str="Hello world, welcome to the universe.";
var n=str.indexOf("e",5);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c843dad841541f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### includes （）

> 查找字符串中是否包含指定的子字符串

例子1：

查找字符串是否包含 "world"
```
var str = "Hello world, welcome to the Runoob。";
var n = str.includes("world");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8444e08a5df4b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

从第 12 个索引位置开始查找字符串
```
var str = "Hello world, welcome to the Runoob.";
var n = str.includes("world", 12);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8449f0b54de39~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### lastIndexOf （）

> 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置

例子1：

查找字符串 "runoob" 最后出现的位置
```
var str="I am from runoob，welcome to runoob site.";
var n=str.lastIndexOf("runoob");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c845d864b8f4e5~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

从第 20 个字符开始查找字符串 "runoob" 最后出现的位置
```
var str="I am from runoob，welcome to runoob site.";
var n=str.lastIndexOf("runoob", 20);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8460d4b2b52ea~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### match （）

> 查找找到一个或多个正则表达式的匹配

例子1：

在字符串中查找 "ain"
```
var str="The rain in SPAIN stays mainly in the plain";
var n=str.match(/ain/g);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8464c146826e2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

全局查找字符串 "ain"，且不区分大小写
```
var str="The rain in SPAIN stays mainly in the plain";
var n=str.match(/ain/gi);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c84688be035d04~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### repeat （）

> 复制字符串指定次数，并将它们连接在一起返回

例子1：

复制字符串 "Runoob" 两次
```
var str = "Runoob";
console.log(str.repeat(2));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8544a3903ad2c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### replace （）

> 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串

例子1：

在本例中，我们将执行一次替换，当第一个 "Microsoft" 被找到，它就被替换为 "Runoob"
```
var str="Visit Microsoft! Visit Microsoft!";
var n=str.replace("Microsoft","Runoob");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c854b1748bbdd1~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

执行一个全局替换
```
var str="Mr Blue has a blue house and a blue car";
var n=str.replace(/blue/g,"red");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c854fbe3992cbc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子3：

执行一个全局替换, 忽略大小写
```
var str="Mr Blue has a blue house and a blue car";
var n=str.replace(/blue/gi, "red");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8552af30ff43b~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### search （）

> 查找与正则表达式相匹配的值

例子1：

查找 "Runoob"
```
var str="Visit Runoob!";
var n=str.search("Runoob");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85566c7aa9f1e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

执行一次对大小写敏感的查找
```
var str="Mr. Blue has a blue house";
console.log(str.search("blue"));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c855a26d222f3f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子3：

执行一次忽略大小写的检索
```
var str="Mr. Blue has a blue house";
console.log(str.search(/blue/i));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c855e19489a6b3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### slice （）

> 提取字符串片段，并在新的字符串中返回被提取的部分

例子1：

提取字符串的片断
```
var str="Hello world!";
var n=str.slice(1,5);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c8562e7e5b8a48~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

提取最后一个字符
```
var str="Hello world!";
var n=str.slice(-1);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c856641e57f073~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### split （）

> 把字符串分割成字符串数组

例子1：

把一个字符串分割成字符串数组
```
var str="How are you doing today?";
var n=str.split(" ");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c856a1ab1d7847~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

n 将输出3个数组的值
```
var str="How are you doing today?";
var n=str.split(" ",3);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c856d8c14c3ab4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子3：

使用一个字符作为分隔符
```
var str="How are you doing today?";
var n=str.split("o");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85704299d3671~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### startsWith （）

> 查看字符串是否以指定的子字符串开头

例子1：

查看字符串是否为 "Hello" 开头
```
var str = "Hello world, welcome to the Runoob.";
var n = str.startsWith("Hello");
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85975a2c93c69~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

查看从第 6 个索引位置是否以 "world" 开头
```
var str = "Hello world, welcome to the Runoob.";
var n = str.startsWith("world", 6);
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c859a9ee9638e1~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### substr （）

> 从起始索引号提取字符串中指定数目的字符

例子1：

抽取指定数目的字符
```
var str="Hello world!";
var n=str.substr(2,3)
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c859e4377efdc2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
例子2：

在本例中，我们将使用 substr() 从字符串第二个位置中提取一些字符
```
var str="Hello world!";
var n=str.substr(2)
console.log(n);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85a0db7933424~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### substring （）

> 提取字符串中两个指定的索引号之间的字符

例子1：

在本例中，我们将使用 substring() 从字符串中提取一些字符
```
var str="Hello world!";
console.log(str.substring(3));
console.log(str.substring(3,7));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85a461eae380f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toLowerCase （）

> 把字符串转换为小写

例子1：

把字符串转换为小写
```
var str="Runoob";
console.log(str.toLowerCase());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85a9d55bed8f2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toUpperCase （）

> 把字符串转换为大写

例子1：

把字符串转换为大写
```
var str="Runoob";
console.log(str.toUpperCase());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85ad5ef4bd585~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### trim （）

> 去除字符串两边的空白

例子1：

去除字符串的头尾空格
```
var str = "       Runoob        ";
console.log(str.trim());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85b0b95922909~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toLocaleLowerCase （）

> 根据本地主机的语言环境把字符串转换为小写

例子1：

将字符串转换为小写
```
var str = "Runoob";
var res = str.toLocaleLowerCase();
console.log(res);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85b54f3b979be~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toLocaleUpperCase （）

> 根据本地主机的语言环境把字符串转换为大写

例子1：

将字符串转换为大写
```
var str = "Runoob";
var res = str.toLocaleUpperCase();
console.log(res);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85b780c46c39a~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### valueOf （）

> 返回某个字符串对象的原始值

例子1：

返回 String 对象的原始值
```
var str="Hello world!";
console.log(str.valueOf());
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85bc09d61f272~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### toString （）

> 返回一个字符串

例子1：

返回一个 String 对象的值
```
var str = "Runoob";
var res = str.toString();
console.log(res);
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/12/16c85bdf1c2d17d2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
## ES6/7中字符串常用的方法
### includes（）
> 返回布尔值，表示是否找到参数字符串

```
let s='Hello world!';
console.log(s.includes('o'));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8928b44a7c321~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
> 支持第二参数，表示开始搜索的位置

```
let s='Hello world!';
console.log(s.startsWith('world',6));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8928b44a7c321~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### startsWith（）
> 返回布尔值，表示参数字符串是否在源字符串的头部

```
let s='Hello world!';
console.log(s.startsWith('Hello'));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8928b44a7c321~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
> 支持第二参数，表示开始搜索的位置

```
let s='Hello world!';
console.log(s.endsWith('Hello',5));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8928b44a7c321~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### endsWith（）
> 返回布尔值，表示参数字符串是否在源字符串的尾部

```
let s='Hello world!';
console.log(s.endsWith('!'));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8928b44a7c321~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
> 支持第二参数，表示开始搜索的位置

```
let s='Hello world!';
console.log(s.includes('Hello',6));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c893121220cdf2~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### repeat（）
> 返回一个新字符串，表示将原字符串重复n次

```
console.log('a'.repeat(3));
console.log('a'.repeat(0));
console.log('a'.repeat(2.6));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8970005cdb767~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

注意：

* 如果参数是小数，会取整
* 如果参数是0，会得到空串
* 如果参数是负数或者Infinity，会报错
* 如果参数是字符串、布尔型或其他类型，会先换算成整数

---
### padStart（）、padEnd（）
> 字符串补全长度的功能，如果某个字符串不够指定长度，会在头部或尾部补全

* padStart（）用于头部补全

* padEnd（）用于尾部补全

注意： padStart和padEnd一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串
```
console.log('a'.padStart(5, 'cd'));
console.log('a'.padStart(4, 'cd'));

console.log('a'.padEnd(5, 'cd'));
console.log('a'.padEnd(4, 'cd'));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c898ae99a610a8~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
> 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串

```
console.log('aaa'.padStart(2, 'cd'));
console.log('aaa'.padEnd(2, 'cd'));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c8994e66e7ea82~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
> 用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串

```
console.log('abc'.padStart(10, '0123456789'));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c89996c3adc64e~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
> 如果省略第二个参数，默认使用空格补全长度

```
console.log('a'.padStart(4));
console.log('a'.padEnd(4));
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c899ca13987b79~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

---
### 模板字符串
> 模板字符串是增强版的字符串，用反引号（`）标识

```
let temps="abc"
console.log(`ABC is ${temps}`)
```
运行结果
![cmd-markdown-logo](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/13/16c89a6e68848506~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
