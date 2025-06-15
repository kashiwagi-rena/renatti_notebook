# プラスの個数

N 個の整数 A0,A1,…,A N−1からなる整数列 A
M 個の整数 B0,B1,…,BM−1からなる整数列 Bが与えられます。
A と B それぞれに含まれる 正の整数 の個数を求め、A の方が多い場合 A、B の方が多い場合 B、どちらも同じ場合は same を出力してください。

```
const [NM, A, B] = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = NM.split(" ");

const arrAs = A.split(" ");
const arrBs = B.split(" ");

const arrA = [];
const arrB = [];

for (let i = 0; i <= N; i++) {
    if (arrAs[i] >= 1) {
        arrA.push(arrAs[i]);
    }
}

for (let i = 0; i <= M; i++) {
    if (arrBs[i] >= 1) {
        arrB.push(arrBs[i]);
    }
}

if (arrA.length > arrB.length) {
    console.log("A");
} else if (arrA.length < arrB.length) {
    console.log("B")
} else if (arrA.length === arrB.length) {
    console.log("same");
}

```

他の人の回答
関数を使って、共通している部分は共通の処置を使用している
```
let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let arr = input.split('\n');
let num = arr[0];
let arrA = arr[1].split(' ');
let arrB = arr[2].split(' ');
function hantei (args){
let count = 0;
for( const arg of args){
    if(arg > 0){
        count++;
    } 
}
 return count;
}
if(hantei(arrA) === hantei(arrB)){
    console.log('same')}
    else if (hantei(arrA) > hantei(arrB)){
    console.log('A')
    } else {
        console.log('B')
    };

```