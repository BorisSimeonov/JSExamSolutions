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
