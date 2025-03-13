# 例外処理の基本

## 知識課題

### 知識課題1

- `try`/`catch`/`finally`および`throw`の各用語を用いて、例外処理の基本的な仕組みと流れを説明してください。
- `throw文`を使用して、独自のエラーを発生させる方法について、簡単なコード例を交えて説明してください。
- どのようなケースで例外を投げ（throw）、どのようなケースではif文などの条件分岐のみでエラーをハンドリングできるのか、その考察とまとめを行ってください。

### 知識課題2

- `Errorオブジェクト`の役割、およびそのプロパティである`name`/`message`/`cause`について解説してください。
- ルトインエラーである`ReferenceError`/`TypeError`/`SyntaxError`が発生する状況を、具体例を挙げながら説明してください。

## 実践課題

ユーザーから2つの数値（割られる数と割る数）を入力として受け取り、割り算の結果を出力するプログラムを作成します。以下の条件に従って実装してください。

### 実装条件

1. 入力の検証
   - コマンドライン引数（`process.argv`）を用いて、2つの数値を受け取る。
   - 入力値が数値でない場合は、`throw文`を使用してエラーを発生させる。
2. 割り算処理
   - 割る数が`0`の場合、割り算ができないため、`throw文`でエラーを発生させる。
   - 正常な場合は、計算結果を出力する。
3. エラーハンドリング
   - `tryブロック`内で割り算処理を実装し、`catchブロック`でエラーを捕捉、エラーメッセージと`Errorオブジェクト`の`name`/`message`プロパティを表示する。
   - `finallyブロック`で必ず「処理終了」というメッセージを出力する。

::: details 解答

``` js
// 数値かどうかのチェック関数
function checkNumber(value) {
  const num = Number(value);
  if (isNaN(num)) {
    // 入力が数値でない場合、エラーをスローする
    throw new Error(`Invalid number: ${value}`);
  }
  return num;
}

try {
  // コマンドライン引数から値を取得（例: node calc.js 10 2）
  const args = process.argv.slice(2);
  if (args.length < 2) {
    throw new Error("2つの数値を入力してください");
  }

  const dividend = checkNumber(args[0]);
  const divisor = checkNumber(args[1]);

  if (divisor === 0) {
    // 0での割り算はエラーとする
    throw new Error("0で割ることはできません");
  }

  // 割り算の実施
  const result = dividend / divisor;
  console.log(`結果: ${result}`);
} catch (error) {
  // エラーハンドリング：エラー情報を出力する
  console.error(`エラー [${error.name}]: ${error.message}`);
} finally {
  // 最後に必ず実行される処理
  console.log("処理終了");
}
```

:::

## 参考資料

- [例外処理](https://jsprimer.net/basic/error-try-catch/)
- [エラーハンドリング, "try..catch"](https://ja.javascript.info/try-catch)
