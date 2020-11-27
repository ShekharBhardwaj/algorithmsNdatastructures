// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/** Solution One (But it could be cheating :P)*/

// const reverse = (str) => {
//     return Array.from(str)
//     .reverse()
//     .join('');
// }

//========

/** Solution Two*/

// const reverse = (str) => {
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

//========

/** Solution Three */

const reverse = (str) => {
    return Array.from(str).reduce((reversed, character) => {
        console.log('Acc '+reversed, 'Curr '+character);
        return character + reversed;
    }, '');

}


module.exports = {
    reverse
}