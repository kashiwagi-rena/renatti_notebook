# オリンピック

夏季オリンピックは、原則として西暦が 4 の倍数の年に開催されます。
ただし、2020 年に予定されていた東京オリンピックは延期され、2021 年に開催されました。
この延期が 1948 年から 2023 年現在までで唯一の例外です。
整数 N(1948≤N≤2023) が与えられます。西暦 N 年にオリンピックが開催されたならば Yes、そうでないならば No を出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (Number(input) == 2020) {
    console.log("No");
} else if (Number(input) === 2021 || Number(input) % 4 === 0) {
    console.log("Yes");
} else {
    console.log("No");
} 
```

# うるう年判定

私たちが普段使っているグレゴリオ暦には、季節と暦のずれを補正するために平年より 1 日多いうるう年が存在します。
うるう年は次の規則に従って定められています：
西暦年が 4 の倍数の年は (原則) うるう年である
ただし、西暦年が 100 の倍数の年は (原則) うるう年でない
ただし、西暦年が 400 の倍数の年は必ずうるう年である
例えば、 2020 年は 1. のみを満たすのでうるう年です。
西暦 N 年はうるう年でしょうか。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (Number(input[0]) % 400 === 0) {
    console.log("Yes");
} else if (Number(input[0]) % 100 === 0) {
    console.log("No");
} else if (Number(input[0]) % 4 === 0) {
    console.log("Yes");
} else {    
    console.log("No");
}
```

# Fizz Buzz の判定部分

正の整数 N が与えられます。

N が 3 の倍数ならば、Fizz と出力してください
N が 5 の倍数ならば、Buzz と出力してください
ただし、N が 3 の倍数でも 5 の倍数でもあるならば、FizzBuzz と出力してください
それ以外の場合は、そのままの整数 N を出力してください

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');

if (Number(input[0]) % 3 === 0 && Number(input) % 5 === 0) {
    console.log("FizzBuzz");
} else if (Number(input[0]) % 3 === 0) {
    console.log("Fizz");
} else if (Number(input[0]) % 5 === 0) {
    console.log("Buzz")
} else {
    console.log(input[0])
}
```