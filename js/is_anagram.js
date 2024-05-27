// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

function isAnagram(s, t) {
    if (s.length != t.length) return false;
    let sMap = {}
    let tMap = {}
    for (let i = 0; i<t.length; i++) {
        if (sMap[s.charAt(i)]) {
            sMap[s.charAt(i)]++;
        } else {
            sMap[s.charAt(i)] = 1;
        }
        if (tMap[t.charAt(i)]) {
            tMap[t.charAt(i)]++;
        } else {
            tMap[t.charAt(i)] = 1;
        }
    }

    for (let key in sMap) {
        if (sMap[key] !== tMap[key]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("jar", "raj"));