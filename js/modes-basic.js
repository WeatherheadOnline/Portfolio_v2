const stylesheets = document.getElementsByClassName("modesheet");

const lightbutton = document.getElementById("light");
const darkbutton = document.getElementById("dark");

let mode;

darkbutton.onclick = function() {
    SwitchMode("darkmode");
};
lightbutton.onclick = function() {
    SwitchMode("lightmode");
};

function SwitchMode(mode) {
    RemoveSheets();
    const modesheet = document.createElement("link");
    modesheet.className = "modesheet";
    modesheet.rel = "stylesheet";
    modesheet.type = "text/css";
    modesheet.href = `css/_${mode}.css`;
    document.head.appendChild(modesheet);
};

function RemoveSheets() {
    for (let i=0; i < stylesheets.length; i++) {
        document.getElementsByClassName("modesheet")[i].remove();
    }
}
