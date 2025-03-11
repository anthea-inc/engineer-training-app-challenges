# 比較演算子と論理演算子の理解

## 知識課題

### 知識課題1

- 以下の`比較演算子`について調査し、それぞれの役割を説明してください。
  - 厳密等価演算子（`===`）
  - 厳密不等価演算子（`!==`）
  - 等価演算子（`==`）
  - 不等価演算子（`!=`）
  - 大なり (`>`)
  - 大なりイコール (`>=`)
  - 小なり（`<`）
  - 小なりイコール（`<=`）
- なぜ、等価演算子（`==`）ではなく、厳密等価演算子（`===`）を使うべきなのかを説明してください。

### 知識課題2

- 以下の`論理演算子`について調査し、それぞれの役割を説明してください。
  - AND演算子（`&&`）
  - OR演算子（`||`）
  - NOT演算子（`!`）
- OR (`||`) の短絡評価について具体的なコード例を使って説明してください。

### 知識課題3

- Null合体演算子（`??`）の役割と使い方を説明してください。

## 実践課題

### 実践課題1

1. 新規に`comparison.js`というファイルを作成し、以下のコードを貼り付けてください。

    ``` js
    const a = 5;
    const b = '5';

    console.log(a == b);
    console.log(a === b);

    console.log(a != b);
    console.log(a !== b);

    console.log(a > 3);
    console.log(a >= 5);

    console.log(a < 10);
    console.log(a <= 5);
    ```

2. ターミナルで`node comparison.js`を実行し、出力結果を確認してください。
3. `==`と`===`で結果に違いが出る理由をまとめておきましょう。

### 実践課題2

1. 新規に`logical.js`というファイルを作成し、以下のコードを貼り付けてください。

    ``` js
    const andExample = 10 > 5 && 5 > 2;
    console.log(andExample);

    const orExample = 10 < 5 || 5 > 2;
    console.log(orExample);

    const notExample = !(10 > 5);
    console.log(notExample);

    console.log('Hello' || 'デフォルト値');
    console.log('' || 'デフォルト値');
    console.log(0 || 'デフォルト値');
    console.log(null || 'デフォルト値');
    ```

2. ターミナルで`node logical.js`を実行し、出力結果を確認してください。
3. `value || 'デフォルト値'`で起こる短絡評価の挙動を、どのように理解すればよいか考えてみてください。

### 実践課題3

1. 新規に`nullish.js`というファイルを作成し、以下のコードを貼り付けてください。

    ``` js
    console.log('Alice' ?? 'ゲスト');
    console.log('' ?? 'ゲスト');
    console.log(null ?? 'ゲスト');
    console.log(undefined ?? 'ゲスト');
    ```

2. ターミナルで`node nullish.js`を実行し、出力結果を確認してください。
3. `OR演算子 (||)` との挙動の違いに着目しながら、`??`の役割を整理してみてください。

## 参考資料

- [演算子](https://jsprimer.net/basic/operator/)
- [比較](https://ja.javascript.info/comparison)
