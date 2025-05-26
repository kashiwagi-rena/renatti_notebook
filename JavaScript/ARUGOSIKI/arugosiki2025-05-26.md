# K 番目の値

N 個の整数 A0,A 1,…,A N−1が一列に並んでいます。
最も左の整数を左から 0 番目と数えるとき、左から K 番目の整数を出力してください。
すなわち、AKを出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [A, B] = input[0].split(" ");
const newInput = input[1].split(" ");
console.log(newInput[Number(B)]);
```