function solve(fieldArr){
    var values = {'I': 0,'L': 0,'J': 0,'O': 0,'Z': 0,'S': 0,'T': 0};
    for(var rowCnt = 0; rowCnt<fieldArr.length; rowCnt++){
        for(var colCnt = 0; colCnt<fieldArr[rowCnt].length; colCnt++){
            if(fieldArr[rowCnt].charAt(colCnt) === 'o'){
                checkI(rowCnt, colCnt);
                checkL(rowCnt, colCnt);
                checkJ(rowCnt, colCnt);
                checkO(rowCnt, colCnt);
                checkZ(rowCnt, colCnt);
                checkS(rowCnt, colCnt);
                checkT(rowCnt, colCnt);
            }
        }
    }
    console.log(JSON.stringify(values));
    //functions -----------------
    function checkI(row, col){
        if(row + 3 < fieldArr.length){
            if(
                fieldArr[row+1].charAt(col) === 'o' &&
                fieldArr[row+2].charAt(col) === 'o' &&
                fieldArr[row+3].charAt(col) === 'o'
            ){
                values.I += 1;
            }
        }
    };
    function checkL(row, col){
        if(row + 2 < fieldArr.length && col+1 < fieldArr[row].length){
            if(
                fieldArr[row+1].charAt(col) === 'o' &&
                fieldArr[row+2].charAt(col) === 'o' &&
                fieldArr[row+2].charAt(col+1) === 'o'
            ){
                values.L += 1;
            }
        }
    };
    function checkJ(row, col){
        if(row + 2 < fieldArr.length && col-1 >= 0){
            if(
                fieldArr[row+1].charAt(col) === 'o' &&
                fieldArr[row+2].charAt(col) === 'o' &&
                fieldArr[row+2].charAt(col-1) === 'o'
            ){
                values.J += 1;
            }
        }
    };
    function checkO(row, col){
        if(row + 1 < fieldArr.length && col+1 < fieldArr[row].length){
            if(
                fieldArr[row].charAt(col+1) === 'o' &&
                fieldArr[row+1].charAt(col) === 'o' &&
                fieldArr[row+1].charAt(col+1) === 'o'
            ){
                values.O += 1;
            }
        }
    };
    function checkZ(row, col){
        if(row + 1 < fieldArr.length && col+2 < fieldArr[row].length){
            if(
                fieldArr[row].charAt(col+1) === 'o' &&
                fieldArr[row+1].charAt(col+1) === 'o' &&
                fieldArr[row+1].charAt(col+2) === 'o'
            ){
                values.Z += 1;
            }
        }
    };
    function checkS(row, col){
        if(row - 1 >= 0 && col+2 < fieldArr[row].length){
            if(
                fieldArr[row].charAt(col+1) === 'o' &&
                fieldArr[row-1].charAt(col+1) === 'o' &&
                fieldArr[row-1].charAt(col+2) === 'o'
            ){
                values.S += 1;
            }
        }
    };
    function checkT(row, col){
        if(row + 1 < fieldArr.length && col+2 < fieldArr[row].length){
            if(
                fieldArr[row].charAt(col+1) === 'o' &&
                fieldArr[row].charAt(col+2) === 'o' &&
                fieldArr[row+1].charAt(col+1) === 'o'
            ){
                values.T += 1;
            }
        }
    };
}

var input = [
    '--o--o-',
    '--oo-oo',
    'ooo-oo-',
    '-ooooo-',
    '---oo--'
];
solve(input);