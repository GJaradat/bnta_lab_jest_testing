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
    
    //From a maths perspective, remainders are always positive
    return Math.abs(a % b);
};

const oddOrEven = (a) => {
    if (a % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
};


module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    oddOrEven 
};
