# SELECT文の基本

## 知識課題

### 知識課題1

- `SELECT`文の主な目的と役割を説明してください。
- `SELECT`文の基本構文を構成する主要な句（例: `SELECT`句、`FROM`句）を挙げ、それぞれの役割を説明してください。
- `SELECT * FROM employees;` というSQL文が何を実行するのかを具体的に説明してください。

### 知識課題2

- 文字列や列の値を連結する演算子`||`の使用目的を説明してください。
- 社員」テーブルに「姓」列と「名」列があると仮定し、`||`を用いてこれらを連結し「氏名」として表示する`SELECT`文の例を示してください。

### 知識課題3

- `SELECT`文における「列エイリアス」の使用目的とその利点を説明してください。
- 知識課題3で示した`SELECT`文の例を、「氏名」という列エイリアスが付与されるように修正してください。

### 知識課題4

- `ORDER BY`句の目的と役割を説明してください。
- 「社員」テーブルの全データを、「年齢」列の値に基づいて降順（大きいものから順）で表示する`SELECT`文を作成してください。

## 実践課題

### 実践課題1

- `customer`テーブルに含まれる全ての列のデータを取得する`SELECT`文を作成してください。
- `customer`テーブルから、`last_name`と`first_name`の列だけを取得する`SELECT`文を作成してください。

### 実践課題2

- `customer`テーブルの`first_name`列と`last_name`列の値を連結し、間に半角スペースを入れて表示する`SELECT`文を作成してください。

### 実践課題3

- 実践課題2で作成したSQL文を基に、連結して作成した列に`full_name`という分かりやすい名前（列エイリアス）を付けて表示するようにしてください。

### 実践課題4

- `customer`テーブルの全てのデータを、`last_name`のアルファベット順（昇順）で並び替えて表示する`SELECT`文を作成してください。
- `customer`テーブルの全てのデータを、`create_date`が新しい順（降順）で並び替えて表示する`SELECT`文を作成してください。
- `customer`テーブルのデータを、まず`first_name`のアルファベット順（昇順）で並び替え、`first_name`が同じ場合は`last_name`のアルファベット順（降順）で並び替えて表示する`SELECT`文を作成してください。

## 参考資料

- [PostgreSQL SELECT](https://neon.tech/postgresql/postgresql-tutorial/postgresql-select)
- [PostgreSQL Column Alias](https://neon.tech/postgresql/postgresql-tutorial/postgresql-column-alias)
- [PostgreSQL ORDER BY](https://neon.tech/postgresql/postgresql-tutorial/postgresql-order-by)
- [PostgreSQL SELECT DISTINCT](https://neon.tech/postgresql/postgresql-tutorial/postgresql-select-distinct)
