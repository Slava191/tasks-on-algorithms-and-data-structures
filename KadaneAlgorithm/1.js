// function kadanesAlgorithm(arr) {
//     let maxSum = -Infinity

//     for (let i = 0; i < arr.length; i++) {
//         let currentSum = arr[i]

//         if (currentSum > maxSum) maxSum = currentSum
        
//         if (i < arr.length) {
//             for (let j = i + 1; j < arr.length; j++) {
//                 currentSum += arr[j]
//                 if (currentSum > maxSum) maxSum = currentSum
//             }
//         }
//     }

//     return maxSum
// }

function kadanesAlgorithm(arr) {
    let maxSum = arr[0]
    let currentSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currentSum += arr[i]

        if (currentSum < arr[i]) currentSum = arr[i]

        if (currentSum > maxSum) maxSum = currentSum
    }

    return maxSum
}

console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))