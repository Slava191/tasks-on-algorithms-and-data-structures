function hasSingleCycle(arr) {
    const arrOfVisit = new Array(arr.length).fill(0)

    let jumpsCounter = 0;
    let currentIdx = 0;

    while (jumpsCounter < arr.length) {
        currentIdx += arr[currentIdx] % arr.length
        
        if (currentIdx < 0) currentIdx += arr.length
        if (currentIdx > arr.length-1) currentIdx -= arr.length

        arrOfVisit[currentIdx]++;
        jumpsCounter++
    }

    return arrOfVisit.every(item => item === 1)
}

console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26]))

