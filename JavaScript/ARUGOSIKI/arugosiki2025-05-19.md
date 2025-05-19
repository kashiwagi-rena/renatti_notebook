# 成績判定（4）

ある大学の入学試験には 1 次試験と 2 次試験があり、受験者の合否は 1 次試験と 2 次試験の点数に応じて次のように決まります。
1 次試験の点数が X 点未満であれば、不合格
上記以外の場合、1 次試験と 2 次試験の合計点が Y 点以上なら合格、そうでなければ不合格
カメのアルルがこの大学の入学試験を受けたところ、1 次試験が A 点、2 次試験が B 点でした。
アルルがこの試験に合格したならば Yes、そうでなければ No を出力してください。

```
const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split(' ');
const A = Number(input[0]);
const [B, X] = input[1].split('\n');
const Y = Number(input[2]);

if (A >= X) {
    console.log((A + Number(B)) >= Number(Y) ? "Yes" : "No");
} else {
    console.log("No");
}
```

AIの答え

```
"use strict";

const input = require("fs").readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A_str, B_str] = input[0].trim().split(" ");
const A = Number(A_str);
const B = Number(B_str);

const [X_str, Y_str] = input[1].trim().split(" ");
const X = Number(X_str);
const Y = Number(Y_str);

if (A < X) {
    console.log("No");
} else if (A + B >= Y) {
    console.log("Yes");
} else {
    console.log("No");
}
```