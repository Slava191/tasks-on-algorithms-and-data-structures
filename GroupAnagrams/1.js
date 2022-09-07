function groupAnagrams(words) {
    const store = {}

    for (const word of words) {
        const key = word.split("").sort().join("")

        if (key in store) {
            store[key].push(word)
        } else {
            store[key] = [word]
        }
        
    }

    return Object.values(store)
}

groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'])