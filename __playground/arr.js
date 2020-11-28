

// console.log(Array.from({length: 5}, () => Array.from({length: 5}, () => 0)));

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// // console.log(arr.map((val, i) => {
// //     return `This is from ${val}, ${1}`;
// // }));

const nums = [3, 2, 4], target = 6


const twoSum = (nums, target) => {
    const pair = [];
    nums.forEach((val, ind) => {
        let part = target - val;
        if (nums.indexOf(part) > 0 && !pair.includes(nums.indexOf(part))) {
            pair.push(nums.indexOf(part), ind);
        }
    });
    return pair.sort();
}

console.log(twoSum(nums, target));