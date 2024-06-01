// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


function groupAnagrams(strs) {
    let result = {};
    for (i in strs) {
        let anagram = strs[i].split('').sort().join('')
        if (!result[anagram]) {
            result[anagram] = [strs[i]];
        } else {
            result[anagram].push(strs[i]);
        }
    }
    return Object.values(result);
}

console.log(groupAnagrams(['test', 'stet', 'blah', 'halb' ,'tacocat' ,'tacoca']));