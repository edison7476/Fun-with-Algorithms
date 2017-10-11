// Write a function that takes integers x and y and returns
// x ^ y. Don't use the builtin exponent function.
// Assume integer overflow is not a problem.
// Assume x and y are non-negative intergers
// e.g. f(2, 3) = 8

function exponent(x, y) {
    if (!x) {
        return 0;
    } else if (!y || x === 1) {
        return 1;
    }
   
    return factorPower(x, y);
}

function factorPower(x, y) {
    let r = (y % 2 ) ? x : 1; 
    y = Math.floor(y / 2);
    
    if (y === 1) {
        return r * x * x;
    } 
    
    return r * exponent(x, y) * exponent(x, y);
}