function solve(arr){
    console.log('<ul>');
    var start = Number(arr[0]);
    var end = Number(arr[1]);
    for(var cnt = start; cnt<=end; cnt++){
        var bool = checkNumber(cnt);
        if(!bool){
            console.log('<li><span class=\'num\'>'+cnt+'</span></li>');
        }else{
            console.log('<li><span class=\'rakiya\'>'+cnt+'</span><a href="view.php?id='+cnt+'>View</a></li>');
        }
    }
    console.log('</ul>');
    //-------------------------
    function checkNumber(number){
        var numString = number.toString();
        var boolCheck = false;
        for(var index = 0; index<numString.length-3; index++){
            var firstPair = numString.charAt(index) + numString.charAt(index+1);
            var rest = numString.substring(index+2);
            if(rest.indexOf(firstPair) > -1){
                boolCheck = true;
            }
        }
        return boolCheck;
    };
}

var testInput = [
    '11210',
    '11215'
];

var testInpTwo = [
    '55555',
    '55560'
];

solve(testInput);