const photo = document.getElementById("photo");

// window.onload = function() {
//     if (scrollY < 100) {
//         photo.style.visibility = "visible";
//     }
// }

window.onscroll = function() {
    // if (scrollY < 100) {
    //     photo.style.visibility = "visible";
    // }
    if (scrollY > 0) {
        photo.style.transform = "scaleY(0)";
    } else if (scrollY == 0) {
        photo.style.transform = "scaleY(1)";
    }
}
