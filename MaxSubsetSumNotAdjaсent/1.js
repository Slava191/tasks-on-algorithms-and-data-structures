/** 
Max Subset Sum No Adjacent

Write a function that takes in an array of positive integers and returns the maximum sum of nonadjacent elements in the array.
If the input array is empty, the function should return 0 .

Sample Input

array = [75, 105, 120, 75, 90, 135]

Sample Output

330 / 75 + 120 + 135

*/

function maxSubsetSumNoAdjacent(arr) {
    if (arr.length === 0) return 0
    if (arr.length === 1) return arr[0]

    let second = arr[0]
    let first = Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
        const current = Math.max(first, second + arr[i])
        second = first
        first = current
    }

    return first
}

console.log(maxSubsetSumNoAdjacent([125, 210, 250, 120, 150, 300]))