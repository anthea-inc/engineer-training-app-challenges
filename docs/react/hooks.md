# Reactフックの基礎

## 知識課題

### 知識課題1

- `React Hook`の基本概念と、それが導入された背景について説明してください。
- `React`において`Hook`がなぜ重要なのか、その役割と意義について解説してください。

### 知識課題2

- `useState`フックの役割と基本的な使い方（状態の宣言、更新方法）を説明してください。
- `useEffect`フックの役割と、副作用（例: データ取得、購読、タイマー設定、DOM操作など）を扱う方法について説明してください。

### 知識課題3

- `useContext`フックの役割と、コンテキスト（Context API）を利用してコンポーネントツリー間でデータを受け渡す方法を説明してください。
  - `createContext`と`Provider`との連携についても触れてください。
- パフォーマンス最適化のためのフックについて説明してください。
  - `useMemo`の役割と、値のメモ化における具体的な使用例を解説してください。
  - `useCallback`の役割と、関数のメモ化が特に有効なケースについて説明してください。
  - これらの最適化フックを使用する際の注意点（乱用を避けるべき理由など）について考察してください。

### 知識課題4

- `useReducer`フックの役割と、`useState`と比較した場合の利点について説明してください。
  - `reducer`関数と`dispatch`関数の基本的な使い方を解説してください。
- `useRef`フックの主な役割を2つ説明してください。
  - DOM要素への参照を取得する方法と、レンダリング間で永続的な値を保持する方法（ただし、その変更が再レンダリングを引き起こさない点）について解説してください。
- カスタムフックとは何か、その目的と利点について説明してください。
  - カスタムフックの命名規則と作成方法の基本を、簡単な具体例を用いて解説してください。

## 実践課題

### 実践課題1

`useState`フックを使って、数値の状態を管理し、ボタンクリックでその数値を更新するコンポーネントを作成する。

1. `useState`フックを利用して、カウント数を保持する状態を定義します。初期値は`0`とします。
2. 画面に現在のカウント数を表示してください。
3. ボタンを設置し、クリックされるたびにカウント数が`1`増加するように実装してください。
4. 作成したコンポーネントをアプリケーションのエントリーポイント（例: `App.jsx`）で表示し、ブラウザで動作を確認してください。

::: warning 注意

::: details 解答例

```jsx
import React, { useState } from 'react';

function Counter() {
  // useState を使って count 状態を宣言、初期値 0
  const [count, setCount] = useState(0);

  // カウントを増やす関数
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default Counter;
```

:::

### 実践課題2

`useEffect`フックを使って、コンポーネントの状態変化に応じて副作用（この場合はブラウザのタイトル更新）を実行する。

1. 課題1で作成したカウンターコンポーネントを基に（または新しく作成し）、機能を拡張します。
2. `useEffect`フックをインポートし、使用してください。
3. カウント数が変化するたびに、ブラウザのタブ（またはウィンドウ）のタイトルが `現在のカウント: [カウント数]` のように表示されるように実装してください。
4. `useEffect`の依存配列を適切に設定し、カウント数が変化したとき**だけ**副作用が実行されるようにしてください。
5. ブラウザでカウンターを操作し、タイトルが期待通りに更新されることを確認してください。

::: warning 注意

::: details 解答例

```jsx
import React, { useState, useEffect } from 'react';

function TitleUpdaterCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // useEffect を使用
  useEffect(() => {
    // 副作用: ドキュメントのタイトルを更新
    document.title = `現在のカウント: ${count}`;
    // 依存配列に count を指定。count が変化した場合のみ実行される。
  }, [count]);

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default TitleUpdaterCounter;
```

:::

### 実践課題3

`useContext`フックとReact Context APIを使って、コンポーネントツリー間でデータを（propsを経由せずに）共有する仕組みを実装する。

1. テーマ情報（例: `'light'` や `'dark'` などの文字列）を保持するためのReact Contextを作成してください。デフォルトのテーマ値を設定します。
2. Contextの値を提供する`Provider`コンポーネントを作成または利用します。この`Provider`を使って、特定の値（例: `'dark'`)を子コンポーネントに渡せるようにします。
3. `Provider`の子コンポーネントを作成します。この子コンポーネント内で`useContext`フックを使い、`Provider`から提供されたテーマの値を受け取ってください。
4. 受け取ったテーマの値を画面に表示してください。
5. アプリケーションのエントリーポイントなどで`Provider`を設定し、子コンポーネントでテーマ値が表示されることを確認します。`Provider`の`value`を変更すると、子コンポーネントの表示も変わることを確認してください。

