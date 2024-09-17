// row is organized if parity (even or odd) is different for each stack of items 

// to organize, half of items can be removed. This can happen as many times as necessary 

// return minimum operations to organize a row 

function getMinimumOperations(items) {
    if (items.length == 0) return 0;
    let result = 0;
    let parity = items[0]%2;
    for (let i = 1; i<items.length; i++) {
        if (items[i]%2 == parity) {
            let item = items[i];
            while(item%2 == parity) {
                result++;
                item = Math.floor(item/2);
            }
        }
        parity = (parity == 0 ? 1 : 0);
    }
    return result;
}

console.log(getMinimumOperations([4, 10, 10, 6, 2]));
console.log(getMinimumOperations([6, 5, 9, 7, 3]));