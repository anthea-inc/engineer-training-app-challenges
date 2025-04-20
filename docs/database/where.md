# WHERE句の理解と活用

## 知識課題

### 知識課題1

- SQLクエリにおける`WHERE`句の目的と役割について説明してください。
- SQLクエリ実行時における`WHERE`句の評価タイミング（処理順序）について解説してください。

### 知識課題2

- `NULL`が示す状態について説明してください。
- `NULL`と数値の`0`や空文字列`''`との違いを明確に説明してください。
- `NULL`を含む比較演算（例: `col = NULL`, `col <> NULL`）が期待通りに機能しない理由を説明してください。
- `IS NULL`/`IS NOT NULL`演算子を使用する必要性について、`NULL`の性質を踏まえて解説してください。

### 知識課題3

- `WHERE`句で条件を組み合わせるために使用される`AND`演算子と`OR`演算子の基本的な機能と使い方について説明してください。
- SQLの3値論理（`TRUE`/`FALSE`/`NULL`）における`AND`および`OR`演算の結果がどのように決まるか、`NULL`を含む組み合わせを含めて説明してください。
- 論理演算の結果が`NULL`になる場合があるのはなぜか、3値論理の観点から理由を説明してください。

### 知識課題4

- 以下のSQL比較演算子について、それぞれの意味、`WHERE`句での具体的な使用例、およびどのような状況で役立つか説明してください。
  - `IN`/`NOT IN`
  - `BETWEEN`
  - `LIKE` (ワイルドカード`%`と`_`の役割と効果も含む)

### 知識課題5

- `LIMIT`句がクエリ結果セットに対して行う操作について説明してください。
- `LIMIT`句を使用する主な目的やユースケースを挙げてください。

## 実践課題

### 実践課題1

- `customer`テーブルから、`customer_id`が`5`の顧客情報を取得してください。
- `film`テーブルから、`rating`が`PG-13`である`title`と`rating`を取得してください。
- `address`テーブルから、`district`が`California`である住所の`address`と`district`を取得してください。

### 実践課題2

- `address`テーブルから、`address2`が登録されていない（`NULL`である）住所の`address`/`address2`を取得してください。
- `address`テーブルから、`address2`が登録されている（`NULL`でない）住所の`address`/`address2`を取得してください。

### 実践課題3

- `customer`テーブルから、`store_id`が`1`であり、かつ`activebool`が`true`である顧客の`customer_id`/`first_name`/`store_id`/`activebool`を取得してください。
- `film`テーブルから、`rental_duration`が`6`日以上であるか、または`rental_rate`が`0.99`である映画の`title`/`rental_duration`/`rental_rate`を取得してください。
- `customer`テーブルから、(`store_id`が`2`で、かつ`activebool`が`true`である顧客)または(`email`が`mary.smith@sakilacustomer.org`である顧客)の`customer_id`/`store_id`/`activebool`/`email`を取得してください。

### 実践課題4

- `address`テーブルから、`city_id`が`300`/`350`/`400`のいずれかである住所の`address`/`city_id`を取得してください。
- `payment`テーブルから、`amount`が`8.00`から`10.00`の範囲にある支払い履歴の`payment_id`,`amount`を取得してください。
- `film`テーブルから、`title`が`Cha`という単語で始まる映画の`film_id`/`title`を取得してください。
- `customer`テーブルから、`last_name`が`A`で始まり、`n`で終わる顧客の`customer_id`/`first_name`/`last_name`を取得してください。
- `customer`テーブルから、`first_name`が5文字で、2文字目が`a`である顧客の`customer_id`/`first_name`を取得してください。

### 実践課題5

- `payment`テーブルから、`amount`が多い順に上位5件の支払い履歴の`payment_id`/`customer_id`/`amount`を取得してください。
- `customer`テーブルから、`create_date`が新しい順に10名の顧客の`customer_id`/`first_name`/`create_date`を取得してください。

## 参考資料

- [PostgreSQL WHERE](https://neon.tech/postgresql/postgresql-tutorial/postgresql-where)
- [PostgreSQL AND Operator](https://neon.tech/postgresql/postgresql-tutorial/postgresql-and)
- [PostgreSQL OR Operator](https://neon.tech/postgresql/postgresql-tutorial/postgresql-or)
- [PostgreSQL LIMIT](https://neon.tech/postgresql/postgresql-tutorial/postgresql-limit)
- [PostgreSQL FETCH](https://neon.tech/postgresql/postgresql-tutorial/postgresql-fetch)
- [PostgreSQL IN](https://neon.tech/postgresql/postgresql-tutorial/postgresql-in)
- [PostgreSQL BETWEEN](https://neon.tech/postgresql/postgresql-tutorial/postgresql-between)
- [PostgreSQL LIKE](https://neon.tech/postgresql/postgresql-tutorial/postgresql-like)
- [PostgreSQL IS NULL](https://neon.tech/postgresql/postgresql-tutorial/postgresql-is-null)
