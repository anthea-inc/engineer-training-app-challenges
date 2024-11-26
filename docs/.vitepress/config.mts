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
        ],
        collapsed: false
      },
      {
        text: 'HTML',
        items: [
          { text: 'HTMLを表示してみよう', link: '/html/issue1' },
          { text: 'HTML要素に属性を加えてみよう', link: '/html/issue3' },
          { text: '段落を学ぼう', link: '/html/issue4' },
          { text: 'スタイルとカラーを操ろう', link: '/html/issue5' },
          { text: 'テキストの書式設定を学ぼう', link: '/html/issue6' },
          { text: '引用と出典を学ぼう', link: '/html/issue7' },
          { text: 'ハイパーリンクを学ぼう', link: '/html/issue8' },
          { text: '画像を学ぼう', link: '/html/issue9' },
          { text: 'ファビコンを学ぼう', link: '/html/issue10' },
          { text: 'テーブルを学ぼう', link: '/html/issue11' },
          { text: 'リストを学ぼう', link: '/html/issue12' },
          { text: 'ブロック要素とインライン要素を学ぼう', link: '/html/issue13' },
          { text: 'クラスを学ぼう', link: '/html/issue14' },
          { text: 'idを学ぼう', link: '/html/issue15' },
          { text: 'iframeを学ぼう', link: '/html/issue16' },
          { text: 'ヘッド要素を学ぼう', link: '/html/issue17' },
          { text: 'コンピュータ コード要素を学ぼう', link: '/html/issue18' },
          { text: 'セマンティック要素を学ぼう', link: '/html/issue19' },
          { text: 'フォーム要素を学ぼう', link: '/html/issue20' },
          { text: '入力タイプを学ぼう', link: '/html/issue21' },
          { text: '入力属性を学ぼう', link: '/html/issue22' },
          { text: 'フォームの属性', link: '/html/issue23' },
          { text: 'キャンバス', link: '/html/issue24' },
          { text: 'SVG', link: '/html/issue25' },
          { text: 'ビデオと音声', link: '/html/issue26' },
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthea-inc/engineer-training-app-challenges' }
    ]
  }
})
