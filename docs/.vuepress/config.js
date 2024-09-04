import { containerPlugin } from '@vuepress/plugin-container'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'


module.exports = {
  bundler: viteBundler(),
  lang: 'nl-BE',
  title: 'Web development 3 - Graduaat Internet of Things',
  description: 'Cursus Web Development 3 Graduaat Internet of Things',
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
