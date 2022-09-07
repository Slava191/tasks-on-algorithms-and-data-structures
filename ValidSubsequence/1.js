function isValidSubsequence(array, sequence) {

    let currentSequenceItemIndex = 0

    for(const item of array){
        if(sequence[currentSequenceItemIndex] === item){
            currentSequenceItemIndex++
        }
    }
    
    return currentSequenceItemIndex === sequence.length
}

const 
    arr = [5, 1, 22, 25, 6, -1, 8, 10], 
    seq = [1, 6, -1, 10]

console.log(isValidSubsequence(arr, seq))

