const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) =>{
    return a / b;
};

//I'm getting slightly attached to the arrow in the arrow function

const modulus = (a, b) => {
    return a % b;
};

const even = (a) => {
    return a % 2 == 0;
};

const odd = (a) => {
    return a % 2 != 0;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
