# 倍数の判定
## 自分の答え
```
"use strict";

const main = arg => {
    const input = arg.trim().split(" ");
    const A = parseInt(input[0], 10);
    const B = parseInt(input[1], 10);

    if (A % B === 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
```

「大きい方」の考え方で解けばあとは条件分岐書いてあげればOK

## 他に人の答え
```
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin", "utf8")
const ns = input.split("\n").slice(0,-1)
const inputs = ns.map(n => n.split(" ").map(v => parseInt(v, 10)))
for(const [a,b] of inputs) {
    if(a % b === 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
```