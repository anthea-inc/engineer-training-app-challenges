# スタイリング手法の理解と実践

## 知識課題

### 知識課題1

- `CSS in JS`の基本的な概念について説明してください。
- `ランタイムCSS in JS`と`ゼロランタイムCSS in JS`について、それぞれの仕組み、主な特徴、および両者の主な違いを比較しながら具体的に説明してください。

### 知識課題2

- `CSS Modules`の仕組みと主な特徴について説明してください。
- `CSS Modules`が、従来のCSS開発におけるどのような問題を解決するために考案されたのか、その背景も含めて説明してください。

### 知識課題3

- `Tailwind CSS`の基本的な考え方（例：`ユーティリティファースト`）と主な特徴について説明してください。
- `Tailwind CSS`を利用するメリットとデメリットを、それぞれ具体例を挙げながら説明してください。

### 知識課題4

- 大規模なWebアプリケーションを新規開発するチームに参加したと想定し、`CSS in JS`/`CSS Modules`/`Tailwind CSS`の中からどの手法を採用するか、その理由も含めてあなたの考えを明確に説明してください。（正解は一つではありません。あなたの考えと根拠を重視します。）

## 実践課題

### 実践課題1

1. プロジェクトの`src/components/`ディレクトリに`Button.jsx`ファイルと`Button.css`ファイルを作成してください。
2. 提供されたCSSコードを`Button.css`に記述し、ボタン用のスタイルを定義してください。

   ``` css [src/components/Button.css]
   .my-button {
     background-color: #3b82f6;
     color: white;
     padding: 0.5rem 1rem;
     border-radius: 0.375rem;
     border: none;
     font-weight: bold;
     cursor: pointer;
     transition: background-color 0.2s ease-in-out;
   }
   
   .my-button:hover {
     background-color: #2563eb;
   }
   ```

3. `Button.jsx`コンポーネントを作成し、`Button.css`をインポートして、定義したスタイルクラス (`my-button`) を`className`属性で適用してください。
4. `App.jsx`で`Button`コンポーネントをインポートして表示し、スタイルが正しく適用されていることをブラウザで確認してください。

### 実践課題2

1. `src/components/Button.css`ファイルを`Button.module.css`にリネームしてください。
2. `Button.jsx`ファイルを修正し、CSSのインポート方法と`className`の指定方法を`CSS Modules`の作法に合わせてください。
3. ブラウザの開発者ツールで、ボタン要素に適用されているクラス名がユニークなハッシュ値を含む形に変換されていることを確認してください。

### 実践課題3

以下のCSSで定義されるようなカードスタイルを、`CSS in JS`ライブラリである`Panda CSS`を使って`Card.jsx`コンポーネントで再現することを目標とします。

``` css
/* 目標とするスタイル定義 (このCSSを直接使うわけではありません) */
.card-target {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  max-width: 320px;
}

.card-target h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.card-target p {
  color: #6b7280;
  line-height: 1.6;
}
```

- `Panda CSS`の公式ドキュメントを参照し、現在使用している`Vite`プロジェクトに`Panda CSS`を導入・設定してください。
- `src/components/`ディレクトリに`Card.jsx`ファイルを作成してください。このコンポーネントは、`title`（文字列）と`children`（Reactノード、本文として使用を`props`として受け取るように実装してください。
- `Panda CSS`が提供する機能を用いて、上記の目標スタイルを`Card.jsx`内で再現してください。
- `App.jsx`で`Card`コンポーネントをインポートし、適切な`title`と`children`(例: `<p>これはカードの本文です。</p>`)を渡して表示し、スタイルが目標通りに適用されているかブラウザで確認してください。

### 実践課題4

1. `Tailwind CSS`の公式ドキュメントを参照し、`Tailwind CSS`を導入・設定してください。
    - **【重要】環境設定について**
    - 前の課題で導入した`Panda CSS`と`Tailwind CSS`を同じプロジェクトで共存させるには設定調整が必要となり複雑になる場合があります。
    - この課題では **Tailwind CSS の導入と動作確認を優先**するため、以下のいずれかの方法で進めてください。
      - **方法A（推奨）:** この課題用に、**新しい Vite プロジェクトを別フォルダに作成**し、そこに`Tailwind CSS`を導入・設定する。
      - **方法B:** 現在のプロジェクトを使用する場合、**Panda CSS 関連の設定を一時的にコメントアウトまたは削除**し、`Tailwind CSS`の設定が正しく読み込まれるようにする。
2. `Button.jsx`と`Card.jsx`を、`Tailwind CSS`のユーティリティクラスを`className`属性に直接記述する方式でスタイリングしてください。
3. `Card.jsx`で、実践課題3の目標スタイルを、`Tailwind CSS`のユーティリティクラスを用いて再現してください。適切なクラス名は公式ドキュメントで検索しながら進めてください。
4. `App.jsx`で`Button`コンポーネントと`Card`コンポーネントを表示し、`Tailwind CSS`によるスタイルが目標通りに適用されているかブラウザで確認してください。

### 実践課題5

- これまでに試した4つの方法（`通常のCSS`/`CSS Modules`/`CSS in JS`/`Tailwind CSS`）で作成したコンポーネントのコードや挙動、開発体験などを比較検討してみましょう。
- 知識課題4で考察した「大規模Webアプリケーション開発におけるスタイリング手法の選択」について、実践課題の結果を踏まえて改めて考えてみてください。
- 比較分析の結果、あなたが選択する手法とその理由についてまとめた内容を基に、他の研修生と意見交換を行い、多様な視点からの考えを深めましょう。

## 参考資料

- [Tailwind CSS](https://tailwindcss.com/)
- [CSS Modules (GitHub Repository)](https://github.com/css-modules/css-modules)
- [Panda CSS](https://panda-css.com/)
