import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "アプリケーションを作成しよう",
  description: "株式会社Antheaが提供するエンジニア研修プログラム。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '課題', link: '/html/intro' }
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
          { text: 'HTMLを表示してみよう', link: '/html/intro' },
          { text: 'HTML要素の基本を理解しよう', link: '/html/basic' },
          { text: 'HTML要素に属性を加えてみよう', link: '/html/attributes' },
          { text: '段落を学ぼう', link: '/html/paragraphs' },
          { text: 'スタイルとカラーを操ろう', link: '/html/styles' },
          { text: 'テキストの書式設定を学ぼう', link: '/html/formatting' },
          { text: '引用と出典を学ぼう', link: '/html/quotation-elements' },
          { text: 'ハイパーリンクを学ぼう', link: '/html/links' },
          { text: '画像を学ぼう', link: '/html/images' },
          { text: 'ファビコンを学ぼう', link: '/html/favicon' },
          { text: 'テーブルを学ぼう', link: '/html/tables' },
          { text: 'リストを学ぼう', link: '/html/lists' },
          { text: 'ブロック要素とインライン要素を学ぼう', link: '/html/blocks' },
          { text: 'クラスを学ぼう', link: '/html/classes' },
          { text: 'idを学ぼう', link: '/html/id' },
          { text: 'iframeを学ぼう', link: '/html/iframe' },
          { text: 'ヘッド要素を学ぼう', link: '/html/head' },
          { text: 'コンピュータ コード要素を学ぼう', link: '/html/computercode-elements' },
          { text: 'セマンティック要素を学ぼう', link: '/html/semantic-elements' },
          { text: 'フォーム要素を学ぼう', link: '/html/form-elements' },
          { text: '入力タイプを学ぼう', link: '/html/form-input-types' },
          { text: '入力属性を学ぼう', link: '/html/form-attributes' },
          { text: 'フォームの属性', link: '/html/form-attributes-form' },
          { text: 'キャンバス', link: '/html/canvas' },
          { text: 'SVG', link: '/html/svg' },
          { text: 'ビデオと音声', link: '/html/video-audio' },
        ],
        collapsed: true
      },
      {
        text: 'CSS',
        items: [
          { text: 'CSS入門', link: '/css/intro' },
          { text: '背景をデザインする', link: '/css/background' },
          { text: 'ボーダーをデザインする', link: '/css/border' },
          { text: 'マージンについて学ぼう', link: '/css/margin' },
          { text: 'パディングを学ぼう', link: '/css/padding' },
          { text: 'Height/Width', link: '/css/dimension' },
          { text: 'Box Model', link: '/css/boxmodel' },
          { text: 'Outline', link: '/css/outline' },
          { text: 'Text', link: '/css/text' },
          { text: 'Fonts', link: '/css/font' },
          { text: 'Lists', link: '/css/list' },
          { text: 'Tables', link: '/css/table' },
          { text: 'Display', link: '/css/display-visibility' },
          { text: 'Position', link: '/css/positioning' },
          { text: 'Z-index', link: '/css/z-index' },
          { text: 'Overflow', link: '/css/overflow' },
          { text: 'Combinators', link: '/css/combinators' },
          { text: 'Pseudo-classes', link: '/css/pseudo-classes' },
          { text: 'Pseudo-elements', link: '/css/pseudo-elements' },
          { text: 'Opacity', link: '/css/opacity-transparency' },
          { text: 'Units', link: '/css/units' },
          { text: 'important', link: '/css/important' },
          { text: 'Functions', link: '/css/functions' },
        ],
        collapsed: true
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'JavaScript入門', link: '/java-script/intro' },
        ],
        collapsed: true
      },
      {
        text: 'React',
        items: [
          { text: 'React入門', link: '/react/intro' },
        ],
        collapsed: true
      },
      {
        text: 'Database',
        items: [
          { text: 'Database', link: '/database/intro' },
        ],
        collapsed: true
      },
      {
        text: 'API',
        items: [
          { text: 'API', link: '/api/intro' },
        ],
        collapsed: true
      },
      {
        text: 'JWT',
        items: [
          { text: 'JWT', link: '/jwt/intro' },
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthea-inc/engineer-training-app-challenges' }
    ]
  }
})
