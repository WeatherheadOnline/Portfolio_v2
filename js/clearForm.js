const clear = document.getElementById("clearForm");
clear.addEventListener("click", clearForm);

function clearForm() {
    document.getElementById("userName").value = "";
    document.getElementById("returnAddress").value = "";
    document.getElementById("messageSubject").value = "";
    document.getElementById("messageBody").innerText = "";
    document.getElementById("messageSent").remove();
}

const close = document.getElementById("messageSent").children[0];
close.addEventListener("click", () => {
    document.getElementById("messageSent").remove();
});