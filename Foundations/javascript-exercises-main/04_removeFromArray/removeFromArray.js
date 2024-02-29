const removeFromArray = function(Array,...element) {
    let newArray = []
    for (let i = 0; i < Array.length; i++) {
        if (!element.includes(Array[i])) {
            newArray.push(Array[i])
        }
    }
    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
