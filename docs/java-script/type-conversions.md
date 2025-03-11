# 型変換の理解

## 知識課題

### 知識課題1

- JavaScriptにおける暗黙的な型変換とはどのようなものか説明してください。

### 知識課題2

- 動的型付け言語と静的型付け言語の違いを説明し、それぞれの長所と短所を比較してください。
- JavaScriptのような動的型付け言語を使用する際に、どのような点に注意すべきか説明してください。

## 実践課題

### 実践課題1

次のコードを実行し、出力結果を確認してください。その後、各行で発生する型変換の仕組みについて説明してください。

``` js
let a = 0;
console.log(typeof a, a);

let b = '1' + a;
console.log(typeof b, b);

let c = 15 - b;
console.log(typeof c, c);

let d = c - null;
console.log(typeof d, d);

let e = c - true;
console.log(typeof e, e);
```

### 実践課題2

以下の変数を使い、明示的な型変換を行ってください。

- 変数`x`を明示的に`Number`型に変換し、結果を出力してください。
- `Number()`および`parseInt()`の両方を使用して変換してください。

   ``` js
    let x = "3.14";
   ```

- 変数`x`を明示的に`String`型に変換し、結果を出力してください。
- `String()`および`toString()`の両方を使用して変換してください。

   ``` js
    let x = 123;
   ```

### 実践課題3

次の表を埋めてください。各値が`String`/`Number`/`Boolean`に変換された場合にどのような結果になるかを答えてください。

| Value | String  | Number  | Boolean  |
| --- | --- | --- | --- |
| 1 |  |  |  |
| '1' |  |  |  |
| -1 |  |  |  |
| '-1' |  |  |  |
| 0 |  |  |  |
| '0' |  |  |  |
| false |  |  |  |
| true |  |  |  |
| NaN |  |  |  |
| null |  |  |  |
| undefined |  |  |  |
| [] |  |  |  |
| '' |  |  |  |
| [23] |  |  |  |
| [10,23] |  |  |  |
| ' ' |  |  |  |
| ['fun'] |  |  |  |
| ['fun','enjoy'] |  |  |  |
| {} |  |  |  |

## 参考資料

- [暗黙的な型変換](https://jsprimer.net/basic/implicit-coercion/)
- [型変換](https://ja.javascript.info/type-conversions)
