function solve(arr){
    var result = {};
    for(var line in arr){
        arr[line] = arr[line].replace(/\.*\*\.*/g, '&').split('&');
    }

    populateObject();

    //--------------------------------------
    function createObj(w, fr, ty, trans, prodName){
        var boolean = fr == 'false' ? false : true;
        if(prodName == undefined){
            var prodConstr =  {kg: Number(w), 'fragile': boolean, type: ty, transferredWith: trans};
        }else{
            var prodConstr = {};
            prodConstr[prodName] = {kg: Number(w), 'fragile': boolean, type: ty, transferredWith: trans};
        }
        return prodConstr;
    }

    function populateObject(){
        var productName = {};
        for(var idx = 0; idx < arr.length - 1; idx++){
            var type = 'other';
            if(arr[idx][2] == 'true'){
                type = 'food';
            }else if(arr[idx][3] == 'true'){
                type = 'drink';
            }
            //-----------------------------
            if(!(arr[idx][0] in result)){
                result[arr[idx][0]] = createObj(arr[idx][5], arr[idx][4], type, arr[idx][6], arr[idx][1]);
            }else{
                result[arr[idx][0]][arr[idx][1]] = createObj(arr[idx][5], arr[idx][4], type, arr[idx][6]);
            }
        }
    }
    var sortValue = arr[arr.length-1][0];
    if(sortValue == 'strict'){
        console.log(JSON.stringify(result));
    }
    else if(sortValue == 'weight'){
        var newSortedObject = {};
        Object.keys(result).forEach(function(key) {
            newSortedObject[key]={};
            var a = Object.keys(result[key]).sort(function (a,b) {
                return result[key][a].kg > result[key][b].kg;
            });
            a.forEach(function (value) {
                newSortedObject[key][value] = result[key][value];
            })
        });
        console.log(JSON.stringify(newSortedObject))
    }
    else if(sortValue == 'luggage name'){
        var newSObjectName = {};
        Object.keys(result).forEach(function(key) {
            newSObjectName[key]={};
            var sortedInnerKeys = Object.keys(result[key]).sort(function(a,b){return a > b;});

            sortedInnerKeys.forEach(function (innerkey) {
                newSObjectName[key][innerkey] = result[key][innerkey];
            })
        });
        console.log(JSON.stringify(newSObjectName));
    }
}

solve([
    'Yana Slavcheva*......clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*....................false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight'
]);
