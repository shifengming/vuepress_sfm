module.exports = {
    title: '石小明的个人网站',
    description: 'Welcome to come to my blog',
    themeConfig: {
      search: true,//搜索
      searchMaxSuggestions: 10,
      repo: 'https://github.com/shifengming',
      repoLabel: 'Github',
        // 侧边栏
        sidebar: [
          {
            title: 'HTML',
            collapsable: true,
            children: [
              'page1/',
              'page1/标签语义化',
              'page1/新增标签',
              'page1/BOM',
              'page1/DOM',
              'page1/面试题'
            ]
          },
          {
            title: 'CSS3',
            collapsable: true,
            children: [
              'page2/CSS盒子模型',
              'page2/CSS3常用属性',
              'page2/CSS3新特性',
              'page2/CSS预处理器',
              'page2/Flex布局',
              'page2/Grid布局',
              'page2/常见选择器',
              'page2/常见单位',
              'page2/行内元素和块级元素',
              'page2/圣杯布局',
              'page2/BFC',
              'page2/1px边框问题',
              'page2/浮动与定位',
              'page2/垂直水平居中的几种方法',
              'page2/link与@import区别与选择',
              'page2/面试题'
            ]
          },
          {
            title: 'JavaScript',
            collapsable: true,
            children: [
              'page3/JS字符串',
              'page3/JS数组',
              'page3/EventLoop',
              'page3/JS执行机制',
              'page3/对象的深浅拷贝',
              'page3/原型与原型链',
              'page3/this指向',
              'page3/闭包',
              'page3/作用域',
              'page3/同步与异步',
              'page3/正则表达式',
              'page3/bind、call、apply用法及区别',
              'page3/DOM增删改查',
              'page3/面试题'
            ]
          },
          {
            title: 'JQuery',
            collapsable: true,
            children: [
              'page4/选择器',
              'page4/DOM元素的增删改查',
              'page4/显示和隐藏、淡入和淡出',
              'page4/滑动、动画',
              'page4/JQuery遍历',
              'page4/JQuery中的Ajax',
              'page4/面试题'
            ]
          },
          {
            title: 'ES6',
            collapsable: true,
            children: [
              'page5/let和const命令',
              'page5/Symbol',
              'page5/变量的解构赋值',
              'page5/数组新增的方法',
              'page5/异步解决方案',
              'page5/箭头函数',
              'page5/模块化',
              'page5/扩展运算符',
              'page5/promise对象的使用',
              'page5/set和map数据结构',
              'page5/面试题'
            ]
          },
          {
            title: 'Vue',
            collapsable: true,
            children: [
              'page6/vue生命周期',
              'page6/MVC和MVVM',
              'page6/组件之间的通信',
              'page6/导航守卫',
              'page6/Vuex EventBus',
              'page6/数据双向绑定',
              'page6/动态绑定class与style',
              'page6/项目工程化',
              'page6/项目组件化',
              'page6/vue-router',
              'page6/vuex的用法',
              'page6/组件的封装',
              'page6/路由懒加载',
              'page6/常用指令',
              'page6/组件常用选项',
              'page6/插槽slot',
              'page6/搭建vue全家桶步骤',
              'page6/面试题'
            ]
          },
          {
            title: 'React',
            collapsable: true,
            children: [
              'page7/React生命周期',
              'page7/常见的API',
              'page7/store常用方法',
              'page7/对Redux的理解',
              'page7/函数组件',
              'page7/组件化开发',
              'page7/React Hooks',
              'page7/React-Router',
              'page7/Redux',
              'page7/搭建React全家桶步骤',
              'page7/面试题'
            ]
          },
          {
            title: '小程序',
            collapsable: true,
            children: [
              'page8/生命周期',
              'page8/页面跳转',
              'page8/request请求',
              'page8/常用组件',
              'page8/页面跳转及传递参数',
              'page8/代码审核发布',
              'page8/上拉刷新、下拉加载',
              'page8/面试题'
            ]
          },
          {
            title: 'Github',
            collapsable: true,
            children: [
              'page9/项目放github上1',
              'page9/项目放github上2',
              'page9/代码添加到github上',
              'page9/面试题'
            ]
          },
          {
            title: 'Http请求',
            collapsable: true,
            children: [
              'page10/属性axios的方法',
              'page10/Ajax',
              'page10/常见Http状态码',
              'page10/request、response对象',
              'page10/跨域及常见方法',
              'page10/面试题'
            ]
          },
          {
            title: 'Ajax',
            collapsable: true,
            children: [
              'page11/创建一个ajax',
              'page11/原生JS的Ajax请求',
              'page11/解决跨域问题',
              'page11/同步和异步的区别',
              'page11/ajax的优点和缺点',
              'page11/get和post的区别',
              'page11/面试题'
            ]
          },
          {
            title: 'Webpack',
            collapsable: true,
            children: [
              'page12/打包原理',
              'page12/优点、缺点',
              'page12/面试题'
            ]
          },
          {
            title: '项目',
            collapsable: true,
            children: [
              'page13/vue去哪儿项目总结',
              'page13/vue重构饿了么项目总结',
              'page13/React单车后台管理系统项目总结',
              'page13/vue音乐项目总结',
            ]
          }
        ],
      // 导航栏
        nav: [
          { text: '首页', link: '/' },
          { text: '前端技术', link: 'page1/' },
          { text: '个人文章', items: [
            { text: '掘金', link: 'https://juejin.im/user/5c8f3303f265da612d633276' },
            { text: 'segmentfault', link: 'https://segmentfault.com/u/helloxiaoming' },
            { text: 'CSDN', link: 'https://blog.csdn.net/qq_40588413' }
          ]}
        ]
    }
  }

