function isMonotonic(array) {

    let isIncrese = undefined

    for(let i=0; i<array.length-1; i++){

        if(isIncrese===undefined){
            if(array[i] < array[i+1]){
                isIncrese = true
            }else if(array[i] > array[i+1]){
                isIncrese = false
            }
        }

        if(isIncrese!==undefined){

            if(isIncrese && array[i] > array[i+1]) return false
            if(!isIncrese && array[i] < array[i+1]) return false

        }

    }

    return true

}

const arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

console.log(isMonotonic(arr))