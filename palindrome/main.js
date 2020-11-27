// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/** Solution One */
const palindrome = (str) => {
    let reversed = Array.from(str)
        .reverse()
        .join('');

    return str === reversed;
}

/** Solution Two Super dirty I believe, I started with thinking 
 * that I would start comparing from both end and I ended up here, 
 * it does the job, 
 * but not sure if it's O(n) */

// const palindrome = (str) => {
//     let len = str.length;
//     if (str.length % 2 === 0) {
//         let substr1 = str.substring(0, len / 2);
//         let reversedSubstr2 = Array.from(str.substring(len / 2))
//             .reverse()
//             .join('');
//         return substr1 === reversedSubstr2;
//     } else {
//         let midChar = Math.floor(len / 2)+1;
//         let substr1 = str.substring(0, midChar-1);
//         let reversedSubstr2 = Array.from(str.substring(midChar))
//             .reverse()
//             .join('');
//         console.log(substr1, reversedSubstr2);
//         return substr1 === reversedSubstr2;
//     }

// }

/** Solution Three here comparison is happening twice, 
 * so may not be the best solution*/
// const palindrome = (str) => {
//     return Array.from(str).every((val, index, arr) => {
//         return val === arr[arr.length -index -1];
//     });
// }

// palindrome('abbba');

module.exports = palindrome;