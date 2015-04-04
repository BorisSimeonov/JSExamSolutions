function solve(array){
    var newArray = [];
    for(var row = 0; row<array.length; row++){
        var newRow = '';
        for(var col = 0; col<array[row].length; col++){
            var char = array[row].charAt(col).toLowerCase();
            if(row === 0){
                if(checkTop(row, col, char)){
                    newRow += char;
                }else{
                    newRow += '*';
                }
            };
            if(row === array.length - 1){
                if(checkBottom(row, col, char)){
                    newRow += char;
                }else{
                    newRow += '*';
                }
            };
            if(row > 0 && row < array.length-1){
                if(checkMiddle(row, col, char)){
                    newRow += char;
                }else{
                    newRow += '*';
                }
            }
        }
        newArray.push(newRow);
    }
    displayArray(newArray);

    //=======================================================
    function checkMiddle(rowPos, colPos, ch){
        var bools = [checkTop(rowPos, colPos, ch), checkBottom(rowPos, colPos, ch)];
        if(bools[0] == bools[1]){
            return bools[0];
        }else{

        }
    }
    function checkTop(rowPos, colPos, ch){
        if (rowPos === 0 && colPos === 0){
            return true;
        };
        if(
            ch === array[rowPos+1].charAt(colPos-1).toLowerCase() &&
            ch === array[rowPos+1].charAt(colPos).toLowerCase() &&
            ch === array[rowPos+1].charAt(colPos+1).toLowerCase()
        ){
            return false;
        }else{
            return true;
        }
    }
    function checkBottom(rowPos, colPos, ch){
        if(
            ch === array[rowPos].charAt(colPos+1).toLowerCase() &&
            ch === array[rowPos].charAt(colPos+2).toLowerCase() &&
            ch === array[rowPos-1].charAt(colPos+1).toLowerCase()
            ||
            ch === array[rowPos].charAt(colPos-1).toLowerCase() &&
            ch === array[rowPos].charAt(colPos+1).toLowerCase() &&
            ch === array[rowPos-1].charAt(colPos).toLowerCase()
            ||
            ch === array[rowPos].charAt(colPos-1).toLowerCase() &&
            ch === array[rowPos].charAt(colPos-2).toLowerCase() &&
            ch === array[rowPos-1].charAt(colPos-1).toLowerCase()
        ){
            return false;
        }else{
            return true;
        }
    }
    function displayArray(arr){
        arr.forEach(function(a){
            console.log(a);
        });
    }
}

var testInp = [
    'abcdexgh',
    'bbbdxxxh',
    'abcxxxxx'
];

solve(testInp);