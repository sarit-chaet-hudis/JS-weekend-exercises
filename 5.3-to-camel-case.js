function toCamelCase (str) {
    //find indices of special chars, remove them and uppercase immediately after
    
    const strArray = str.split('');
    
    //which delimiter is there? 
    let delimiter = new String();
    strArray.includes("-") ? delimiter= "-" : delimiter="_";

    for (let i=0; i< strArray.length; i++) {
        
        if (strArray[i] === delimiter) {
            // Remove delimiter and then uppercase the char thats put in its place
            strArray.splice(i,1);
            strArray[i] = strArray[i].toUpperCase();
        }
    }

    return strArray.join("");
}

console.log(toCamelCase("The_Stealth_Warrior"));