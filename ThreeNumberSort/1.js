//O(n) time, O(n) space
// function threeNumberSort(array, order) {
//     const store = {}

//     for (const item of array) {
//         if (store.hasOwnProperty(item)) {
//             store[item]++;
//         } else {
//             store[item] = 1
//         }
//     }

//     let outputArray = []

//     for (const item of order) {
//         if (store.hasOwnProperty(item)) {
//             outputArray = [
//                 ...outputArray, 
//                 ...Array(store[item]).fill(item)
//             ]
//         }
//     }

//     return outputArray
// }

// function threeNumberSort(array, order) {

//     let orderIndex = 0

//     let i = 0;
//     while (i < array.length) {
//         if (array[i] !== order[orderIndex]) {
//             let j = i+1
//             let changeFound = false
//             while (j < array.length) {
//                 if (array[j] === order[orderIndex]) {
//                     let swap = array[i]
//                     array[i] = array[j]
//                     array[j] = swap
//                     changeFound = true
//                     break;
//                 }
//                 j++
//             }

//             if (!changeFound) {
//                 orderIndex++;
//                 continue;
//             } 
//         }
//         i++;
//     }

//     return array;
// }

function threeNumberSort(array, order) {
    let firstIndex = 0

    for (let orderIndex = 0; orderIndex < order.length-1; orderIndex++) {
        for (let i = firstIndex; i < array.length; i++) {
            if (array[i] === order[orderIndex]) {
                swap(firstIndex, i, array)
                firstIndex++
            }
        }
    }

    return array
}

function swap(i, j, array) {
	const temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

const array = [1, 0, 0, -1, -1, 0, 1, 1];
const order = [0, 1, -1];

console.log(threeNumberSort(array, order))