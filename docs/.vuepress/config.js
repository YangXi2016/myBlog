module.exports = {
    title: 'Happy Young',

    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpeg' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: false
    },
    themeConfig: {
        logo:"/img/logo.jpeg",
        nav: [
          { text: '所有日志', link: '/timeLine/' },
          { text: '技术', link:'/technology/'},
          { text: '生活',link: '/life/' },
          { text: '思考',link: '/ponder/'},
          { text: '标签库', link: '/tags/' },
          { text: '喜结莲李', link: '/loveRecords/'},
          { text: '关于', link:'/about/'},
          { text: '留言板', link:'/massage/'},
          { text: '链接',
            items: [
                {text:'简书',link: 'https://www.jianshu.com/u/d59ec16cceb1' },
                {text:'GitHub',link: 'https://github.com/YangXi2016' },
                {text:'码云',link: 'https://gitee.com/happy-young' },
            ]
          }
        ],
        lastUpdated: 'Last Updated', 
      }
  }