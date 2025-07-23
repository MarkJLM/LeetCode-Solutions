/* Alice and Bob are playing a game. Initially, Alice has a string word = "a".
You are given a positive integer k. You are also given an integer array operations, where operations[i] represents the type of the ith operation.
Now Bob will ask Alice to perform all operations in sequence:
If operations[i] == 0, append a copy of word to itself.
If operations[i] == 1, generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word. For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".
Return the value of the kth character in word after performing all the operations.
Note that the character 'z' can be changed to 'a' in the second type of operation. */
/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    var letterNo = 0;
    k -= 1;
    for (var i = 0; k > 0; i ++) {
        letterNo += operations[i]&(k%2);
        k = Math.floor(k/2);
    }
    return "abcdefghijklmnopqrstuvwxyz"[letterNo%26];
};
