// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/** Solution One totally botched it and took me way longer to figure this out, 
 * am gonna kicked out of any interview if it took me this long there :D, find faster code fastest */
// const maxChar = (str) => {
//     let count = [];
//     let uniqueChars =  Array.from(new Set(Array.from(str)));
//     let maxCount = 0;
//     let maxChar = '';
//     uniqueChars.forEach((val) => {
//         let i = 0;
//         Array.from(str).forEach(val1 => {
//             if (val === val1) {
//                 i+=1;
//             }
//         });
//         count.push(i);
//     });
//     let obj = Object.fromEntries(uniqueChars.map((_, i) => {
//         return [uniqueChars[i], count[i]];
//     }));
//     for(const[k, v] of Object.entries(obj)){
//         if(maxCount < v){
//             maxCount = v;
//             maxChar = k;
//         }
//     }
//     return maxChar;
// }

/**
 * Solution Two at least better than the first, 
 * surely an O(n)
 * @param {*} str 
 */
const maxChar = (str) => {
    const strArr = Array.from(str);
    const chars = {};
    let maxCount = 0;
    let maxChar = '';
    strArr.forEach((val) => chars[val] = chars[val] + 1 || 1);
    for (const [k, v] of Object.entries(chars)) {
        if (maxCount < v) {
            maxCount = v;
            maxChar = k;
        }
    }
    return maxChar;
}



// console.log(maxChar('Hello World'));
module.exports = maxChar;