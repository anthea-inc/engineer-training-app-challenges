# PostgreSQLのセットアップ

## 前提条件

- `psql`コマンドが利用可能であること
  - この手順では、`Docker`で起動した`PostgreSQL`にMacのターミナルから`psql`コマンドで接続します。そのため、お使いのMacに`psql`コマンドがインストールされている必要があります。
  - `Homebrew`を使って`PostgreSQL`をインストールします。

      ``` bash
      brew install postgresql
      ```

  - インストール後、ターミナルで`psql --version` と入力し、バージョンが表示されれば`psql`コマンドが利用可能です。

## 手順

1. 任意の場所に、このプロジェクト用の新しいディレクトリを作成します。

    ```bash
    mkdir postgres-practice
    cd postgres-practice
    ```

2. 作成したディレクトリ内に`Dockerfile`という名前のファイルを作成し、以下の内容を記述します。

    ``` Dockerfile
    FROM postgres:latest

    RUN apt-get update && apt-get install -y \
        wget \
        unzip

    WORKDIR /docker-entrypoint-initdb.d

    RUN wget -O dvdrental.zip https://neon.tech/postgresqltutorial/dvdrental.zip \
     && unzip dvdrental.zip \
     && rm dvdrental.zip

    COPY ./init.sh /docker-entrypoint-initdb.d/
    ```

    この`Dockerfile`は、`PostgreSQL`の公式イメージを元に、サンプルデータをダウンロードし、初期化スクリプトを実行できる状態にします。

3. 同じディレクトリ内に`docker-compose.yml`という名前のファイルを作成し、以下の内容を記述します。このファイルは、Dockerコンテナの構成や起動方法を定義します。

    ``` yaml
    version: "3.9"

    services:
      db:
        build:
          dockerfile: ./Dockerfile
        restart: always
        container_name: dvd_rental_db
        environment:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: dvdrental
        ports:
          - 5432:5432
        volumes:
          - dvd_rental_data:/var/lib/postgresql/data

    volumes:
      dvd_rental_data:
    ```

    この `docker-compose.yml` は、先ほど作成した `Dockerfile` を使ってPostgreSQLコンテナをビルドし、必要な設定を行います。

4. 同じディレクトリ内に`init.sh`という名前のファイルを作成し、以下の内容を記述します。このシェルスクリプトは、コンテナが初めて起動する際に実行され、データベースにサンプルデータを読み込みます。

    ``` bash
    #!/bin/bash

    pg_restore -U "$POSTGRES_USER" -d "$POSTGRES_DB" /docker-entrypoint-initdb.d/dvdrental.tar
    ```

5. ターミナルを開き、`cd`コマンドを使って、上記3つのファイルを保存したディレクトリに移動していることを確認します。

    ```bash
    # カレントディレクトリがpostgres-practiceでなければ移動
    cd path/to/your/postgres-practice
    ```

6. 以下のコマンドを実行して、`Docker Compose`を利用してコンテナをバックグラウンドで起動・ビルドします。

    ```bash
    docker compose up -d
    ```

## 完了条件

1. ターミナルで以下のコマンドを実行し、`PostgreSQL`データベースに接続できることを確認します。パスワードの入力が求められたら、`docker-compose.yml` で設定したパスワード（`postgres`）を入力します。

    ```bash
    psql -h localhost -p 5432 -U postgres -d dvdrental
    ```

2. 接続後、`dvdrental=#`のようなプロンプトが表示されれば成功です。`\dt`コマンドを実行してテーブル一覧が表示されることなどを確認できます。接続を終了するには `\q` を入力します。

## 参考資料

- [Dockerを使ってPostgreSQLの学習環境をつくる](https://zenn.dev/frontendflat/articles/417232232aab50)
- [PostgreSQL Sample Database](https://neon.tech/postgresql/postgresql-getting-started/postgresql-sample-database)
