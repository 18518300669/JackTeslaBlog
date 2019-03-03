const nav = [
     {
        text: '技术篇',
        items: [
          { text: 'Blog', link: '/Stack/2019.1.2'},
          { text: 'React', link: '/React/router' },
        ]
      },
      {
        text: '关于作者',
        link: '/Readme/index'
      },
  ]
const sidebar = {
    '/Stack/': [
        {
            title: '博客',
            children: [
                '2019.1.2'
            ]
        },
       
    ],
    '/React/': [
        {
            title: 'React',
            children: [
                'router',
                'reactRedux',
            ]
        },
    ]
}
var config = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],

    // 静态网站部署的目录
    base: '/JackTesla/',
  
    // 网站标题
    title: 'JackTesla 的博客',
  
    // <meta name="description" content="...">
    description: '最精彩的，其实就是世界本身！', 
  
    markdown: {
      
      // 显示代码行号
      lineNumbers: true
    },
    themeConfig: {

        // 项目的 github 地址
        repo: 'https://github.com/18518300669/JackTeslaBlog.git',
    
        // github 地址的链接名
        repoLabel: 'gitHub',
    
        // 配置导航栏
        nav,
        sidebar
      },
  }
  
  module.exports = config