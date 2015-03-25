function solve(arr) {
    var result = arr[0].match(/<p>(.*?)<\/p>/g).map(function(val){
        return val.replace(/<\/?p>/,'').replace(/<\/p>/,'');
    });
    result = extractText();
    result = replaceChars();
    console.log(result);

    //--------------------------------------------------------------
    function extractText(){
       for(var index = 0; index < result.length; index++){
           result[index] = result[index].replace(/[^a-z0-9]/g,' ').replace(/ +/g, ' ');
       }
        return result.join('');
    }
    function replaceChars(){
        var value;
        var newString = '';
        for(var index = 0; index < result.length; index++){
            value = result.charCodeAt(index);
            if(value > 96 && value < 110){
                value += 13;
                newString += String.fromCharCode(value);
            }
            else if(value > 109 && value < 123){
                value -= 13;
                newString += String.fromCharCode(value);
            }
            else
            {
                newString += result.charAt(index);
            }
        }
        return newString;
    }
}



solve(
    ['<html><head><title></title></head><body><h1>Intro</h1><ul><li>'+
    'Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel '+
    'fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf'+
    ' ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p>'+
    '<span>This manual is false, do not trust it! The illuminati wrote it down to trick'+
    ' you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf'+
    ' qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre'+
    ' fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>']
);