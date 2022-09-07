function twoNumberSum(array, targetSum) {

    const ans = []

    array.sort((a, b) => a-b)

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i]+array[j] === targetSum){
                ans.push(array[i], array[j])
            }
        }
    }

    console.log(ans)
    return ans
}


const   arr = [3, 5, -4, 8, 11, 1, -1, 6], 
        sum = 10

twoNumberSum(arr, sum)