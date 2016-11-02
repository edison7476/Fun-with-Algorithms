/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

*/
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    else if(rowIndex === 1) return [1,1]

    var result = [];

    for(var i = 0; i <= rowIndex; i++ ){
        result.push(choose(rowIndex, i));
    }
    return result;
};

function choose(n, k){
    if (k == 0) return 1;
    return (n * choose(n - 1, k - 1)) / k;
}
