function solve(arr){

    function getCons(inLine){
        //get the coeficient
        inLine = inLine.split(' ');
        var mainFuelC;
        switch (inLine[1]){
            case 'petrol':
                mainFuelC = 10;
                break;
            case 'gas':
                mainFuelC = 1.2 * 10;
                break;
            case 'diesel':
                mainFuelC = 0.8 * 10;
                break;
        }
        //get the extra consumption
        mainFuelC += Number(inLine[3]) * 0.01;
        //get the road
        var finalUsage = 0;
        if(inLine[2] == '1'){
            finalUsage = (110*(mainFuelC/100)) + (10*((0.3*mainFuelC)/100));
            finalUsage = Math.round(finalUsage);
        }else{
            finalUsage = (95*(mainFuelC/100)) + (30*((0.3*mainFuelC)/100));
            finalUsage = Math.round(finalUsage);
        }
        inLine[3] = finalUsage;
        console.log(inLine.join(' '));
    };


    for(var index in arr){
        getCons(arr[index]);
    };
}

var array = ['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'];
solve(array);