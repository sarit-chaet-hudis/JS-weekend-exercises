const abbreviate = (fullName) =>
fullName[0].toUpperCase() + "." + fullName[fullName.indexOf(" ") + 1].toUpperCase();

console.log(abbreviate("sam harris"));