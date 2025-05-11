# パスワードの強度判定（1）

パスワードを表す文字列 S が標準入力から与えられます。
S が password という文字列と一致している場合には dangerous、そうでない場合は safe を出力してください。

自分の回答↓
```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (input[0] === "password") {
    console.log("dangerous");
} else {
    console.log("safe");
}
```

他の人の回答
```
"use strict";

const main = args => {
  const S = args.trim();

  console.log(S === "password ? "dangerous" : "safe");
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
```

# パスワードの強度判定(2)

パスワードを表す文字列 S が標準入力から与えられます。
S が 6 文字以下の場合は dangerous、そうでない場合は safe を出力してください。

```
const main = args => {
    const S = args.trim();
    console.log(S.length <= 6 ? "dangerous" : "safe");
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim();
if (input.length <= 6) {
    console.log("dangerous");
} else {
    console.log("safe");
}
```
