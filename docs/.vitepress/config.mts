import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "アプリケーションを作成しよう",
  description: "株式会社Antheaが提供するエンジニア研修プログラム。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '課題', link: '/html/issue1' }
    ],

    sidebar: [
      {
        text: 'ガイドライン',
        items: [
          { text: 'はじめに', link: '/guide/getting-started' },
        ]
      },
      {
        text: 'HTML',
        items: [
          { text: 'HTMLを表示してみよう', link: '/html/issue1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthea-inc/engineer-training-app-challenges' }
    ]
  }
})
