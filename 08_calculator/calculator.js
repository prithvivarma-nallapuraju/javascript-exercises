const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arg) {
	let sum = 0
  for(let i=0; i<arg.length;i++) {
    sum+= arg[i]
  }
  return sum
};

const multiply = function(arg) {
  let mul = 1
  for(let i=0;i<arg.length;i++) {
    mul*=arg[i]
  }
  return mul
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	let mul = 1
  if(a == 0 || a == 1) {
    return 1
  }else {
    while(a>0) {
      mul*=a
      a--
    }
    return mul
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
