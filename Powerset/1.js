function powerset(arr) {
    const subsets = [[]]

    for (const el of arr) {
        const len = subsets.length
        for (let i = 0; i < len; i++) {
            const currentSubset = subsets[i]
            subsets.push([...currentSubset, el])
        }
        console.log('el: ', el, 'len: ', len, 'subsets: ', subsets)
    }

    return subsets
}
const arr = [1, 2, 3]

powerset(arr)