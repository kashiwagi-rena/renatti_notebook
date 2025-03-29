# N 番目の文字
問題：
文字列 S と正の整数 N が改行区切りで入力されます。S の前から N 番目の文字を出力してください。
ただしここでは、文字列 S の先頭の文字は 1 文字目であるとします。

入力値：
```
algo
2
```

自分の回答:
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8");
const [a,b] = input.split("\n");
const answer = a[b-1];

console.log(answer);
```

# 4 つの最大
問題：
4 つの正の整数 A,B,C,D が空白区切りで入力されます。4 つの整数の最大値を出力してください。

入力値：
```
31 41 59 26
```

自分の回答：
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8");
const arr = [a,b,c,d] = input.split(" ");
arr.sort((a,b) => a - b);
console.log(arr[3]);
```