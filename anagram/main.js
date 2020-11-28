// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * Solution One Rather clunky :(
 * @param {*} str1 
 * @param {*} str2 
 */
// const anagrams = (str1, str2) => {

//     let cleanArray1 = Array.from(str1.replace(new RegExp('\[^/w]\g'), "").toLowerCase());
//     let cleanArray2 = Array.from(str2.replace(new RegExp('\[^/w]\g'), "").toLowerCase());

//     if(cleanArray1.length !== cleanArray2.length){
//         return false;
//     }

//     const map1 = new Map();
//     const map2 = new Map();

//     for(let i = 0; i < cleanArray1.length; i++){
//         map1.has(cleanArray1[i])
//         ?map1.set(cleanArray1[i],map1.get(cleanArray1[i]+1))
//         :map1.set(cleanArray1[i], 1);

//         map2.has(cleanArray2[i])
//         ?map2.set(cleanArray2[i],map1.get(cleanArray2[i]+1))
//         :map2.set(cleanArray2[i], 1);
//     }

//     for(let i = 0; i < cleanArray1.length; i++){
//        if(map2.get(cleanArray1[i]) !== map1.get(cleanArray1[i])){
//             return false;
//        }
//     }

//     return true;
// }

/**
 * Solution Three with helper function
 * @param {*} str1 
 * @param {*} str2 
 */
// const anagrams = (str1, str2) => {
//     let charObj1 = convertToCharObj(str1);
//     let charObj2 = convertToCharObj(str2); 


//     if(charObj1['keys'] !== charObj2['keys']){
//         return false;
//     }    

//     for(let char in charObj1['charObj']){
//         console.log(charObj1['charObj'][char], charObj2['charObj'][char]);
//         if(charObj1['charObj'][char] !== charObj2['charObj'][char]){
//             console.log('in for');
//             return false;
//         }
//     }
//     return true;
// }


// const convertToCharObj = (str) => {
//     let charObj = {};
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charObj[char] = charObj[char]+1||1;
//     }
//     return {
//         charObj,
//         keys: Object.keys(charObj).length
//     }
// }


const anagrams = (str1, str2) => {
    return cleanStrings(str1) === cleanStrings(str2);
}

const cleanStrings = (str) => {
    return str.replace(new RegExp('\[^\w]\g'), '')
    .toLowerCase()
    .split('')
    .sort()
    .join();
}



module.exports = anagrams;