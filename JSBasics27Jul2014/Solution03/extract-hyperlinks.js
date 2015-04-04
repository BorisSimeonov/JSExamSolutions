function solve(input){
    var html = input.join('');
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)"|([^\s>]+))[^>]*>/g;
    var match;
    while (match = regex.exec(html)) {
        //console.log(match);
        var hrefValue = match[3];
        if (hrefValue == undefined) {
            var hrefValue = match[4];
        }
        if (hrefValue == undefined) {
            var hrefValue = match[5];
        }
        console.log(hrefValue);
    }
}

var testInp = [
    '<a href="http://softuni.bg" class="new"></a>',
    '<a src="someUrl.com" href="http://dir.bg" class="new"></a>',
    'abcxxxxx'
];

solve(testInp);