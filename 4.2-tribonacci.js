const tribonacci = (signature, n) => {
  let curLength = 3;
  const fibo = signature;
  while (fibo.length < n) {
    fibo.push(
      fibo[fibo.length - 1] + fibo[fibo.length - 2] + fibo[fibo.length - 3]
    );
  }
  return fibo;
};

console.log(tribonacci([0, 0, 1], 9));
