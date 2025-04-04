# Stateの理解と管理

## 知識課題

### 課題1

- Reactコンポーネントにおける`state`の基本的な役割について説明してください。
- `state`と`props`の違いを明確にし、それぞれの使い分けについて解説してください。

### 課題2

- `state`の更新が`非同期`であるとは具体的にどういうことか説明してください。
- `state`の非同期更新が原因で発生しうる問題点を挙げ、それを回避するための注意点を解説してください。
- `state`を更新する際に、`更新用関数`を使用するべき理由と、その利点を説明してください。

### 課題3

- `state`に保持している`オブジェクト`や`配列`を直接変更してはいけない理由を説明してください。
- 直接変更が引き起こす可能性のある具体的なバグや問題を解説してください。
- `オブジェクト`や`配列`の`state`を「`イミュータブル`（不変）」に更新するための方法を、コード例と共に示してください。

### 課題4

- コンポーネントの`state`を設計する際に、どのような点を考慮すべきか説明してください。
- 複数のコンポーネントで同じ`state`を共有・編集する必要が生じた場合、どのようなアプローチを取るべきか解説してください。
- `ステートのリフトアップ`の概念を説明し、その具体的な実装方法を示してください。

## 参考資料

- [state：コンポーネントのメモリ](https://ja.react.dev/learn/state-a-components-memory)
- [レンダーとコミット](https://ja.react.dev/learn/render-and-commit)
- [state はスナップショットである](https://ja.react.dev/learn/state-as-a-snapshot)
- [一連の state の更新をキューに入れる](https://ja.react.dev/learn/queueing-a-series-of-state-updates)
- [state 内のオブジェクトの更新](https://ja.react.dev/learn/updating-objects-in-state)
- [state 内の配列の更新](https://ja.react.dev/learn/updating-arrays-in-state)
- [state を使って入力に反応する](https://ja.react.dev/learn/reacting-to-input-with-state)
- [state 構造の選択](https://ja.react.dev/learn/choosing-the-state-structure)
- [コンポーネント間で state を共有する](https://ja.react.dev/learn/sharing-state-between-components)
- [state の保持とリセット](https://ja.react.dev/learn/preserving-and-resetting-state)
