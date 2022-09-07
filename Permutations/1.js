function getPermutations(arr) {
    if (arr.length === 1) return [arr]
    if (arr.length === 0) return []

    const rtn = []

    for (let i = 0; i < arr.length; i++) {
        const subPermutations = getPermutations([
            ...[...arr].splice(0, i),
            ...[...arr].splice(i+1, arr.length-i-1)
        ])

        for (const sp of subPermutations) {
            rtn.push([
                ...[...arr].splice(i, 1),
                ...sp
            ])
        }
    }

    return rtn
}

const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11]

console.log(getPermutations(arr))