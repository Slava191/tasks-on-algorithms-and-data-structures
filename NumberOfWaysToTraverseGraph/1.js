function numberOfWaysToTraverseGraph(width, height) {
    const numberOfWays2D = [];

    for (let i = 0; i < height; i++) {
        numberOfWays2D.push(new Array(width));
        for (let j = 0; j < width; j++) {
            if (i === 0 || j === 0) {
                numberOfWays2D[i][j] = 1;
            } else {
                numberOfWays2D[i][j] = numberOfWays2D[i][j-1] + numberOfWays2D[i-1][j];
            }
        }
    } 

    return numberOfWays2D[height-1][width-1];
}

console.log(numberOfWaysToTraverseGraph(2, 3));