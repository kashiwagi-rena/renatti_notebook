# UTS
## 自分の答え
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const [S, T, U] = input.split(" ");

console.log(U + T + S);
```