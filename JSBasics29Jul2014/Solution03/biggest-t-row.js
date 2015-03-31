function solve(arr){
    var tableRows = setArray();
    var bestSum = {'sum':-10000000,'values':[]};
    for(var idx = 0; idx<tableRows.length; idx++){
        tableRows[idx] = tableRows[idx].replace(/[^\d\-\.]/g, ' ').replace(/\s{2,}/g, ' ').trim().split(' ');
        sumValues(idx);
    }
    var result = "no data";
    if(bestSum.values.length>0){
        result = bestSum.sum.toString() + ' = ';
      bestSum.values.forEach(function(x){
          result += x + ' + ';
      })
        result = result.substring(0, result.length-3);
    };
    console.log(result);
    //functions
    function setArray(){
        arr.splice(0,2);
        arr.splice(arr.length-1,1);
        return arr;
    }
    function sumValues(index){
        var sum = Number.MIN_VALUE;
        var numVals = [];
        tableRows[index].forEach(function(indexValue){
            if(indexValue !== '-'){
                if(sum === Number.MIN_VALUE){
                  sum = 0;
                };
                sum += Number(indexValue);
                numVals.push(indexValue);
            }
        });
        //console.log(numVals);
        //console.log(sum);
        if(sum > bestSum.sum){
            bestSum.sum = sum;
            bestSum.values = numVals;
            bestSum;
        }
    }
}

var input = [
    '<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>0</td><td>-</td><td>0.0</td></tr>',
    '<tr><td>Yambol</td><td>-</td><td>0</td><td>-</td></tr>',
    '<tr><td>Sliven</td><td>-</td><td>0</td><td>-</td></tr>',
    '<tr><td>Kaspichan</td><td>0</td><td>-</td><td>-</td></tr>',
    '</table>'
];

var inputTwo = [
    '<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
    '<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
    '</table>'
];
solve(input);