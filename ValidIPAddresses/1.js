//O(1) time, O(1) spce
function validIPAddresses(str) {
    const ipFound = []

    for (let i = 1111; i < 3334; i++) {
        const n = i.toString()
        if (
            n[0] < 4 && n[1] < 4 && n[2] < 4 && n[3] < 4 &&
            n[0] > 0 && n[1] > 0 && n[2] > 0 && n[3] > 0 &&
            parseInt(n[0]) + parseInt(n[1]) + parseInt(n[2]) + parseInt(n[3]) == str.length
        ) {
            const comb = n.split('')

            const firstSection = [0, parseInt(comb[0])]
            const secondSection = [firstSection[1], firstSection[1] + parseInt(comb[1])]
            const thirdSection = [secondSection[1], secondSection[1] + parseInt(comb[2])]
            const fourthSection = [thirdSection[1], thirdSection[1] + parseInt(comb[3])]

            const possibleIp = [
                str.slice(...firstSection),
                str.slice(...secondSection),
                str.slice(...thirdSection),
                str.slice(...fourthSection)
            ]
    
            if (isValid(possibleIp)) ipFound.push(possibleIp.join('.'))
        }
    }

    return ipFound;
}

// Array<String> ip
function isValid(ip) {
    if (ip.length < 4) return false
    for (const section of ip) {
        if (section.length > 1 && section[0] === '0') return false
        if (parseInt(section) > 255) return false
    }
    return true
}

//console.log(isValid(['1', '9', '216', '80']))

console.log(validIPAddresses('1921680'))
