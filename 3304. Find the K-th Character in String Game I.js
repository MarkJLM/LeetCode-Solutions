/* Alice and Bob are playing a game. Initially, Alice has a string word = "a".
You are given a positive integer k.
Now Bob will ask Alice to perform the following operation forever:
Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".
Return the value of the kth character in word, after enough operations have been done for word to have at least k characters. */
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    var letterNo = 0;
    k -= 1;
    while (k > 0) {
        letterNo += k%2;
        k = Math.floor(k/2);
    }
    return "abcdefghijklmnopqrstuvwxyz"[letterNo];
};
