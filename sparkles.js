// Glitter background
        const ww = window.innerWidth * 2.5;
        const wh = window.innerHeight * 2.5;
        const bkgdContainer = document.getElementById("sparkleContainer");
        const numberOfLayers = 50;
        const density = 20;
        const colors = [
            "#FFFFFFAA",
            "#efa26dAA",
            "#75cdcbAA",
            "#004933AA",
            "#061e4bAA",
            "#c8f1beAA",
        ];

        for (let i = 1; i <= numberOfLayers; i++) {makeLayer(i);};
                
        function makeLayer(i) {
            const newDiv = document.createElement("div");
            newDiv.className = "layerDiv";
            newDiv.setAttribute("id", `layer${i}`);
            const svgColor = colors[Math.floor(Math.random() * colors.length)];
            for (let j = 1; j <= density; j++) {
                makeSparkle(svgColor, newDiv, i, j);
            }
            bkgdContainer.appendChild(newDiv);
        }

        function makeSparkle(color, div) {
            const newDiv = document.createElement("div");
            newDiv.className = "sparkleDiv";
            newDiv.style.top = `${Math.floor(Math.random() * wh)}px`;
            newDiv.style.left = `${Math.floor(Math.random() * ww)}px`;
            newDiv.style.transform = `rotate(${Math.floor(Math.random()*360)}deg) scale(${(Math.floor(15 - (Math.random() * 10))) / 5}, ${(Math.floor(15 - (Math.random() * 10))) / 5})`;  // If using 15, 10, and 10: scale by a number between 0.5 and 1.5 in 0.1 increments

            const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            newSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            newSvg.setAttribute("class", "sparkleSvg");
            newSvg.setAttribute("height", "9");
            newSvg.setAttribute("width", "7");

            const newPoly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            newPoly.setAttribute("points", "0,0 3,5 4,2");
            newPoly.setAttribute("style", `fill:${color}`);

            newSvg.appendChild(newPoly);
            newDiv.appendChild(newSvg);
            div.appendChild(newDiv);
            };

        //  ~~~~~  Add event listeners  ~~~~~  //

        const thresholdDesktop = 50;
        const thresholdMobile = 5;
        const layers = document.getElementsByClassName("layerDiv");

        if ("ontouchstart" in window) { 
            addMobileListeners();
        } else {
            addDesktopListeners();
        };

        function addDesktopListeners(){
            for (let l = 1; l <= layers.length; l++) {
                const sensitivity = Math.floor(Math.random() * 200 + 300);
                const compactScriptString = `const testDiv${l} = document.getElementById('layer${l}'); document.addEventListener('mousemove', function(event){if ((event.pageX + event.pageY) % ${sensitivity} > 0 && (event.pageX + event.pageY) % ${sensitivity} < ${thresholdDesktop}) {testDiv${l}.style.visibility = 'visible';} else {testDiv${l}.style.visibility = 'hidden';}})`;
                const newScript = document.createElement("script");
                newScript.innerHTML = compactScriptString;
                document.body.appendChild(newScript);
            };
        };

        function addMobileListeners() {
            for (let l = 1; l <= layers.length; l++) {
                const sensitivity = Math.floor(Math.random() * 40 + 20);  // generates a number between 40 and 60                
                const compactScriptString = `const testDiv${l} = document.getElementById('layer${l}'); 
                    window.addEventListener('deviceorientation', function(event){
                    if (Math.abs((Math.round(event.beta)) + Math.abs(Math.round(event.gamma))) % ${sensitivity} > 0 && (Math.abs(Math.round(event.beta)) + Math.abs(Math.round(event.gamma))) % ${sensitivity} < ${thresholdMobile}) {
                    testDiv${l}.style.visibility = 'visible';
                    } else {
                     testDiv${l}.style.visibility = 'hidden';}}); `;
                const newScript = document.createElement("script");
                newScript.innerHTML = compactScriptString;
                document.body.appendChild(newScript);
            };
        }
