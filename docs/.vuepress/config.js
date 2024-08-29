import { containerPlugin } from '@vuepress/plugin-container'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'


module.exports = {
  bundler: viteBundler(),
  lang: 'nl-BE',
  title: 'Webdevelopment - graduaat Internet of Things',
  description: 'Cursus Webdevelopment graduaat Internet of Things',
  theme: defaultTheme({
    logo: '/files/afbeelding2.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:jeroen.reinenbergh@vives.be' },
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/JeroenVives/IOT_WebDevelopment3',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
      { 
        text: 'Webdesign',
        collapsible: true,
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
        text: 'Front-end webdevelopment',
        collapsible: false,
        children: [
          '/07_javascript/',
        ]
      },
      {
        text: 'Back-end webdevelopment',
        collapsible: false,
        children: [
           '/08_php/', 
        ]
      }           
    ]    
  }),
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),  
  ],  
}
