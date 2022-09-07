function minimumWaitingTime(queries) {

    queries.sort((a,b) => a-b);

    let sum = 0, super_sum = 0

    for(let i = 0; i < queries.length-1; i++){
        sum += queries[i];
        super_sum += sum;
    }

    return super_sum;
}

const q = [3, 2, 1, 2, 6];

console.log(minimumWaitingTime(q));