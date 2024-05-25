// leet code 287

function findDuplicate(nums) {
    let solutionSet = new Set();
    for (let i = 0; i < (nums.length / 2); i++) {
        if (solutionSet.has(nums[i])) {
            return nums[i];
        } else {
            solutionSet.add(nums[i]);
        }
        if (solutionSet.has(nums[nums.length - 1 - i])) {
            return nums[nums.length - 1 - i];
        } else {
            solutionSet.add(nums[nums.length - 1 - i]);
        }
    }
};

console.log(findDuplicate([3,3,3,3,3]));