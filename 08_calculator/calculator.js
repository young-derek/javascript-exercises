const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...a]) {
  total = 0;

  for (i = 0; i < a.length; i++)
  {
    total += a[i];
  }
  return total;

};

const multiply = function([...a]) {
  let total = 1
  for (let i = 0; i < a.length; i++)
  {
    total *= a[i];
  }
  return total;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	
  let total = 1;

  for (let i = 0; i < a; i++)
  {
    total *= i+1;
  }

  return total;
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
