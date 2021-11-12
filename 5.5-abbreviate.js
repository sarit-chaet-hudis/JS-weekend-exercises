const abbreviate = (fullName) =>
// takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

fullName[0].toUpperCase() + "." + fullName[fullName.indexOf(" ") + 1].toUpperCase();

console.log(abbreviate("sam harris"));