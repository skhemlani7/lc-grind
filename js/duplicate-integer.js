


function hasDuplicate(nums) {
    let solution = {};
    for (let i = 0; i<nums.length; i++) {
        if (solution[nums[i]]) {
            return true;
        } else {
            solution[nums[i]] = true;
        }
    }
    return false;
}

console.log(hasDuplicate([1,2,3,3]))