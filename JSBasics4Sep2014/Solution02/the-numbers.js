function solve(arr){
    var result = '';
    var inLine = arr[0].replace(/\D/g,' ').replace(/\s{2,}/g, ' ').trim().split(' ');
    convertOtHex();

    console.log(inLine.join('-'));
    //----------------------------------------
    function convertOtHex(){
        for(var index=0; index < inLine.length; index++){
            inLine[index] = Number(inLine[index]).toString(16).toUpperCase();
            var addition = function(){
                while(inLine[index].length < 4) inLine[index] = '0' + inLine[index];
            }();
            inLine[index] = '0x' + inLine[index];
        }
    }
}

var input =
    ['5tffwj(//*7837xzc2---34rlxXP%$”.']
;
var inputTwo = ['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312']

solve(input);
solve(inputTwo);