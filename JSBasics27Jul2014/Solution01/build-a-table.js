function solve(numbersArr){
    var startNum = Number(numbersArr[0]);
    var endNum = Number(numbersArr[1]);
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for(var num = startNum; num<=endNum; num++){
        if(isFib(num)){
            console.log('<tr><td>'+num+'</td><td>'+Math.pow(num,2)+'</td><td>yes</td></tr>');
        }else{
            console.log('<tr><td>'+num+'</td><td>'+Math.pow(num,2)+'</td><td>no</td></tr>');
        }
    }
    console.log('</table>');

    //----------------------------------------------------------------
    function isFib(number){
        if(number === 1) {
            return true;
        }

        var first = 1,second = 1,third = -1;
        while(third<number+1){
            third = second+first;
            first = second;
            second = third;
            if(third === number){
                return true;
            }
        }
        return false;
    }
}

var testInp = [
    '1',
    '22'
];
solve(testInp);
