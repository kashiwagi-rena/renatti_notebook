# Hello Hello Hello

文字列 Hello を 10 回改行区切りで出力してください。

```
for (let i = 0; i < 10; i++ ) {
    console.log("Hello");
}
```

# 1, 2, ..., 100

次の処理を i=1,2,…,100 について行ってください。
i 行目には整数 i を出力する。

```
let str = "";
for (let i = 1; i <= 100; i++) {
    console.log(i);   
}
```

# 2, 4, …, 100
次の処理を i=1,2,…,100 について行ってください。
i 行目には整数 2i を出力する。

```
for (let i = 1; i <= 100; i++ ) {
    console.log(i * 2);
}
```

# 試合の成績
カメのアルルは卓球を 5 試合行いました。
試合結果は o と x のみからなる長さ 5 の文字列 S で表され、S の各文字は各試合の勝敗を表します。たとえば S が oxxox の場合、アルルの試合結果が順に 勝ち・負け・負け・勝ち・負け であったことを意味します。
アルルの勝利数を求めてください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('');

const resultList = input.filter(result => result === "o");
console.log(resultList.length);
```

# 円周率の K 番目
次の 10 個の整数のうち、左から K 番目の整数を求めてください。
3,1,4,1,5,9,2,6,5,3
ただし、最も左の整数を左から 0 番目と数えます。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const arr = [3,1,4,1,5,9,2,6,5,3];

console.log(arr[input]);
```

# 総和
繰り返し構文を活用して、次の 10 個の整数の総和を計算し出力するプログラムを作成してください。
`3, 1, 4, 1, 5, 9, 2, 6, 5, 3`

```
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

let sumTotal = 0;
for (let i = 0; i < arr.length; i++) {
    sumTotal =  sumTotal + arr[i];
}
console.log(sumTotal);
```