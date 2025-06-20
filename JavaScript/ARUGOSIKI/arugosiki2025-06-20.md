# 合計金額
カメのアルルはスーパーマーケットで N 個の商品を買いました。
i(0≤i≤N−1) 番目の商品について、価格は 1 個 Ai円で、アルルはこれを Bi個買いました。
アルルが買った商品の総額を求めてください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let allNum = 0;

for (let i = 1; i<= Number(input[0]); i++) {
    const [A, B] = input[i].split(' ');
    allNum += Number(A) * Number(B)
}
    console.log(allNum);

```
