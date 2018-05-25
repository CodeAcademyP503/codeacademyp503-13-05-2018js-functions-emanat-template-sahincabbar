{
    {
        var mainwidth = 1100;
        let mainarray = [
            {
                tagname: "div",
                backcolor: "rgb(5, 72, 153)",
                image: "images/azemdklogo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "black",
                image: "images/gb1.png",
                text: "Municipal taxes and payments"
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/gb1.png",
                text: "NİZAMİ MKTB"
            }
        ];

        var Width = 250;

        function init21() {
            var country = document.createElement("img");
            country.className = "country";
            country.src = "images/university-with-a-flag.png"
            var line = document.createElement("img");
            line.className = "line";
            line.src = "images/substract.png";
            var smallimgarray = [country, line];
            var header = document.createElement("h1");
            header.innerHTML = "State and municipalities";
            header.className = "header1";
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
            secondParent.className = "__secondParent";
            document.body.appendChild(secondParent);
            for (var provider of mainarray) {
                var child = createElement(provider.tagname, Width, parent, "mainchildren", provider.backcolor);
                secondParent.appendChild(child);
                x++;
                for (var pct of mainarray) {
                    var divlogos = document.createElement("img");
                    divlogos.src = provider.image;
                    divlogos.className = "_divlogo" + x;
                    child.appendChild(divlogos);
                    break;
                }
                for (var text of mainarray) {
                    var texts = document.createElement("h1");
                    texts.className = "_texted" + p;
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