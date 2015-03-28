function solve(arr){
    var sortCrit = arr[0].split('^');
    var newObject = {students:[], trainers:[]};
    var sortedObject = {students:[], trainers:[]};
    for(var objCnt = 1; objCnt < arr.length; objCnt++){
        arr[objCnt] = JSON.parse(arr[objCnt]);
        if(arr[objCnt].role === 'student'){
            var newStudent = {};
            newStudent['id']=arr[objCnt].id;
            newStudent['level']=arr[objCnt].level;
            newStudent['firstname']=arr[objCnt].firstname;
            newStudent['lastname']=arr[objCnt].lastname;
            newStudent['averageGrade']=getAverage(arr[objCnt].grades);
            newStudent['certificate']=arr[objCnt].certificate;
            newObject.students.push(newStudent)
        }else{
            var newTrainer = {};
            newTrainer['id']=arr[objCnt].id;
            newTrainer['firstname']=arr[objCnt].firstname;
            newTrainer['lastname']=arr[objCnt].lastname;
            newTrainer['courses']= arr[objCnt].courses;
            newTrainer['lecturesPerDay']=arr[objCnt].lecturesPerDay;
            newObject.trainers.push(newTrainer);
        }
    }

    sortedObject.students = sortStudents();
    sortedObject.trainers = sortByCourses();

    console.log(JSON.stringify(sortedObject));
    //---------------------------
    function getAverage(arrayGrades){
        var sum = 0;
        arrayGrades.forEach(function(num){
            sum += Number(num);
        })
        return (sum/arrayGrades.length).toFixed(2);
    }
    //-------------------
    function sortStudents(){
        sortedNameArray = [];
        newObject.students.forEach(function(studObj){
           sortedNameArray.push(studObj);
        });
        if(sortCrit[0] === 'name'){
            sortedNameArray.sort(function(a,b){
                if((a.firstname+ a.lastname) < (b.firstname+ b.lastname)) return -1;
                if((a.firstname+ a.lastname) > (b.firstname+ b.lastname)) return 1;
                return 0;
            });
        }else{
            sortedNameArray.sort(function(a,b){
                if(a.level !== b.level){
                    return a.level - b.level;
                }else{
                    return a.id - b.id;
                };
            });
        }
        for(var cnt = 0; cnt < sortedNameArray.length; cnt++){
            delete sortedNameArray[cnt].level;
        }
        return sortedNameArray;
    }
    function sortByCourses(){
        sortedArray = [];
        newObject.trainers.forEach(function(obj){
            sortedArray.push(obj);
        });
        sortedArray = sortedArray.sort(function(a, b){
            if(a.courses.length !== b.courses.length){
            return a.courses.length - b.courses.length;
            }else{
                return a.lecturesPerDay - b.lecturesPerDay;
            }
        });
        return sortedArray;
    }
}

