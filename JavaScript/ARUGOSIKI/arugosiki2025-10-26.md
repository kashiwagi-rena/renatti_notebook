[添字](https://algo-method.com/tasks/390298dbad76c8cb)
``` 
function Main(input) {
  const allList = input.trim().split("\n");
  const first = allList[0];
  const [N, Q] = first.trim().split(" ");
  const second = allList[1].trim().split(" ");
  for (let i = 0; i < Number(Q); i++) {
    const answer = second[allList[i + 2]];
    console.log(answer);
  }

}
```

