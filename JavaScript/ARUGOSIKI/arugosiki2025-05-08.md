# 文字の交換

## 問題文
文字列 S が 1 行目に、2 つの正の整数 N,M が空白区切りで 2 行目に入力されます。 S の前から N 番目の文字と、前から M 番目の文字を入れ替えた文字列を出力してください。

ただしここでは、文字列 S の先頭の文字は 1 文字目であるとします。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const [S, N] = input[0].split("\n");
const M = input[1];

let arr = S.split("");

const temp = arr[Number(N) - 1];
arr[Number(N) - 1] = arr[Number(M) - 1];
arr[Number(M) - 1] = temp;

console.log(arr.join(""));
```

# 労働時間

## 問題文

カメのアルルは A 時に出社し、B 時に退社しました。
その途中、C 時から D 時までの間休憩を取っていました。

A,B,C,D の値が標準入力から与えられます。
アルルが働いていた時間を計算し出力するプログラムを作成してください。

```
const [A, B, C, D] = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

console.log((B - A) - (D - C));
```
