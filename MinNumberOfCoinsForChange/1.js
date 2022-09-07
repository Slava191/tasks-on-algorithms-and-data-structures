function minNumberOfCoinsForChange(n, denoms) {
    const ways = new Array(n + 1).fill(Infinity);
    ways[0] = 0;
    for (let denom of denoms) {
        for (let amount = 1; amount < n + 1; amount++) {
            if (denom <= amount) {
                const potentialNewWay = 1 + ways[amount-denom] 
                ways[amount] = potentialNewWay < ways[amount] ? potentialNewWay : ways[amount]
            }
        }
        //console.log(ways)
    }
    
    return ways[n] === Infinity ? -1 : ways[n];
}

console.log(minNumberOfCoinsForChange(7, [2, 4]))