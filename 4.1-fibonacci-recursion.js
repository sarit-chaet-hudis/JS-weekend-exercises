const fibonacci = function (n) {
  if (n < 2) {
    console.log(`n<2, return n: ${n}`);
    return n;
  } else {
    console.log(`n>2, reach for two smaller items`);
    return fibonacci(n-1) + fibonacci(n-2);
  }
};

console.log(fibonacci(9));
