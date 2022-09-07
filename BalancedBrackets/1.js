//0(1) space, O(n) time
function balancedBrackets(str) {
    const bracketsCounter = { '(': 0, '{': 0, '[': 0 }

    const openedBrackets = ['(', '{', '[']
    
    for (let i = 0; i < str.length; i++) {
        if (openedBrackets.includes(str[i])) {
            bracketsCounter[str[i]]++
        } else if (str[i] === ')'){
            bracketsCounter['(']--
        } else if (str[i] === '}'){
            bracketsCounter['{']--
        } else if (str[i] === ']'){
            bracketsCounter['[']--
        }

        //Overlap check
        if (i < str.length-1) {
            if(str[i] === '{' && (str[i+1] === ']' || str[i+1] === ')')) return false
            if(str[i] === '[' && (str[i+1] === ')' || str[i+1] === '}')) return false
            if(str[i] === '(' && (str[i+1] === ']' || str[i+1] === '}')) return false
        }
    }

    return !Object.values(bracketsCounter).reduce((sum, item) => sum+item, 0);
}
  
const str = "(()())((()()()))";

console.log(balancedBrackets(str))