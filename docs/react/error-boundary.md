# Error Boundaryの理解と活用

## 知識課題

### 知識課題1

- Reactにおける`Error Boundary`の基本概念とその主な目的について説明してください。
- `Error Boundary`がアプリケーション開発において重要である理由と、その意義について説明してください。
- `Error Boundary`が解決する具体的な問題について説明してください。

### 知識課題2

- `Error Boundary`が存在しない場合に、コンポーネントツリーの一部で発生したJavaScriptエラーがアプリケーション全体に及ぼす可能性のある影響について、具体的に説明してください。
- `static getDerivedStateFromError()`の役割、引数、具体的な処理内容について説明してください。
- `componentDidCatch()`の役割、引数、具体的な処理内容について説明してください。

### 知識課題3

- `Error Boundary`がキャッチできるエラーとできないエラーの種類について、それぞれ具体例を挙げて説明してください。
- 推奨される`Error Boundary`コンポーネントの配置場所とその理由について説明してください。

## 実践課題

### 実践課題1

- エラーをキャッチしてフォールバックUIを表示する基本的な`ErrorBoundary`クラスコンポーネントを作成してください。
  - コンストラクタでエラー状態（例: `hasError`）を初期化してください。
  - `static getDerivedStateFromError` を実装し、エラー発生時に状態を更新してフォールバックUIが表示されるようにしてください。
  - `componentDidCatch` を実装し、エラー情報（エラーオブジェクトとコンポーネントスタック）をコンソールに出力するようにしてください。
  - `render` メソッドで、エラー状態に応じてフォールバックUI（例: "エラーが発生しました。" というメッセージ）または子コンポーネント (`this.props.children`) を表示するようにしてください。

::: warning 注意

::: details 解答例

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  // エラーが発生した際に呼び出され、stateを更新してフォールバックUIを表示できるようにする
  static getDerivedStateFromError(error) {
    // 次のレンダーでフォールバックUIが表示されるように state を更新します
    return { hasError: true };
  }

  // エラーが発生した際に呼び出され、エラー情報をログなどに記録するために使用する
  componentDidCatch(error, errorInfo) {
    // ここでエラーログを外部サービスに送信するなどの処理を記述できる
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // エラー情報の詳細もstateに保存したい場合はここで更新できる
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // エラーが発生した場合に表示するフォールバックUI
      return (
        <div>
          <h2>エラーが発生しました。</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // エラーが発生していない場合は、子コンポーネントをそのままレンダリングする
    return this.props.children;
  }
}

export default ErrorBoundary;
```

:::

### 実践課題2

- 意図的にエラーを発生させることができる関数コンポーネント`BuggyCounter`を作成してください。
  - `useState`を使用してカウント状態を管理してください。
  - ボタンクリックでカウントを増やす機能を実装してください。
  - カウント数が特定の値（例: 3）になった場合に、`render`処理中にエラー(`throw new Error('クラッシュしちゃった！')`)を発生させてください。

::: warning 注意

::: details 解答例

```jsx
import React, { useState } from 'react';

function BuggyCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  if (count === 3) {
    // カウントが3になったら意図的にエラーをスローする
    throw new Error('クラッシュしちゃった！');
  }

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={handleClick}>増やす</button>
      <p>ボタンを3回クリックするとエラーが発生します。</p>
    </div>
  );
}

export default BuggyCounter;
```

:::

### 実践課題3

- 実践課題1で作成した`ErrorBoundary`コンポーネントを使用して、実践課題2で作成した`BuggyCounter`コンポーネントをラップするアプリケーション (`App.js`など)を実装してください。
  - `ErrorBoundary`の内側と外側の両方に要素（例: テキスト）を配置し、エラー発生時に`ErrorBoundary`内部のみがフォールバックUIに置き換わり、外部の要素は影響を受けないことを確認できるようにしてください。
  - アプリケーションを実行し、`BuggyCounter`のボタンを数回クリックしてエラーを発生させ、`ErrorBoundary`がエラーをキャッチしてフォールバックUIを表示すること、およびコンソールにエラー情報が出力されることを確認してください。

::: warning 注意

::: details 解答例

```jsx
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';
import './App.css'; // 必要に応じてスタイルファイルをインポート

function App() {
  return (
    <div className="App">
      <h1>エラーバウンダリーデモ</h1>
      <hr />
      <p>
        このカウンターはエラーバウンダリー内にあります。
        カウントが3に達するとクラッシュしますが、アプリの他の部分は機能し続けます。
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>このテキストはエラーバウンダリーの外にあり、常に表示されます。</p>
    </div>
  );
}

export default App;
```

:::

## 参考資料

- [エラーバウンダリでレンダー中のエラーをキャッチする](https://ja.react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
