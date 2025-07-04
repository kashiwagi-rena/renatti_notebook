# vueの環境構築方法
**参考文献：**[公式・クイックスタート](https://ja.vuejs.org/guide/quick-start.html)

> このコマンドは、公式の Vue プロジェクトスキャフォールディングツールである create-vue をインストールして実行します。TypeScript やテストのサポートなど、いくつかのオプション機能がプロンプトに表示されます:
```
% node -v
v22.16.0

```

create-vueをインストールしたら、以下が出てきます。
名前つけて
プロジェクト内の言語を決めて
```
% npm create vue@latest
Need to install the following packages:
create-vue@3.17.0
Ok to proceed? (y) y


> kashiwagirena@1.0.0 npx
> create-vue

┌  Vue.js - The Progressive JavaScript Framework
│
◇  Project name (target directory):
│  vue-calculator
│
◆  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle
all, enter to confirm)
│  ◻ TypeScript
│  ◻ JSX Support
│  ◻ Router (SPA development)
│  ◻ Pinia (state management)
│  ◻ Vitest (unit testing)
│  ◻ End-to-End Testing
│  ◻ ESLint (error prevention)
│  ◻ Prettier (code formatting)
└
```

全部選択できたらこんな感じ

```
 % npm create vue@latest

> kashiwagirena@1.0.0 npx
> create-vue

┌  Vue.js - The Progressive JavaScript Framework
│
◇  Project name (target directory):
│  vue-calculator
│
◇  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle
all, enter to confirm)
│  TypeScript, ESLint (error prevention)
│
◇  Select experimental features to include in your project: (↑/↓ to navigate, space to select, a
to toggle all, enter to confirm)
│  none

Scaffolding project in /Users/kashiwagirena/workspace/JavaScript/vue-calculator...
│
└  Done. Now run:

   cd vue-calculator
   npm install
   npm run dev

| Optional: Initialize Git in your project directory with:
   
   git init && git add -A && git commit -m "initial commit"

```