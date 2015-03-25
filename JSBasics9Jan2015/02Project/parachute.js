function solve(arr) {
    function getStart(){
        var parachutist = {row: 0, col: 0};
        for (var row = 0; row < arr.length; row++) {
            for (var index = 0; index < arr[row].length; index++){
                if (arr[row][index] == 'o') {
                    parachutist.row = row;
                    parachutist.col = index;
                    row = arr.length;
                    break;
                }
            }
        }
        return parachutist;
    }
    function getWindValue(windLayer) {
        var wind = 0;
        for (var index in windLayer) {
            if (windLayer[index] == '<') {
                wind -= 1;
            } else if (windLayer[index] == '>') {
                wind += 1;
            }
        }
        ;
        return wind;
    };
    //---------------------------------------------------------------
    var parachuteRow = getStart();
    //driver
    var wind, positionSymbol, landed = false;
    for(var rowFall = parachuteRow.row +1; rowFall < arr.length; rowFall++){
        wind = getWindValue(arr[rowFall]);
        parachuteRow.col = parachuteRow.col + wind;
        parachuteRow.row = rowFall;
        positionSymbol = arr[rowFall].charAt(parachuteRow.col);
        if(positionSymbol !== '-'){
            switch(positionSymbol){
                case '/':
                case '\\':
                case '|':
                    console.log('Got smacked on the rock like a dog!');
                    console.log( parachuteRow.row + " " + parachuteRow.col);
                    landed = true;
                    break;
                case '~':
                    console.log('Drowned in the water like a cat!');
                    console.log( parachuteRow.row + " " + parachuteRow.col);
                    landed = true;
                    break;
                case '>':
                case '<':
                    break;
                default :
                    console.log('Landed on the ground like a boss!');
                    console.log( parachuteRow.row + " " + parachuteRow.col);
                    landed = true;
                    break;
            }
        }
        if(landed){
            break;
        }
    }
}

var image = [
    '--o----------------------',
    '--->---------------------',
    '>------------------------',
    '>-----------------/\\-----',
    '-----------------/--\\----',
    '>---------/\\----/----\\---',
    '---------/--\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/----------------\\',
    '-\\____/------------------'
];

var newImage = [
    '-------------o-<<--------',
    '-------->>>>>------------',
    '---------------->-<---<--',
    '------<<<<<-------/\\--<--',
    '--------------<--/-<\\----',
    '>>--------/\\----/<-<-\\---',
    '---------/<-\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/--------------<-\\',
    '-\\___~/------<-----------'
    ];
solve(image);
solve(newImage);