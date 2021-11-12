function shortest(str) {
    const words = str.split(" ");
    let curShortest = words[0].length;
    for (let word of words) {
        console.log(word);
        if (word.length < curShortest ) {
            curShortest = word.length ;
        }
    }
    return curShortest;
}

console.log(shortest("I is another man Im saw in"));