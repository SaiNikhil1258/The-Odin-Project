const reverseString = function(string) {
    let newString = ""
    let len = string.length
    for (let i = len-1; i >= 0; i--) {
        newString += string[i]

    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
