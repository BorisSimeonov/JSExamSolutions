//90*x degree rotation
function solve(input){
    var arr = input;
    var degRotation = arr[0].replace(/\D/g, '');
    degRotation = Number(degRotation)%360;
    arr.splice(0,1);
    display(degRotation);
    //------------------------------------------
    function display(degree){
        switch(degree){
            case 0:
                print(arr);
                break;
            case 180:
                changeOneEighty();
                print(arr);
                break;
            case 270:
                changeTwoSeventy();
                break;
            case 90:{
                changeTwoSeventy();
            }
        }
    }
    //drivers
    function changeOneEighty(){
        var newArray = [];
        var maxLength = getMaxArrLength();
        for(var row = arr.length-1; row>=0; row--){
            var newRow = arr[row].split('').reverse().join('');
            while(newRow.length < maxLength){
                newRow = ' ' + newRow;
            }
            newArray.push(newRow);
        }
        arr = newArray;
    };
    function changeTwoSeventy(){
        var maxLength = getMaxArrLength();
        var newArray = [];
        for(var row = 0; row<arr.length; row++){
            while(arr[row].length < maxLength){
                arr[row] += ' ';
            }
        }
        if(degRotation === 270){
            var bufferRow;
            var newArray = [];
            for(var col = arr[0].length-1; col>=0; col--){
                bufferRow = '';
                for(var row = 0; row<arr.length; row++){
                    bufferRow += arr[row].charAt(col);
                }
                newArray.push(bufferRow);
            }
            print(newArray);
        }else{
            var bufferRow;
            var newArray = [];
            for(var col = 0; col<arr[0].length; col++){
                bufferRow = '';
                for(var row = arr.length-1; row>=0; row--){
                    bufferRow += arr[row].charAt(col);
                }
                newArray.push(bufferRow);
            }
            print(newArray);
        }
    };
    function print(array){
        array.forEach(function(row){
            console.log(row);
        })
    };
    function getMaxArrLength(){
        var max = 0;
        arr.forEach(function(row){
            max = Math.max(max, row.length);
        });
        return max;
    };
}

var textInp = [
    'Rotate(90)',
    'hello',
    'softuni',
    'exam'
];

solve(textInp);