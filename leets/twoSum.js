const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (map.has(needed)) return [map.get(needed), i];
        map.set(nums[i], i);
    }
}
console.log(twoSum([2, 7, 11, 15], 9));

//double loop
const twoSum2 = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }

}
console.log(twoSum2([2, 7, 11, 15], 9))