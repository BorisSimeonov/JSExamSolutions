function solve(scores){
    var scoreDataBuilder = {'goalsScored':0,'goalsConceded':0,'matchesPlayedWith':[]};
    var unsortedResult = {};
    var sortedResult = {};
    clearSymbols();
    addDataController();
    sortResult();

    console.log(JSON.stringify(sortedResult));
    //----------------------------------------
    function clearSymbols(){
        for(var row = 0; row<scores.length; row++){
            scores[row] = scores[row].replace(/[^\w\d\s]/g, '/');
            scores[row] = scores[row].trim().split(/\s?\/\s?/);
        }
    };
    function addDataController(){
        var homeTeam = '';
        var awayTeam = '';
        var homeScore;
        var awayScore;
        for(var line = 0; line<scores.length; line++){
            homeTeam = scores[line][0];
            awayTeam = scores[line][1];
            homeScore = Number(scores[line][2]);
            awayScore = Number(scores[line][3]);
            //---------------add if new - for home
            if(!(homeTeam in unsortedResult)){
                addFirstTime(homeTeam, awayTeam, homeScore, awayScore);
            }else{
                unsortedResult[homeTeam].goalsScored += homeScore;
                unsortedResult[homeTeam].goalsConceded += awayScore;
                if(!(unsortedResult[homeTeam].matchesPlayedWith.indexOf(awayTeam) > -1)){
                    unsortedResult[homeTeam].matchesPlayedWith.push(awayTeam);
                    unsortedResult[homeTeam].matchesPlayedWith.sort(function(a,b){
                        if (a>b) return 1;
                        if (a<b) return -1;
                        return 0;
                    })
                }
            };
            //---------------add if new - for away
            if(!(awayTeam in unsortedResult)){
                addFirstTime(awayTeam, homeTeam, awayScore, homeScore);
            }else{
                unsortedResult[awayTeam].goalsScored += awayScore;
                unsortedResult[awayTeam].goalsConceded += homeScore;
                if(!(unsortedResult[awayTeam].matchesPlayedWith.indexOf(homeTeam) > -1)){
                    unsortedResult[awayTeam].matchesPlayedWith.push(homeTeam);
                    unsortedResult[awayTeam].matchesPlayedWith.sort(function(a,b){
                        if (a>b) return 1;
                        if (a<b) return -1;
                        return 0;
                    })
                }
            };;
        }
    };
    function addFirstTime(team, awayTeam, getScore, giveScore){
        unsortedResult[team] = {'goalsScored':0,'goalsConceded':0,'matchesPlayedWith':[]};
        unsortedResult[team].goalsScored += getScore;
        unsortedResult[team].goalsConceded += giveScore;
        var arr = [awayTeam];
        unsortedResult[team].matchesPlayedWith = arr;
    };
    function sortResult(){
        var keyArray = Object.keys(unsortedResult);
        keyArray.sort(function(a,b){
            if (a>b) return 1;
            if (a<b) return -1;
            return 0;
        });
        for(var arrIndex = 0; arrIndex<keyArray.length; arrIndex++){
          sortedResult[keyArray[arrIndex]] = unsortedResult[keyArray[arrIndex]];
        };
    };
}

var testInput = [
    'Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'
];

solve(testInput);