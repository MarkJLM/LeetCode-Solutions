/* You are given an integer array nums.
A subsequence sub of nums with length x is called valid if it satisfies:
(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2.
Return the length of the longest valid subsequence of nums.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    var even = 0;
    var odd = 0;
    var diff = 0;
    var diffPar = 1-nums[0]%2;
    for (var i = 0; i < nums.length; i ++) {
        if (nums[i]%2 == 1-diffPar) {
            diffPar = 1-diffPar;
            diff ++;
        }
        if (nums[i]%2 == 0) {
            even ++;
        } else {
            odd ++;
        }
    }
    return Math.max(even, Math.max(odd, diff));
};
