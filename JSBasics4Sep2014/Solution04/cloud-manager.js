function solve(arr){
    var filesArray = [];
    var unsortedFilesObj = {};
    var sortedObject = {};
    for(var idx = 0; idx<arr.length; idx++){
        filesArray.push(arr[idx].replace(/\s{2,}/g, ' ').split(' '));
        pushInsideObj(idx);
    };
    sortObject();
    console.log(JSON.stringify(sortedObject));
    //----------------------------
    function pushInsideObj(idxValue){
        if(filesArray[idxValue][1] in unsortedFilesObj){
            var key = unsortedFilesObj[filesArray[idxValue][1]];
            key.files.push(filesArray[idxValue][0]);
            var memory = Number(filesArray[idxValue][2].replace(/MB/g, ''));
            key.memory.push(memory);
        }else{
            var insideValues = {'files':[], 'memory':[]};
            insideValues.files.push(filesArray[idxValue][0]);
            var memory = Number(filesArray[idxValue][2].replace(/MB/g, ''));
            insideValues.memory.push(memory);
            unsortedFilesObj[filesArray[idxValue][1]] = insideValues;
        }
    };
    function sortObject(){
        var extArray = Object.keys(unsortedFilesObj);
        extArray.sort(function(a,b){
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        });
        for(var index = 0; index < extArray.length; index++){
            var objectUnderKey = {'files':[],'memory':''};
            var filesSorted = unsortedFilesObj[extArray[index]].files.sort(
                function(a,b){
                    if(a>b) return 1;
                    if(a<b) return -1;
                    return 0;
                }
            );
            objectUnderKey.files = filesSorted;
            //memory
            var memArray = unsortedFilesObj[extArray[index]].memory;
            var sum = 0;
            memArray.forEach(function(x){
                sum+=x;
            });
            objectUnderKey.memory = sum.toFixed(2);
            sortedObject[extArray[index]] = objectUnderKey;
        }
    }
}

var input = [
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
];

var inputTwo = [
    'eclipse .tar.gz 198.00MB',
    'uTorrent .gyp 33.02MB',
    'nodeJS .gyp 14MB',
    'nakov-naked .jpeg 3MB',
    'gnuGPL .pdf 5.6MB',
    'skype .tar.gz 66MB',
    'selfie .jpeg 7.24MB',
    'myFiles .tar.gz 783MB'
];

solve(inputTwo);