const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0
  for (const num of arr) {
    sum += num
  }
  return sum
};

const multiply = function(arr) {
  let product = 1
  for(const num in arr) { 
    product *= arr[num]
  }
  return product
};

const power = function(a,b) {
  return a ** b
};

const factorial = function(n) {
  if (n == 0 ) { 
    return 1
  } else {
    return n * factorial(n-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
