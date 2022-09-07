function minimumCharactersForWords(words) {
    const store = {}
    
    for (const word of words) {
        const curWordStore = {}
        for (let i = 0; i < word.length; i++) {
            curWordStore[word[i]] = curWordStore[word[i]] ? ++curWordStore[word[i]] : 1

            //store[word[i]] = (store[word[i]] && curWordStore[word[i]] >= store[word[i]]) ? curWordStore[word[i]] : 1

            store[word[i]] = !store[word[i]] ? 1 : (curWordStore[word[i]] >= store[word[i]]) && curWordStore[word[i]]

            // if (!store[word[i]]) store[word[i]] = 1

            // if (curWordStore[word[i]] >= store[word[i]]) { 
            //     store[word[i]] = curWordStore[word[i]]
            // }
        }
    }

    const answer = []

    for (const [key, value] of Object.entries(store)) {
        answer.push(...new Array(value).fill(key))
    }

    return answer;
}

const input = ['this', 'that', 'did', 'deed', 'them!', 'a'];

console.log(minimumCharactersForWords(input))