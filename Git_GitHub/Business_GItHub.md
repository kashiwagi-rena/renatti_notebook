# 仕事でよく使うGitHubのコマンド集

### 最新のdevelopブランチを持ってきて、作業ブランチを最新のdevelopブランチから生やす方法
1. developブランチにcheckout
2. developブランチにて
  ```
  git pull origin develop
  ```
3. 作業ブランチにcheckout 
4. 作業ブランチにて
  ```
  git rebase develop
  ```
5. Git Graphにてコミット履歴確認

### git push し終わったコミットをローカルに戻す
```
git rebase squash
```

### 新しいブランチを作成する際に気を付ける点
gitで新しいブランチを作る際は、work/〇〇と「/」以降もつけること
理由：「/」をつけないとその単語は使えなく使用中その同じ単語をブランチに使用できないため

### git reset はなにをリセットするか
スクショ確認。下記、コマンドをよく使うと思います。
```
git reset --soft HEAD^
```
![git reset オプション HEAD^](スクリーンショット%202024-11-16%2022.03.51.png)
[git reset は 何をリセットするのか](https://qiita.com/shoheihoh/items/2f49ca9a046f546054f9#:~:text=git%20reset%20%2D%2Dhard%20HEAD,-%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84&text=%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%84%E3%83%AA%E3%83%BC%E3%81%AE%20modified.,txt%20%E3%81%AF%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E6%AE%8B%E3%82%8B%E3%80%82)

### git の　HEADって結局なにもの？

> 今、自分が作業している場所を示すポインタ

[GitのHEADとは何者なのか](https://qiita.com/ymzkjpx/items/00ff664da60c37458aaa)
