function sumOf2Lowest (arr) {

    const sortedArr = arr.sort((a, b) => a - b);
    return (sortedArr[0]+sortedArr[1]);
}
const arr1 = [19, 5, 42, 2, 77];
const arr2 = [10, 343445353, 3453445, 3453545353453];

console.log(sumOf2Lowest(arr1));
console.log(sumOf2Lowest(arr2));