# JSON

## 学ぶ理由

なぜ学ぶ必要があるのか。この課題が解決するべき問題または達成するべき目標は何か。

## 知識課題

### 知識課題1

- JSONの定義および基本的な特徴について説明してください。
- JSONが実際のシステムでどのように利用されているか、具体例を交えて解説してください。

### 知識課題2

- 以下のメソッドの役割について説明してください。
  - `JSON.parse`
  - `JSON.stringify`

## 実践課題

### 実践課題1

以下のJSON文字列を対象に、手順に従って処理を行ってください。

``` json
{"title": "JSON入門", "level": "初級", "completed": false}
```

1. `JSON.parse`を使用して、上記の`JSON`をJavaScriptの`オブジェクト`に変換する。
1. オブジェクトの`completed`プロパティを`true`に変更する。
1. 新たに`reviewed`というプロパティを追加し、値を`2025-03-01`（例：任意の日付）に設定する。
1. 変更後のオブジェクトを`JSON.stringify`を使用して`JSON`に再変換し、コンソールに出力する。

### 実践課題2

以下のJSON文字列を対象に、手順に従って処理を行ってください。

``` json
{"name": "Taro", "age": 25, "email": "taro@example.com"}
```

1. `JSON.parse`を使って、`JSON`をJavaScriptの`オブジェクト`に変換する。
1. 変換後、ユーザの`age`プロパティの値を`5`増加させる。
1. オブジェクトに`address`プロパティを追加し、例として`Tokyo`を設定する。
1. 更新されたオブジェクトを`JSON.stringify`で再度`JSON`に変換し、コンソールに出力する。

## 参考資料

- [JSON](https://jsprimer.net/basic/json/)
- [JSON メソッド, toJSON](https://ja.javascript.info/json)
