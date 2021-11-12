function toWeirdCase(str) {
  // returns the same string with all even indexed characters in each word
  // upper cased, and all odd indexed characters in each word lower cased.
  // The indexing just explained is zero based, so the zero-ith
  // index is even, therefore that character should be upper cased.

  let strArray = str.split("");

  let toUpper = true;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i]  === " " ) {
        toUpper = false;
    }
    toUpper ? strArray[i] = strArray[i].toUpperCase() : strArray[i] = strArray[i].toLowerCase() ;
    toUpper = !toUpper;
  }

  return strArray.join("");
}

console.log(toWeirdCase("Weird string case"));
