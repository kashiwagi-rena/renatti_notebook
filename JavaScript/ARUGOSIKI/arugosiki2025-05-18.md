# 成績判定（2）

カメのアルルはとあるテストで N 点を取りました。
このテストの評定は、点数に応じて次のように決まります。

| 評定 | テストの点数           |
|------|------------------------|
| S    | 100 点                 |
| A    | 90 点以上 99 点以下    |
| B    | 80 点以上 89 点以下    |
| C    | 70 点以上 79 点以下    |
| D    | 60 点以上 69 点以下    |
| E    | 50 点以上 59 点以下    |
| F    | 49 点以下              |

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (!Number(input[0])) {
    console.log("invalid")
} else if (Number(input[0]) === 100) {
    console.log("S");
} else if (Number(input[0]) <= 99 && Number(input[0] >= 90)) {
    console.log("A");
} else if (Number(input[0]) <= 89 && Number(input[0] >= 80)) {
    console.log("B");
} else if (Number(input[0]) <= 79 && Number(input[0] >= 70)) {
    console.log("C");
} else if (Number(input[0]) <= 69 && Number(input[0] >= 60)) {
    console.log("D");
} else if (Number(input[0]) <= 59 && Number(input[0] >= 50)) {
    console.log("E");
} else if (Number(input[0]) <= 49) {
    console.log("F")
}
```

# 成績判定（3）

カメのアルルは数学のテストで N 点、英語のテストで M 点を取りました。
数学と英語がともに 70 点以上 かつ、数学と英語の合計点が 160 点以上であれば試験に合格です。
標準入力から正整数 N, M の値が与えられます。
アルルが試験に合格したならば Yes、そうでないならば No を出力するプログラムを作成してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (Number(input[0]) >= 70 && Number(input[1]) >= 70 && Number(input[0]) + Number(input[1]) >= 160){
    console.log("Yes");
} else {
    console.log("No");
}

```

他の人の答え
`.map(e => +e)`この記述でstringの配列をnumberに変換してAとBに入れている。
### +e とは？
これは JavaScript の**「数値への変換」**の書き方です。つまり、文字列を number に変えることができます！
```
+"80" // → 80（数値）
+"90" // → 90（数値）
```

| 処理             | 結果（型）            |
| -------------- | ---------------- |
| `"80"`（string） | `"80"`（そのまま）     |
| `+"80"`        | `80`（number に変換） |

**JavaScript（TypeScript）では、+ を前につけると 文字を数に変換できるんです。**

```
"use strict";

const main = args => {
    const [A, B] = args.trim().split(" ").map(e => +e);

    console.log(A >= 70 && B >= 70 && A + B >= 160 ? "Yes" : "No");
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
```

[ラムダ式・アロー関数](https://midolog.net/javascript-lambda-expression-tutorial/)
アロー関数のおさらい
```
// 無名関数
function (num) {
  return num * 2
}

// ラムダ式
(num) => {
  return num * 2
}

// 引数が1つなので()を省略
num => {
  return num * 2
}

// 処理が1つなので{}を省略
num => return num * 2

// returnのみなのでreturnを省略
num => num * 2
```
[【JavaScript】配列要素を変換するmap関数の使い方](https://midolog.net/javascript-array-map-function-tutorial/)

for文を使用した配列・リストの要素変換処理
```
let numList = [1, 2, 3]

let resultList = []
for (let i=0; i<numList.length; i++) {
  resultList.push(numList[i] * 2)
}
```

配列.map(変換用関数)とすると、配列の各要素を変換用関数で変換した結果を要素に持つ新しい配列を返します。
map関数を使用した場合
```
let numList = [1, 2, 3];

let resultList = numList.map(function (e) {
  returu e* 2
})
```
変更用関数に当たるのは、
```
function (e) {
  returu e* 2
}
```
ここに`e`を順番に渡す

上記記述を書き比べてみた
```
let numList = [ 1, 2, 3 ]

// for文を使った場合
let resultList = []
for (let i=0; i<numList.length; i++) {
  resultList.push(numList[i] * 2)
}

// map関数を使った場合
let resultList = numList.map(function (e) {
  return e * 2
})

// map関数を使った場合（ラムダ式版）
let resultList = numList.map(e => e * 2)
```