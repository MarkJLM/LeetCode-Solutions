/* Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
Return the largest lucky integer in the array. If there is no lucky integer return -1. */
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var occs = [];
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] <= arr.length - i) {
            while (occs.length < arr[i]) {
                occs.push(-1-occs.length);
            }
        }
        if (arr[i]-1 < occs.length && occs[arr[i]-1] <= 0) {
            occs[arr[i]-1] ++;
        }
    }
    for (var i = occs.length - 1; i >= 0; i --) {
        if (occs[i] == 0) {
            return i+1;
        }
    }
    return -1;
};
