function smallestDifference(arrayOne, arrayTwo) {

    arrayOne.sort((a,b)=>a-b)
    arrayTwo.sort((a,b)=>a-b)

    console.log(arrayOne, arrayTwo)
    let first = arrayOne[0], second = arrayTwo[0]

    let iter = 0
    //let notBetter = 0

    for(const a of arrayOne){
        for(const b of arrayTwo){
            if(Math.abs(a-b) < Math.abs(first - second)){
                first = a
                second = b
                console.log(first, second)
            }
            iter++
        }
    }

    console.log(iter)
    console.log(first, second)
    return [first, second]

}

const arrOne = [-1, 5, 10, 20, 28, 3]
const arrTwo = [26, 134, 135, 15, 17]

smallestDifference(arrOne, arrTwo)