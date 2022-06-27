module.exports = {
  title: 'Webdevelopment - graduaat Internet of Things',
  description: 'Cursus Webdevelopment graduaat Internet of Things',
  themeConfig: {
    logo: '/files/afbeelding2.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' },
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/webdevelopment',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
      { 
        title: 'Webdesign',
        children: [
          '/01_introduction/',
          '/02_html/',
          '/03_css/',          
          '/04_forall/',          
          '/05_online/',          
          '/06_publish/',          
        ]
      },
      { 
        title: 'Front-end webdevelopment',
        children: [
          '/07_javascript/',
        ]
      },
      {
        title: 'Back-end webdevelopment',
        children: [
           '/08_php/', 
        ]
      }           
    ]    
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      selector: 'img',
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
	  ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],    
  ],  
}
