function solve(inArray){
    var coins = 0;
    var buffer;
    for(var line = 0; line<inArray.length; line++){
        buffer = inArray[line].split(/\s+/g);
        if(buffer[0].toLowerCase() === 'coin'){
            if((!isNaN(buffer[1]))&&(Number(buffer[1])%1 === 0)){
                if(Number(buffer[1]) >= 0){
                    coins += Number(buffer[1]);
                }
            }
        }
    }

    var gold = (coins - (coins%100))/100;
    coins -= gold*100;
    var silver = (coins - (coins%10))/10;
    coins -= silver*10;
    var bronze = coins;
    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);
}


solve(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);
