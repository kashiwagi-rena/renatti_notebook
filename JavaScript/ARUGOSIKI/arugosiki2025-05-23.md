# 総和
N 個の正の整数 A 0,A 1,…,A N−1が与えられます。N 個の整数の合計値を求めてください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const [num, a] = input[0].split("\n");

let sumTotal = Number(a);
for (let i = 1; i < num; i++) {
    sumTotal += Number(input[i]);
}
console.log(sumTotal);
```
