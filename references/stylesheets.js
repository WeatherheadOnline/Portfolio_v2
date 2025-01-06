const button = document.getElementsByTagName("navbar")[0].children[2].children[0];
let plain = false;

button.onclick = function(){
    const styles = document.getElementById("stylesheet");
    styles.remove();
    const newStyles = document.createElement("link");
    newStyles.setAttribute("rel", "stylesheet");
    newStyles.setAttribute("id", "stylesheet");
    if (plain) {
        newStyles.setAttribute("href", "references.css");
        plain = false;
        button.innerText = "View as plain text"
    } else {
        newStyles.setAttribute("href", "plain.css");
        plain = true;
        button.innerText = "View with styling"
    }
    document.head.appendChild(newStyles);
}
