module.exports = {
  base:'/gulu/',
  title: '轱辘-UI',
  description: '一个简单的 UI 框架',
  themeConfig: {
      sidebar: [
          {
              title: '入门',
              collapsable: false,
              children: [
                  '/install/',
                  '/get-started/'
              ]
          },
          {
              title: '组件',
              children: [ 
                  '/components/button',
                  '/components/input',
                  '/components/layout',
                  '/components/tabs',
                  '/components/toast',
                  '/components/popover',
                  '/components/collapse',
                  '/components/Grid'
              ]
          }
      ]
  }
}