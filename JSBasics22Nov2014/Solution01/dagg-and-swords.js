function solve(arr){
    var typeArray = [];
    var nameArray = [];
    for(var line = 0; line < arr.length; line++){
        arr[line] = Math.floor(Number(arr[line]));
        if(arr[line]>10){
            var typeValue = (arr[line]%5);
            setType(typeValue);
            var type = arr[line] > 40 ? 'sword' : 'dagger';
            nameArray.push(type);
        }else{
            arr.splice(line, 1);
            line--;
        }
    }
    console.log('<table border="1">')
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');
    for(var cnt = 0; cnt<arr.length; cnt++){
        console.log('<tr><td>'+ arr[cnt] +'</td><td>'+ nameArray[cnt] +'</td><td>'+ typeArray[cnt] +'</td></tr>');
    }
    console.log('</tbody>');
    console.log('</table>');
    //-------------------------
    function setType(num){
        switch(num){
            case 0:
                typeArray.push('*rap-poker');
                break;
            case 1:
                typeArray.push('blade');
                break;
            case 2:
                typeArray.push('quite a blade');
                break;
            case 3:
                typeArray.push('pants-scraper');
                break;
            case 4:
                typeArray.push('frog-butcher');
                break;
        }
    }
}

var input = [
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
];
solve(input);