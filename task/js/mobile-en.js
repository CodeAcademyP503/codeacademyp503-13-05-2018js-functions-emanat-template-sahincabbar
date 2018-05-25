{
    {
        var mainwidth = 1100;
        let mainarray = [
            {
                tagname: "div",
                backcolor: "rgb(99, 59, 302)",
                image: "images/Azercell_logo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "rgb(257,77,97)",
                image: "images/Bakcell_red_logo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "rgb(219, 2, 59)",
                image: "images/Nar-newlogo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "black",
                image: "images/logo2.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/naxtel.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "rgb(49,137,188)",
                image: "images/sim.png",
                text: "<h1>EXTERNAL MOBILE OPERATORS</h1>"
            }
        ];

        var Width = 250;

        function init19() {
            var line = document.createElement("img");
            line.className = "line";
            line.src = "images/substract.png";
            var phone = document.createElement("img");
            phone.src = "images/hand-with-smartphone-and-wireless-internet.png";
            var smallimgarray = [phone, line];
            var header = document.createElement("h1");
            header.innerHTML = "MOBİLE OPERATORS";
            header.className = "header1";
            var parent = createElement("div", mainwidth, document.body, "mainparent", null);
            var smalldiv = document.createElement("div");
            smalldiv.className = "smalldiv1";
            parent.appendChild(smalldiv);
            parent.appendChild(header);
            for (var imgs of smallimgarray) {
                smalldiv.appendChild(imgs);
            }
            var x = 0;
            var p = 0;
            var secondParent = document.createElement("div");
            secondParent.className = "_secondParent";
            document.body.appendChild(secondParent);
            for (var provider of mainarray) {
                var child = createElement(provider.tagname, Width, parent, "mainchild", provider.backcolor);
                secondParent.appendChild(child);
                x++;
                for (var pct of mainarray) {
                    var divlogos = document.createElement("img");
                    divlogos.src = provider.image;
                    divlogos.className = "divlogo" + x;
                    child.appendChild(divlogos);
                    break;
                }
                for (var text of mainarray) {
                    var texts = document.createElement("h1");
                    texts.className = "texted" + p;
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