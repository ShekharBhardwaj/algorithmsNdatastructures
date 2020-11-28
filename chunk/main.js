// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/***
 * Solution One
 */
// const chunk  = (arr, size) => {
//     const chunked = [];
//     arr.forEach((v, i) => {
//         const last = chunked[chunked.length-1];
//         console.log(last instanceof Array);
//        if(!last || last.length === size){
//             chunked.push([v])
//        } else {
//            last.push(v);
//        }
//     });
//     return chunked;
// }

const chunk = (arr, size) => {
    const chunked = [];
    let index = 0;

    while(index < arr.length){
        let chunk = arr.slice(index, index+size);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
}

module.exports = chunk;