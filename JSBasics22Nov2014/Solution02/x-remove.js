function solve(arr){
    var newArray = [];
    for(var row = 0; row<arr.length; row++){
        if(row === 0){
            checkFirst(row);
            continue;
        }
        if(row === arr.length - 1){
            checkLast(arr.length - 1);
            continue;
        }
        if(row > 0 && row < arr.length - 1){
            checkMiddle(row);

            continue;
        }
    };

    newArray.forEach(function(line){
        console.log(line);
    });
    //--------------------- First Row
   function checkFirst(row){
       var char;
       var newFRow = '';
       for(var cnt = 0; cnt < arr[row].length; cnt++){
           if(arr[row].length < 3 || arr.length < 3){
               newArray.push(arr[row]);
               return;
           }else{
               char=arr[row].charAt(cnt).toLowerCase();
               if(
                   topLeftNRight(char, row, cnt)
               )
               {
                    newFRow+=arr[row].charAt(cnt);
               }
           }
       }
       newArray.push(newFRow);
   };
    //--------------------- Last Row
    function checkLast(lRow){
        var charLast;
        var newLRow = '';
        for(var cnt = 0; cnt < arr[lRow].length; cnt++){
            if(arr[row].length < 3 || arr.length < 3){
                newArray.push(arr[row]);
                return;
            }else{
                charLast=arr[lRow].charAt(cnt).toLowerCase();
                if(
                    bottomLeftNRight(charLast, lRow, cnt)
                )
                {
                    newLRow+=arr[lRow].charAt(cnt);
                }
            }
        }
        newArray.push(newLRow);
    }
    //--------------------- Check Middle Rows
    function checkMiddle(mRow){
        var charMid;
        var newMRow = '';
        for(var cnt = 0; cnt < arr[mRow].length; cnt++){
            charMid = arr[mRow].charAt(cnt).toLowerCase();
            if(
                middle(charMid, mRow, cnt)
            ){
                var checker = true;
                if(mRow - 2 >= 0){
                    checker = checker && bottomLeftNRight(charMid, mRow, cnt);
                };
                if(mRow+2<arr.length){
                    checker = checker && topLeftNRight(charMid, mRow, cnt);
                }
                checker ? newMRow += arr[mRow].charAt(cnt) : false;
            }
        }
        newArray.push(newMRow);
    };
    //Checking constants
    function topLeftNRight(charValue, rowValue, idx){
        var bool = (!(
        charValue === arr[rowValue].charAt(idx+2).toLowerCase() &&
        charValue === arr[rowValue+1].charAt(idx+1).toLowerCase() &&
        charValue === arr[rowValue+2].charAt(idx).toLowerCase() &&
        charValue === arr[rowValue+2].charAt(idx+2).toLowerCase()
        )
        &&
        !(
        charValue === arr[rowValue].charAt(idx-2).toLowerCase() &&
        charValue === arr[rowValue+1].charAt(idx-1).toLowerCase() &&
        charValue === arr[rowValue+2].charAt(idx).toLowerCase() &&
        charValue === arr[rowValue+2].charAt(idx-2).toLowerCase()
        ));
        return bool;
    }
    function middle(charMValue, rowMValue, idxM){
        var bool = !(charMValue === arr[rowMValue-1].charAt(idxM+1).toLowerCase() &&
        charMValue === arr[rowMValue-1].charAt(idxM-1).toLowerCase() &&
        charMValue === arr[rowMValue+1].charAt(idxM+1).toLowerCase() &&
        charMValue === arr[rowMValue+1].charAt(idxM-1).toLowerCase());
        return bool;
    }
    function bottomLeftNRight(charBValue, rowBValue, idxB){
        var bool = !(
            charBValue === arr[rowBValue].charAt(idxB+2).toLowerCase() &&
            charBValue === arr[rowBValue-1].charAt(idxB+1).toLowerCase() &&
            charBValue === arr[rowBValue-2].charAt(idxB).toLowerCase() &&
            charBValue === arr[rowBValue-2].charAt(idxB+2).toLowerCase()
        )
        &&
        !(
        charBValue === arr[rowBValue].charAt(idxB-2).toLowerCase() &&
        charBValue === arr[rowBValue-1].charAt(idxB-1).toLowerCase() &&
        charBValue === arr[rowBValue-2].charAt(idxB).toLowerCase() &&
        charBValue === arr[rowBValue-2].charAt(idxB-2).toLowerCase()
        );
        return bool;
    }
}

var input = [
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
];

var inputTwo = [
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
];

var inputThree = [
    '8888888',
    '08*8*80',
    '808*888',
    '0**8*8?'
]
solve(inputThree);