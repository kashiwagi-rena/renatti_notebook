/**
 * エラストテネスの篩を使って2からNまでの素数を求める
 * @param N - 上限値
 * @returns 素数の配列
 */
const sieveOfEratosthenes = (N: number): number[] => {
  // 2からNまでの素数判定用配列を作成（初期値はすべてtrue）
  const isPrime: boolean[] = Array(N + 1).fill(true);
  isPrime[0] = false; //数字の0は素数ではない
  isPrime[1] = false; //数字の1は素数ではない
  
  // √Nまで篩い落とし処理を行う
  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      // iの倍数を全て素数ではないものとする
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 素数だけを抽出して返す
  return isPrime
    .map((flag, idx) => (flag ? idx : -1))
    .filter((num) => num !== -1);
};

const primes = sieveOfEratosthenes(30);
console.log(primes);

// # node eratosutenesu.ts 
// isPrime [
//   false, false, true,  true,  false,
//   true,  false, true,  false, false,
//   false, true,  false, true,  false,
//   false, false, true,  false, true,
//   false, false, false, true,  false,
//   false, false, false, false, true,
//   false
// ]
// [
//    2,  3,  5,  7, 11,
//   13, 17, 19, 23, 29
// ]