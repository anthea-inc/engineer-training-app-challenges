# 詳細度の理解

## 学ぶ理由

なぜ学ぶ必要があるのか。この課題が解決するべき問題または達成するべき目標は何か。

## 知識課題

### 課題１

詳細度とは何かについて調査し、以下の点を含めて説明してください。

- 詳細度の定義と計算方法
- CSSにおける詳細度の役割
- 詳細度がスタイル適用順序に与える影響

### 課題2

以下のCSSセレクタについて、それぞれの詳細度を計算し、優先順位を判定してください。

- 属性セレクター
- クラスセレクター
- IDセレクター
- 要素型セレクター
- インラインスタイル

### 課題3

詳細度が一貫していない場合に発生する問題点と、その解決方法について説明してください。

## 実践課題

この課題では、CSSの詳細度について、4つの具体例を通じて理解を深めます。各例で異なるセレクターを組み合わせ、実際にどの色が適用されるかを確認し、その理由を詳細度の計算方法に基づいて説明します。

 1. 各例のコードをHTMLとして作成し実行する
 2. 表示された「Hello World!」の文字色を記録する
 3. なぜその色が適用されたのか説明する

### 要素型セレクター

要素型セレクターのみを使用した基本的なスタイリングの例です。

::: details 要素型セレクター

``` html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

:::

### クラスセレクター

要素型セレクターに加えて、クラスセレクターを適用した場合の優先順位を確認します。

::: details クラスセレクター

``` html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <style>
      .test {
        color: green;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p class="test">Hello World!</p>
  </body>
</html>
```

:::

### IDセレクター

クラスセレクターにさらにIDセレクターを加えた場合の優先順位を確認します。

::: details IDセレクター

``` html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <style>
      #demo {
        color: blue;
      }
      .test {
        color: green;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p id="demo" class="test">Hello World!</p>
  </body>
</html>
```

:::

### インラインスタイル

最後に、インラインスタイルを適用した場合の優先順位を確認します。

::: details インラインスタイル

``` html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <style>
      #demo {
        color: blue;
      }
      .test {
        color: green;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p id="demo" class="test" style="color: pink">Hello World!</p>
  </body>
</html>
```

:::
