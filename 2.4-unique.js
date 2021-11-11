function findUnique(arr) {
    for (let i = 0; i < (arr.length -2); i++) {
        if (arr[i+1] !== arr[i] && arr[i+1] !== arr[i+2]) {
            return arr[i+1]
        }
    }
}

const arr1 = [ 1, 4, 1, 1, 1, 1 ] ;

console.log(findUnique(arr1));