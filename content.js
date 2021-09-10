var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
           // var find = new RegExp('^\d{4}$/g')
            var replacedText = text.replaceAll(/(\d{4}|\d{4}\-\d{4})$/g, "");
            //new RegExp('^\d{4}$')
            ///(\d{4}|\d{4}\-\d{4})$/g

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}