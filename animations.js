$(document).ready(function() {buttonFader();});

function buttonFader(){
    var delayBoi = 400;
    var i;
    var firstElem = 1;
    var lastElem = 4;
    for (i = firstElem; i <= lastElem; i ++){
        var selectorBoi1 = "div a:nth-of-type\(" + i + "\)";

        console.log(selectorBoi1);
        
        $(selectorBoi1).delay(delayBoi).fadeIn(400, function(){});
        delayBoi += 50;
    }
}