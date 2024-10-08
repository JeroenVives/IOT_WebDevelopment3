import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'


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
          '/00_ontwikkelomgeving/',
          '/01_introductie/',
          '/02_apis/',
          '/03_forms/',
          '/04_databases/',
          '/05_mailing/',
          '/06_sessies/',
        ]
      }           
    ]    
  }),
  serviceWorker: true,
  plugins: [
    copyCodePlugin({
      locales: {
        '/': {
          copy: 'Copy code',
          copied: 'Copied',
        },
      },
    }),
  ],
}
