# A + B
問題：2 つの正の整数 A,B が空白区切りで入力されます。
    A+B の値を出力してください。

### 自分の回答
```
function Main(input) {
    const lines = input.split(" ");
    console.log(Number(lines[0]) + Number(lines[1]));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
```

### 別の回答
処理の流れは下記に記載
```
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin", "utf8")
' input > 1 2 
(改行が入っている)'

const [nums] = input.split("\n").slice(0,-1)
(const [nums] = input.split("\n") で、[ '1 2' ]が返ってくる。)
(.slice(0,-1) で、配列の最後の要素を消す)
' [nums] > [ '1 2' ]'
const [a,b] = nums.split(" ").map(n => parseInt(n, 10))
console.log(a + b)

nums.split(" ")
> "1 2"を["1", "2"]に変換

.map(n => parseInt(n, 10))
> 配列の各要素（文字列）を数値に変換します
parseInt(n, 10)は、nを10進数として整数に変換します。
```
