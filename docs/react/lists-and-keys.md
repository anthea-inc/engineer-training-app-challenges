# リストレンダリングの基本

## 知識課題

### 知識課題1

- Reactで配列データをリストとしてレンダリングする際に、各要素に`key`プロパティを指定することが推奨されている理由を説明してください。
- `key`が指定されていない場合、Reactの挙動やパフォーマンスに関してどのような問題が生じる可能性がありますか？

### 知識課題2

- リスト要素に設定する`key`プロパティには、どのような値を選ぶべきですか？

### 知識課題3

- 配列のインデックスを`key`として使用することが推奨されない主な理由は何ですか？
  - 特にリスト項目の追加、削除、並び替えが発生する場合に、インデックスを`key`に使うとどのような問題が発生する可能性があるか、具体的なシナリオを想定して説明してください。

## 実践課題

### 実践課題1

- 文字列の配列（例: `['リンゴ', 'バナナ', 'チェリー']`）を受け取り、各要素を`<li>`タグでリスト表示するReactコンポーネント`SimpleList`を作成してください。
  - この際、`key`プロパティをあえて指定せずに実装し、ブラウザの開発者コンソールに表示される警告を確認しましょう。

### 実践課題2

- オブジェクトの配列（例: `[{ id: 'a1', name: 'リンゴ' }, { id: 'b2', name: 'バナナ' }, { id: 'c3', name: 'チェリー' }]`）を受け取り、各オブジェクトの`name`プロパティをリスト表示するReactコンポーネント`ItemList`を作成してください。
  - 各リスト要素 (`<li>`) の`key`には、オブジェクトが持つ固有の`id`を指定しましょう。
