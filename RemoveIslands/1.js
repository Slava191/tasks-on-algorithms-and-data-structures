function removeIslands(matrix) {
    const checkForYearth = (i, j) => {
        matrix[i][j] = 2
        if (matrix[i-1] && matrix[i-1][j] === 1) checkForYearth(i-1, j)
        if (matrix[i+1] && matrix[i+1][j] === 1) checkForYearth(i+1, j)
        if (matrix[i] && matrix[i][j-1] === 1) checkForYearth(i, j-1)
        if (matrix[i] && matrix[i][j+1] === 1) checkForYearth(i, j+1)
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (
                (i === 0 || j === 0 || i === matrix.length-1 || j === matrix[i].length-1) 
                && matrix[i][j] === 1
            ) {
                checkForYearth(i, j)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) 
        for (let j = 0; j < matrix[i].length; j++) 
            matrix[i][j] = matrix[i][j] === 1 || matrix[i][j] === 0 ? 0 : 1
  

    return matrix;
}


const input = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ];


console.log(removeIslands(input))