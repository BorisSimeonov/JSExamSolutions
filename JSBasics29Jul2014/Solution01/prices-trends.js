function solve(arr){
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    var trends = ['\"fixed.pg\"','\"up.png\"','\"down.png\"'];
    for(var index = 0; index<arr.length; index++){
        printResult(arr[index], index);
    }
    console.log('</table>');
    var previousVal = 0;
    //---------------------------------
    function printResult(val, idx){
        val = Number(Number(val).toFixed(2));
        if(idx === 0){
            console.log('<tr><td>'+val.toFixed(2)+'</td><td><img src='+ trends[0] +'/></td></tr>');
            previousVal = val;
        }else{
            if(val === previousVal){
                console.log('<tr><td>'+val.toFixed(2)+'</td><td><img src='+ trends[0] +'/></td></tr>');
                previousVal = val;
            }else if(val > previousVal){
                console.log('<tr><td>'+val.toFixed(2)+'</td><td><img src='+ trends[1] +'/></td></tr>');
                previousVal = val;
            }else if(val < previousVal){
                console.log('<tr><td>'+val.toFixed(2)+'</td><td><img src='+ trends[2] +'/></td></tr>');
                previousVal = val;
            }
        }
    }
}

var input = [
    '36.333',
    '36.5',
    '37.019',
    '35.4',
    '35',
    '35.001',
    '36.225'
];
solve(input);