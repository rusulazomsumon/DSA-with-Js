/*
 *
 * নামঃ [121] Best Time to Buy and Sell Stock
 * ধরনঃ এরে এর সমস্যা
 *
 * লিংকঃ https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * 
 *
 * আমাদের একটা এরে দিবে, শেয়ার মার্কেট এর যেটার কম দামে কিনে ভবিষ্যতে বেশি দামে বিক্রি করতে হবে, সবাধিক লাভ হবে উত্তর.
 *
 *
 * শর্তঃ কেনার আগে বিক্রি করা যাবে না
 *
 * উদাহরনঃ 1:
 *
 *
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 *
 *
 * উদাহরন 2:
 *
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 *
 */
// সামাধানঃ

/**
 * @param {number[]} prices
 * @return {number}
 */
// visit: https://rusulazom.xyz
 var maxProfit = function(prices) {
    let minPrice = prices[0];
    let mxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i -1]) {
            mxProfit = Math.max(mxProfit, prices[i] - minPrice);
        } else {
            minPrice = Math.min(minPrice, prices[i]);;
        }
    }

    return mxProfit;
};