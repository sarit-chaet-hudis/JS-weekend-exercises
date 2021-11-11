function centuryFromYear (year) {
    if (Number.isInteger(year/100)) {
        return (year/100).toFixed() 
    }
    return (year/100 + 1).toFixed() 
}

console.log(centuryFromYear(1900));