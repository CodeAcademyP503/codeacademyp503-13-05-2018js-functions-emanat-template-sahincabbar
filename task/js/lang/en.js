var mainWidth = 1200;
var secondWidth = 700;
var azeri = document.createElement("img");
azeri.src = "images/Socar_logo.png";
var arry = [
    {
        tagName: "div",
        backColor: "rgb(5,72,153)",
        logo: "images/socar.png",
       
    },
    {
        tagName: "div",
        backColor: "rgb(29,135,198)",
        logo: "images/AZERSU logo.png",
    },
    {
        tagName: "div",
        backColor: "rgb(192, 178, 250)",
        logo: "images/Azercell_logo.png",
    },
    {
        tagName: "div",
        backColor: "rgb(257,77,97)",
        logo: "images/bakcell.png",
    },
    {
        tagName: "div",
        backColor: "rgb(176, 4, 62)",
        logo: "images/nar.jpg",
    },
    {
        tagName: "div",
        backColor: "rgb(193, 188, 36)",
        logo: "images/AZERISHIQ_LOGO_gold-e1468303994304.png",
    },
    {
        tagName: "div",
        backColor: "rgb(223, 31, 148)",
        logo: "images/ec46dae9-e637-498d-adc5-e12034b5b34e.jpg",
    },

]
var water = document.createElement("img");
water.src = "images/water-drop.png";
water.className = "water";
var lamp = document.createElement("img");
lamp.src = "images/lamp.png";
lamp.className = "lamp";
var secondArray = [
    {
        TagName: "div",
        _backColor: "rgb(23,92,179)",
        _logo: "images/burn.png",
        text:"<h1>Utility payments</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(253,169,6)",
        _logo: "images/hand-with-smartphone-and-wireless-internet.png",
        text:"<h1>Mobile operators</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(61,30,121)",
        _logo: "images/bill.png",
        text:"<h1>Banking services</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(177,29,165)",
        _logo: "images/university-with-a-flag.png",
        text:"<h1>State and municipalities</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(68,128,28)",
        _logo: "images/monitor.png",
        text:"<h1>TV</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(239,58,37)",
        _logo: "images/Wifi.png",
        text:"<h1>Internet</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(49,137,188)",
        _logo: "images/old-telephone-ringing.png",
        text:"<h1>Phone</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(179,30,69)",
        _logo: "images/gamepad.png",
        text:"<h1>Entertainment and games</h1>"
    },
    {
        TagName: "div",
        _backColor: "rgb(180,116,48)",
        _logo: "images/wallet-filled-money-tool.png",
        text:"<h1>E-wallet</h1>"
    }
]
var k = 1;
var $width = secondWidth / 3;
function init() {
    var img = document.createElement("img");
    var _img = document.createElement("img");
    var az_icon = document.createElement("img");
    var en_icon = document.createElement("img");
    var ru_icon = document.createElement("img");
    ru_icon.src = "images/if_Flag_of_Russia_96241.png";
    ru_icon.className = "ru_icon";
    ru_icon.onclick = ChangeToRusssian;
    az_icon.onclick = ChangeToAzerbaijani;
    en_icon.onclick = ChangeToEnglish;
    en_icon.src = "images/if_Flag_of_United_Kingdom_96354.png";
    en_icon.className = "en_icon";
    az_icon.src = "images/if_Flag_of_Azerbaijan_96205.png";
    az_icon.className = "az_icon";
    _img.className = "_image";
    _img.src = "images/Info-I-Logo.png";
    img.className = "image";
    img.src = "images/emanat.png";
    var imgarray = [img, _img, ru_icon, en_icon, az_icon];
    for (var elem of imgarray) {
        document.body.appendChild(elem);
    }
    var parent = createElement("div", mainWidth, document.body, "parent", null);
    var width = mainWidth / arry.length;
    var i = 1;
    for (var element of arry) {
        var child = createElement(element.tagName, width, parent, "child", element.backColor);
        parent.appendChild(child);
        i++;
        for (var logos in arry) {
            var $logo = document.createElement("img");
            $logo.src = element.logo;
            $logo.className = "logos" + i;
            child.appendChild($logo);
            break;
        }
    }
    var logodiv = document.createElement("div");
    logodiv.className = "logodiv";
    document.body.appendChild(logodiv);
    logodiv.appendChild(water);
    logodiv.appendChild(lamp);
    var secondParent = document.createElement("div");
    secondParent.className = "secondparent";
    document.body.appendChild(secondParent);
    var k = 0;
    var j = 0;
    var z = 0;
    for (var sec_element of secondArray) {
        var secondChild = createElement(sec_element.TagName, $width, secondParent, null, sec_element._backColor);
        secondChild.id = "secondchild" +z;
        for (var _logo of secondArray) {
            var $logos = document.createElement("img");
                $logos.src = sec_element._logo;
            $logos.className = "secondlogos" + k;
            secondChild.appendChild($logos);
            break;
        }
        secondParent.appendChild(secondChild);
        for(var text of secondArray){
            var txt = document.createElement("h1");
            txt.className = "_txt"+j;
            txt.innerHTML = sec_element.text;
            secondChild.appendChild(txt);
            break;
        }
        j++;
        z++;
        k++;
    }
    document.getElementById("secondchild0").onclick = () => {
        localStorage.setItem("base", "kommunalen")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild1").onclick = () => {
        localStorage.setItem("base", "mobileen")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild2").onclick = () => {
        localStorage.setItem("base", "banken")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild3").onclick = () => {
        localStorage.setItem("base", "countryen")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild4").onclick = () => {
        localStorage.setItem("base", "tven")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild5").onclick = () => {
        localStorage.setItem("base", "interneten")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild6").onclick = () => {
        localStorage.setItem("base", "phonen")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild7").onclick = () => {
        localStorage.setItem("base", "funen")
        document.location.href = 'provider.html';
    };
    document.getElementById("secondchild8").onclick = () => {
        localStorage.setItem("base", "walleten")
        document.location.href = 'provider.html';
    };
    var footer = document.createElement("div");
    footer.className = "footer";
    footer.innerHTML = "Customer service: 012 404 48 88";
    document.body.appendChild(footer);
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
function ChangeToAzerbaijani(){
   
    var elems = document.body.children;

    for(var e of elems){
        e.remove()
    }
    for(var e of elems){
        e.remove()
    }

    for(var e of elems){
        e.remove()
    }
    for(var e of elems){
        e.remove()
    }
    var azerbaijani = document.createElement("script");
    azerbaijani.src = "js/lang/az.js";
    document.body.appendChild(azerbaijani);
}
function ChangeToEnglish(){
    var elems = document.body.children;

    for(var e of elems){
        e.remove()
    }
    for(var e of elems){
        e.remove()
    }

    for(var e of elems){
        e.remove()
    }
    for(var e of elems){
        e.remove()
    }
    var english = document.createElement("script");
    english.src = "js/lang/en.js";

    document.body.appendChild(english);
}
function ChangeToRusssian(){
    var elems = document.body.children;

    for(var e of elems){
        e.remove()
    }
    for(var e of elems){
        e.remove()
    }

    for(var e of elems){
        e.remove()
    }
    for(var e of elems){
        e.remove()
    }
    var russian = document.createElement("script");
    russian.src = "js/lang/ru.js";

    document.body.appendChild(russian);
}
init();