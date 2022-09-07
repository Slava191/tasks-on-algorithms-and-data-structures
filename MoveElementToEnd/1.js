function moveElementToEnd(array, toMove) {

    let pointer = undefined
    let swap = false
    for(let i=0; i < array.length; i++){
        
        
        if(swap && array[i] !== toMove){
            
            array[pointer] = array[i]
            array[i] = toMove

            swap = false
    
        }

        if(array[i] === toMove && swap===false){
            swap = true
            pointer = pointer===undefined ? i : ++pointer
        }

        console.log(pointer)

    }

    console.log(array)
    return array
   

}

const array = [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]
const toMove = 5

moveElementToEnd(array, toMove)