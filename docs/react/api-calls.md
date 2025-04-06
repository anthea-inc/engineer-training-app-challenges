# API通信とデータ取得

## 知識課題

### 知識課題1

- `AJAX`とは何か、その目的と基本的な仕組みについて説明してください。
- `XMLHttpRequest`オブジェクトの役割と、基本的な使い方を説明してください。
- `Fetch API`とは何か、その特徴と基本的な使い方について説明してください。
- `Fetch API`が導入された背景（`XMLHttpRequest`が抱えていた課題など）と、`Fetch API`を利用する利点について考察してください。

### 知識課題2

- `SWR`や`TanStack Query`(`React Query`)のようなデータ取得ライブラリが開発された背景について説明してください。
- これらのライブラリは、クライアントサイドでのデータ取得やキャッシュ管理において、どのような課題を解決することを目的としているか説明してください。

## 実践課題

### 実践課題1

- Reactの`useState`, `useEffect`フックと`Fetch API`を用いて、以下の要件を満たす`UserList`コンポーネントを作成してください。
  - コンポーネントのマウント時に`https://jsonplaceholder.typicode.com/users`エンドポイントからユーザーデータを非同期に取得する。
  - データの取得中はローディング状態を示すメッセージを表示する。
  - データの取得に成功した場合、ユーザー名のリストを表示する。
  - データの取得に失敗した場合、エラーメッセージを表示する。

::: warning 注意

::: details 解答例

::: code-group

``` jsx [src/components/UserList.jsx]
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true); // ローディング開始
      setError(null); // エラーをリセット
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.error("Failed to fetch users:", e);
        setError(e.message); // エラーメッセージをセット
      } finally {
        setIsLoading(false); // ローディング終了
      }
    };

    fetchUsers();
  }, []); // 空の依存配列で、マウント時にのみ実行

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

``` jsx [App.jsx]
import React from 'react';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
```

:::

### 実践課題2

- 実践課題1で作成した`UserList`コンポーネントのデータ取得ロジックを、`TanStack Query`の`useQuery`フックを使って書き換えた`UserListQuery`コンポーネントを作成してください。
  - `useQuery`を使用して、データ、ローディング状態、エラー状態を取得・管理するように実装してください。
  - 表示要件は実践課題1と同様とします。
  - (任意) `ReactQueryDevtools`を導入し、ブラウザの開発者ツールでクエリの状態を確認できるようにしてください。

## 参考資料

- [TanStack Query](https://tanstack.com/query/latest)
- [SWR](https://swr.vercel.app/ja)
- [XMLHttpRequest](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest)
- [フェッチ API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)
- [フェッチ API の使用](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [XMLHttpRequest の使用](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [ネットワークリクエストを JavaScript で作成](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Scripting/Network_requests)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
