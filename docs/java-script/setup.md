# Node.jsのセットアップ

## 前提条件

`.zshrc`ファイルが作成されていること

## 手順

1. Node.jsのバージョン管理ツールであるVoltaをインストールします。

    ``` bash
    curl https://get.volta.sh | bash
    ```

    Voltaを使用することで、複数のNode.jsバージョンを同時にインストールし、プロジェクトごとに適切なバージョンを使用できるようになります。

2. Voltaのインストール後、以下のコマンドを実行して、変更を反映させます。

    ``` bash
    source ~/.zshrc
    ```

    このコマンドにより、Voltaの設定が現在のシェルに適用されます。

3. Voltaのバージョンを確認します。

    ``` bash
    volta -v
    ```

4. Voltaを使用して、最新のLTS（Long-Term Support）バージョンのNode.jsをインストールします。

    ``` bash
    volta install node
    ```

    LTSバージョンは、長期的にサポートされるNode.jsのバージョンであり、安定性と信頼性が高いため、多くのプロジェクトで使用されています。

5. インストールされたNode.jsのバージョンを確認します。

    ``` bash
    node -v
    ```

## 完了条件

1. 以下のコードを `hello.js` ファイルに保存します。

    ``` js
    console.log("Hello World");
    ```

2. ターミナルで以下のコマンドを実行し、`Hello World`が表示されることを確認します。

    ``` bash
    node hello.js
    ```

上記の手順が完了したら、JavaScriptを学ぶための環境が整います。これからJavaScriptの文法や概念を学び、実践的なプログラミングスキルを身につけていきましょう。

## 参考資料

- [Volta](https://volta.sh/)
