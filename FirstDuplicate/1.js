function firstDuplicateValue(array) {

    let i = 0
    let j = array.length-1
    let saveJ = j
    let value = -1

    while(i < array.length){

        while(j > i){

            if(array[i] === array[j]){
                value = array[i]
                j--
                saveJ = j
                //break;
            }else{
             
                j-- 

            }
            
            if(i === j) {
                j = saveJ
                break;
            }

        }

        i++
    }

    return value

}

//const input = [23, 21, 22, 5, 3, 13, 11, 16, 5, 11, 9, 14, 23, 3, 2, 2, 5, 11, 6, 11, 23, 8, 1]
//const input = [2, 1, 5, 2, 3, 3, 4];
//const input = [2, 1, 5, 3, 3, 2, 4];
//const input = [2, 1, 5];

console.log(firstDuplicateValue(input))