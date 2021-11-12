const fibonacci = function (signature, n) {
  const seq = signature;
  for (let i = 2; i < n; i++) {
    seq[i]= seq[i-1] + seq[i-2];
  }
  return seq[seq.length - 1];
};

console.log(fibonacci([1, 1], 9));
