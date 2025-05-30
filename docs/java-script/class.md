# クラスの基礎

## 知識課題

### 知識課題1

- `クラス`とは何か、その定義方法について調査し、JavaScriptのサンプルコードを用いて説明してください。
- `インスタンス`の概念および、クラスからのインスタンス生成手順を、具体的なコード例とあわせて解説してください。
- クラスの`プロトタイプメソッド`と`アクセッサプロパティ`の役割や利用例を、実際のコードを示しながら説明してください。

### 知識課題2

- `publicクラスフィールド`と`privateクラスフィールド`の違いについて、具体例を用いて詳細に説明してください。
- クラスフィールド内での`this`が、どのようにインスタンス自身を指すのかを示すコード例を作成し、解説してください。

### 知識課題3

- `静的メソッド`と`静的クラスフィールド`の定義方法について、JavaScriptのサンプルコードを作成しながら、それぞれの特徴を整理してください。

### 知識課題4

- クラスの`継承`の概念および、継承したクラスを定義する方法を、コード例を用いて説明してください。
- `superキーワード`が親クラスのプロパティやメソッドをどのように利用するか、具体的なコード例を添えて解説してください。

## 実践課題

学んだ内容を踏まえ、次の仕様に沿ってクラスを設計・実装してください。

### 実践課題1

Userクラスの実装

- プロパティとフィールド
  - publicフィールド: name（ユーザー名）とage（年齢）
  - privateフィールド: _password（パスワード）。外部から直接アクセスできないように設定してください。
- コンストラクタ
  - コンストラクタはname, age, passwordを引数として受け取り、それぞれのフィールドを初期化します。
- アクセッサプロパティ
  - パスワードを扱うため、getterとsetterを実装してください。
  - setterでは、パスワードが6文字以上であることをチェックするなど、簡単なバリデーションを行います。
  - getterは、パスワードの実際の値ではなく、マスクした文字列（例: ******）を返すようにしてください。
- プロトタイプメソッド
  - greet()メソッドを実装し、ユーザーのnameやageを用いて挨拶メッセージを返してください。
  - 内部ではthisを用いてインスタンスのプロパティにアクセスしてください。
- 静的プロパティと静的メソッド
  - ユーザーのインスタンスが生成されるたびにカウントを増やす静的フィールドUser.userCountを用意してください。
  - User.getUserCount()という静的メソッドを実装し、現在のユーザー数を返すようにしてください。

### 実践課題2

AdminUserクラスの実装（Userクラスの継承）

- 継承の実装
  - AdminUserクラスはUserクラスを継承し、管理者専用の機能を追加します。
- 追加プロパティ
  - adminLevel（数値などで表される管理レベル）を追加してください。
- コンストラクタ
  - 基底クラスのプロパティはsuperキーワードを用いて初期化し、adminLevelを設定してください。
- 追加メソッド
  - 管理者専用の操作を行うメソッド（例: deleteUser())を実装してください。
  - ここでは実際のユーザー削除は行わず、以下のようにメッセージ出力などでシミュレーションします。

    ``` js
    deleteUser(user) {
      console.log(`${user.name} を削除しました。`);
    }
    ```

## 参考資料

- [クラス](https://jsprimer.net/basic/class)
- [クラス(Class) 基本構文](https://ja.javascript.info/class)
- [クラスの継承](https://ja.javascript.info/class-inheritance)
- [静的(static)プロパティとメソッド](https://ja.javascript.info/static-properties-methods)
- [Private / protected プロパティとメソッド](https://ja.javascript.info/private-protected-properties-methods)