::: warning 注意

::: details 解答例

::: code-group

``` jsx [src/contexts/ThemeContext.js]
import React, { createContext } from 'react';

export const ThemeContext = createContext('light');
```

``` jsx [src/components/ThemedDisplay.jsx]
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // 作成した Context をインポート

function ThemedDisplay() {
  // useContext を使ってテーマの値を取得
  const theme = useContext(ThemeContext);

  return (
    <p style={{ color: theme === 'dark' ? 'white' : 'black', background: theme === 'dark' ? 'black' : 'white' }}>
      現在のテーマ: {theme}
    </p>
  );
}

export default ThemedDisplay;
```

``` jsx [App.jsx]
import React, { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import ThemedDisplay from './components/ThemedDisplay';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light'); // 例: テーマを切り替えられるようにする場合

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // ThemeContext で ThemedDisplay を囲み、value を渡す
    <ThemeContext value={currentTheme}>
      <div>
        <h1>テーマ切り替えデモ</h1>
        <button onClick={toggleTheme}>テーマ切り替え</button>
        <ThemedDisplay />
      </div>
    </ThemeContext>
  );
}

export default App;
```

:::

### 実践課題4

`useRef`フックを使って、特定のDOM要素に直接アクセスし、操作する（例: フォーカスを当てる）。

1. テキスト入力欄 (`<input type="text">`) とボタンを持つコンポーネントを作成してください。
2. `useRef`フックをインポートし、呼び出してrefオブジェクトを作成します。
3. 作成したrefオブジェクトを、テキスト入力欄の`ref`属性に指定してください。これにより、refオブジェクトがテキスト入力欄のDOM要素を参照するようになります。
4. ボタンに`onClick`イベントハンドラを設定します。
5. イベントハンドラ内で、refオブジェクトの`current`プロパティ（DOM要素を指す）が持つ`focus()`メソッドを呼び出すように実装してください。
6. ブラウザでコンポーネントを表示し、ボタンをクリックするとテキスト入力欄にフォーカスが移動することを確認してください。

::: warning 注意

::: details 解答例

```jsx
// 例: src/components/InputFocus.jsx
import React, { useRef } from 'react';

function InputFocus() {
  // useRef を使って ref オブジェクトを作成
  const inputElementRef = useRef(null);

  const handleFocusClick = () => {
    // inputElementRef.current が input 要素の DOM ノードを指す
    if (inputElementRef.current) {
      inputElementRef.current.focus(); // DOM 要素の focus() メソッドを呼び出す
    }
  };

  return (
    <div>
      <h2>DOM要素へのアクセス (useRef)</h2>
      {/* input 要素に ref 属性で作成した ref オブジェクトを指定 */}
      <input ref={inputElementRef} type="text" placeholder="ここにフォーカス！" />
      <button onClick={handleFocusClick}>入力欄にフォーカス</button>
    </div>
  );
}

export default InputFocus;
```

:::

### 実践課題5

`useReducer`フックを使って、複数のアクションによって状態が変化するような、少し複雑な状態管理ロジックを実装する。

1. カウンターの状態（例: `{ count: 0 }`）を管理するための`reducer`関数を定義してください。
2. この`reducer`関数は、現在の`state`と`action`オブジェクトを引数に取ります。
3. `action.type`に応じて状態を更新するロジックを実装します。
   - `action.type`が `'increment'` の場合、カウントを`1`増やした新しい状態オブジェクトを返します。
   - `action.type`が `'decrement'` の場合、カウントを`1`減らした新しい状態オブジェクトを返します。
   - （任意）`action.type`が `'reset'` の場合、カウントを初期値（例: `0`）に戻す状態オブジェクトを返します。
   - （任意）`action.type`が `'add'` で、`action.payload`（追加する値）を持つ場合、カウントに`payload`の値を加算した状態を返します。
   - 上記以外のアクションタイプの場合は、現在の`state`をそのまま返します。
4. `useReducer`フックをコンポーネント内で呼び出し、定義した`reducer`関数と初期状態を渡して、現在の`state`と`dispatch`関数を取得してください。
5. コンポーネントの表示部分で、現在のカウント数（`state.count`）を表示します。
6. 状態を変化させるためのボタン（例: 「+1」「-1」「リセット」「+5」など）を設置します。
7. 各ボタンの`onClick`イベントハンドラで、対応するアクションオブジェクト（例: `{ type: 'increment' }` や `{ type: 'add', payload: 5 }`）を引数にして`dispatch`関数を呼び出してください。
8. ブラウザで各ボタンを操作し、状態が`reducer`関数で定義した通りに変化することを確認してください。

