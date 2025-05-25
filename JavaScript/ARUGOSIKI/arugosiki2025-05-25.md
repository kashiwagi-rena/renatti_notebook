
# 一の位
N 個の正の整数 A0,A 1,…,A N−1が与えられます。N 個の整数の一の位を改行区切りで順に出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const [a, b] = input[0].split("\n");

input[0] = b;
for (let i = 0; i < a; i++) {
    const y = input[i].split("");
    console.log(y[y.length - 1]);
}
```

人のコード
`item % 10`で、10の位を割って、残った1の位を出すの良い！
```
let arr = input.trim().split('\n');

let newArr = arr[1].split(' ');
let ichiNoKurai;
for(const item of newArr){
   ichiNoKurai = item % 10 
    console.log(item);
    console.log(ichiNoKurai);
}
```

# 文字列の連結
N 個の文字列 S0,S1,…,SN−1が与えられます。
N 個の文字列を前からすべてつなげてできる文字列の長さを出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const arrNum = input.shift();
let newNum = 0;
for (let i = 0; i < Number(arrNum); i++) {
    newNum += Number(input[i].length);
}
console.log(newNum);
```

# 頭文字の連結
N 個の文字列 S0,S1…,SN−1が与えられます。
N 個の文字列の頭文字をつないでできる文字列を出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const arrNum = input.shift();

let arrNew = "";
for (let i = 0; i < Number(arrNum); i++) {
    arrNew += input[i].split("").shift();
}
console.log(arrNew);
```