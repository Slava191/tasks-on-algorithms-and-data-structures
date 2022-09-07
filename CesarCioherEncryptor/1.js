console.log('a'.charCodeAt())
console.log('z'.charCodeAt())

console.log(28%26)

function caesarCipherEncryptor(string, key){

    key = key%26 // Eng Alphaber = 26

    const encArr = []

    for(const char of string){

        const potentialSymbCode = char.charCodeAt()+key
				
		//Char codes between a-z is 97-122
        const symbCode = potentialSymbCode > 122 ? 96+potentialSymbCode-122 : potentialSymbCode

        encArr.push(String.fromCharCode(symbCode))
        
    }

    return encArr.join('')
}
  
  
console.log(caesarCipherEncryptor('xyz', 2))