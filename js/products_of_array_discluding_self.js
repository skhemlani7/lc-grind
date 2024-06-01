// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in O(n) time without using the division operation?

function productExceptSelf(nums) {
    let prefix = new Array(nums.length).fill(1);
    let suffix = new Array(nums.length).fill(1);
    for (let i = 1; i<nums.length; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];  
    }
    for (let j = nums.length - 2; j>=0; j--) {
        suffix[j] = suffix[j+1] * nums[j+1];
    }
    let answer = new Array(nums.length);
    for (let k = 0; k < nums.length; k++) {
        answer[k] = prefix[k] * suffix[k];
    }
    return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]))