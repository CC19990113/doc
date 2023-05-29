import { defaultTheme } from '@vuepress/theme-default'
module.exports = {
  title: 'ADSET 对接文档',
  theme: defaultTheme({
    sidebar: 'auto',
    navbar: [
      {text:'首页',link:'https://www.baidu.com'},
      { text: 'Android SDK', link: '/Android' },
      { text: 'uni-app', link: '/uniapp' },
      { text: 'IOS SDK', link: '/IOS' },
      { text: 'Flutter', link: '/Flutter' },
      { text: 'H5', link: '/H5' },
      { text: '快应用', link: '/quickApp' },
      { text: '隐私政策', link: '/SdkYszc' },
    ],
  }),
  dest:'dist'
}