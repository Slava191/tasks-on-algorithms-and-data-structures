// function levenshteinDistance(str1, str2) {
//     let greaterStr = str1, lesserStr = str2;
    
//     if (str1.length < str2.length) {
//         greaterStr = str2
//         lesserStr = str1
//     }

//     const needChange = new Array(greaterStr.length).fill(1)

//     for (let i = 0; i < greaterStr.length; i++) {
//         for (let j = 0; j < lesserStr.length; j++) {
//             if (greaterStr[i] === lesserStr[j]) {
//                 needChange[i] = 0;
//             } else {
//                 needChange[i] = needChange[i] === 0 ? 0 : 1
//             }
//         }
//     }

//     return needChange.reduce((a, b) => a + b, 0);

//     //console.log(greaterStr, lesserStr, needChange)
// }


// function levenshteinDistance(str1, str2) {
//     let greaterStr = str1, lesserStr = str2;
    
//     if (str1.length < str2.length) {
//         greaterStr = str2
//         lesserStr = str1
//     }

//     const needChange = new Array(lesserStr.length).fill(1)

//     const offset = greaterStr.length - lesserStr.length

//     let minSum = Infinity;

//     for (let currentOffset = 0; currentOffset <= offset; currentOffset++) {
//         for (let i = 0; i < lesserStr.length; i++) {
//             if (greaterStr[currentOffset+i] === lesserStr[i]) {
//                 needChange[i] = 0;
//             }
//         }

//         let currentSum = needChange.reduce((a, b) => a + b, 0)
//         minSum = currentSum < minSum ? currentSum : minSum
//     }
    

//     return minSum + offset;

//     //console.log(greaterStr, lesserStr, needChange)
// }

function levenshteinDistance(str1, str2) {
    const small = str1.length < str2.length ? str1 : str2;
    const big = str1.length >= str2.length ? str1 : str2;
    const evenEdits = [];

    const oddEdits = new Array(small.length + 1);
    for (let j = 0; j < small.length + 1; j++) {
        evenEdits.push(j);
    }

    for (let i = 1; i < big.length + 1; i++) {
        let currentEdits, previousEdits;
        if (i % 2 === 1) {
            currentEdits = oddEdits;
            previousEdits = evenEdits;
        } else {
            currentEdits = evenEdits;
            previousEdits = oddEdits;
        }

        currentEdits[0] = i;

        for (let j = 1; j < small.length + 1; j++) {
            if (big[i - 1] === small[j - 1]) {
                currentEdits[j] = previousEdits[j - 1];
            } else {
                currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j-1])
            }
        }
    }
    return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length]
}

console.log(levenshteinDistance('abc', 'yabd'))
//console.log(levenshteinDistance('abbbb', 'bbbba'))