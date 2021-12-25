var elements = document.getElementsByTagName('*');

// var patterns = [
//     "\\d{4}\\?",//2004?
//     "\\d{4}",//
//     "\\d{3}\\?",//200?
//     "\\d{3}",//200
//     "\\+\\d+",//+10 +6
//     "\\−\\d+",//-10 -6
// ]

// var pattern = `/(${patterns.join("|")})/g`;



for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            
            //2004?|2000|200?|200|-6 or -10|+6 or +10|
                var pattern = /(\d{4}\?|\d{4}|\d{3}\?|\d{3}|\−\d+|\+\d+)/g;
            console.log(pattern);
            var replacedText = text.replaceAll(pattern, "");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
