function solve(array){
    var unsortedObject = {};
    var sortedObject = {};
    splitArray();
    populateObj();
    setSortedObj();
    console.log(JSON.stringify(sortedObject));

    //=============================================
    function splitArray(){
        for(var x = 0; x<array.length; x++){
            array[x] = array[x].replace(/\s*\|\s*/g, '|').trim().split('|');
        }
    };
    function populateObj(){
        for(var line = 0; line<array.length; line++)
        {
            var town = array[line][1];
            var band = array[line][0];
            var place = array[line][3];
            //no town match found
            if(!(town in unsortedObject)){
                unsortedObject[town] = {};
                unsortedObject[town][place] = [];
                unsortedObject[town][place].push(band);
            }else{
                //no place found in that town
                if(!(place in unsortedObject[town])){
                    unsortedObject[town][place] = [];
                    unsortedObject[town][place].push(band);
                    sortArray(unsortedObject[town][place]);
                }else{
                    if(unsortedObject[town][place].indexOf(band)<0){
                        unsortedObject[town][place].push(band);
                        sortArray(unsortedObject[town][place]);
                    }
                }
            }
        }
    };
    function setSortedObj(){
        var townKeys = Object.keys(unsortedObject);
        sortArray(townKeys);
        for(var cnt = 0; cnt<townKeys.length; cnt++){
            sortedObject[townKeys[cnt]] = {};
            var placeKeys = Object.keys(unsortedObject[townKeys[cnt]]);
            sortArray(placeKeys);
            placeKeys.forEach(function(x){

                sortedObject[townKeys[cnt]][x] = unsortedObject[townKeys[cnt]][x];
            });
        }
    };
    function sortArray(arr){
        arr.sort(function(a,b){
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        return arr;
    };
}

var testInp = [
    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
];

solve(testInp);
