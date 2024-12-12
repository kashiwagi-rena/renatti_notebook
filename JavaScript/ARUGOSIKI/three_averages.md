# 3つの平均
## 自分の答え
```
"use strict";

const main = arg => {
    const input = arg.trim().split(" ");
    const A = parseInt(input[0], 10);
    const B = parseInt(input[1], 10);
    const C = parseInt(input[2], 10);

    console.log((A + B +C) / 3);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
```

## 他の方の答え
```
const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').map((i) => parseInt(i));
console.log((input[0] + input[1] + input[2])/3);
```
めっちゃ短くできるっぽい！これもやってみよ〜
