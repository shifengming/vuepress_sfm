# 原生JS的Ajax请求

1, 创建XMLHTTPRequest对象
~~~
  var ajax = new XMLHttpRequest();
~~~
2,设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端 第三个参数，默认式是true异步，false为同步
~~~
  ajax.open('GET', './data.json', false)
~~~
3，发送请求
~~~
  ajax.send(null)
~~~
4, 注册事件 onreadystatechange 状态改变就会调用
~~~
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
~~~
5, 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
~~~
      console.log(ajax)
    } else {
      console.log('错误了')
    }
  }
~~~