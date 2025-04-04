# 問題集に挑戦しよう

## 実践課題

### 問題1

次の2つのオブジェクトがあります。

```js
const fruit = { name: 'apple' };
const color = { hue: 'red' };
```

これらのオブジェクトを合わせて、新しいオブジェクトを作成してください。新しいオブジェクトは、元のオブジェクトの全てのプロパティを持つようにしてください。

```js
// 期待する出力
{ fruit: 'apple', color: 'red' }
```

### 問題2

次の配列があります。

```js
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

この配列からインデックス3から5までの要素を取り出し、新しい配列として返してください。

```js
// 期待する出力
['Thursday', 'Friday', 'Saturday']
```

### 問題3

次の配列の各要素を個別に、コンソールに出力してください。

```js
const pets = ['dog', 'cat'];
```

```js
// 期待する出力
dog
cat
```

### 問題4

次の配列の各要素に、そのインデックス値を足した新しい文字列を作成し、新しい配列として返してください。

```js
const vehicles = ['car', 'bike'];
```

```js
// 期待する出力
['car0', 'bike1']
```

### 問題5

変数 `myHobbies` を `['reading', 'swimming']` として定義し、その変数が配列かどうかを判定してください。判定結果は `true` または `false` で表示してください。

```js
// 期待する出力
true
```

### 問題6

次のオブジェクトの全てのキーと値を、自身のプロパティとして出力してください。

```js
const person = {
  name: 'Taro',
  age: 25
};
```

```js
// 期待する出力
name: Taro
age: 25
```

### 問題7

次の配列の全ての要素を結合し、1つの文字列として出力してください。

```js
const words = ['I', ' ', 'love', ' ', 'JavaScript'];
```

```js
// 期待する出力
I love JavaScript
```

### 問題8

次のオブジェクトの配列を、`score` プロパティの値が高い順にソートし、新しい配列として返してください。

```js
const students = [
  { name: 'Taro', score: 80 },
  { name: 'Hanako', score: 95 },
  { name: 'Jiro', score: 70 },
  { name: 'Yoshiko', score: 85 }
];
```

```js
// 期待する出力
[
  { name: 'Hanako', score: 95 },
  { name: 'Yoshiko', score: 85 },
  { name: 'Taro', score: 80 },
  { name: 'Jiro', score: 70 }
]
```

### 問題9

関数 `countUp` を定義してください。この関数は、呼び出されるたびに返り値が1ずつ増加するような動作をするようにしてください。

```js
// 期待する出力
countUp(); // 1
countUp(); // 2
countUp(); // 3
```

### 問題10

次の配列があります。

```js
const months = ['jan', 'feb', 'mar', 'apr', 'may'];
```

この配列の0番目から2番目までの要素を、それぞれ `'spring'`、`'summer'`、`'autumn'` に置き換えた新しい配列を作成してください。

```js
// 期待する出力
['spring', 'summer', 'autumn', 'apr', 'may']
```

### 問題11

次の配列があります。

```js
const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
```

インデックス2から4までの要素を取り出し、新しい配列として出力してください。また、元の配列がどのように変化したか確認してください。

```js
// 期待する出力
['cherry', 'date', 'elderberry']
```

### 問題12

次の配列があります。

```js
const greetings = ['おはよう', 'こんにちは', 'こんばんは'];
```

この配列の要素からランダムに一つ選んで出力する関数を作成してください。将来、配列に要素が追加される可能性があることを考慮してください。

```js
// 期待する出力
こんにちは
```

### 問題13

次の配列があります。

```js
const letters = ['B', 'a', 'c', 'e', 'k'];
```

この配列を大文字と小文字を区別せずにアルファベット順にソートしてください。

```js
// 期待する出力
['a', 'B', 'c', 'e', 'k']
```

### 問題14

文字列 '10' をNumber型に変換し、その型を判定して、数値かどうかを評価してください。

### 問題15

次の配列があります。

```js
let numbers = ['2', '23', '0', '16'];
```

この配列を小さい順にソートしてください。その後、ソートした配列を変更できないようにread-onlyにしてください。

```js
// 期待する出力
['0', '2', '16', '23']
```

### 問題16

次の配列があります。

```js
let scores = [12, 5, 8, 130, 44];
```

この配列の全ての要素が10以上かどうかを評価して、真偽値を返してください。また、10以上の要素が1つでもある場合は、trueを返してください。

### 問題17

次の多次元配列があります。

```js
const data = [
  ['one', 'info@example.com'],
  ['two', 'hello@example.com'],
  ['three', 'support@example.com']
];
```

この配列の各要素を出力してください。

```js
// 期待する出力
['one', 'info@example.com']
['two', 'hello@example.com']
['three', 'support@example.com']
```

### 問題18

`undefined == null` の真偽値は何でしょうか。

### 問題19

次の関数があります。

```js
function getValues() {
  return {
    name: 'John',
    age: 30,
    city: 'New York'
  };
}
```

この関数が返すオブジェクトのname、age、cityのvalue値を、それぞれ変数 name、age、cityに代入してください。

### 問題20

文字列 `'Hello, world! Hello, JavaScript!'` に `'Hello'` が含まれているかどうかを判定し、真偽値を出力してください。

```js
// 期待する出力
true
```

### 問題21

文字列 'Hello' を3回繰り返した結果を出力してください。

```js
// 期待する出力
HelloHelloHello
```

### 問題22

文字列 'JavaScript' を `['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']` のように、1文字ずつ配列の要素として取得してください。

### 問題23

文字列 `'Anthropic'`の1文字目 `'A'` を変数 `char1` に、2文字目 `'n'` を変数 `char2` に代入し、残りの文字を配列 `rest` の要素として出力してください。

```js
// 期待する出力
A
n
['t', 'h', 'r', 'o', 'p', 'i', 'c']
```

### 問題24

`greet('Hello', 'world', '!', 'How', 'are', 'you', '?')` を実行したとき、第1引数が `first`、第2引数が `second`、残りの引数が配列 `rest` の要素になるような関数 `greet` を定義してください。

### 問題25

配列 `arr1 = [1, 2, 3]` に `arr2 = [4, 5, 6]` を結合して `[1, 2, 3, 4, 5, 6]` となるようにしてください。ただし、`Array#concat` は使わないでください。

