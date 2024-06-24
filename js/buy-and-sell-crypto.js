// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

var maxProfit = function(prices) {
    let result = 0;
    let min = prices[0];
    for (let i = 1; i<prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
        } else {
            let profit = prices[i] - min;
            if (profit > result) result = profit;
        }
    }
    return result;
};