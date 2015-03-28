function solve(queryStrings) {
    queryStrings.forEach(function(line){
        var extracted = {};
        line = line .replace(/\+/g, ' ')
                    .replace(/%20/g, ' ');
        var splittedLine = line.split(/[&\?]/g);
        splittedLine.forEach(function(index){
            if(index.indexOf('=') >= 0){
                var pair = index.split('=');
                pair[0] = pair[0].trim().replace(/\s{2,}/g, ' ');
                pair[1] = pair[1].trim().replace(/\s{2,}/g, ' ');
                // check object
                if(pair[0] in extracted){
                    extracted[pair[0]].push(pair[1]);
                }else{
                    extracted[pair[0]] = [pair[1]];
                }
            }
        })
        displayFormatter(extracted);
    })

    //get the desired console output
    function displayFormatter(obj){
        var result = '';
        var keys = Object.keys(obj);
        for(var cnt = 0; cnt < keys.length; cnt++){
            result += keys[cnt] + '=[';
            obj[keys[cnt]].forEach(function(value){
                result += value + ', ';
            })
            result = result.substring(0, result.length-2);
            result += ']';
        }
        console.log(result);
    }
}

var input = ['fruit=apple&vegetable=tomato&fruit=banana&vegetable=potato',
            'sweet=chocolate&sweet=sugar'];
var inTwo = ['http://lotr.wikia.com/wiki/Elves?find=elf&elves=amarie%20%20%20%20nimrodel&elves=gil-galad+galadriel&mortal=harry%20potter&elven=legolas&mortal=he-who-must-not-be-named+&mortal=boromir&immortal=spirit&mortal=bilbo+beggins&evil=sauron&answer%20of%20everything++++=42',
            'https://www.google.bg/search?q=whitespace&oq=whitespace&aqs=chrome.0.0l6.1165j0j7&sourceid=chrome&es_sm=93&ie=UTF-8',
            'numbers=20&symbols=#%*^(^('];

solve(inTwo);