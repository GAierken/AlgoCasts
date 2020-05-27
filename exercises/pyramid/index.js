// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
//    pyramid(5)
//      '    #    '
//      '   ###   '
//      '  #####  '
//      ' ####### '
//      '#########'

function pyramid(n) {
    for(let i = 0; i < n; i++){
        let emptyStr = " ";
        emptyStr = emptyStr.repeat(n - i - 1);
        
        let hash = "#";
        hash = hash.repeat(i * 2 + 1);
        console.log(emptyStr + hash + emptyStr);
      }
    
    }
        




module.exports = pyramid;

// function pyramid(n) {
//     for (let i=1;i<=n;i++){
//         let base = '#',
//             hashes = '#'.repeat(i-1),
//             spaces = ' '.repeat(n-i);
//         base = spaces+hashes+base+hashes+spaces;
//         console.log(base);
//     }
// }



// function pyramid(n) {
//     let midpoint = Math.floor((n * 2 - 1)/2)
//     for(let row = 0; row < n; row ++){
//         let level = ''

//         for(let column = 0; column < 2 * n -1; column ++){
//             if(midpoint - row <= column && midpoint + row >= column){
//                 level += '#'
//             }else{
//                 level += ' '
//             }
//         }
//         console.log(level)
    
//     }

// }