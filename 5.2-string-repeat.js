const repeat_str = (num, str)=> {
    // repeats the given string src exactly count times.
    return Array(num).fill(str) .join("");
}

console.log(repeat_str(30,"t"));