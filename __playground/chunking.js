const arr = Array.from({length: 9}, (_, k) => k);
const size = 3

console.log(arr);

const chunking = () => {

   let chunked = [];
    index = 0;

    while (index < arr.length){
        let chunk = arr.slice(index, index+size);
        chunked.push(chunk);
        index += size;
    }
    return chunked;
}

console.log(chunking());