// function arrayOfProducts(arr) {

//     const answ = []
//     const m = arr.reduce((acc, item) => acc*item, 1)

//     console.log(m)

//     for(let i = 1; i < arr.length; i++){
//         answ.pu
//     }

// }

function arrayOfProducts(arr) {

    let ammountOfZero = 0

    const m = arr.reduce((acc, item) => {
        if(item === 0) ammountOfZero++

        if(ammountOfZero >= 2) return 0

        return item === 0 ? acc : acc*item
    }, 1)

    return arr.map(item => {

        if(ammountOfZero >=2){
            return 0
        }

        if(item === 0 && ammountOfZero === 1){
            return m
        }

        if(item !== 0 && ammountOfZero === 1){
            return 0
        }

        return m/item
    })

}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arrayOfProducts(array))