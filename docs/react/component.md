# コンポーネントの基礎

## 知識課題

### 知識課題1

- `コンポーネント`とは何かを、`React`の文脈で説明してください。
- 再利用性の高い`コンポーネント`の特徴を調査し、再利用性を高めるための具体的な工夫やポイントをまとめてください。
- 逆に、再利用が難しい`コンポーネント`の特徴や問題点について考察してください。

### 知識課題2

- `JSX`とは何かを説明してください。
- `JSX`において波括弧 `{}` が果たす役割を調査し、具体的な使用例をコードとともに分かりやすく解説してください。

### 知識課題3

- コンポーネントにおける`props`の役割を説明してください。
- 特に`children`という特殊な`props`の意味と用途を調べ、実践的なコード例と共に説明してください。

### 知識課題4

- Reactで`条件分岐（条件付きレンダー）`を行う一般的な方法を複数調査し、それぞれのコード例を挙げて分かりやすく解説してください。

## 実践課題

以下の実践課題は、すでに`Vite`を用いて`React`プロジェクトを作成している前提で進めてください。

### 実践課題1

1. `Greeting.jsx`というコンポーネントを作成してください。
2. シンプルな機能で構いません。例えば、画面に`<h1>Hello, React!</h1>`と表示するだけでも十分です。
3. 作成したコンポーネントを`App.jsx`で呼び出し、画面に表示されることを確認してください。

### 実践課題2

1. `Greeting`コンポーネントが`props`で`name`を受け取れるよう修正してください。
2. `App.jsx`で`<Greeting name="Anthea" />`と呼び出し、`Hello, Anthea!`と表示されることを確認してください。
3. 他の名前（例：`<Greeting name="Antheia" />`）でも正しく表示されることを確認しましょう。

### 実践課題3

1. 新たに`Layout.jsx`を作成します。
2. `Layoutコンポーネント`は、受け取った`children`をラップ（囲む）して表示するだけのシンプルな構造にしてください。

以下のように、`App.jsx`内で`Layout`を使用し、挙動を確認してください。

``` jsx
<Layout>
  <h2>Welcome!</h2>
  <p>This is a sample page.</p>
</Layout>
```

また、次のように`Greetingコンポーネント`を`Layout`の中に配置し、表示を確認しましょう。

``` jsx
<Layout>
  <Greeting name="Anthea" />
  <Greeting name="Antheia" />
</Layout>
```

### 実践課題4

1. 新たに`UserInfo.jsx`コンポーネントを作成してください。
2. このコンポーネントは`props`で真偽値（`isLoggedIn`）を受け取り、ログインの状態に応じて表示を切り替えます。
   - ログイン時：「ログイン済みです。ようこそ！」
   - 非ログイン時：「ログインしていません。ログインしてください。」
3. `App.jsx`で`<UserInfo isLoggedIn={true} />`や`<UserInfo isLoggedIn={false} />`のように切り替えて表示が変わることを確認してください。
4. 余裕があれば、`if-else`だけでなく、`三項演算子 (? :)`や`論理AND (&&)`を用いた方法にもチャレンジしてみましょう。

## 参考資料

- [初めてのコンポーネント](https://ja.react.dev/learn/your-first-component)
- [JSXでマークアップを記述する](https://ja.react.dev/learn/writing-markup-with-jsx)
- [JSXに波括弧でJavaScriptを含める](https://ja.react.dev/learn/javascript-in-jsx-with-curly-braces)
- [コンポーネントにpropsを渡す](https://ja.react.dev/learn/passing-props-to-a-component)
- [条件付きレンダー](https://ja.react.dev/learn/conditional-rendering)