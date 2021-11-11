function sumOf2Lowest (arr) {
    
    const lowest = Math.min(...arr);
    // Find lowest
    arr.splice(arr.indexOf(lowest),1);
    // Remove loswet to find second lowest

    const lowest2 = Math.min(...arr);
    
    return (lowest+lowest2);
}
const arr1 = [19, 5, 42, 2, 77];
const arr2 = [10, 343445353, 3453445, 3453545353453];

console.log(sumOf2Lowest(arr1));
console.log(sumOf2Lowest(arr2));