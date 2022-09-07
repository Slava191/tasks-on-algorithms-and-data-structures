function nonConstructibleChange(coins) {
    coins.sort((a,b)=>a-b)
    let canConstuct = 0
    for(const coin of coins){
        if(coin > canConstuct+1) return canConstuct+1
        canConstuct+=coin
    }
    return canConstuct+1
}


const coins = [5, 7, 1, 1, 2, 3, 22]

console.log(nonConstructibleChange(coins))