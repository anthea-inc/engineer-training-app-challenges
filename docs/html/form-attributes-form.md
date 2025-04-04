# フォームの属性

## 知識課題

### 知識課題１

- 次の`<form>`要素の属性について、それぞれの目的と使用シーンを具体的な例を挙げて説明してください。
  - `action`
  - `target`
  - `method`
  - `autocomplete`
  - `novalidate`

### 知識課題２

- 次の`<input>`要素の属性について、それぞれの目的と使用シーンを具体的な例を挙げて説明してください。
  - `formaction`
  - `formenctype`
  - `formmethod`
  - `formtarget`
  - `formnovalidate`

### 知識課題３

- フォーム送信に使用される`GET`と`POST`について、それぞれの特長と注意点を整理して説明してください。

## 実践課題

### 実践課題１

- 以下の仕様に従ってフォームを作成し、`GET`メソッドで`httpbin`に送信してください。
  - URL
    - `https://httpbin.org/get`
  - 入力フィールド
    - 名前 (`name`)
    - 年齢 (`age`)
  - フォームを送信後、ブラウザのアドレスバーに表示されるUR に、クエリパラメータ（`name`と`age`）が正しく付与されていることを確認してください。

### 実践課題２

- 以下の仕様に従ってフォームを作成し、`POST`メソッドで`httpbin`に送信してください。
  - URL
    - `https://httpbin.org/post`
  - 入力フィールド
    - メールアドレス (`email`)
    - パスワード (`password`)
  - フォーム送信後、`httpbin` から返されるレスポンスに、送信したデータ（`email` と `password`）が含まれていることを確認してください。
