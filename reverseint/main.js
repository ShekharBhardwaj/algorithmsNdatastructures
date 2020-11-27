// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/** Solution One not the best one I say :P*/
// const reverseInt = (n) => {
//     if(n < 0){
//         let posStr = `${-1 * n}`;
//         return  parseInt(`-${Array.from(posStr)
//             .reverse()
//             .join('')}`);
//     } else {
//         let posStr = `${n}`;
//         return parseInt(`${Array.from(posStr)
//             .reverse()
//             .join('')}`);
//     }
// }

/** Solution Two found a function in Math api, 
 * Math.sign(n) this would shorten the solution for us, 
 * let's try \*/
const reverseInt = (n) => {
    let reversed =  Array.from(n.toString())
    .reverse()
    .join('');
    return Math.sign(n) * parseInt(reversed);
}

// reverseInt(-51);

module.exports = reverseInt;