const sumAll = function(lower_bound, upper_bound) {
    let sum = 0
    if (!Number.isInteger(lower_bound) || !Number.isInteger(upper_bound)) return "ERROR"
    if (lower_bound < 0 || upper_bound < 0){
        return "ERROR";
    }
    if (lower_bound > upper_bound){
        let temp = lower_bound;
        lower_bound = upper_bound;
        upper_bound = temp;
    }

    for (let i = lower_bound; i <= upper_bound; i++){
        sum += i
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
