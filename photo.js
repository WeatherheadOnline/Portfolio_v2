const photo = document.getElementById("photo");

if (! ("DeviceOrientation" in document)) {
    window.onscroll = function() {
        if (scrollY > 0) {
            photo.style.transform = "scaleY(0)";
        } else if (scrollY == 0) {
            photo.style.transform = "scaleY(1)";
        }
    }
}

