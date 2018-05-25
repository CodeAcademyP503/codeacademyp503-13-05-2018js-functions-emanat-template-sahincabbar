{
    {
        var mainwidth = 1100;
        let mainarray = [
            {
                tagname: "div",
                backcolor: "rgb(180,116,48)",
                image: "images/mlogo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "rgb(66,183,115)",
                image: "images/Bank_of_Baku_logo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/1517482008280154952_1000x669.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "black",
                image: "images/rabitabank_logo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/YAPI-KREDI-BANK.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "rgb(49,137,188)",
                image: "images/Logo-Embafinans-Баку.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/1526titled.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/download.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/loqo_nicoil.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/logo (3).png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/Logo_Mol_Bulak-PNG-File-696x250.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/logomg2.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/mugan_bank_000_2.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/VTB_Bank_logo_blue.png",
                text: ""
            }, {
                tagname: "div",
                backcolor: "#fff",
                image: "images/sad.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/logo (2).png",
                text: ""
            }

        ];

        var Width = 250;

        function init20() {
            var bill = document.createElement("img");
            bill.className = "bill";
            bill.src = "images/bill.png";
            var line = document.createElement("img");
            line.className = "line";
            line.src = "images/substract.png";
            var smallimgarray = [bill, line];
            var header = document.createElement("h1");
            header.innerHTML = "Banking services";
            header.className = "headers";
            var parent = createElement("div", mainwidth, document.body, "mainparent", null);
            var smalldiv = document.createElement("div");
            smalldiv.className = "smalldiv";
            parent.appendChild(smalldiv);
            parent.appendChild(header);
            for (var imgs of smallimgarray) {
                smalldiv.appendChild(imgs);
            }
            var x = 0;
            var p = 0;
            var secondParent = document.createElement("div");
            secondParent.className = "_secondParents";
            document.body.appendChild(secondParent);
            for (var provider of mainarray) {
                var child = createElement(provider.tagname, Width, parent, "mainchilds", provider.backcolor);
                secondParent.appendChild(child);
                x++;
                for (var pct of mainarray) {
                    var divlogos = document.createElement("img");
                    divlogos.src = provider.image;
                    divlogos.className = "divlog" + x;
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
            homebutton.innerHTML = "Previous";
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