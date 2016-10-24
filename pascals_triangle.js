var generate = function(numRows) {


    if(numRows === 0 ){
        return [];
    }
    else if(numRows === 1){
        return[ [1] ];
    }

    var triangle = [[1]];

    // since the first row in the array position 0, triangle[0], is just [i]
    // we can just start from the array postion 1, triangle[1]
    for(var i = 1; i < numRows; i++){
      // The numbers in the current row depend on the previous row, which is triangle[i-1]
        var preRow = triangle[i-1];
        // The first elelemt in the current row is alwasy 1,
        var currentRow = [1];

        // since the first elelemt in the current row is alwasy 1,
        // we can just start from the second position in the currentRow array
        for(var j = 1; j <= i; j++){
            var preRow_Prej = preRow[j-1];
            //take the value from the j posion in the previous Row if it exists
            // otherwise use 0
            var preRow_j = preRow[j] ? preRow[j] : 0;
            currentRow.push(preRow_Prej + preRow_j);
        }
        triangle.push(currentRow);
    }
    return triangle;
};
