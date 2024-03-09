const palindromes = function (str) {
    // the string has multiple words and we need to split them and join them and then find if the whole sentence is palindrome or not
    let newString = str.split(/\W/).join("").toLowerCase();
    let reverseString = newString.split("").reverse().join("");
    if (newString === reverseString) {
        return true;
    }
    return false;

    // give me a one line code
    // return str.split(/\W/).join("").toLowerCase() === str.split(/\W/).join("").toLowerCase().split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
