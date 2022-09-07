function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => fastest ? b - a : a - b);

    let sum = 0;

    for (let i = 0; i < redShirtSpeeds.length; i++) {
        sum += redShirtSpeeds[i] > blueShirtSpeeds[i] ? redShirtSpeeds[i] : blueShirtSpeeds[i]
    }

    //console.log(redShirtSpeeds, blueShirtSpeeds);

    return sum;
}

const redShirtSpeeds = [5, 5, 3, 9, 2],
    blueShirtSpeeds = [3, 6, 7, 2, 1],
    fastest = false;

const res = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);

console.log(res);