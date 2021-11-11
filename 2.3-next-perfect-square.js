const isSquare = (num) => {
    return Number.isInteger(Math.sqrt(num));
}

function findNextSquare (num) {
    if (!isSquare(num)) {
        return -1;
    }
    return (Math.sqrt(num) + 1 )**2;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
