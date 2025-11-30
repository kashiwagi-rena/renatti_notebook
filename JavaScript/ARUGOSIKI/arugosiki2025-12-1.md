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