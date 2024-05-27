// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first. 

function twoSum(nums, target) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let j = target - nums[i];
        console.log(obj[j])
        if (obj[j.toString()] !== undefined) {
            return [obj[j], i];
        }
        obj[nums[i]] = i;
    }
    console.log(obj)
    return [-1, -1];
}

// console.log(twoSum([-1,-2,-3,-4,-5], -8));
console.log(twoSum([3,4,5,6], 7));