::: warning 注意

::: details 解答例

```jsx
// 例: src/components/ReducerCounter.jsx
import React, { useReducer } from 'react';

// 1. reducer 関数の定義
// state: 現在の状態, action: 実行する操作を示すオブジェクト
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      // 新しい状態オブジェクトを返す
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 }; // 初期状態に戻す例
    case 'add':
      // action に payload が含まれる場合の例
      return { count: state.count + (action.payload || 0) }; // payload がなければ 0 を加算
    default:
      // 不明なアクションタイプの場合は状態を変更しない
      return state;
      // または throw new Error(`Unknown action type: ${action.type}`);
  }
}

// 初期状態の定義
const initialState = { count: 0 };

function ReducerCounter() {
  // 4. useReducer を呼び出し
  // state: 現在の状態, dispatch: アクションを reducer に送る関数
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>複雑な状態管理 (useReducer)</h2>
      {/* 5. 現在の状態を表示 */}
      <p>カウント: {state.count}</p>
      {/* 6. アクションを dispatch するボタン */}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>リセット</button>
      <button onClick={() => dispatch({ type: 'add', payload: 5 })}>+5</button>
    </div>
  );
}

export default ReducerCounter;
```

:::

### 実践課題6

状態管理ロジックや副作用の処理をカスタムフックとして抽出し、複数のコンポーネントで再利用可能にする。

1. カウンター機能（カウント数の状態保持と、カウントを1増やす機能）を提供するカスタムフックを作成してください。
   - 慣習に従い、フック名は `use` で始めてください（例: `useCounter`）。
   - フック内部で `useState` を使用してカウント状態を管理します。
   - カウントを増やす関数（例: `increment`）を定義します。
   - フックは、現在のカウント値と `increment` 関数を配列またはオブジェクトで返却するようにします。
   - （任意）カスタムフックが初期値を受け取れるように引数を追加しても良いでしょう。
2. 作成したカスタムフックを使用するコンポーネントを **2つ** 作成してください（例: `CounterDisplayA`, `CounterDisplayB`）。
3. それぞれのコンポーネント内で、作成したカスタムフックを呼び出して、カウント値と `increment` 関数を取得します。
4. 取得した値と関数を使って、それぞれのコンポーネントにカウント表示と「+1」ボタンを実装してください。
5. アプリケーションのエントリーポイントで、作成した2つのコンポーネントを表示します。
6. ブラウザでそれぞれのコンポーネントの「+1」ボタンをクリックし、各カウンターが**独立して**動作することを確認してください。これにより、カスタムフックによってロジックが再利用されていること、しかし状態は各コンポーネントで独立して保持されていることを理解します。

::: warning 注意

::: details 解答例

::: code-group

``` jsx [src/hooks/useCounter.js]
import { useState } from 'react';

// カウンターロジックを提供するカスタムフック
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // カウント値とインクリメント関数を返す (配列 or オブジェクト)
  return [count, increment];
  // return { count, increment }; // オブジェクトで返す場合
}

export default useCounter;
```

``` jsx [src/components/CounterA.jsx]
import React from 'react';
import useCounter from '../hooks/useCounter'; // 作成したカスタムフックをインポート

function CounterA() {
  // カスタムフックを呼び出す
  const [count, increment] = useCounter(0); // 初期値 0 で使用

  return (
    <div>
      <h3>カウンター A</h3>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1 (A)</button>
    </div>
  );
}

export default CounterA;
```

``` jsx [src/components/CounterB.jsx]
import React from 'react';
import useCounter from '../hooks/useCounter'; // 同じカスタムフックをインポート

function CounterB() {
  // こちらは初期値 10 でカスタムフックを呼び出す例
  const [count, increment] = useCounter(10);

  return (
    <div>
      <h3>カウンター B</h3>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1 (B)</button>
    </div>
  );
}

export default CounterB;
```

``` jsx [App.jsx]
import React from 'react';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';

function App() {
  return (
    <div>
      <h1>カスタムフックデモ</h1>
      <CounterA />
      <hr />
      <CounterB />
    </div>
  );
}

export default App;
```

:::

## 参考資料

- [組み込みの React フック](https://ja.react.dev/reference/react/hooks)
- [カスタムフックでロジックを再利用する](https://ja.react.dev/learn/reusing-logic-with-custom-hooks)
