const lightbutton = document.getElementById("light");
const darkbutton = document.getElementById("dark");
const mysterybutton = document.getElementById("mystery");
const mineralbutton = document.getElementById("mineral");
const neonbutton = document.getElementById("neon");
const ysbutton = document.getElementById("yellowsub")

const mysteryModes = [
    "mineral",
    "neon",
    "yellowsub",
];
const stylesheets = document.getElementsByClassName("modesheet");

lightbutton.onclick = function() {
    SwitchMode("lightmode");
};
darkbutton.onclick = function() {
    if (mysteryModes.length > 0) {
        mysterybutton.style.display = "unset";
    }; 
    SwitchMode("darkmode");
};
mysterybutton.onclick = function() {
    let mode = mysteryModes[Math.floor(Math.random() * mysteryModes.length)];
    const index = mysteryModes.indexOf(mode);
    mysteryModes.splice(index, 1);
    console.log(mysteryModes);
    if (mysteryModes.length < 1) {
        mysterybutton.style.display = "none";
    };
    SwitchMode(mode);
};
mineralbutton.onclick = function() {
    SwitchMode("mineral");
};
neonbutton.onclick = function() {
    SwitchMode("neon");
};
ysbutton.onclick = function() {
    SwitchMode("yellowsub");
};

function SwitchMode(mode) {
    RemoveSheets();
    const modesheet = document.createElement("link");
    modesheet.className = "modesheet";
    modesheet.rel = "stylesheet";
    modesheet.type = "text/css";
    modesheet.href = `css/_${mode}.css`;
    document.head.appendChild(modesheet);
    if (mode != "lightmode") {
        if (mode !="darkmode") {
            AddButton(mode);
        };
    };
};

function AddButton(button) {
    thisButton = document.getElementById(button);
    thisButton.style.display = "unset";
};

function RemoveSheets() {
    for (let i=0; i < stylesheets.length; i++) {
        document.getElementsByClassName("modesheet")[i].remove();
    }
}