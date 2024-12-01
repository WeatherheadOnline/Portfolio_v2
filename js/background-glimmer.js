const bkgd = document.getElementById("binaryDiv");

if ("ontouchstart" in window) {
    mobileListener();
} else {
    desktopListener();
};


function desktopListener() {
    document.addEventListener("mousemove", function(e) {
        bkgd.style.backgroundPosition = `${e.screenX*4 - window.innerWidth*4}px 0px`;
    });
}

function mobileListener() {
    window.addEventListener("deviceorientation", function(event){
        if (event.gamma < -45) {
            bkgd.style.backgroundPosition = `${0 - window.innerWidth*4}px, 0px`;
        } else 
        if (event.gamma > 45) {
            bkgd.style.backgroundPosition = "0px, 0px";
        } else {
            bkgd.style.backgroundPosition = `${4 * event.gamma}px, 0px`;
        }
    });
}