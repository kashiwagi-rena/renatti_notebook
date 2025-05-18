# 正しい点数

カメのアルルがとあるテストを受けたところ、点数は N 点でした。
正整数 N が標準入力から与えられます。
テストの点数が 0 点以上 100 点以下であるならば valid、そうでないならば invalid を出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (input[0] >= 0 && input[0] <= 100) {
    console.log("valid");
} else {
    console.log("invalid");
}
```

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log((input[0] >= 0 && input[0] <= 100) ? "valid" : "invalid");
```

# 成績判定（1）

カメのアルルはとあるテストで N 点を取りました。

このテストの評定は、点数に応じて次のように決まります。

| 順位 | 評定 | テストの点数        |
|------|:----:|:-------------------:|
| A    |  A   | 90 点以上 100 点以下 |
| B    |  B   | 80 点以上 89 点以下  |
| C    |  C   | 79 点以下            |

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (input[0] <= 100 && input[0] >= 90) {
    console.log("A");
} else if (input[0] <= 89 && input[0] >= 80) {
    console.log("B");
} else if (input[0] <= 79) {
    console.log("C");
}
```