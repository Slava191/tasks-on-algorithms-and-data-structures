function classPhotos(redShirtHeights, blueShirtHeights) {
    
    redShirtHeights.sort((a, b) => a-b)
    blueShirtHeights.sort((a, b) => a-b)
	
    const redShirtHeightTaller = redShirtHeights[0] > blueShirtHeights[0] ? true : false;

    for(let i = 0; i <= redShirtHeights.length; i++){

        if(redShirtHeightTaller){
            if(redShirtHeights[i] <= blueShirtHeights[i]) return false
        }else{
            if(redShirtHeights[i] >= blueShirtHeights[i]) return false
        }

    }
    
    return true;
}

const   redShirtHeights = [5, 8, 1, 3, 4],
        blueShirtHeights = [6, 9, 2, 4, 5];

console.log(classPhotos(redShirtHeights, blueShirtHeights));