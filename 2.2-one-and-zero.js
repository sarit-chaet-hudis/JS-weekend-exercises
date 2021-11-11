const binArray = [0, 1, 0, 1];

const binToInteger = function (binArray) {
    const binString = binArray.join("");
    console.log(binString);
    return parseInt(binString,2);
}

console.log(binToInteger(binArray));