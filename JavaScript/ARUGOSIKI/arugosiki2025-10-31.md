[FizzBuzz 問題](https://algo-method.com/tasks/225)

```
function Main(input) {
  const num = input.trim().split("\n");
  for (let i = 1; i <= Number(num); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    } 
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
```


