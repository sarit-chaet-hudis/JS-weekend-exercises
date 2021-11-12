function longestWord (str) {
    const words = str.split(" ");
    let longest = words[0];
    for (let word of words) {
        if (longest.length < word.length ) {
            // current word is longer, save it
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("I is another man Im saw in"));