### 問題26

次の関数があります。

```js
function getMessage() {
  return 'Hello, JavaScript!';
}
```

この関数をテンプレートリテラル内で呼び出し、次のように出力してください。

```js
// 期待する出力
The message is: Hello, JavaScript!
```

### 問題27

次のような関数を作成してください。

```js
function addNumbers({a, b}) {
  // 関数の中身を実装してください
}
```

この関数は、引数としてオブジェクト `{ a: 1, b: 2 }` を受け取り、`a` と `b` の値を加算して返します。

```js
// 期待する出力
3
```

### 問題28

次の多次元配列があります。

```js
const names = [
  ['Alice', 'Bob', 'Charlie'],
  ['David', 'Eve', 'Frank']
];
```

この配列のすべての要素に 'さん' を付けて、新しい配列を作成してください。

```js
// 期待する出力
[
  ['Aliceさん', 'Bobさん', 'Charlieさん'],
  ['Davidさん', 'Eveさん', 'Frankさん']
]
```

### 問題29

次の配列があります。

```js
const people = [{ name: 'Alice' }, { name: 'Bob' }];
```

この配列の各オブジェクトの `name` プロパティの値に 'さん' を付けて、新しい配列を作成してください。

```js
// 期待する出力
['Aliceさん', 'Bobさん']
```

### 問題30

次の多次元配列があります。

```js
const data = [['apple', 'banana'], ['carrot', 'durian']];
```

この配列の各サブ配列の最初の要素のみを出力してください。

```js
// 期待する出力
apple
carrot
```

### 問題31

次の配列があります。

```js
const fruits = ['apple', 'banana'];
```

この配列を `copy` にコピーし、`fruits` の要素を `['kiwi', 'orange']` に置き換えてください。

```js
// 期待する出力
copy: ['apple', 'banana']
fruits: ['kiwi', 'orange']
```

### 問題32

次の配列があります。

```js
const array = ['A', 'B', 'C', 'D', 'E'];
```

この配列の要素 'E' を 'B' の前に移動させて、`['A', 'E', 'B', 'C', 'D']` のような配列を作成してください。

### 問題33

次の配列があります。

```js
const arr = [10, 20];
```

`arr[2]` が存在しないことを確認してください。

### 問題34

次の文字列があります。

```js
const str = '-9';
```

この文字列を数値に変換してください。

### 問題35

次のような2つの文字列があります。

```js
const greeting = 'こんにちは';
const name = '田中さん';
```

これらの文字列を連結し、さらに 'いい天気ですね' を付け足した新しい文字列を生成してください。

```js
// 期待する出力
こんにちは田中さんいい天気ですね
```

### 問題36

変数 `target` が `null` または `undefined` の場合にのみ、条件式が `true` になるような式を書いてください。

### 問題37

配列 `array` が空の場合に `false` が返るようにしてください。

```js
let array = [];
// 条件式を書いてください
```

### 問題38

次のコードでは、`value` が0の場合に `false` となり、`10` が返ります。

```js
const value = 0;
const target = value || 10;
console.log(target); // 10
```

`value` が0の場合にも、`value` の値が代入されるように修正してください。

### 問題39

次のコードでは、空のオブジェクト `obj` に対して条件式を評価すると、期待される `false` ではなく `true` が返ります。

```js
let obj = {};
console.log(obj ? true : false); // true
```

自身のプロパティを持っていない場合に `false` が返るように修正してください。

### 問題40

次の配列があります。

```js
const fruits = ['apple', 'banana', 'orange'];
```

要素 `'orange'` のインデックスを返してください。

```js
// 期待する出力
2
```

### 問題41

次の配列があります。

```js
const letters = ['a', 'b', 'c'];
```

