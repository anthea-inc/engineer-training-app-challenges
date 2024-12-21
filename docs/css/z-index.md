# 要素の重なり順制御

## 学ぶ理由

なぜ学ぶ必要があるのか。この課題が解決するべき問題または達成するべき目標は何か。

## 知識課題

### 課題１

以下のCSSプロパティについて調査し、それぞれの役割を説明してください。

- `z-index`

## 実践課題

3つの重なり合うボックスを作成し、`position`と`z-index`を使用して以下のレイアウトを実現してください。

### 実装要件

- 黒枠のボックスを基準として配置
- グレーのボックスを最前面に表示
- 緑のボックスを中間に表示

::: details 参考コード

``` html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <style>
      .container {
        position: relative;
      }

      .black-box {
        position: relative;
        z-index: 1;
        height: 100px;
        margin: 30px;
        border: 2px solid black;
      }

      .gray-box {
        position: absolute;
        top: 50px;
        left: 50px;
        z-index: 1;
        width: 70%;
        height: 60px;
        background: lightgray;
      }

      .green-box {
        position: absolute;
        top: -15px;
        left: 270px;
        z-index: 1;
        width: 35%;
        height: 100px;
        background: lightgreen;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="black-box">ブラック</div>
      <div class="gray-box">グレー</div>
      <div class="green-box">グリーン</div>
    </div>
  </body>
</html>
```

:::
