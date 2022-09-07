function productSum(array) {
    return sumHelper(array)
}

function sumHelper(array, k = 1){

    let sum = 0

    for(const item of array)
        sum+= Array.isArray(item) ? sumHelper(item, k+1) : item
    
    return k*sum
    
}

const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

//const test = [1, [[2, 3]]]

console.log(productSum(test))