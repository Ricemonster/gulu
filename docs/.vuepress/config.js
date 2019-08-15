module.exports = {
  base:"/gulu/",
  title: 'VueGuo-UI',
  description: '一个基于 Vue 的UI框架',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
      nav: [
        { text: '指南', link: '/guide/' },
        { text: '欢迎 Star', link: 'https://github.com/Ricemonster/VueGuo-UI' },
        { text: 'GitHub', link: 'https://github.com/ricemonster' },
      ],
      sidebar: [
          {
            title: '介绍',
            collapsable: false,
            children: [
              '/guide/'
            ]
          },
          {
              title: '快速使用',
              children: [
                  '/install/',
                  '/get-started/'
              ]
          },
          {
              title: '组件',
              children: [ 
                  '/components/button',
                  '/components/icon',
                  '/components/input',
                  '/components/layout',
                  '/components/Grid',
                  '/components/tabs',
                  '/components/toast',
                  '/components/popover',
                  '/components/collapse'
              ]
          }
      ]
  }
}