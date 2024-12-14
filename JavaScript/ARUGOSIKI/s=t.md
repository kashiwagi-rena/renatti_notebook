# S = T
## 自分の答え
```
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
if (input[0] === input[1]) {
    console.log('Yes');
} else {
    console.log('No');
}
```

### メモ
最後の"\n"などの改行や空白が入っていると不正解になってしまうので、よく確認すること

## 他の人の答え
ひとつ一つ確実に書いていくのもよき
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const [a, b] = input.split(" ");

if (a === b) {
    console.log('Yes');
} else {
    console.log('No');
}
```