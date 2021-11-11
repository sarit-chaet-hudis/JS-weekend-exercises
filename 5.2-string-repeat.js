const repeat_str = (num, str)=> {
    return Array(num).fill(str) .join("");
}

console.log(repeat_str(30,"t"));