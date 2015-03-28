function solve(arr){
    var newArray = [];
    for(var row = 0; row < arr.length; row++){
        if(row == 0){
            checkFirstLine();
        }
        else if(row == arr.length-1){
            checkLast();
        }else if(row < arr.length-1 && row > 0){
            checkInside(row);
        }
    }
    newArray.forEach(function(newRow){
        console.log(newRow);
    })

    //--------------------
    function checkFirstLine(){
        var newRow = '';
        var char = arr[0].charAt(0).toLowerCase();
        newRow += char;
        for(var index = 1; index < arr[0].length; index++){
            char = arr[0].charAt(index).toLowerCase();
            if(!(char == arr[1].charAt(index-1).toLowerCase() &&
                char == arr[1].charAt(index).toLowerCase() &&
                char == arr[1].charAt(index+1).toLowerCase() &&
                char == arr[2].charAt(index).toLowerCase())){
                newRow+=arr[0].charAt(index);
            }
        }
        newArray.push(newRow);
    }

    function checkInside(rowNum){
        var newRow = '';
        var char;
        for(var idx = 0; idx<arr[rowNum].length; idx++){
            char = arr[rowNum][idx].toLowerCase();
            //check first char
            if(
                (!(char == arr[rowNum].charAt(idx+1).toLowerCase() &&
                char == arr[rowNum].charAt(idx+2).toLowerCase() &&
                char == arr[rowNum-1].charAt(idx+1).toLowerCase() &&
                char == arr[rowNum+1].charAt(idx+1).toLowerCase()))
                &&
                !(char == arr[rowNum].charAt(idx-1).toLowerCase() &&
                char == arr[rowNum].charAt(idx+1).toLowerCase() &&
                char == arr[rowNum-1].charAt(idx).toLowerCase() &&
                char == arr[rowNum+1].charAt(idx).toLowerCase())
                &&
                !(char == arr[rowNum].charAt(idx-2).toLowerCase() &&
                char == arr[rowNum].charAt(idx-1).toLowerCase() &&
                char == arr[rowNum-1].charAt(idx-1).toLowerCase() &&
                char == arr[rowNum+1].charAt(idx-1).toLowerCase())
                )
            {
                if(rowNum - 2 >= 0 && rowNum + 2 <= arr.length-1){
                    if(!(char == arr[rowNum-1].charAt(idx-1).toLowerCase() &&
                        char == arr[rowNum-1].charAt(idx).toLowerCase() &&
                        char == arr[rowNum-1].charAt(idx+1).toLowerCase() &&
                        char == arr[rowNum-2].charAt(idx).toLowerCase())
                    &&
                        !(char == arr[rowNum+1].charAt(idx-1).toLowerCase() &&
                        char == arr[rowNum+1].charAt(idx).toLowerCase() &&
                        char == arr[rowNum+1].charAt(idx+1).toLowerCase() &&
                        char == arr[rowNum+2].charAt(idx).toLowerCase())
                    ){
                        newRow+=arr[rowNum].charAt(idx);
                    }
                }else{
                    newRow+=arr[rowNum].charAt(idx);
                }
            }
        }
        newArray.push(newRow);
    }

    function checkLast(){
        var newRow = '';
        var rowNum = arr.length-1;
        var char = arr[rowNum].charAt(0);
        newRow += char;
        for(var index = 1; index < arr[rowNum].length; index++){
            char = arr[rowNum].charAt(index).toLowerCase();
            if(!(char == arr[rowNum-1].charAt(index-1).toLowerCase() &&
                char == arr[rowNum-1].charAt(index).toLowerCase() &&
                char == arr[rowNum-1].charAt(index+1).toLowerCase() &&
                char == arr[rowNum-2].charAt(index).toLowerCase()
                )){
                newRow+=arr[rowNum].charAt(index);
            }
        }
        newArray.push(newRow);
    }
}

//var input = [
//    'ab**l5',
//    'bBb*555',
//    'absh*5',
//    'ttHHH',
//    'ttth'
//];


//var input =[
//    '@s@a@p@una',
//    'p@@@@@@@@dna',
//    '@6@t@*@*ego',
//    'vdig*****ne6',
//    'li??^*^*'
//]

var input = [
    'fs2s6',
    'ssSss',
    '1S2s8'
];

solve(input);