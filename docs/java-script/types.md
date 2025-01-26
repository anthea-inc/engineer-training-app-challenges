# データ型の理解

## 学ぶ理由

なぜ学ぶ必要があるのか。この課題が解決するべき問題または達成するべき目標は何か。

## 知識課題

### 知識課題1

- JavaScriptには、以下のプリミティブデータ型が定義されています。各データ型の特徴や使用例を、どのような場面で使われるのかも含めて説明してください。
  - `string`
  - `number`
  - `bigint`
  - `boolean`
  - `undefined`
  - `symbol`
  - `null`

### 知識課題2

- JavaScriptにおけるオブジェクトとは何かを説明してください。
- オブジェクトとプリミティブデータ型の違いを解説してください。

### 知識課題3

- JavaScriptには標準で複数の組み込みオブジェクトが用意されています。それぞれの役割をまとめ、よく使用されるプロパティまたはメソッドを1つ選び、その用途を具体的に解説してください。
  - `Number`
  - `Math`
  - `Date`
  - `String`
  - `Error`
  - `Function`
  - `Boolean`

### 知識課題4

- 以下のリテラル表現について、それぞれ記述例を示してください。
  - `配列リテラル`
  - `論理値リテラル`
  - `浮動小数点リテラル`
  - `数値リテラル`
  - `オブジェクトリテラル`
  - `文字列リテラル`
  - `テンプレートリテラル`
  - `正規表現リテラル`

## 実践課題

1. 各プリミティブデータ型（string, number, bigint, boolean, undefined, symbol, null）を最低1回ずつ変数として宣言し、コンソールに出力してください。

    ::: details 例

    ``` js
    const myString = "Hello, World!";
    console.log(myString); // "Hello, World!
    ```

    :::

2. 変数の型が正しいかどうかを、typeof演算子で確認し、コンソールに出力してください。

    ::: details 例

    ``` js
    console.log(typeof myString); // "string"
    ```

    :::

## 参考資料

- [データ型とリテラル](https://jsprimer.net/basic/data-type/)
- [データ型](https://ja.javascript.info/types)
- [Literal (リテラル)](https://developer.mozilla.org/ja/docs/Glossary/Literal)
