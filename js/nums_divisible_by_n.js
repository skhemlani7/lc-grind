// Return indexes a & b where b > a
// Figure out the total of the two nums
// Make sure the total is divisible by N
// return the number of pairs that meet the criteria 

function myFunc(n, array) {
    if (array.length == 0) return 0;
    let result = 0;
    for (let i = 0; i<array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let total = array[i] + array[j];
            if (total % n == 0) {
                console.log("i: " + i + ", j: " + j);
                result++;
            }
        }
    }
    return result;
}

console.log(myFunc(3, [1, 2, 3, 4, 5]));