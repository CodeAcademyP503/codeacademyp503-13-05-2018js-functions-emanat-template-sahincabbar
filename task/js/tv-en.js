{
    {
        var mainwidth = 1100;
        let mainarray = [
            {
                tagname: "div",
                backcolor: "rgb(192,192,192)s",
                image: "images/logo (6).png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/KATV1_Logo.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "#fff",
                image: "images/14407640585088152812_1000x669.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/logo (5).png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/ultel.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/baktelecomaz.png",
                text: ""
            },

            {
                tagname: "div",
                backcolor: "white",
                image: "images/unnamed.jpg",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/logo (10).png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/logo (7).png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/headlogo.png",
                text: ""
            },
            {
                tagname: "div",
                backcolor: "white",
                image: "images/Clip-TV-Box.png",
                text: ""
            }
        ];

        var Width = 250;

        function init22() {
            var line = document.createElement("img");
            line.className = "line";
            line.src = "images/substract.png";
            var televis = document.createElement("img");
            televis.src = "images/monitor.png";
            televis.className = "television";
            var smallimgarray = [televis, line];
            var header = document.createElement("h1");
            header.innerHTML = "TV";
            header.className = "headering";
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
            secondParent.className = "__secondparent";
            document.body.appendChild(secondParent);
            for (var provider of mainarray) {
                var child = createElement(provider.tagname, Width, parent, "mainchildrens", provider.backcolor);
                secondParent.appendChild(child);
                x++;
                for (var pct of mainarray) {
                    var divlogos = document.createElement("img");
                    divlogos.src = provider.image;
                    divlogos.className = "__divlogos" + x;
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