// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(i = 1; i <= n; i++){
        console.log('#'.repeat(i) + ' '.repeat(n - i))
    }
}
 

module.exports = steps;

// function steps(n) {
//     for(row = 0; row < n; row++){
//         let stair = ''
//         for(column = 0; column < n; column ++){
//             if(column <= row){
//                 stair += '#'
//             }else(
//                 stair += ' '
//             )
            
//         }
//         console.log(stair)
//     }
// }


// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n - i));
//     }
// }


// function steps(n, i = 1, space = n - 1) {
//     if (i > n) return;
//     const line = "#".repeat(i) + " ".repeat(space);
//     console.log(line);
//     steps(n, i + 1, space - 1);
// }