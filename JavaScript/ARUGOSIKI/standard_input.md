# JavaScriptの標準入力について
JavaScriptのは、標準入力をサポートしていないので、自分のコードでどうにかしないといけない
いつもわからなくなるので、まとめ

アルゴ式で使用した回答(先頭の文字表示)
```
function Main(input) {
    const lines = input.split("\n");
    console.log(lines)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

入力値：aiueo
> [ 'aiueo' ]

function Main(input) {
  const lines = input.split("\n");
  console.log(lines[0][0])
}

Main(require("fs").readFileSynu("/dev/stdin", "utf8"));

入力値：aiueo
> a

[charAt](https://www.javadrive.jp/javascript/string/index12.html)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
console.log(input.charAt(0));

入力値：aiueo
> a

```

2行で渡される数字を足し算
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const num = input.match(/\d+/g);
console.log(Number(num[0]) + Number(num[1]));

入力値：1
2

> 3 
```

2行で渡される数字を足し算
他の人のコード
```
const fs = require("fs")
const input = fs.readFileSync("/dev/stdin", "utf8")
const [a,b] = input.split("\n").slice(0,-1)
console.log(a)
console.log(Number(a)+Number(b))

input.split("\n")で、["1", "2", ""]にして
slice(0, -1)で、配列の先頭（インデックス 0）から最後の1つ手前（インデックス -1）までを取り出します。["1", "2", ""] →["1", "2"]にする

入力値：1
2

> 3 
```

文字列を繋げる(改行された2つの文字を繋げなさい)
```
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8");
const [a,b] = input.split("\n")
console.log(a + b);

出力値：algo
method

> algomethod
```