function spiralTraverse(matrix) {

    const M = matrix.length
    const N = matrix[0].length
    
    const spiral = []

    let startCol= 0,
        endCol = N-1,
        startRow = 0,
        endRow = M-1

    while(startCol <= endCol && startRow <= endRow){

        for(let i = startCol; i <= endCol; i++)
            spiral.push(matrix[startRow][i])

        for(let i = startRow+1; i <= endRow; i++)
            spiral.push(matrix[i][endCol])

        for(let i = endCol-1; i >= startCol; i--){
            if(startRow===endRow) break;
            spiral.push(matrix[endRow][i])
        }

        for(let i = endRow-1; i >= startRow+1; i--){
            if(startCol === endCol) break;
            spiral.push(matrix[i][startCol])
        }

        startCol++
        endCol--
        startRow++
        endRow--

    }

    return spiral
}

const matrix1 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ];

const matrix2 = [
    [1],
    [3],
    [2],
    [5],
    [4],
    [7],
    [6]
  ]

const matrix3 = [
    [1, 2, 3],
    [12, 13, 4],
    [11, 14, 5],
    [10, 15, 6],
    [9, 8, 7]
  ]


const matrix4 = [
    [1]
]


const matrix5 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]

console.log(spiralTraverse(matrix1))
console.log(spiralTraverse(matrix2)) 
console.log(spiralTraverse(matrix3))
console.log(spiralTraverse(matrix4)) 
console.log(spiralTraverse(matrix5))