//var input = ['name^courses',
//        '{"id":0,"firstname":"Svetlin","lastname":"Daskalov","town":"Vidin","role":"trainer","courses":["Database","ASP.NET","JS Apps","PHP"],"lecturesPerDay":4}',
//        '{"id":1,"firstname":"Gergana","lastname":"Georgiev","town":"Vidin","role":"trainer","courses":["JS","Database","iOS","Java"],"lecturesPerDay":9}',
//        '{"id":2,"firstname":"Alex","lastname":"Nakov","town":"Vidin","role":"student","grades":["5.56"],"level":2,"certificate":false}',
//        '{"id":3,"firstname":"Petq","lastname":"Daskalov","town":"Stara Zagora","role":"trainer","courses":["JS Apps","Java","ASP.NET","SDA","C#","iOS"],"lecturesPerDay":9}',
//        '{"id":4,"firstname":"Mariq","lastname":"Petrova","town":"Ruse","role":"trainer","courses":["JS Apps","HTML/CSS","SDA","Database","iOS","Java"],"lecturesPerDay":5}',
//        '{"id":5,"firstname":"Deyan","lastname":"Georgieva","town":"Svishtov","role":"trainer","courses":["Database","JS Apps","ASP.NET"],"lecturesPerDay":2}',
//        '{"id":6,"firstname":"Bobi","lastname":"Ivanov","town":"Sliven","role":"student","grades":["3.48","4.72","4.14","4.66"],"level":5,"certificate":true}',
//        '{"id":7,"firstname":"Gosho","lastname":"Nakov","town":"Sevlievo","role":"student","grades":["5.01","3.79","5.29","5.87","4.34"],"level":3,"certificate":true}',
//        '{"id":8,"firstname":"Ivan","lastname":"Dimitrova","town":"Varna","role":"trainer","courses":["SDA","Unity Basics","C#","iOS"],"lecturesPerDay":1}',
//        '{"id":9,"firstname":"Alex","lastname":"Dimitrova","town":"Vidin","role":"trainer","courses":["iOS","OOP","JS","HTML/CSS","ASP.NET","C#"],"lecturesPerDay":8}',
//        '{"id":10,"firstname":"Plamen","lastname":"Daskalov","town":"Petrich","role":"student","grades":["5.72"],"level":1,"certificate":false}',
//        '{"id":11,"firstname":"Svetlin","lastname":"Nakova","town":"Pernik","role":"trainer","courses":["Unity Basics","JS Apps","C#","Database","HTML/CSS","SDA","ASP.NET"],"lecturesPerDay":4}',
//        '{"id":12,"firstname":"Alex","lastname":"Ivanova","town":"Pernik","role":"trainer","courses":["JS Apps","PHP"],"lecturesPerDay":5}',
//        '{"id":13,"firstname":"Petq","lastname":"Georgiev","town":"Burgas","role":"trainer","courses":["ASP.NET","Database","Unity Basics","Java","JS Apps","HTML/CSS"],"lecturesPerDay":10}',
//        '{"id":14,"firstname":"Hristo","lastname":"Nakova","town":"Veliko Tyrnowo","role":"student","grades":["3.73","5.78","5.07","5.96"],"level":2,"certificate":false}',
//        '{"id":15,"firstname":"Ivailo","lastname":"Nakov","town":"Stara Zagora","role":"student","grades":["2.08","5.30"],"level":5,"certificate":false}',
//        '{"id":16,"firstname":"Gergana","lastname":"Ivanov","town":"Ruse","role":"trainer","courses":["JS Apps","JS OOP","Database","Java","iOS","SDA"],"lecturesPerDay":5}',
//        '{"id":17,"firstname":"Deyan","lastname":"Georgieva","town":"Ruse","role":"trainer","courses":["ASP.NET","SDA","OOP","Database","JS Apps","JS OOP","JS"],"lecturesPerDay":8}',
//        '{"id":18,"firstname":"Svetlin","lastname":"Nakova","town":"Vidin","role":"student","grades":["3.06","4.31","4.67","2.97","4.69"],"level":4,"certificate":true}',
//        '{"id":19,"firstname":"Qvor","lastname":"Petrov","town":"Stara Zagora","role":"trainer","courses":["OOP","iOS","ASP.NET"],"lecturesPerDay":3}',
//        '{"id":20,"firstname":"Yuliq","lastname":"Dimitrov","town":"Stara Zagora","role":"trainer","courses":["Database","HTML/CSS","C#","JS"],"lecturesPerDay":3}',
//        '{"id":21,"firstname":"Niki","lastname":"Ivanov","town":"Sevlievo","role":"trainer","courses":["JS","JS OOP","SDA","Unity Basics","Java","C#"],"lecturesPerDay":10}',
//        '{"id":22,"firstname":"Gosho","lastname":"Petrova","town":"Sevlievo","role":"trainer","courses":["Unity Basics","JS Apps"],"lecturesPerDay":4}',
//        '{"id":23,"firstname":"Svetlin","lastname":"Petrova","town":"Sliven","role":"trainer","courses":["ASP.NET","SDA"],"lecturesPerDay":1}',
//        '{"id":24,"firstname":"Svetlin","lastname":"Nakova","town":"Gabrovo","role":"trainer","courses":["iOS","Unity Basics","SDA","OOP","JS","Database","C#"],"lecturesPerDay":8}',
//        '{"id":25,"firstname":"Gosho","lastname":"Dimitrov","town":"Svishtov","role":"student","grades":["4.98","4.41"],"level":5,"certificate":true}',
//        '{"id":26,"firstname":"Qvor","lastname":"Georgiev","town":"Sliven","role":"trainer","courses":["SDA","OOP","HTML/CSS"],"lecturesPerDay":10}',
//        '{"id":27,"firstname":"Mariq","lastname":"Dimitrov","town":"Dimitrovgrad","role":"trainer","courses":["Java","JS Apps"],"lecturesPerDay":3}',
//        '{"id":28,"firstname":"Pesho","lastname":"Dimitrova","town":"Petrich","role":"student","grades":["3.86","4.52"],"level":1,"certificate":false}',
//        '{"id":29,"firstname":"Julieta","lastname":"Dimitrov","town":"Ruse","role":"student","grades":["3.44","2.97","2.17","2.67","2.64"],"level":3,"certificate":true}',
//        '{"id":30,"firstname":"Angel","lastname":"Ivanova","town":"Ruse","role":"trainer","courses":["JS","PHP","JS OOP"],"lecturesPerDay":9}',
//        '{"id":31,"firstname":"Kosio","lastname":"Ivanova","town":"Sofia","role":"student","grades":["4.00","5.07","2.25"],"level":5,"certificate":true}',
//        '{"id":32,"firstname":"Alex","lastname":"Petrov","town":"Sliven","role":"student","grades":["4.82","2.04"],"level":1,"certificate":false}',
//        '{"id":33,"firstname":"Angel","lastname":"Georgieva","town":"Pernik","role":"trainer","courses":["iOS","SDA"],"lecturesPerDay":4}',
//        '{"id":34,"firstname":"Kosio","lastname":"Petrova","town":"Petrich","role":"trainer","courses":["PHP","JS","OOP","Database"],"lecturesPerDay":3}',
//        '{"id":35,"firstname":"Julieta","lastname":"Dimitrov","town":"Varna","role":"trainer","courses":["ASP.NET","C#","Unity Basics","OOP","Database"],"lecturesPerDay":8}',
//        '{"id":36,"firstname":"Svetlin","lastname":"Nakova","town":"Petrich","role":"trainer","courses":["JS OOP","JS Apps","C#","JS","iOS","PHP"],"lecturesPerDay":7}',
//        '{"id":37,"firstname":"Hristiqn","lastname":"Petrov","town":"Sliven","role":"trainer","courses":["JS","iOS","OOP","Database","PHP"],"lecturesPerDay":6}',
//        '{"id":38,"firstname":"Julieta","lastname":"Dimitrova","town":"Stara Zagora","role":"student","grades":["4.90","3.90","4.17","5.59"],"level":1,"certificate":false}',
//        '{"id":39,"firstname":"Kosio","lastname":"Ivanova","town":"Varna","role":"trainer","courses":["Unity Basics","JS Apps","JS","PHP"],"lecturesPerDay":7}',
//        '{"id":40,"firstname":"Hristiqn","lastname":"Ivanova","town":"Gabrovo","role":"trainer","courses":["PHP","SDA"],"lecturesPerDay":9}',
//        '{"id":41,"firstname":"Mitko","lastname":"Georgiev","town":"Sofia","role":"student","grades":["2.36","3.46"],"level":1,"certificate":true}',
//        '{"id":42,"firstname":"Plamen","lastname":"Georgiev","town":"Plovdiv","role":"student","grades":["5.98","4.70","3.48","2.58"],"level":5,"certificate":true}',
//        '{"id":43,"firstname":"Mariq","lastname":"Petrov","town":"Pernik","role":"student","grades":["5.18","5.18","5.17","4.63","5.68"],"level":5,"certificate":true}',
//        '{"id":44,"firstname":"Hristo","lastname":"Dimitrova","town":"Pernik","role":"trainer","courses":["ASP.NET","HTML/CSS","Java","PHP","JS OOP","Unity Basics"],"lecturesPerDay":5}',
//        '{"id":45,"firstname":"Ivailo","lastname":"Petrov","town":"Pernik","role":"trainer","courses":["Java","Database","ASP.NET","SDA"],"lecturesPerDay":9}',
//        '{"id":46,"firstname":"Julieta","lastname":"Nakova","town":"Burgas","role":"student","grades":["5.66","4.76","3.34","3.00","2.67"],"level":1,"certificate":false}',
//        '{"id":47,"firstname":"Plamen","lastname":"Daskalov","town":"Burgas","role":"student","grades":["5.53","4.04","4.98","2.06","5.18"],"level":3,"certificate":true}',
//        '{"id":48,"firstname":"Alex","lastname":"Petrov","town":"Sliven","role":"student","grades":["5.04","3.95"],"level":2,"certificate":true}',
//        '{"id":49,"firstname":"Bobi","lastname":"Ivanova","town":"Svishtov","role":"trainer","courses":["ASP.NET","PHP","iOS","JS Apps"],"lecturesPerDay":10}',
//        '{"id":50,"firstname":"Rosen","lastname":"Nakova","town":"Petrich","role":"trainer","courses":["HTML/CSS","ASP.NET","Java"],"lecturesPerDay":9}',
//        '{"id":51,"firstname":"Kosio","lastname":"Petrova","town":"Gabrovo","role":"trainer","courses":["HTML/CSS","Unity Basics","C#","JS Apps"],"lecturesPerDay":8}',
//        '{"id":52,"firstname":"Gosho","lastname":"Dimitrov","town":"Sliven","role":"student","grades":["2.90","2.21"],"level":3,"certificate":true}',
//        '{"id":53,"firstname":"Bobi","lastname":"Ivanova","town":"Plovdiv","role":"trainer","courses":["PHP","Java","Database","SDA"],"lecturesPerDay":9}',
//        '{"id":54,"firstname":"Deyan","lastname":"Petrova","town":"Svishtov","role":"student","grades":["5.54","2.51","3.82","5.55"],"level":5,"certificate":false}',
//        '{"id":55,"firstname":"Svetlin","lastname":"Nakova","town":"Svishtov","role":"student","grades":["2.17"],"level":4,"certificate":false}',
//        '{"id":56,"firstname":"Vlado","lastname":"Ivanova","town":"Pernik","role":"trainer","courses":["Java","Database","C#","SDA","iOS","JS OOP"],"lecturesPerDay":7}',
//        '{"id":57,"firstname":"Petq","lastname":"Daskalov","town":"Stara Zagora","role":"student","grades":["3.69","4.91"],"level":4,"certificate":true}',
//        '{"id":58,"firstname":"Qvor","lastname":"Nakova","town":"Sofia","role":"trainer","courses":["C#","PHP","Unity Basics","OOP"],"lecturesPerDay":1}',
//        '{"id":59,"firstname":"Yuliq","lastname":"Nakova","town":"Burgas","role":"student","grades":["5.85","3.85"],"level":1,"certificate":false}',
//        '{"id":60,"firstname":"Deyan","lastname":"Ivanova","town":"Stara Zagora","role":"trainer","courses":["SDA","JS OOP","JS Apps","HTML/CSS","Java"],"lecturesPerDay":8}',
//        '{"id":61,"firstname":"Niki","lastname":"Petrova","town":"Vidin","role":"trainer","courses":["ASP.NET","JS Apps","SDA"],"lecturesPerDay":1}',
//        '{"id":62,"firstname":"Hristo","lastname":"Petrov","town":"Veliko Tyrnowo","role":"student","grades":["5.41","5.33","3.61"],"level":4,"certificate":false}',
//        '{"id":63,"firstname":"Yuliq","lastname":"Nakova","town":"Pernik","role":"student","grades":["2.13","6.00","2.89","5.62"],"level":4,"certificate":false}',
//        '{"id":64,"firstname":"Deyan","lastname":"Ivanov","town":"Pernik","role":"trainer","courses":["ASP.NET","PHP","Database"],"lecturesPerDay":4}',
//        '{"id":65,"firstname":"Mitko","lastname":"Nakov","town":"Gabrovo","role":"student","grades":["2.22","2.85","5.91","5.22"],"level":2,"certificate":true}',
//        '{"id":66,"firstname":"Julieta","lastname":"Petrov","town":"Sofia","role":"trainer","courses":["C#","PHP"],"lecturesPerDay":1}',
//        '{"id":67,"firstname":"Ivan","lastname":"Georgiev","town":"Varna","role":"student","grades":["3.60","5.72","2.43","4.11","4.23"],"level":2,"certificate":false}',
//        '{"id":68,"firstname":"Ivailo","lastname":"Dimitrova","town":"Plovdiv","role":"trainer","courses":["C#","HTML/CSS"],"lecturesPerDay":5}',
//        '{"id":69,"firstname":"Pesho","lastname":"Dimitrova","town":"Sliven","role":"trainer","courses":["JS Apps","C#"],"lecturesPerDay":3}',
//        '{"id":70,"firstname":"Petq","lastname":"Nakova","town":"Sliven","role":"student","grades":["3.96","3.26","2.51","3.11","2.80"],"level":5,"certificate":true}',
//        '{"id":71,"firstname":"Gergana","lastname":"Petrov","town":"Veliko Tyrnowo","role":"student","grades":["5.35","5.46","4.17"],"level":5,"certificate":true}',
//        '{"id":72,"firstname":"Mariq","lastname":"Petrova","town":"Gabrovo","role":"trainer","courses":["Unity Basics","HTML/CSS","JS OOP","Database"],"lecturesPerDay":5}',
//        '{"id":73,"firstname":"Yuliq","lastname":"Ivanov","town":"Pernik","role":"trainer","courses":["SDA","JS","iOS","OOP","C#"],"lecturesPerDay":3}',
//        '{"id":74,"firstname":"Vlado","lastname":"Georgieva","town":"Sliven","role":"student","grades":["5.80","3.25","2.68","4.83","5.84"],"level":1,"certificate":false}',
//        '{"id":75,"firstname":"Vlado","lastname":"Dimitrova","town":"Gabrovo","role":"trainer","courses":["Database","Unity Basics","Java","HTML/CSS","C#"],"lecturesPerDay":2}',
//        '{"id":76,"firstname":"Pesho","lastname":"Nakov","town":"Gabrovo","role":"student","grades":["5.83","3.11","2.12","2.75","5.71"],"level":2,"certificate":false}',
//        '{"id":77,"firstname":"Bobi","lastname":"Dimitrov","town":"Sliven","role":"trainer","courses":["JS OOP"],"lecturesPerDay":6}',
//        '{"id":78,"firstname":"Hristo","lastname":"Ivanov","town":"Varna","role":"student","grades":["2.65","5.77","3.27","3.56","2.31"],"level":3,"certificate":false}',
//        '{"id":79,"firstname":"Alex","lastname":"Georgieva","town":"Plovdiv","role":"student","grades":["5.88"],"level":2,"certificate":true}',
//        '{"id":80,"firstname":"Qvor","lastname":"Petrova","town":"Svishtov","role":"student","grades":["3.32","4.43","5.61"],"level":5,"certificate":false}',
//        '{"id":81,"firstname":"Qvor","lastname":"Daskalov","town":"Vidin","role":"trainer","courses":["HTML/CSS","OOP","JS Apps","SDA"],"lecturesPerDay":10}',
//        '{"id":82,"firstname":"Bobi","lastname":"Dimitrova","town":"Burgas","role":"student","grades":["3.00","2.58","3.44","2.96"],"level":3,"certificate":false}',
//        '{"id":83,"firstname":"Plamen","lastname":"Nakova","town":"Sevlievo","role":"student","grades":["2.93"],"level":3,"certificate":false}'];


