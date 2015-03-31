function solve(arr){
    var tipSum = 0;
    var tipProc = 0;
    switch(arr[arr.length-1]){
        case 'happy':
            tipProc = 0.1;
            tipSum = (Number(arr[0])*tipProc).toFixed(2);
            break;
        case 'married':
            tipProc = 0.0005;
            tipSum = (Number(arr[0])*tipProc).toFixed(2);
            break;
        case 'drunk':
            tipProc = 0.15;
            tipSum = Number(arr[0])*tipProc;
            var getFirstChar = String(tipSum).charAt(0);
            tipSum = Math.pow(Number(tipSum), Number(getFirstChar)).toFixed(2);
            break;
        default :
            tipProc = 0.05;
            tipSum = (Number(arr[0])*tipProc).toFixed(2);
            break;
    }
    console.log(tipSum);
}


var input = [
    '19841999.99',
    'drunk'
];
solve(input);