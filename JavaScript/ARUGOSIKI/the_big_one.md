# アルゴ式
## 大きい方
2 つの正の整数 A,B が空白区切りで入力されます。 A と B のうち大きい方の値を出力してください。

### 自分では解けなかった

### 別の人の回答
```
"use strict";

const main = arg => {
  const input = arg.trim().split(" ");
  const A = parseInt(input[0], 10);
  const B = parseInt(input[1], 10);
  
  if( A > B ){
    console.log(A);
  }else{
    console.log(B);
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
```

**説明**
const input = arg.trim().split(" ");

まず、arg.trim()は入力された文字列の前後の余分な空白を削除します。
.split(" ")は、空白で文字列を分割して配列に変換します。

例えば、"10 20"という入力があった場合:

trim()で余分な空白が削除されます
split(" ")で ["10", "20"] という配列になります


const A = parseInt(input[0], 10);

input[0]は配列の最初の要素（最初の数字）を取り出します
parseInt()は文字列を整数に変換する関数です
10は10進数で解釈することを意味します


const B = parseInt(input[1], 10);

同様に、配列の2番目の要素（2番目の数字）を整数に変換します
