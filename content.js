var elements = document.getElementsByTagName('*');
//elements.push(document.getElementsByTagName('span'))
//elements.push(document.getElementsByTagName('strong'))
elements.push(document.getElementsByTagName('rating'))
elements.push(document.getElementsByClassName('upt__info__ratings'));
elements.push(document.getElementsByClassName('text'));
elements.push(document.getElementsByClassName('user-link'));
elements.push(document.getElementsByClassName('user-link ulpt'));

/*<div class="upt__info__ratings"><span title="Rapid rating over 244 games" data-icon="" 
class="text">1442</span><span title="Classical rating over 17 games" data-icon="" 
class="text">1310?</span><span title="Blitz rating over 31 games" data-icon="" class="text">1237
</span><span title="Bullet rating over 3 games" data-icon="" class="text">909?</span><span 
title="UltraBullet rating over 0 games" data-icon="" class="text">&nbsp;&nbsp;&nbsp;-</span><span
 title="Crazyhouse rating over 0 games" data-icon="" class="text">&nbsp;&nbsp;&nbsp;-</span><span 
 title="Chess960 rating over 0 games" data-icon="" class="text">&nbsp;&nbsp;&nbsp;-</span><span 
 title="King of the Hill rating over 0 games" data-icon="" class="text">&nbsp;&nbsp;&nbsp;-
 </span></div>*/

//<a class="user-link" href="/@/ichbinkrass123">ichbinkrass123 (1480) <good>+6</good></a>

//<rating>1441</rating>

//<rating><strong>909?</strong>  <span>3 games</span></rating>

//<a class="user-link ulpt" href="/@/Ad_stefnum">Ad_stefnum</a>

//class=text

//https://www.w3schools.com/Jsref/met_document_queryselectorall.asp
//className or querySelector use full xpath with query selector
/*
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var pattern = /(\d{4}|\d{4}\-\d{4})$/g 
            var replacedText = text.replaceAll(pattern, "");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}*/

(function iterate_node(node) {
    if (node.nodeType === 3) { // Node.TEXT_NODE
        var text = node.data.replace(/(\d{4}|\d{4}\-\d{4})$/g, "");
        if (text != node.data) // there's a Safari bug
            node.data = text;
    } else if (node.nodeType === 1) { // Node.ELEMENT_NODE
        for (var i = 0; i < node.childNodes.length; i++) {
            iterate_node(node.childNodes[i]); // run recursive on DOM
        }
    }
})(elements);