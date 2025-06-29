# crul コマンド

> curl（Client URL）は、コマンドラインからHTTPリクエストを送信するためのツールです。URLを指定してデータを取得したり、データを送信したりすることができます。curlはHTTPだけでなく、FTPやSMTPなどの他のプロトコルもサポートしています。

## 使い方
### HTTPリクエストを使用してデータを取得
URLを指定してデータを取得すること
```
% curl http://google.com 

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
```

参考文献：https://zenn.dev/skrikzts/articles/8fe062618f3fa8　（基本的なものが書いてある）
https://girigiribauer.com/tech/20170721/　（ちょっと小難しいのも書いてある）
