function solve(studentsArray){
    var unsortedObj = {};
    var sortedObj = {};
    transformData();
    //removeDuplicates();
    driver();
    sortObject();
    console.log(JSON.stringify(sortedObj));
    //-----------------------------------
    function transformData(){
        for(var dataIdx = 0; dataIdx<studentsArray.length; dataIdx++){
            studentsArray[dataIdx] = studentsArray[dataIdx].replace(/\s+/g, ' ').trim();
            studentsArray[dataIdx] = studentsArray[dataIdx].split(/\s*\|\s*/);
        };
    };
    function removeDuplicates(){
        for(var row = 0; row<studentsArray.length; row++){
            var leadingRow = studentsArray[row];
            for(var rowTwo = row+1; rowTwo<studentsArray.length; rowTwo++){
                var checkingRow = studentsArray[rowTwo];
                if(
                    leadingRow[0] === checkingRow[0] &&
                    leadingRow[1] === checkingRow[1] &&
                    leadingRow[2] === checkingRow[2] &&
                    leadingRow[3] === checkingRow[3] &&
                    leadingRow[4] === checkingRow[4]
                ){
                    studentsArray.splice(rowTwo, 1);
                    rowTwo--;
                }
            }
        }
    };
    function driver(){
        for(var cnt = 0; cnt < studentsArray.length; cnt++){
            var name = studentsArray[cnt][0];
            var progLang = studentsArray[cnt][1];
            var grade = studentsArray[cnt][2];
            var visits = studentsArray[cnt][3];
            //---------------------------------
            if(!(progLang in unsortedObj)){
                unsortedObj[progLang] = {};
                var bufferObj = {'names':[name], 'grades':[grade], 'visits':[visits]};
                unsortedObj[progLang] = bufferObj;
            }else{
                if(unsortedObj[progLang].names.indexOf(name) >= 0){
                    unsortedObj[progLang].grades.push(grade);
                    unsortedObj[progLang].visits.push(visits);
                }else{
                    unsortedObj[progLang].grades.push(grade);
                    unsortedObj[progLang].visits.push(visits);
                    unsortedObj[progLang].names.push(name);
                }
            }
        }
    };
    function sortObject(){
        var sortedLangs = Object.keys(unsortedObj);
        sortedLangs = sortAlphabet(sortedLangs);
        sortedLangs.forEach(function(lang){
            sortedObj[lang] = {'avgGrade':0,'avgVisits':0,'students':[]};
            var namesBuffer = sortAlphabet(unsortedObj[lang].names);
            sortedObj[lang].students = namesBuffer;
            var avgGrade = function(){
                var avg = 0;
                unsortedObj[lang].grades.forEach(function(val){
                    avg += Number(val);
                })
                avg /= unsortedObj[lang].grades.length;
                return Number(avg.toFixed(2));
            }();
            sortedObj[lang].avgGrade = avgGrade;
            var avgVisits = function(){
                var avgVisits = 0;
                unsortedObj[lang].visits.forEach(function(val){
                    avgVisits += Number(val);
                });
                if(avgVisits > 0){
                    avgVisits = avgVisits / unsortedObj[lang].visits.length;
                }
                return avgVisits
            }();
            sortedObj[lang].avgVisits = Number(avgVisits.toFixed(2));
        });
    }
    function sortAlphabet(stringArray){
        stringArray.sort(function(a,b){
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        });
        return stringArray;
    }
}

var textInp = [
    'Milen Georgiev|PHP|2.02|2',
    'Kiril Petrov |PHP| 5.10 | 6',
    'Kiril Petrov |PHP| 5.10 | 6'
];

var textInpTwo = [
    'Peter | PHP  | 5.00 | 0',
    'Peter | Java | 5.64 | 0',
    'Peter | PHP  | 4.00 | 0',
    'Peter | C#   | 5.83 | 0',
    'Peter | C#   | 4.14 | 0',
    'Peter | PHP  | 4.04 | 0',
    'Peter | SQL  | 5.12 | 0',
    'Peter | C#   | 3.26 | 0',
    'Peter | C#   | 5.50 | 0',
    'Peter | Java | 6.00 | 0'
];
solve(textInp);