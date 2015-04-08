function solve(arr){
    var array = arr;
    for(var x = 0; x < array.length; x++){
        array[x] = array[x].replace(/\s{2,}/g,' ');
        array[x] = array[x].replace(/vs./g,':').split(':');
        for(var idx = 0; idx<array[x].length; idx++){
            array[x][idx] =array[x][idx].trim();
        }
    }
    // populate object
    var unsortedObj = {};
    for(var line = 0; line<array.length; line++){
        //no key found
        var first = array[line][0];
        var second = array[line][1];
        var gamesFirst = 0;
        var gamesSnd = 0;
        var setsFst = 0;
        var setsSec = 0;
        var matchFst = 0;
        var matchSnd = 0;

        getGamesFirstSec(array[line][2]);

        if(!(first in unsortedObj)){
            unsortedObj[first] = {'matchesWon':matchFst, 'matchesLost':matchSnd,'setsWon':setsFst,'setsLost':setsSec,'gamesWon':gamesFirst,'gamesLost':gamesSnd}
        }else{
            unsortedObj[first].matchesWon += matchFst;
            unsortedObj[first].matchesLost += matchSnd;
            unsortedObj[first].setsWon += setsFst;
            unsortedObj[first].setsLost += setsSec;
            unsortedObj[first].gamesWon += gamesFirst;
            unsortedObj[first].gamesLost += gamesSnd;
        }
        if(!(second in unsortedObj)){
            unsortedObj[second] = {'matchesWon':matchSnd, 'matchesLost':matchFst,'setsWon':setsSec,'setsLost':setsFst,'gamesWon':gamesSnd,'gamesLost':gamesFirst};
        }else{
            unsortedObj[second].matchesWon += matchSnd;
            unsortedObj[second].matchesLost += matchFst;
            unsortedObj[second].setsWon += setsSec;
            unsortedObj[second].setsLost += setsFst;
            unsortedObj[second].gamesWon += gamesSnd;
            unsortedObj[second].gamesLost += gamesFirst;
        }
    };


    sortObj();
    //console.log(unsortedObj);
    function getGamesFirstSec(results){
        results = results.split(' ');
        var fstGames = 0;
        var sndGames = 0;
        var fstSet = 0;
        var sndSet = 0;
        var matchWonFst = 0;
        var matchWOnSnd = 0;

        for(var x = 0; x < results.length; x++){
            results[x] = results[x].replace(/-/g,' ').split(' ');
            fstGames += Number(results[x][0]);
            sndGames += Number(results[x][1]);
            if(Number(results[x][0]) > Number(results[x][1])){
                fstSet++;
            }else if(Number(results[x][0])<Number(results[x][1])){
                sndSet++;
            }
        }
        if(fstSet > sndSet){
            matchWonFst++;
        }else if(fstSet<sndSet){
            matchWOnSnd++;
        }


        gamesFirst = fstGames;
        gamesSnd = sndGames;
        setsFst = fstSet;
        setsSec = sndSet;
        matchFst = matchWonFst;
        matchSnd = matchWOnSnd;
    };
    function sortObj(){
        var keyArray = Object.keys(unsortedObj);
        keyArray.sort(function(a,b){
            if(unsortedObj[a].matchesWon != unsortedObj[b].matchesWon){
                if(unsortedObj[a].matchesWon > unsortedObj[b].matchesWon) return -1;
                if(unsortedObj[a].matchesWon < unsortedObj[b].matchesWon) return 1;
                return 0;
            }else if(unsortedObj[a].setsWon != unsortedObj[b].setsWon){
                if(unsortedObj[a].setsWon > unsortedObj[b].setsWon) return -1;
                if(unsortedObj[a].setsWon < unsortedObj[b].setsWon) return 1;
                return 0;
            }else if(unsortedObj[a].gamesWon != unsortedObj[b].gamesWon){
                if(unsortedObj[a].gamesWon > unsortedObj[b].gamesWon) return -1;
                if(unsortedObj[a].gamesWon < unsortedObj[b].gamesWon) return 1;
                return 0;
            }else{
                if(a > b) return 1;
                if(a<b) return -1;
                return 0;
            }
        });
        //populate new object
        var sortedObject = {};
        var result = '[';
        for(var keys = 0; keys<keyArray.length; keys++){
            sortedObject = {"name":'',"matchesWon":0,"matchesLost":0,"setsWon":0,"setsLost":0,"gamesWon":0,"gamesLost":0};
            sortedObject.name = keyArray[keys];
            sortedObject.matchesWon = unsortedObj[keyArray[keys]].matchesWon;
            sortedObject.matchesLost = unsortedObj[keyArray[keys]].matchesLost;
            sortedObject.setsWon = unsortedObj[keyArray[keys]].setsWon;
            sortedObject.setsLost = unsortedObj[keyArray[keys]].setsLost;
            sortedObject.gamesWon = unsortedObj[keyArray[keys]].gamesWon;
            sortedObject.gamesLost = unsortedObj[keyArray[keys]].gamesLost;
            sortedObject = JSON.stringify(sortedObject);
            result+=sortedObject + ',';
        }
        result = result.substring(0,result.length-1) +']';

        console.log(result);
    };
}


solve(['Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David     Ferrer : 6-4 7-6',
    'Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        Agassi:2-1'
])
