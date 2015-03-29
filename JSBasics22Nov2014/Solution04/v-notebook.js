function solve(arr){
    var unsortedObject = {};
    var sortedObject = {};
    for(var row=0; row<arr.length; row++){
        arr[row] = arr[row].split('|');
        pushInObject(row);
    }
    var keys = Object.keys(unsortedObject);
    keys.sort(function(a,b){
        if(a > b ) return 1;
        if(a < b ) return -1;
        return 0;
    })
    keys.forEach(function(key){
       if('name' in unsortedObject[key] &&
           'age' in unsortedObject[key]){
           sortArray(key);
           buildObject(key);
       }else{
           delete  unsortedObject[key];
       }
    });

    console.log(JSON.stringify(sortedObject));
    //---------------------------------------
    function pushInObject(rowValue){
        var color = arr[rowValue][0];
        var values = [];
        values[0] = arr[rowValue][1];
        values[1] = arr[rowValue][2];
        if(!(color in unsortedObject)){
            unsortedObject[color] = {};
            populateColObj(color, values);
        }else{
            populateColObj(color, values);
        }
    };
    //---------------------------------------
    function populateColObj(colVal, valArray){
        if(!(valArray[0] in unsortedObject[colVal])){
            if(valArray[0] === 'win' || valArray[0] === 'loss'){
                unsortedObject[colVal][valArray[0]] = 1;
                setOpponents(valArray[1], colVal);
            }else{
            unsortedObject[colVal][valArray[0]] = valArray[1];
            }
        }else{
            if(valArray[0] === 'win' || valArray[0] === 'loss'){
                unsortedObject[colVal][valArray[0]] += 1;
                setOpponents(valArray[1], colVal);
            }
        }
    };
    //---------------------------------------
    function setOpponents(opName, inColor){
        if('opponents' in unsortedObject[inColor]){
            unsortedObject[inColor]['opponents'].push(opName);
        }else {
            unsortedObject[inColor]['opponents'] = [];
            unsortedObject[inColor]['opponents'].push(opName);
        }
    }
    //---------------------------------------
    function sortArray(keyValue){
        if('opponents' in unsortedObject[keyValue]){
            unsortedObject[keyValue].opponents.sort(function(a,b){
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            });
        };
    }
    //---------------------------------------
    function buildObject(keyVal){
        var tempObj = {'age':'','name':'','opponents':[],'rank':''};
        tempObj.age = unsortedObject[keyVal].age;
        tempObj.name = unsortedObject[keyVal].name;
        if('opponents' in unsortedObject[keyVal]){
        tempObj.opponents = unsortedObject[keyVal].opponents;
        }
        tempObj.rank = getRank(keyVal);
        sortedObject[keyVal] = {};
        sortedObject[keyVal] = tempObj;
    }
    //---------------------------------------
    function getRank(keyVal){
        var wins = 1;
        var losses = 1;
        if('win' in unsortedObject[keyVal]){
            wins += unsortedObject[keyVal].win;
        }
        if('loss' in unsortedObject[keyVal]){
            losses += unsortedObject[keyVal].loss;
        }

        return (wins/losses).toFixed(2);
    }
}

var input = [
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
];

var inputTwo = [
    'red|name|kiko',
    'red|win|dsad',
    'blue|age|12',
    'green|age|13',
    'green|win|gosho'
]

var inputThree = [
    'red|name|kiko',
    'red|win|Vladko',
    'blue|age|12',
    'green|age|13',
    'green|win|gosho',
    'red|age|12',
    'green|name|Pesho',
    'green|win|ico',
    'green|win|Gosho',
    'green|win|qfkata',
    'green|win|stamat',
    'green|win|petko',
    'green|win|mariya'
]
solve(inputThree);