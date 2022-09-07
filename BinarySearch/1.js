function binarySearch(array, target) {
    
    if(array.length < 2) return array[0] === target ? 0 : -1

    const half = Math.round(array.length/2)

    if(array[half] === target){
        return half
    }else if(array[half] > target){
        return binarySearch(array.slice(0, half), target)
    }else{
        const rightRes = binarySearch(array.slice(half), target)
        return rightRes !== -1 ? half+rightRes : rightRes
    }
  
}

const arr = [1, 5, 23, 111]
const tar = 35
console.log(binarySearch(arr, tar))