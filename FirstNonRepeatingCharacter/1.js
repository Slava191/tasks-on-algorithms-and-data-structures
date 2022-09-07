//O(n) time | O(n) space

function firstNonRepeatingCharacter(str) {

    const map = {}

    for(let i = 0; i < str.length; i++)
        map[str[i]] = {
            index: i,
            repated: !!map[str[i]]
        }   

    for(let v of Object.values(map))
        if(!v.repated) return v.index
    
    return -1
}

const input = 'faadabcbbebdff' // faadabcbbebdf

console.log(firstNonRepeatingCharacter(input))

  