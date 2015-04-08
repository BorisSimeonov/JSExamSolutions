function solve(input){
    var hasCogWords = false;
    var results = [];
    var inLine = input[0].replace(/[\W\d]/g, ' ');
    inLine = inLine.replace(/\s{2,}/g, ' ').trim();
    var wordArray = inLine.split(' ');
    for(var fst = 0; fst<wordArray.length; fst++){
        var firstWord = wordArray[fst];
        if(firstWord.length>1){
            findWords(firstWord, fst);
        }
    }
    if(hasCogWords){
        results.forEach(function(x){
            console.log(x);
        })
    }else{
        console.log('No');
    }

    function findWords(word, index){
        var hasResult = false;
        for(var first = 0; first<wordArray.length-1; first++){
            if(first === index){
                continue;
            }
            var firstWord = wordArray[first];
            for(var second = first+1; second<wordArray.length; second++){
                if(second === index || second === first){
                    continue;
                }else{
                    var secondWord = wordArray[second];
                    if(word === firstWord+secondWord){
                        var resultWord = firstWord+'|'+secondWord+'='+word;
                        hasCogWords = true;
                        if(results.indexOf(resultWord)<0){
                            results.push(resultWord);
                        }
                        return;
                    }else if(word === secondWord+firstWord){
                        var resultWord = secondWord+'|'+firstWord+'='+word;
                        hasCogWords = true;
                        if(results.indexOf(resultWord)<0){
                            results.push(resultWord);
                        }
                        return;
                    }
                }
            }
        }
    }
}

//solve(['java..?|basics/*-+=javabasics']);
solve(['Suspen98disse ullamc98orper Er323at at tristique posu12ere. Fusce non erat nunc.Suspendisse ullamcorper erat at tristique posuere. Fusce non erat nunc.']);
//solve(['Lo rem ips um dol or si t am et, consectetur adipiscing elit. Fusce et ultricies ipsum. Phasellus vitae justo rutrum, tempor mauris in, posuere lectus. Nunc accumsan, neque et ultricies faucibus, metus est commodo turpis, eget mattis lorem leo quis ante. Sed tincidunt ornare tincidunt. Mauris aliquam posuere sapien et blandit. Aenean sit amet nunc vel felis feugiat rutrum. Quisque aliquet arcu sed velit fringilla, vitae pharetra diam fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ultricies ipsum. Phasellus vitae justo rutrum, tempor mauris in, posuere lectus. Nunc accumsan, neque et ultricies faucibus, metus est commodo turpis, eget mattis lorem leo quis ante. Sed tincidunt ornare tincidunt. Mauris aliquam posuere sapien et blandit. Aenean sit amet nunc vel felis feugiat rutrum. Quisque aliquet arcu sed velit fringilla, vitae pharetra diam fringilla.'])