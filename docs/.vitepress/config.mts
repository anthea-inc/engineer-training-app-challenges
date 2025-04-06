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
          { text: 'レビュー', link: '/guide/review' },
        ],
        collapsed: true
      },
      {
        text: 'Git',
        items: [
          { text: 'Git', link: '/git/intro' },
        ],
        collapsed: true
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
          { text: 'コード要素を学ぼう', link: '/html/computercode-elements' },
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
          { text: '要素サイズの制御', link: '/css/dimension' },
          { text: 'ボックスモデルの理解', link: '/css/boxmodel' },
          { text: 'アウトラインを学ぼう', link: '/css/outline' },
          { text: 'テキストの詳細', link: '/css/text' },
          { text: 'フォントの理解と実践', link: '/css/font' },
          { text: 'リストスタイルを学ぼう', link: '/css/list' },
          { text: 'テーブルのスタイリング', link: '/css/table' },
          { text: '表示と可視性の理解', link: '/css/display-visibility' },
          { text: 'ポジションを使った要素の配置', link: '/css/positioning' },
          { text: '要素の重なり順制御', link: '/css/z-index' },
          { text: 'オーバーフローの理解', link: '/css/overflow' },
          { text: '結合子の理解', link: '/css/combinators' },
          { text: '擬似クラスの理解', link: '/css/pseudo-classes' },
          { text: '擬似要素の理解', link: '/css/pseudo-elements' },
          { text: '透明度の理解', link: '/css/opacity-transparency' },
          { text: '詳細度の理解', link: '/css/specificity' },
          { text: '!importantの理解', link: '/css/important' },
          { text: 'CSS値関数の理解', link: '/css/functions' },
          { text: 'CSS変数の理解', link: '/css/variables' },
          { text: 'box-sizingの詳細と実践', link: '/css/box-sizing' },
          { text: 'フレックスボックスの理解', link: '/css/flexbox' },
          { text: 'グリッドレイアウトの理解', link: '/css/grid' },
        ],
        collapsed: true
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'Node.jsのセットアップ', link: '/java-script/setup' },
          { text: 'JavaScript入門', link: '/java-script/intro' },
          { text: '変数の基礎', link: '/java-script/variables' },
          { text: 'データ型の理解', link: '/java-script/types' },
          { text: '型変換の理解', link: '/java-script/type-conversions' },
          { text: '演算子の理解', link: '/java-script/operators' },
          { text: '比較演算子と論理演算子の理解', link: '/java-script/comparison' },
          { text: '条件分岐の理解', link: '/java-script/ifelse' },
          { text: 'ループと反復処理', link: '/java-script/loop' },
          { text: 'オブジェクト操作', link: '/java-script/object' },
          { text: '配列操作の理解', link: '/java-script/array' },
          { text: '文字列操作の理解', link: '/java-script/string' },
          { text: 'MapとSet', link: '/java-script/map-set' },
          { text: '関数の理解と活用', link: '/java-script/function' },
          { text: 'スコープとクロージャの理解', link: '/java-script/scope' },
          { text: '問題集に挑戦しよう', link: '/java-script/challenge' },
          { text: 'クラスの基礎', link: '/java-script/class' },
          { text: '例外処理の基本', link: '/java-script/try-catch' },
          { text: '非同期処理入門', link: '/java-script/async' },
          { text: 'JSON操作の基礎', link: '/java-script/json' },
        ],
        collapsed: true
      },
      {
        text: 'React',
        items: [
          { text: 'React入門', link: '/react/intro' },
          { text: 'コンポーネントの基礎', link: '/react/component' },
          { text: '仮装DOMの概念', link: '/react/virtual-dom' },
          { text: 'リストレンダリングの基本', link: '/react/lists-and-keys' },
          { text: 'イベント処理の基礎', link: '/react/events' },
          { text: 'Reactフックの基礎', link: '/react/hooks' },
          { text: 'Stateの理解と管理', link: '/react/state' },
          { text: 'Refの理解と活用', link: '/react/ref' },
          { text: 'Effectの理解と活用', link: '/react/effect' },
          { text: 'スタイリング手法の理解と実践', link: '/react/styling' },
          { text: 'コンポーネントライブラリ', link: '/react/component-libraries' },
          { text: 'ルーティングの基礎', link: '/react/routing' },
          { text: '状態管理の基礎', link: '/react/state-management' },
          { text: 'API通信とデータ取得', link: '/react/api-calls' },
          { text: 'forms', link: '/react/forms' },
          { text: 'error boundary', link: '/react/error-boundary' },
          { text: 'Suspense入門', link: '/react/suspense' },
          { text: 'レンダリング戦略', link: '/react/rendering' },
        ],
        collapsed: true
      },
      {
        text: 'Docker',
        items: [
          { text: 'Docker', link: '/docker/intro' },
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
