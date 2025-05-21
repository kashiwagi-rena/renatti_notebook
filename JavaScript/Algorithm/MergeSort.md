# マージソート
## 説明：
　配列やリストなどのデータを効率よく並べ替えるためのソートアルゴリズムの一つです。分割統治法（Divide and Conquer）を用いており、安定ソートであり、計算量は常に O(n log n) です

## マージソートの仕組み：
1・分割
配列を半分ずつに分割し、要素数が1になるまで繰り返します。

２・統治（マージ）
分割された小さな配列（サブリスト）同士を、ソートしながら結合（マージ）していきます。
具体的には、2つのソート済み配列の先頭要素を比較し、小さい方を新しい配列に順に追加していきます。

３・完成
すべてのサブリストが結合され、ソート済みの配列が完成します

## 特徴：
計算量：最良・平均・最悪いずれも O(n log n) で、非常に安定した性能を持ちます。

安定ソート：同じ値の要素の順序が保たれます。

追加メモリ：ソートの過程で O(n) の追加メモリが必要です。

大規模データにも対応：外部ソートにも適しています。

jsのコード例
```
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // 配列を2つに分割
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 再帰的に分割＆マージ
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // 2つの配列を小さい順に結合
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 残りの要素を追加
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// 使い方例
const array = [8, 4, 3, 7, 6, 5, 2, 1];
const sorted = mergeSort(array);
console.log(sorted); // [1, 2, 3, 4, 5, 6, 7, 8]

```



## 参考URL
https://www.seplus.jp/dokushuzemi/ec/fe/fenavi/similar_programming/margesort/