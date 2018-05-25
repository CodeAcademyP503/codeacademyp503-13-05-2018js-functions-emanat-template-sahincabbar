{
    {
        var mainwidth = 1100;
        let mainarray = [
            {
                tagname: "div",
                backcolor: "white",
                image: "images/96e1907d6a725fb4c561746ab45a47a1.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/144.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "black",
                image: "images/logo-white.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "black",
                image: "images/moneta-logo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/portmanat.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/QIWI_Wallet_logo.png",
                text: ""
            }
        ];

        var Width = 250;

        function init17() {
            var line = document.createElement("img");
            line.className = "line";
            line.src = "images/substract.png";
            var wallet = document.createElement("img");
            wallet.src = "images/wallet-filled-money-tool.png";
            wallet.className = "wallet";
            var smallimgarray = [wallet, line];
            var header = document.createElement("h1");
            header.innerHTML = "E-кошелек";
            header.className = "HeadeR";
            var parent = createElement("div", mainwidth, document.body, "mainparent", null);
            var smalldiv = document.createElement("div");
            smalldiv.className = "SmallDivS";
            parent.appendChild(smalldiv);
            parent.appendChild(header);
            for (var imgs of smallimgarray) {
                smalldiv.appendChild(imgs);
            }
            var x = 0;
            var p = 0;
            var secondParent = document.createElement("div");
            secondParent.className = "__SeconDParent";
            document.body.appendChild(secondParent);
            for (var provider of mainarray) {
                var child = createElement(provider.tagname, Width, parent, "_Children", provider.backcolor);
                secondParent.appendChild(child);
                x++;
                for (var pct of mainarray) {
                    var divlogos = document.createElement("img");
                    divlogos.src = provider.image;
                    divlogos.className = "_divimages" + x;
                    child.appendChild(divlogos);
                    break;
                }
                for (var text of mainarray) {
                    var texts = document.createElement("h1");
                    texts.className = "texts" + p;
                    texts.innerHTML = provider.text;
                    child.appendChild(texts);
                    break;
                }
                p++;
            }
            var homebutton = document.createElement("button");
            homebutton.className = "homebutton";
            homebutton.innerHTML = "Hазад";
            document.body.appendChild(homebutton);
            homebutton.onclick = () => {
                document.location.href = 'index.html';
            }
        }
        function createElement(_tagName, _width, _parent, _className, background, _id) {
            var element = document.createElement(_tagName);
            element.style.width = _width + "px";
            element.className = _className;
            element.id = _id;
            element.style.background = background;
            _parent.appendChild(element);
            return element;
        }
    }
}