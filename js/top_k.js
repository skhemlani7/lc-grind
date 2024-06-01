function topKFrequent(nums, k) {
    let resultMap = {};
    for(let i = 0; i<nums.length; i++) {
        if (nums[i].toString() in resultMap) {
            resultMap[nums[i]]++;
        } else {
            resultMap[nums[i]] = 1;
        }
    }
    let resultArray = Object.entries(resultMap);
    resultArray.sort(function(a, b) {
        return a[1] - b[1];
    });
    
    return resultArray.slice(-k).map(item => Number(item[0]));
}

console.log(topKFrequent([1, 1 , 2], 1));