// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}
    let arr = str.split('')

    let max = 0
    let maxChar = ''

    arr.forEach(char => {
        if (!chars[char]) {
             chars[char] = 1
        } else {
             chars[char] ++
        }
    });
   
    for(let char in chars) {
        if(chars[char] > max){
           max = chars[char]
           maxChar = char
        }
    }

    return maxChar
    
}

maxChar("sringes")
module.exports = maxChar;
