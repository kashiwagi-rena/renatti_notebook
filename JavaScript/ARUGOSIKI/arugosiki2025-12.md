## 成績判定（5）
URL：https://algo-method.com/tasks/b944f80497ab1eae
自分の答え
```
function Main(input) {
  const [num, second] = input.trim().split("\n");
  const list = second.trim().split(" ");
  const number = Number(num);

  let allList = 0;
  for (let i = 0; i < number; i++){
    allList += Number(list[i]);
  }
  const division = allList / number;

  const Answer = list
    .map((value, index) => ({ value, index }))
    .filter((item) => item.value >= division)
    .map((item) => item.index);

  for (let i = 0; i < Answer.length; i++) {
    console.log(Answer[i]);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
```

## 成績判定（6）

```
function Main(input) {
  const List = input.trim().split("\n");
  const countArr = [];

  for (let i = 1; i < Number(List[0]) + 1; i++) {
    const items = List[i]
    const item = items.trim().split(" ");
    if (item[0] === "1") {
        if (Number(item[1]) >= 90) {
            countArr.push(i - 1);
        }
    }
    if (item[0] === "2") {
        if (Number(item[1]) >= 80) {
            countArr.push(i - 1);
        }
    }
    if (item[0] === "3" || item[0] === "4" || item[0] === "5") {
        if (Number(item[1]) >= 70) {
            countArr.push(i - 1);
        }
    }
  }
    console.log(countArr.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
```