var input = ['level^courses',
'{"id":0,"firstname":"Alex","lastname":"Ivanov","town":"Dimitrovgrad","role":"trainer","courses":["ASP.NET","JS Apps","JS OOP"],"lecturesPerDay":8}',
'{"id":1,"firstname":"Hristo","lastname":"Nakova","town":"Svishtov","role":"trainer","courses":["Unity Basics","HTML/CSS","Database","JS Apps"],"lecturesPerDay":5}',
'{"id":2,"firstname":"Niki","lastname":"Nakova","town":"Plovdiv","role":"student","grades":["2.20","5.84","5.81","3.18"],"level":1,"certificate":true}',
'{"id":3,"firstname":"Rosen","lastname":"Petrova","town":"Svishtov","role":"student","grades":["5.97","2.06","4.78"],"level":3,"certificate":false}',
'{"id":4,"firstname":"Vlado","lastname":"Ivanova","town":"Petrich","role":"trainer","courses":["Java","JS Apps","JS OOP","Database"],"lecturesPerDay":2}',
'{"id":5,"firstname":"Niki","lastname":"Dimitrov","town":"Sevlievo","role":"student","grades":["4.38","2.16","4.48","3.69"],"level":2,"certificate":true}',
'{"id":6,"firstname":"Petq","lastname":"Dimitrova","town":"Plovdiv","role":"trainer","courses":["OOP","C#","JS OOP","HTML/CSS"],"lecturesPerDay":10}',
'{"id":7,"firstname":"Mariq","lastname":"Ivanova","town":"Ruse","role":"trainer","courses":["C#","Unity Basics","JS","ASP.NET","Database","iOS","JS Apps"],"lecturesPerDay":9}',
'{"id":8,"firstname":"Hristiqn","lastname":"Georgieva","town":"Sevlievo","role":"student","grades":["5.62"],"level":3,"certificate":false}',
'{"id":9,"firstname":"Nasko","lastname":"Georgieva","town":"Gabrovo","role":"trainer","courses":["SDA","Database","C#"],"lecturesPerDay":4}',
'{"id":10,"firstname":"Zornica","lastname":"Dimitrov","town":"Sliven","role":"trainer","courses":["ASP.NET","Database","Unity Basics"],"lecturesPerDay":6}',
'{"id":11,"firstname":"Mariq","lastname":"Nakov","town":"Petrich","role":"student","grades":["3.51","5.36"],"level":1,"certificate":true}',
'{"id":12,"firstname":"Pesho","lastname":"Dimitrov","town":"Ruse","role":"student","grades":["3.37","4.16","3.14","2.44"],"level":2,"certificate":true}',
'{"id":13,"firstname":"Petq","lastname":"Dimitrova","town":"Sliven","role":"student","grades":["2.28","5.99","2.67"],"level":5,"certificate":true}',
'{"id":14,"firstname":"Kosio","lastname":"Georgiev","town":"Petrich","role":"student","grades":["5.13","5.13","4.38"],"level":2,"certificate":false}',
'{"id":15,"firstname":"Mariq","lastname":"Ivanov","town":"Burgas","role":"student","grades":["4.29","5.60","3.39","5.70"],"level":1,"certificate":true}',
'{"id":16,"firstname":"Hristiqn","lastname":"Daskalov","town":"Veliko Tyrnowo","role":"trainer","courses":["Database","ASP.NET","SDA"],"lecturesPerDay":9}',
'{"id":17,"firstname":"Angel","lastname":"Dimitrov","town":"Sevlievo","role":"trainer","courses":["PHP","C#","Database","ASP.NET","Unity Basics"],"lecturesPerDay":2}',
'{"id":18,"firstname":"Qvor","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["HTML/CSS","Database"],"lecturesPerDay":1}',
'{"id":19,"firstname":"Niki","lastname":"Dimitrova","town":"Dimitrovgrad","role":"student","grades":["2.73","5.71","5.00","4.10"],"level":4,"certificate":true}',
'{"id":20,"firstname":"Ivailo","lastname":"Ivanova","town":"Svishtov","role":"student","grades":["2.97","5.68","3.81","3.84"],"level":4,"certificate":true}',
'{"id":21,"firstname":"Hristo","lastname":"Georgieva","town":"Veliko Tyrnowo","role":"trainer","courses":["JS","Database","JS OOP"],"lecturesPerDay":2}',
'{"id":22,"firstname":"Svetlin","lastname":"Ivanova","town":"Dimitrovgrad","role":"trainer","courses":["SDA","JS OOP","Unity Basics","JS Apps"],"lecturesPerDay":7}',
'{"id":23,"firstname":"Petq","lastname":"Daskalov","town":"Svishtov","role":"student","grades":["2.20","4.93","2.46","4.98"],"level":1,"certificate":false}',
'{"id":24,"firstname":"Petq","lastname":"Dimitrov","town":"Dimitrovgrad","role":"student","grades":["3.19","4.86","3.25"],"level":3,"certificate":false}',
'{"id":25,"firstname":"Gergana","lastname":"Georgiev","town":"Sofia","role":"student","grades":["5.86","4.64","3.80","3.10"],"level":2,"certificate":false}',
'{"id":26,"firstname":"Angel","lastname":"Dimitrov","town":"Ruse","role":"student","grades":["3.59","3.14","5.98","2.33"],"level":1,"certificate":true}',
'{"id":27,"firstname":"Nasko","lastname":"Georgiev","town":"Veliko Tyrnowo","role":"trainer","courses":["Unity Basics","PHP","Java","iOS"],"lecturesPerDay":2}',
'{"id":28,"firstname":"Pesho","lastname":"Ivanov","town":"Gabrovo","role":"trainer","courses":["iOS","JS Apps","JS"],"lecturesPerDay":8}',
'{"id":29,"firstname":"Angel","lastname":"Georgiev","town":"Ruse","role":"student","grades":["2.10","3.63","3.94"],"level":3,"certificate":true}',
'{"id":30,"firstname":"Qvor","lastname":"Petrov","town":"Veliko Tyrnowo","role":"student","grades":["4.20","4.42"],"level":5,"certificate":true}',
'{"id":31,"firstname":"Alex","lastname":"Nakova","town":"Petrich","role":"student","grades":["2.21","5.04","4.66"],"level":4,"certificate":false}',
'{"id":32,"firstname":"Mariq","lastname":"Dimitrova","town":"Vidin","role":"student","grades":["3.35","5.69","5.34","5.40"],"level":4,"certificate":false}',
'{"id":33,"firstname":"Petq","lastname":"Petrov","town":"Sliven","role":"trainer","courses":["Java","PHP","JS OOP","Unity Basics"],"lecturesPerDay":5}',
'{"id":34,"firstname":"Ivailo","lastname":"Petrov","town":"Vidin","role":"trainer","courses":["SDA","HTML/CSS"],"lecturesPerDay":1}',
'{"id":35,"firstname":"Nasko","lastname":"Nakov","town":"Ruse","role":"trainer","courses":["SDA","OOP","ASP.NET","JS Apps","JS OOP"],"lecturesPerDay":6}',
'{"id":36,"firstname":"Hristiqn","lastname":"Nakov","town":"Petrich","role":"trainer","courses":["C#","JS","JS OOP","JS Apps"],"lecturesPerDay":2}',
'{"id":37,"firstname":"Ivailo","lastname":"Dimitrov","town":"Stara Zagora","role":"trainer","courses":["PHP","Database"],"lecturesPerDay":8}',
'{"id":38,"firstname":"Plamen","lastname":"Georgiev","town":"Varna","role":"trainer","courses":["Database","Java","JS","PHP","HTML/CSS"],"lecturesPerDay":6}',
'{"id":39,"firstname":"Gergana","lastname":"Petrova","town":"Pernik","role":"trainer","courses":["Database","HTML/CSS","ASP.NET","C#"],"lecturesPerDay":8}',
'{"id":40,"firstname":"Mariq","lastname":"Petrova","town":"Sofia","role":"student","grades":["3.04","2.08","4.39","3.60"],"level":5,"certificate":true}',
'{"id":41,"firstname":"Gergana","lastname":"Petrov","town":"Ruse","role":"student","grades":["3.56","5.92","2.38","4.84"],"level":3,"certificate":true}'];

solve(input);