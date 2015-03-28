function solve(arr){
    var hasFans = false;
    var bestFan = '';
    var bestHater = '';
    arr.forEach(function(value){
        var buffer = value.split('.');
        buffer.reverse();
        buffer = buffer.join('/');
        buffer = new Date(buffer);
        testFans(buffer);
    });
    if(!hasFans){
        console.log('No result')
    }else{
        if(bestFan !== ''){
            console.log('The biggest fan of ewoks was born on ' + bestFan.toDateString());
        }

        if(bestHater !== ''){
            console.log('The biggest hater of ewoks was born on ' + bestHater.toDateString());
        }
    }
    //------------------------
    function testFans(dateValue){
        var movieDate = new Date('1973/05/25');
        var lowestDate = new Date('1900/01/01');
        var highestDate = new Date('2015/01/01');
        if(dateValue < highestDate && dateValue > lowestDate){
            if(dateValue < movieDate && (bestHater > dateValue || bestHater === '')){
                bestHater = dateValue;
                hasFans = true;
            }
            if(dateValue >= movieDate && (dateValue > bestFan || bestFan === ''))
            {
                bestFan = dateValue;
                hasFans = true;
            }
        }
    };
}


//var test = [
//    '22.03.1700',
//    '01.07.2020'
//
//];

var test = ['25.11.2002',
    '19.06.2001',
    '18.13.1966',
    '29.03.1955'
];


//var test = ['22.03.2000'];
solve(test);