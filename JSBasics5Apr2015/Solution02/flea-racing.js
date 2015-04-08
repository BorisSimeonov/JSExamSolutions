function solve(arr){
    var numOfJumps = Number(arr[0]);
    var trackLength = Number(arr[1]);
    var competitors = [];
    for(var idx = 2; idx<arr.length; idx++){
        var buffer = arr[idx].replace(/\s*/g, '');
        buffer = buffer.split(',');
        buffer.push(0);
        competitors.push(buffer);
    };
    var jumpCounter = 0;
    var winIndex = false;
    var hasNex = true;
    do{
        jumpCounter++;
        for(var cnt = 0; cnt<competitors.length; cnt++){
            competitors[cnt][2] += Number(competitors[cnt][1]);
            if(competitors[cnt][2] >= trackLength - 1){
                winIndex = cnt;
                hasNex = false;
                break;
            }
        }
        if(jumpCounter == numOfJumps){
            hasNex=false;
        }
    }while(hasNex);
    var winnerName = '';
    if(winIndex === false){
        getWinner();
    }else{
        winnerName = competitors[winIndex][0];
    }
    displayTrack();
    console.log('Winner: ' + winnerName);
    //===========================================================
    function displayTrack(){
        var trackBorder = new Array(trackLength);
        var result = [trackBorder, trackBorder];
        for(var idx = 0; idx<trackBorder.length; idx++){
            trackBorder[idx] = '#';
        }
        for(var x = 0; x<competitors.length; x++){
            var compIndex;
            var trackField = [trackLength-1];
            for(var idx = 0; idx<trackBorder.length; idx++){
                trackField[idx] = '.';
            };
            if(competitors[x][2]>=trackLength-1){
                trackField[trackLength-1] = competitors[x][0].charAt(0).toUpperCase();
            }
            else{
                trackField[competitors[x][2]] = competitors[x][0].charAt(0).toUpperCase();
            }
            result.push(trackField);
        }
        result.push(trackBorder);
        result.push(trackBorder)

        result.forEach(function(x){
            console.log(x.join(''))
        })
    };
    function getWinner(){
        var winnIdxName = [-1,''];
        for(var index = 0; index<competitors.length; index++){
            if(competitors[index][2] >= winnIdxName[0]){
                winnIdxName[0] = competitors[index][2];
                winnIdxName[1] = competitors[index][0];
            }
        }
        winnerName = winnIdxName[1];
    };
}

solve(['10',
    '19',
    'angel, 9',
    'Boris, 10',
    'Georgi, 3',
    'Dimitar, 7']);
