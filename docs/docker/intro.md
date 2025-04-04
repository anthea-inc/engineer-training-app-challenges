# Docker

## 前提条件

- Docker Desktopを自分のPCにインストールしてください。
  - インストールが完了したら、ターミナルを開き、次のコマンドを実行してください。
    ``` bash
    docker --version
    ```
  - Docker のバージョン情報が表示されれば、インストールは成功しています。バージョン情報が表示されない場合は、再度インストール手順を確認し、問題を解決してください。

## 知識課題

### 知識課題１

- コンテナ仮想化技術が登場する以前は、どのような課題があったのでしょうか。それらの課題に対して、Dockerはどのようなアプローチで解決を図ったのか、自分の言葉でまとめてみましょう。
- 従来の仮想化技術とDockerの違いについて調べ、それぞれの特徴を比較してください。その上で、Dockerの利点は何だと考えますか。
- 実際の開発や運用の現場で、Dockerがどのように活用されているのかを調べてください。そして、調べたことをもとに、Dockerを導入したことによるメリットについて学んだことを共有しましょう。

### 課題２

- `Dockerコンテナ`を実行するための環境である`Dockerホスト`について、その役割を説明してください。
  - また、Dockerホストとコンテナはどのように関係しているのでしょうか？
- `Docker Engine`の主要な機能である`Dockerクライアント`と`Docker デーモン`はそれぞれどのような役割を持っているのでしょうか？
  - 両者はどのように連携して、Dockerコンテナを管理・操作しているのでしょうか？

### 課題３

- Dockerにおける`ネームスペース(Namespace)`/`コントロールグループ(cgroup)`/`ユニオンファイルシステム(UnionFS)`の役割について教えてください。

### 課題４

- Dockerコンテナとはどのようなものか、簡潔に説明してください。
- Dockerイメージについて説明してください。
  - また、Dockerイメージを使用することで、どのようなメリットがあるのか、具体例を交えて説明してください。
- Dockerレジストリとは何か、そしてDockerリポジトリとの関係について説明してください。
  - また、広く利用されているパブリックレジストリを1つ挙げてください。
- Dockerfileの役割について説明してください。
  - Dockerfileを使ってイメージを構築することで、どのような利点があるでしょうか。

### 課題５

以下のDockerコマンドについて、それぞれの使用目的を説明してください。

- docker container run
- docker container ls
- docker container start
- docker container stop
- docker container rm
- docker image
- docker pull
- docker push
- docker build
- docker exec
- docker logs

### 課題６

docker container runのオプションについて、それぞれの使用目的を説明してください。

- --detach , -d
- --env , -e
- --volume , -v
- --publish , -p
- --interactive , -i
- --tty , -t
- --name
- --restart
- --rm

## 実践課題

- Docker Hubから最新のUbuntuイメージを取得し、ローカル環境にダウンロードしてください。
  - 適切なコマンドを使用して、イメージが正しくダウンロードされたことを確認してください。
- ダウンロードしたUbuntuイメージを使って、新しいコンテナを起動してください。
  - コンテナに`my-ubuntu`という名前を付けてください。
  - コンテナ内でシェルを操作できるようにしてください。
    - シェル内で `ls` コマンドを実行し、ファイルシステムの内容を確認してください。
    - `exit` コマンドを使って、コンテナから抜けてください。
- 停止中の`my-ubuntu`コンテナを確認してください。
- 停止中の`my-ubuntu`コンテナを起動し、実行中のコンテナを確認してください。
- 再度、実行中の`my-ubuntu` コンテナにシェルで接続し、コンテナから抜けてください。
- `my-ubuntu`コンテナを停止し、停止したコンテナを削除してください。
  - コンテナが正常に削除されたことを確認してください。
- ローカル環境に存在するDockerイメージを確認し、ダウンロードしたUbuntuイメージを削除してください。

## クイズ

- クイズについては、以下のリンクからご確認ください。
  - [クイズに関する詳細はこちら](https://www.notion.so/d6961bbf790b4fe489f731c0dc2f76f3?pvs=21)

## 完了条件

- 詳細な完了条件は、以下のリンクからご確認ください。
  - [完了条件に関する詳細はこちら](https://www.notion.so/d0b96c5a71bc422d98c161014b825ae8?pvs=21)

## 参考資料

- [実践 Docker - ソフトウェアエンジニアの「Docker よくわからない」を終わりにする本](https://zenn.dev/suzuki_hoge/books/2022-03-docker-practice-8ae36c33424b59)
- [初心者が絵で理解する Docker](https://zenn.dev/suzuki_hoge/books/2021-04-docker-picture-60fbe950136be9c7ad85)
- [Docker 概要](https://matsuand.github.io/docs.docker.jp.onthefly/get-started/overview/)
- [仕組みと使い方がわかる Docker&Kubernetesのきほんのきほん](https://book.mynavi.jp/ec/products/detail/id=120304)