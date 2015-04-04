function solve(table){
    var valuesArray  = table;
    valuesArray.splice(0,2);
    valuesArray.splice(table.length-1, 1);
    for(var x = 0; x<valuesArray.length; x++){
        valuesArray[x] = valuesArray[x].replace(/<\/*\w{2,}>/g,'///').split('///');
        for(var index = 0; index<valuesArray[x].length; index++){
            if(valuesArray[x][index] === ''){
                valuesArray[x].splice(index,1);
                index--;
            }
        }
    };
    valuesArray.sort(function(a,b){
        var firstPrice = Number(a[1]);
        var sndPrice = Number(b[1]);
        if(firstPrice>sndPrice) return 1;
        if(firstPrice<sndPrice) return -1;
        if(firstPrice===sndPrice){
            if(a[0] < b[0]) return -1;
            if(a[0] > b[0]) return 1;
        }
        return 0;
    });
    printResult();

    function printResult(){
        console.log('<table>');
        console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
        valuesArray.forEach(function(row){
            console.log('<tr><td>'+ row[0] +'</td><td>'+ row[1] +'</td><td>'+ row[2] +'</td></tr>');
        })
        console.log('</table>')
    }
}
var input = [
    '<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>'
];
solve(input);