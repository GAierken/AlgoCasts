// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    
}



module.exports = capitalize;

// function capitalize(str) {
//     let newArr = str.split(' ').map((e) => e.split(''))
//     let uppArr = newArr.map((e) => {
//           let newCapLetter = e[0].toUpperCase()
//           let slicedArr = e.slice(1, e.length)
//              slicedArr.unshift(newCapLetter)

//         return slicedArr.join('')
//     })
   
//         let newStr = uppArr.join(' ')
    
//       return newStr
    
// }


// function capitalize(str) {
//     let words = []
    
//     for(let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }

//     return words.join(' ')
// }