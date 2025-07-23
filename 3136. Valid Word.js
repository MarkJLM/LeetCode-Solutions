/* A word is considered valid if:
It contains a minimum of 3 characters.
It contains only digits (0-9), and English letters (uppercase and lowercase).
It includes at least one vowel.
It includes at least one consonant.
You are given a string word.
Return true if word is valid, otherwise, return false.
Notes:
'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
A consonant is an English letter that is not a vowel. */
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) {
        return false;
    }
    var vowel = false;
    var conso = false;
    for (var i = 0; i < word.length; i ++) {
        if ("@#$".includes(word[i])) {
            return false;
        }
        if (!vowel && "aeiouAEIOU".includes(word[i])) {
            vowel = true;
        }
        if (!conso && "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(word[i])) {
            conso = true;
        }
    }
    return vowel & conso;
};
