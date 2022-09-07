function spiralTraverse(matrix) {

    let direction = 'right' // bottom, left, top
    const N = matrix[0].length
    const M = matrix.length
    const NxM = N*M
    console.log(NxM)
    const spiral = []


    let k = 0, i = 0, j = 0, loop = 0, rightN = N-1, rightM = M-1

    while(k < NxM){ 
        //console.log(i, j, direction, matrix[i][j])

        if(direction === 'right'){

            if(j === rightN){
                rightN--
                direction = 'bottom'
                //k++
                continue;
            }else{
                console.log(i, j, direction, matrix[i][j])
                spiral.push(matrix[i][j++])
            }

        }

        if(direction === 'bottom'){

            if(i === rightM){
                rightM--
                direction = 'left'
                //k++
                continue;
            }else{
                console.log(i, j, direction, matrix[i][j])
                spiral.push(matrix[i++][j])
            }

        }

        if(direction === 'left'){
            
            if(j === loop){
                direction = 'top'
                //k++
                continue;
            }else{
                console.log(i, j, direction, matrix[i][j])
                spiral.push(matrix[i][j--])
            }
        }

        if(direction === 'top'){

            if(i === loop){
                direction = 'right'
                loop++
                i++
                j++


                console.log('new loop', i, j, rightN, rightM)

                if(i === rightN && j === rightM){
                    spiral.push(matrix[i][j])
                    break;
                }else if(i > rightN && j > rightM){
                    spiral.push(matrix[--i][--j])
                    break;
                }

                continue;
            
            }else{
                console.log(i, j, direction, matrix[i][j])
                spiral.push(matrix[i--][j])
            }
        }

        k++
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