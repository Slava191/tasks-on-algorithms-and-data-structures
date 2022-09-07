function generateDocument(characters, document) {

    const charMap = {}

    for(const char of characters){
        if(char in charMap){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    console.log(charMap)

    for(const symb of document){
        if(symb in charMap && charMap[symb]!==0){
            charMap[symb]--
        }else{
            return false
        }
    }

    return true;
}

const characters = 'Bste!hetsi ogEAxpelrt x ';
const document = 'AlgoExpert is the Best!';

console.log(generateDocument(characters, document))