# 要素サイズの制御

## 知識課題

### 知識課題１

以下のCSSプロパティについて調査し、それぞれの役割を説明してください。

- `height`
- `width`
- `max-height`
- `max-width`
- `min-height`
- `min-width`

### 知識課題2

以下のCSSプロパティの値について調査し、それぞれの役割と使用方法を説明してください。

- `auto`
- `length`
- `%`
- `initial`
- `inherit`

### 知識課題3

以下のCSS単位について、それぞれの特徴と使用場面を調査してください。

- `px`
- `em`
- `rem`
- `vw/vh`
- `dvw/dvh`
- `lvw/lvh`
- `svw/svh`

## 実践課題

### 概要

知識課題で学習したCSSのサイズ指定プロパティと単位を実践的に理解するための課題です。

### 課題内容

以下のHTML構造に対して、指定された要件を満たすCSSを実装してください。

``` html
<div class="container">
  <div class="main-box">
    <h2>メインボックス</h2>
    <p>サイズ指定の練習用テキストです。</p>
  </div>
  <div class="sub-box">
    <h2>サブボックス</h2>
    <p>可変サイズの確認用です。</p>
  </div>
</div>
```

### 実装要件

- `.container`の設定
  - width: ビューポート幅の80%
  - max-width: 800px
  - min-width: 320px
- `.main-box`の設定
  - width: 親要素の100%
  - height: 20remを基準
  - max-height: ビューポート高さの50%
- `.sub-box`の設定
  - width: auto
  - min-width: 200px
  - min-height: 10rem
- テキスト設定
  - h2: 1.5rem
  - p: 1rem

### テスト条件

以下の画面幅でテストし、適切に表示されることを確認してください。

- 320px（最小幅）
- 768px（中間サイズ）
- 1200px（大画面）
