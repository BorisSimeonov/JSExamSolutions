function solve(arr){
    var unsortedObj = {};
    var inArray = [];
    var maxLog = Number(arr[0]);
    arr.splice(0,1);
    for(var line = 0; line<maxLog; line++){
        inArray.push(arr[line].replace(/\s{2,}/g,' ').split(' '));
        if(!(inArray[line][1] in unsortedObj)){
            unsortedObj[inArray[line][1]] = {'ip':[],'number':0};
            unsortedObj[inArray[line][1]].ip.push(inArray[line][0]);
            unsortedObj[inArray[line][1]].number = Number(inArray[line][2]);
        }else{
            unsortedObj[inArray[line][1]].number += Number(inArray[line][2]);
            if(unsortedObj[inArray[line][1]].ip.indexOf(inArray[line][0])<0){
                unsortedObj[inArray[line][1]].ip.push(inArray[line][0]);
            }
        }
    }

    var keyArr = Object.keys(unsortedObj);
    keyArr.sort(function(a,b){
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    });

    keyArr.forEach(function(key){
        unsortedObj[key].ip.sort(function(a,b){
            if (a>b) return 1;
            if (a<b) return -1;
            return 0;
        });
        console.log(key + ': ' + unsortedObj[key].number.toString() + ' [' + unsortedObj[key].ip.join(', ') + ']')
    });
}


solve(['7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4'])
