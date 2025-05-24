# 総積

N 個の正の整数 A 
0,A 1,…,A N−1が与えられます。N 個の整数を全て掛け合わせた値を求めてください。
**補足**
この問題は数学の記号を用いると以下のように表せます。
∏ i=0N−1A iの値を求めよ。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const [num, a] = input[0].split("\n");

let sumTotal = Number(a); 
for (let i = 1; i < num; i++) {
    sumTotal *= Number(input[i]);
}

console.log(sumTotal);
```

# 3 の倍数

N 個の正整数 A0,A 1,…,A N−1が与えられます。
N 個の整数のうち、3 の倍数であるものを改行区切りで全て出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const [n, x] = input[0].split("\n");
input[0] = x;
for (let i = 0; i < Number(n);i++) {
    if (Number(input[i]) % 3 === 0) {
        console.log(input[i]);
    }
}
```
