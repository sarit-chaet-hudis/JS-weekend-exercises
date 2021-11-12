const maskify = (str) => {
  // function maskify, which changes all but the last four characters into '#'.
  return str.length <= 4 
  ? str 
  : "#".repeat(str.length - 4) + str.slice(-4);
};
console.log(maskify("_ertrtret"));
