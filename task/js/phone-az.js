{
    var mainwidth = 1100;
let mainarray = [
{
    tagname:"div",
    backcolor:"white",
    image:"images/Aztelekom-logo---.png",
    text:""
},
{
    tagname:"div",
    backcolor:"white",
    image:"images/logotype_azeurotel.png",
    text:""
},
{
    tagname:"div",
    backcolor:"white",
    image:"images/ultel.png",
    text:""
}
,{
    tagname:"div",
    backcolor:"white",
    image:"images/catel.png",
    text:""
}
];

var Width = 250;

function init6 () {
    var line = document.createElement("img");
    line.className = "line";
    line.src = "images/substract.png";
    var phone = document.createElement("img");
    phone.className = "phone";
    phone.src = "images/old-telephone-ringing.png"
    var smallimgarray = [phone,line];
    var header = document.createElement("h1");
    header.innerHTML = "TELEFON";
    header.className = "Headerings";
    var parent = createElement("div", mainwidth, document.body, "mainparent",null );
    var smalldiv = document.createElement("div");
    smalldiv.className = "Smalldivs";
    parent.appendChild(smalldiv);
    parent.appendChild(header);
    for(var imgs of smallimgarray ){
        smalldiv.appendChild(imgs);
    }
    var x = 0;
    var p = 0;
    var secondParent = document.createElement("div");
    secondParent.className = "_SecondParents";
    document.body.appendChild(secondParent);
    for(var provider of mainarray){
        var child = createElement(provider.tagname, Width, parent, "Divchildren", provider.backcolor);
        secondParent.appendChild(child);
        x++;
        for(var pct of mainarray){
            var divlogos = document.createElement("img");
            divlogos.src = provider.image;
            divlogos.className = "Divlogos" + x;
            child.appendChild(divlogos);
            break;
        }
        for(var text of mainarray){
            var texts = document.createElement("h1");
            texts.className = "texts"+p;
            texts.innerHTML = provider.text;
            child.appendChild(texts);
            break;
        }
        p++;
    }
    var homebutton = document.createElement("button");
    homebutton.className = "homebutton";
    homebutton.innerHTML = "Geri";
    document.body.appendChild(homebutton);
    homebutton.onclick = () =>{document.location.href = 'index.html'};  
}
function createElement(_tagName, _width, _parent, _className, background,_id) {
    var element = document.createElement(_tagName);
    element.style.width = _width + "px";
    element.className = _className;
    element.id = _id;
    element.style.background = background;
    _parent.appendChild(element);
    return element;
} 
}