// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   let counts = str.match(/[aeiou]/gi)
   return counts? counts.length : 0

}

module.exports = vowels;
// function vowels(str) {
//     let arr = str.split('')
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let newArr = []

//     arr.forEach(e => {
//         vowels.includes(e.toLowerCase())? newArr.push(e) : null
//     });

//     return newArr.length
// }