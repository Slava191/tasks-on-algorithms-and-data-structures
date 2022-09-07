function longestPeak(arr) {

    let up = false, down = false, l = 0, maxLength = 0, peakIndex = undefined

    for(let i = 0; i < arr.length; i++){

        console.log(arr[i], 'down = ', down, 'up = ', up)


        if(arr[i+1] > arr[i] || arr[i+1] === undefined){

            if(down){

                l++
                
                maxLength =  l > maxLength ? l : maxLength

                l = 0
                i = peakIndex
                up = false
                down = false
                continue;
            }

            up = true
            down = false
            l++
            
        }

        if(arr[i+1] < arr[i]){
            
            if(up){
                peakIndex = i
                up = false
                down = true
            }

            if(down){
                
                l++
                
            }else{
                continue;
            }

        }

        if(arr[i+1] === arr[i]){

                if(down){
                    l++

                    maxLength =  l > maxLength ? l : maxLength
                }

                l = 0
    
                up = false
                down = false
        
           
        }

    }
    
    return maxLength

}


const array = [1,2,0]

//const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
//const array = [3, 4, 0, 10]

console.log(longestPeak(array))