var mainwidth = 1100;
let mainarray = [
{
    tagname:"div",
    backcolor:"rgb(5, 72, 153)",
    image:"images/azerigaz.gif",
    text:""
},
{
    tagname:"div",
    backcolor:"rgb(29, 135, 198)",
    image:"images/AZERSU logo.png",
    text:""
},
{
    tagname:"div",
    backcolor:"rgb(193, 188, 36)",
    image:"images/AZERISHIQ_LOGO_gold-e1468303994304.png",
    text:""
},
{
    tagname:"div",
    backcolor:"black",
    image:"images/AZERSU logo.png",
    text:"<h1>AZƏRİSTİLİKTƏCHİZAT</h1>"
},
{
    tagname:"div",
    backcolor:"rgb(68, 128, 28)",
    image:"images/about_rahat.jpg",
    text:""
},
{
    tagname:"div",
    backcolor:"rgb(68, 128, 28)",
    image:"images/icon.png",
    text:"<h1>KOMMUNAL ÖDƏNİŞLƏR NAXÇIVAN</h1>"
}
];

var Width = 250;

function init () {
    var burn = document.createElement("img");
    burn.className= "burn";
    var water1 = document.createElement("img");
    water1.src="images/water-drop.png";
    water1.className = "water1";
    burn.src = "images/burn.png";
    var lamp1 = document.createElement("img");
    lamp1.className = "lamp1";
    var line = document.createElement("img");
    line.className = "line";
    line.src = "images/substract.png";
    lamp1.src = "images/lamp.png";
    var smallimgarray = [burn,water1,lamp1,line];
    var header = document.createElement("h1");
    header.innerHTML = "KOMMUNAL ÖDƏNİŞLƏR";
    header.className = "header";
    var parent = createElement("div", mainwidth, document.body, "mainparent",null );
    var smalldiv = document.createElement("div");
    smalldiv.className = "smalldiv";
    
    parent.appendChild(smalldiv);
    parent.appendChild(header);
    for(var imgs of smallimgarray ){
        smalldiv.appendChild(imgs);
    }
    var x = 0;
    var p = 0;
    var secondParent = document.createElement("div");
    secondParent.className = "_secondParent";
    document.body.appendChild(secondParent);
    for(var provider of mainarray){
        var child = createElement(provider.tagname, Width, parent, "mainchildren", provider.backcolor);
        secondParent.appendChild(child);
        x++;
        for(var pct of mainarray){
            var divlogos = document.createElement("img");
            divlogos.src = provider.image;
            divlogos.className = "divlogos" + x;
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