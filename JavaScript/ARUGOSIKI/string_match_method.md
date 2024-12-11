# matchメソッド

Stringオブジェクトのmatchメソッドは、指定した検索条件にマッチする文字列を配列にして返すメソッド

## 書き方
```
文字列.match(検索条件);
```
検索条件は、正規表現で指定します。
正規表現以外で指定した場合は、暗黙的に正規表現への変換が行われます。

指定した検索条件にマッチする文字列がある場合は、マッチした文字列を要素とする配列が返ります。
指定した検索条件にマッチする文字列がなかった場合は、nullが返ります。

### 例
```
let str = "ABCDEFGabcdefghijklmn"
str.match(/[A-E]/gi);

> ["A","B","C","D","E","a","b","c","d","e"]
```
※正規表現の書き方
スラッシュ「/」で囲んで書きます。
「[A-E]」は、アルファベットでAからEまで中の１文字を表します。

スラッシュ「/」の後に記述された「g」と「i」は、検索オプション値で、「g」はマッチしたものをすべて返す、「i」は大文字と小文字を区別しない。という意味です。

### 参考文献
[JavaScript【match】文字列のマッチと正規表現](https://programmercollege.jp/column/7762)
[JavaScript 正規表現まとめ](https://qiita.com/iLLviA/items/b6bf680cd2408edd050f)