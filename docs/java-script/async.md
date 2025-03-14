# 非同期処理入門

## 知識課題

### 知識課題1

- `同期処理`と`非同期処理`の概念を調査し、それぞれの違いを説明してください。
- ブラウザで同期的な処理（同期的なブロック処理）を行うと、どのような問題が発生するか具体的にまとめてください。

### 知識課題2

- `Promise`の基本的な仕組みを調査し、次の用語を用いて`Promise`の状態遷移を説明してください。
  - `pending`/`fulfilled`/`rejected`
  - `Promise.resolve`/`Promise.reject`
- `Promise.prototype.then`および`Promise.prototype.catch`の役割と使い方を整理してください。
- `Promise.prototype.catch`を用いたエラーハンドリングの仕組みについてまとめ、例外（`throw`）と`Promise`を組み合わせる際の注意点を具体的に挙げてください。

### 知識課題3

- `Promiseチェーン`の意味を説明し、どのように書くことで可読性や保守性が向上するか考察してください。
- `Promise.all`と`Promise.race`はそれぞれどのような場面で役立つのか、特徴や使い分けのポイントを説明してください。

### 知識課題4

- `Async Function`と`await式`のそれぞれの概念を調査し、基本的な使い方を整理してください。
- 従来の`Promise`を使った方法と比べ、`Async Function`と`await式`を用いることで、コードの可読性やエラーハンドリングがどのように向上するのか考察してください。

## 実践課題

この課題では、`同期処理`と`非同期処理`、`Promise`/`Promiseチェーン`/`Promise.all`/`Promise.race`、そして`async/await`の基本的な使い方を学びます。各課題を通じて、実際にコードを実行しながら動作の違いやエラーハンドリングの方法を体感してください。

### 実践課題1

新しく`sync.js`を作成し、以下の内容を記述してください。

``` js
const fs = require("fs");

console.log("同期処理の開始");

// (1) 同期的なファイル読み込み
// sample.txtを適当なテキストファイルに置き換えてもOK
const data = fs.readFileSync("./sample.txt", "utf-8");

console.log("ファイルの内容:", data);

console.log("同期処理の終了");
```

次に、`async.js`を作成し、非同期処理でファイルを読み込む例を記述してください。

``` js
const fs = require("fs");

console.log("非同期処理の開始");

// (2) 非同期的なファイル読み込み
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("ファイルの内容:", data);
});

console.log("非同期処理の終了");
```

#### 確認ポイント

`sync.js`と`async.js`を実行し、ログの出力順序の違いを確認してください。

- 同期処理では、ファイル読み込み中にブロッキングが発生していることを確認できるか。
- 非同期処理では、コールバックが後から呼ばれるため、ログの出力順序に違いが生じることを把握できるか。

### 実践課題2

新しく`promise-basic.js`を作成し、以下の内容を記述してください。

``` js
// (1) ランダムに成功 or 失敗する関数
function fetchData() {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.5; // 50%の確率で成功する想定

    setTimeout(() => {
      if (shouldResolve) {
        resolve("データの取得に成功しました！");
      } else {
        reject(new Error("データの取得に失敗しました..."));
      }
    }, 1000); // 1秒後に完了すると仮定
  });
}

// (2) Promiseの実行例
console.log("データの取得を開始します...");
fetchData()
  .then((result) => {
    console.log("成功:", result);
  })
  .catch((error) => {
    console.error("失敗:", error.message);
  });
```

#### 確認ポイント

`node promise-basic.js`を何度か実行し、以下の点を確認してください。

- 成功時には`.then`のコールバックが呼ばれる。
- 失敗時には`.catch`のコールバックが呼ばれる。
- `resolve`された場合は`Promise`が`fulfilled`/`reject`された場合は`rejected`になることを確認する。

### 実践課題3

新しく`promise-chain.js`を作成し、以下の内容を記述してください。

``` js
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step1 完了");
      resolve("データ1");
    }, 1000);
  });
}

function step2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step2 完了, 受け取ったデータ:", input);
      resolve("データ2");
    }, 1000);
  });
}

function step3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step3 完了, 受け取ったデータ:", input);
      resolve("最終結果");
    }, 1000);
  });
}

console.log("Promiseチェーンを開始します...");

step1()
  .then((data1) => {
    return step2(data1);
  })
  .then((data2) => {
    return step3(data2);
  })
  .then((final) => {
    console.log("全てのステップが完了しました:", final);
  })
  .catch((err) => {
    console.error("エラー発生:", err);
  });
```

#### 確認ポイント

`step1`→`step2`→`step3`の順で、各ステップでのデータの受け渡しが正しく行われるか確認してください。

### 実践課題4

新しく`promise-all.js`を作成し、以下の内容を記述してください。

``` js
function asyncTask(name, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name}完了 (所要時間: ${duration}ms)`);
    }, duration);
  });
}

const taskA = asyncTask("TaskA", 1000);
const taskB = asyncTask("TaskB", 2000);
const taskC = asyncTask("TaskC", 1500);

Promise.all([taskA, taskB, taskC])
  .then((results) => {
    console.log("全てのタスクが完了:", results);
  })
  .catch((error) => {
    console.error("タスクのいずれかが失敗:", error);
  });
```

#### 確認ポイント

- 渡したすべての`Promise`が`fulfilled`になると`.then`が実行される。
- 1つでも`reject`されると即座に`.catch`が実行される。

### 実践課題5

新しく`promise-race.js`を作成し、以下の内容を記述してください。

``` js
const taskX = new Promise((resolve) =>
  setTimeout(() => resolve("Xが先に終わった！"), 500)
);
const taskY = new Promise((resolve) =>
  setTimeout(() => resolve("Yが先に終わった！"), 800)
);
const taskZ = new Promise((resolve, reject) =>
  setTimeout(() => reject("Zが先に失敗！"), 300)
);

Promise.race([taskX, taskY, taskZ])
  .then((result) => {
    console.log("最初に完了したタスク:", result);
  })
  .catch((err) => {
    console.error("最初に失敗/完了したタスク:", err);
  });
```

#### 確認ポイント

- `Promise.race`は、配列で渡した`Promise`のうち、最初に完了したものの結果を返す。
- 最初に`reject`された場合は、エラーとして扱われる。

### 実践課題6

新しく`async-await.js`を作成し、以下の内容を記述してください。

``` js
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step1 完了");
      resolve("データ1");
    }, 1000);
  });
}

function step2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step2 完了, 受け取ったデータ:", input);
      resolve("データ2");
    }, 1000);
  });
}

function step3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step3 完了, 受け取ったデータ:", input);
      resolve("最終結果");
    }, 1000);
  });
}

// async function でPromiseを順番に処理
async function runSteps() {
  try {
    console.log("Async/Await での実行開始");

    const data1 = await step1();
    // step1がresolveされるまで待機
    const data2 = await step2(data1);
    const final = await step3(data2);

    console.log("全てのステップが完了しました:", final);
  } catch (error) {
    console.error("エラー発生:", error);
  }
}

runSteps();
```

#### 確認ポイント

- `async/await`を使うことで、コードが同期的な流れに見え、理解しやすくなる点を体感してください。
- `try/catch`によるエラーハンドリングと、`Promiseチェーン`での`.catch`の違いについて確認しましょう。
- 追加実験として、`await Promise.all([...])`や`await Promise.race([...])`も試してみてください。

## 参考資料

- [非同期処理:Promise/Async Function](https://jsprimer.net/basic/async)
- [Promise, async/await](https://ja.javascript.info/async)
