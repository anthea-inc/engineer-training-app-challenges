# 要素の重なり順制御

## 知識課題

### 課題１

以下のCSSプロパティについて調査し、それぞれの役割を説明してください。

- `z-index`

## 実践課題

この課題では、3つのボックスを重ねて表示する方法を学びます。`position`プロパティと`z-index`プロパティを使って、ボックスの重なり順を制御します。

### 課題の目標

3つの色付きボックス（黒枠・グレー・緑）を作成し、以下の順序で重ねて表示します。

1. グレーのボックス（最前面）
2. 緑のボックス（中間）
3. 黒枠のボックス（最背面）

### コードの説明

提供されたHTMLとCSSコードをそのまま使用できます。

::: details 提供コード

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
