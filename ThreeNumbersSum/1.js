function threeNumberSum(array, targetSum) {

    const triplets = []

    array.sort((a, b) => a-b)

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            for(let k = j+1; k < array.length; k++){
                if(array[i]+array[j]+array[k] === targetSum){
                    triplets.push([array[i], array[j], array[k]])
                }
            }
        }
    }

    return triplets

}

const arr = [12, 3, 1, 2, -6, 5, -8, 6]
const s = 0

threeNumberSum(arr, s)

//The correct answers with time complexisvety  of O(N^2) and space of O(n)

// function threeNumberSum(array, targetSum) {

//     const triplets = []

//     array.sort((a, b) => a-b)

//     for(let i = 0; i < array.length; i++){
//         for(let j = i+1; j < array.length; j++){
//             for(let k = j+1; k < array.length; k++){
//                 if(array[i]+array[j]+array[k] === targetSum){
//                     triplets.push([array[i], array[j], array[k]])
//                 }
//             }
//         }
//     }
    
//     return triplets

// }