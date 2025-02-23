# 一の位比較

2 つの正の整数 A,B が空白区切りで入力されます。 A と B のうち一の位が小さい方の値を出力してください。
```
入力値
51 17

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const [a,b] = input.split(" ")
if ((Number(a) % 10) > (Number(b) % 10)) {
    console.log(b);
} else {
    console.log(a);
}

> 51
```