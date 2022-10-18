module.exports = {
    title: '个人网站',
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
              'page1/事件属性',
              'page1/重点题'
            ]
          },
          {
            title: 'CSS3',
            collapsable: true,
            children: [
              'page2/CSS盒子模型',
              'page2/Flex布局',
              'page2/常见选择器',
              'page2/BFC',
              'page2/垂直水平居中的几种方法',
              'page2/重点题'
            ]
          },
          {
            title: 'JavaScript',
            collapsable: true,
            children: [
              'page3/JS字符串',
              'page3/JS数组',
              'page3/EventLoop',
              'page3/js数据类型',
              'page3/对象的深浅拷贝',
              'page3/原型与原型链',
              'page3/this理解',
              'page3/JavaScript继承',
              'page3/JS常见比较',
              'page3/闭包',
              'page3/重点题'
            ]
          },
          {
            title: 'JQuery',
            collapsable: true,
            children: [
              'page4/重点题'
            ]
          },
          {
            title: 'ES6',
            collapsable: true,
            children: [
              'page5/重点题'
            ]
          },
          {
            title: 'Vue',
            collapsable: true,
            children: [
              'page6/vue生命周期',
              'page6/组件之间的通信',
              'page6/重点题'
            ]
          },
          {
            title: 'React',
            collapsable: true,
            children: [
              'page7/React生命周期',
              'page7/重点题'
            ]
          },
          {
            title: '小程序',
            collapsable: true,
            children: [
              'page8/重点题'
            ]
          },
          {
            title: 'Github',
            collapsable: true,
            children: [
              'page9/项目放github上1',
              'page9/项目放github上2',
              'page9/代码添加到github上',
              'page9/重点题'
            ]
          },
          {
            title: 'Http请求',
            collapsable: true,
            children: [
              'page10/GET和POST区别',
              'page10/封装Axios',
              'page10/性能优化',
              'page10/重点题'
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
              'page11/重点题'
            ]
          },
          {
            title: 'Webpack',
            collapsable: true,
            children: [
              'page12/学习webpack',
              'page12/打包原理',
              'page12/优点、缺点',
              'page12/重点题'
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

