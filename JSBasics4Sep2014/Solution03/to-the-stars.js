function solve(stars){
    for(var idx = 0; idx<stars.length; idx++){
        stars[idx] = stars[idx].replace(/\s{2,}/, ' ').split(' ');
    }
    //get star system locations
    var starObject = [];
    setStarLocations();
    //get moves count
    var moves = Number(stars[stars.length-1]);
    //get ship position
    var currentPosition = [];
    currentPosition[0] = Number(stars[stars.length-2][0]);
    currentPosition[1] = Number(stars[stars.length-2][1]);
    //main driver
    checkLocation();
    for(var moveCnt = 0; moveCnt < moves; moveCnt++){
        currentPosition[1]++;
        checkLocation();
    }
    //-------------------------------------------------------------
    function checkLocation(){
        var inSystem = 'space';
        for(var check = 0; check<3; check++){
            if(
                currentPosition[0] <= starObject[check][1]+1 &&
                currentPosition[0] >= starObject[check][1]-1 &&
                currentPosition[1] <= starObject[check][2]+1 &&
                currentPosition[1] >= starObject[check][2]-1
            ){
                inSystem = starObject[check][0];
            }
        }
        console.log(inSystem);
    }
    function setStarLocations(){
        for(var idx = 0; idx<3; idx++){
            var starName = stars[idx][0].toLowerCase();
            var starArray = [starName, Number(stars[idx][1]), Number(stars[idx][2])];
            starObject.push(starArray);
        }
    }
}
var input = [
    'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
];
inputTwo = [
    'Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'
];
//solve(input);
solve(inputTwo);