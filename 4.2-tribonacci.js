const tribonacci = (signature, n) => {
  if (n === 0) {
    return [];
  }
  let fibo = signature;
  if (n < signature.length) {
    fibo = signature.slice(0, n);
  } else {
    while (fibo.length < n) {
      fibo.push(
        fibo[fibo.length - 1] + fibo[fibo.length - 2] + fibo[fibo.length - 3]
      );
    }
  }
  return fibo;
};

console.log(tribonacci([0, 0, 1], 1));
