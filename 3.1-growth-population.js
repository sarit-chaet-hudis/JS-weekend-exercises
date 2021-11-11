function nb_year (p0, percent, aug, p) {
    let curP = p0;
    percent = percent/100;
    // Current population
    let year = 0;
    // Current year, will be returned
    while (curP < p) {
        year++;
        curP = Math.round(curP + curP*percent);
        curP += aug;
    }
    return year;
}

console.log(nb_year(1500000, 2.5, 10000, 2000000));