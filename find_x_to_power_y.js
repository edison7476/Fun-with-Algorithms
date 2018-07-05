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

var isBalanced = function(root) {
    if (!root) return true;

    let L = findPath(root.left);
    let R = findPath(root.right);
    let diff = Math.abs(L - R) < 2;

    return diff && isBalanced(root.left) && isBalanced(root.right)
}

function findPath(node) {
    if (!node) return 0;

    return Math.max(findPath(node.left), findPath(node.right)) + 1;
}

var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let sum = 0;
    if (root.left) {
        if (!root.left.left && !root.left.right) {
            sum += root.left.val;
        } else {
            sum += 
        }
    }
    sumOfLeftLeaves(root.left);

    if (root.right) {
        sum += sumOfLeftLeaves(root.right);
    }

    return sum;
}

// Ex:
// EDISON - false
// JASPAL - false
// HANNAHD - true


function almostP(str) {
    const n = Math.floor(str.length / 2); 
    let j  = 0;
    let flag = true;

    for (let i = 0; i < n; i++) { 
    	 let rightElementIndex = str.length - 1 - j; 
       if (str[i] !== str[rightElementIndex]) {
       		if (flag) {
          	if (str[i] === str[rightElementIndex - 1] ) {   //str[5] = H
                j++; 
                flag = false;
            } else if (str[i + 1] === str[rightElementIndex]) {
                i++ ; 
                flag = false;
            } else {
                return false;                      
            }
          } else {
          	return false;
          }
       }  
			j++;
    }
    return true;
}                                    
console.log(almostP('JASPAL'))
console.log(almostP('HANNAHD'))