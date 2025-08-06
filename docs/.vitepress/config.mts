import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KinokoServer2",
  base: '/wiki/',
  description: "Minecraft java and BE edition server",
  lang: 'ja-JP',
  head: [['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/183390514?s=200&v=4' }]], // URLだとcdnが切れる？
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'トップ', link: '/' },
      { text: '利用規約', link: '/tos' },
      { text: '初めて参加する方向け', link: '/startgame' }
    ],

    outline: {
			label: 'このページ'
    },

    socialLinks: [
      { icon: 'x', link: 'https://x.com/kinoko1216' },
      { icon: 'discord', link: 'https://discord.gg/Rf5xP5JptK' },
      { icon: 'github', link: 'https://github.com/KinokoNetWork/wiki' }
    ]
  }
})
