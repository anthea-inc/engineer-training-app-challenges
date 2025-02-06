# 条件分岐の理解

## 学ぶ理由

なぜ学ぶ必要があるのか。この課題が解決するべき問題または達成するべき目標は何か。

## 知識課題

### 知識課題1

- `if文`、`else if文`、`else文`それぞれの基本構文と役割について説明してください。

### 知識課題2

- `三項演算子`の基本構文と、`if/else文`との違いについて説明してください。

### 知識課題3

- `switch/case文`の基本構文、各`case`の役割、そして`break文`がない場合の動作について説明してください。
- 複数の条件分岐が必要な場合に`switch/case文`を使うメリットと、`if/else文`との使い分けについて考察してください。

## 実践課題

### 実践課題1

#### if/else文の活用

ユーザーから入力された数値に対して、以下の条件で判定を行うJavaScriptプログラムを作成してください。

1. 数値が正の場合は「正の数です」と出力する。
2. 数値が負の場合は「負の数です」と出力する。
3. 数値がゼロの場合は「ゼロです」と出力する。

if文、else if文、else文を適切に使用して実装し、各分岐の動作を確認してください。

```js {12}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("数値を入力してください: ", (input) => {
  let num = Number(input);

  // 条件に応じて出力するメッセージを決定する
  // ここから実装してください。

  rl.close();
});
```

### 実践課題2

- 実践課題1で作成したプログラムのうち、出力メッセージの選択部分を三項演算子を用いて実装し直してください。
- if/else版と三項演算子版の両方のコードを用意し、実行結果が一致することを確認してください。

### 実践課題3

#### switch/case文の活用

ユーザーから1から7の整数入力を受け取り、以下の対応する曜日を出力するJavaScriptプログラムを作成してください。

- 1: 月曜日
- 2: 火曜日
- 3: 水曜日
- 4: 木曜日
- 5: 金曜日
- 6: 土曜日
- 7: 日曜日

入力が1〜7以外の場合は「無効な入力です」と出力してください。
switch/case文とbreak文を使用して正しく分岐処理を実装し、各ケースでの動作を確認してください。

```js {12}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("1から7の整数を入力してください: ", (input) => {
  let day = Number(input);

  // switch/case文を使用して、入力に対応する曜日を出力
  // ここから実装してください。

  rl.close();
});
```

## 参考資料

- [条件分岐](https://jsprimer.net/basic/condition/)
- [条件分岐: if, '?'](https://ja.javascript.info/ifelse)