インデックス1番の要素だけを文字列 `'javascript'`に変更してください。

```js
// 期待する出力
['a', 'javascript', 'c']
```

### 問題42

次の配列があります。

```js
const numbers = [1, -2, 3, -4, 5];
```

0未満の要素だけを出力してください。

```js
// 期待する出力
-2, -4
```

### 問題43

変数 `data` の値が `null` かどうかを確認してください。

### 問題44

次の配列があります。

```js
const zeros = [0, 0, 0];
```

インデックス1から最後までの要素を `7` に変更した配列を作成してください。

```js
// 期待する出力
[0, 7, 7]
```

### 問題45

次の数値があります。

```js
const num = 3.14159;
```

この数値を小数点以下で四捨五入してください。

```js
// 期待する出力
3
```

### 問題46

次のオブジェクトがあります。

```js
const obj = {
  name: 'Taro',
  age: 25
};
```

オブジェクトの各プロパティを変数 `name` と `age` に代入し、それぞれ出力してください。

### 問題47

次の文字列があります。

```js
const str = 'JavaScript';
```

文字列の先頭の文字 `'J'` を変数 `firstChar` に、5番目の文字 `'S'` を変数 `fifthChar` に代入してください。

### 問題48

次の配列があります。

```js
const nested = [1, [2, 3, 4], 5, [6, 7]];
```

この配列をフラット化して、`[1, 2, 3, 4, 5, 6, 7]` となるようにしてください。

### 問題49

次の文字列があります。

```js
const sentence = "The quick brown fox";
```

この文字列を単語に分割し、それぞれの単語をプロパティ名とするオブジェクトを作成してください。

```js
// 期待する出力
{ 0: "The", 1: "quick", 2: "brown", 3: "fox" }
```

### 問題50

次の関数 `add` を定義してください。

- `add()` を呼び出すと `3` を返す
- `add(2)` を呼び出すと `4` を返す
- `add(2, 3)` を呼び出すと `5` を返す

### 問題51

次のような条件分岐のコードがあります。

```js
if (condition) {
  doSomething();
}
```

`condition` が `true` の場合に実行したい関数を、より簡潔な形で記述してください。

### 問題52

オブジェクトのプロパティをコピーするとき、参照渡しによるオリジナルオブジェクトへの影響を避けるために、新しいオブジェクトを作成する必要があります。

次のオブジェクトがあります。

```js
const original = { name: 'Taro', age: 25 };
```

このオブジェクトを参照渡しではなく、値渡しでコピーした新しいオブジェクト`copied`を作成してください。

`original`オブジェクトのプロパティを変更しても、`copied` オブジェクトに影響を与えないことを確認してください。

### 問題53

次のようなオブジェクトの宣言があります。

```js
const name = 'Taro Yamada';
const address = 'Tokyo';

const obj = {
  name: name,
  age: 30,
  city: 'Osaka',
  address: address
};
```

このオブジェクトの宣言を、プロパティ名と変数名が同じ場合のショートハンドを使って書き換えてください。

### 問題54

次のような多次元配列があります。

```js
const nestedArray = [[0, 1], [2, 3], [4, 5]];
```

この多次元配列をフラット化して、`[0, 1, 2, 3, 4, 5]` のような1次元の配列に変換してください。

### 問題55

次のような三項演算子を使った変数の宣言があります。

```js
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
```

これらの宣言を、三項演算子を使わずに同じ意味を持つように書き換えてください。

### 問題56

次のような配列があります。

```js
const duplicatedArray = [1, 1, 'a', 'a', 'b', 'c', 'c'];
```

この配列から重複している要素を取り除いて、ユニークな要素だけを持つ新しい配列を作成してください。

```js
// 期待する出力
[1, 'a', 'b', 'c']
```

### 問題57

次の配列があります。

```js
const array = ['apple', 'banana', 'cherry'];
```

この配列の先頭に文字列 'orange' を追加してください。

```js
// 期待する出力
['orange', 'apple', 'banana', 'cherry']
```

### 問題58

次の配列があります。

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

この配列から、2でも3でも割り切れない数を抽出して新しい配列を作成してください。

```js
// 期待する出力
[1, 5, 7]
```

### 問題59

次のようなオブジェクトがあります。

```js
const myObject = {
  1: ['apple', 'banana', 'cherry'],
  2: ['dog', 'cat', 'bird']
};
```

このオブジェクトを多次元配列に変換してください。

```js
// 期待する出力
[['apple', 'banana', 'cherry'], ['dog', 'cat', 'bird']]
```

### 問題60

次の配列があります。

```js
const fruits = ['apple', 'banana', 'cherry'];
```

この配列の要素をキー、インデックスを値として持つオブジェクトを作成してください。

```js
// 期待する出力
{0: 'apple', 1: 'banana', 2: 'cherry'}
```

## 参考資料

- [JavaScript練習問題集](https://gist.github.com/kenmori/1961ce0140dc3307a0e641c8dde6701d)
