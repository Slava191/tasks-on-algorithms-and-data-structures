function longestPalindromicSubstring(str) {
    if (str.length === 1) return str;

    let substr = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j <= str.length; j++) {
            let curSubstr = str.slice(i, j)
            console.log(curSubstr)
            if (
                curSubstr === curSubstr.split("").reverse().join("")
                && curSubstr.length > substr.length
            ) {
                substr = curSubstr
            }
        }
    }

    return substr
}

console.log(longestPalindromicSubstring("it's highnoon"))