#JavaScriptの標準入力について
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

[JavaScript 正規表現まとめ](https://qiita.com/iLLviA/items/b6bf680cd2408edd050f)
```

