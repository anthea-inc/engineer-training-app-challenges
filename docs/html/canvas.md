# キャンバス

## 知識課題

- `<canvas>`タグとは何か、その目的と用途を説明してください。

## 実践課題

- 以下のコードを参考にして、HTMLページ上に円を描画してください。課題を解く際は、円が期待どおりに描画されることを確認してください。

  ```jsx
  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
  </script>
  ```

  - 必要に応じて、`<canvas>`タグをHTMLに追加してください。
    - 例：
  
    ```html
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
    </canvas>
    ```
