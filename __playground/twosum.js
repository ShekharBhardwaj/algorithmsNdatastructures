const twoSum = (nums, target) => {
    const map1 = new Map();
    const pair = [];
    nums.forEach((val, ind) => {
        let part = target - val;
        if(!!map1.has(part)){
            pair.push(map1.get(part), ind);
        } else {q
            map1.set(val, ind);
        }
    });
    return pair;
    // return pair;
    //---
        // const pair = [];
        // nums.forEach((val, ind) => {
        //     let part = target - val;
        //     if(nums.indexOf(part)>0){
        //         pair.push(nums.indexOf(part), ind);
        //     }
        // });
        // return pair.sort();
}