function peopleOnBus (stopsArray) {
    let peopleLeft = 0;
    for (let stop of stopsArray) {
        peopleLeft += stop[0];
        peopleLeft -= stop[1];
    }
    return peopleLeft;
}

const stops1 = [[1,0],[3,1]] // people left: 3
const stops2 = [[3,0], [0,3], [1,1]] //people left: 0

console.log(peopleOnBus(stops1));
console.log(peopleOnBus(stops2));