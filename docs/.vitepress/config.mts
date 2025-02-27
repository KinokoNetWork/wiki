import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KinokoServer2",
  base: '/wiki/',
  description: "Minecraft java and BE edition server",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'トップ', link: '/' },
      { text: '利用規約', link: '/tos' },
      { text: 'いろいろ', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/kinoko1216' },
      { icon: 'discord', link: 'https://discord.gg/Rf5xP5JptK' },
      { icon: 'github', link: 'https://github.com/KinokoNetWork/wiki' }
    ]
  }
})
