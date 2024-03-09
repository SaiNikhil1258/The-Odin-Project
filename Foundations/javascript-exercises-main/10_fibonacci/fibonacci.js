const fibonacci = function (n) {
    // n can also be a string convert it into integer
    n = parseInt(n)
    if (n < 0) {
        return "OOPS"
    }
    if (n === 0) {
        return 0
    }
    else if (n === 1) {
        return 1   
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
