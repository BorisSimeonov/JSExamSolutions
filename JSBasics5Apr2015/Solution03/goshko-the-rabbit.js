function solve(arr){
    var directions = arr[0].replace(/\s+/g,'').split(',');
    var vegObject = {"lettuce":0, "cabbage":0, "turnip":0, "carrots":0, 'wallhits':0};
    var lastPos = '';
    arr.splice(0,1);
    var field = [];
    for(var idx = 0; idx<arr.length; idx++){
        var buffer = [];
        buffer = arr[idx].replace(/\s+/g,'').split(',');
        field.push(buffer);
    }
    var currentPos = [0,0];
    var hasMoved = false;
    var cellsPassed = [];
    for(var moves = 0; moves<directions.length; moves++){
        var direct = directions[moves];
        var row = currentPos[0];
        var col = currentPos[1];
        switch(direct){
            case 'up':
                row-=1;
                break;
            case 'down':
                row+=1;
                break;
            case 'left':
                col-=1;
                break;
            case 'right':
                col+=1;
                break;
        };
        checkPosition(row, col, direct);
        if(hasMoved){
            currentPos[0] = row;
            currentPos[1] = col;

            checkCurPosition();
            cellsPassed.push(field[currentPos[0]][currentPos[1]]);
            hasMoved = false;
        }else{
            vegObject.wallhits += 1;
        }
    }
    console.log('{"&":'+vegObject.lettuce+',"*":'+vegObject.cabbage+',"#":'+vegObject.turnip+',"!":'+vegObject.carrots+',"wall hits":'+vegObject.wallhits+'}');
    if(cellsPassed.length>0){
        console.log(cellsPassed.join('|'));
    }else{
        console.log('no');
    }

    //====================================================
    function checkCurPosition(){
        var fieldArea = field[currentPos[0]][currentPos[1]];
        var carrots = fieldArea.match(/\{!\}/g);
        if(carrots!=null){
            vegObject.carrots+=carrots.length;
            field[currentPos[0]][currentPos[1]] = field[currentPos[0]][currentPos[1]].replace(/\{!\}/g, '@');
        }
        //--------------
        var cabbage = fieldArea.match(/\{\*\}/g);
        if(cabbage!=null){
            vegObject.cabbage+=cabbage.length;
            field[currentPos[0]][currentPos[1]] = field[currentPos[0]][currentPos[1]].replace(/\{\*\}/g, '@');
            //console.log(cabbage)
        }
        //--------------
        var lettuce = fieldArea.match(/\{&\}/g);
        if(lettuce!=null){
            vegObject.lettuce+=lettuce.length;
            field[currentPos[0]][currentPos[1]] = field[currentPos[0]][currentPos[1]].replace(/\{&\}/g, '@');
            //console.log(lettuce)
        }
        var turnip = fieldArea.match(/\{#\}/g);
        if(turnip!=null){
            vegObject.turnip+=turnip.length;
            field[currentPos[0]][currentPos[1]] = field[currentPos[0]][currentPos[1]].replace(/\{#\}/g, '@');
            //console.log(turnip)
        }
    };
    function checkPosition(row, col, dir){
        if(dir === 'up' || dir === 'down'){
            if(
                (row>=0) &&
                (row<field.length)
            ){
                hasMoved =  true;
            }else{
                hasMoved = false;
            }
        }else if(dir==='left' || dir === 'right'){
            if(
                (col>=0)&&
                (col<field[currentPos[0]].length)
            )
            {
                hasMoved =  true;
            }else {
                hasMoved = false;
            }
        }
    };
}


solve(['right, up, up, down',
    'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
    'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
    'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'])
