function changeColor() {
    document.querySelector("h1").innerHTML = "TOT!";
    document.querySelector("h1").style.color = "red";
    document.querySelector("img").src = "pics/tot.png";
}

function resetColor() {
    document.querySelector("h1").innerHTML = "LEBEN!";
    document.querySelector("h1").style.color = "green";
    document.querySelector("img").src = "pics/leben.png";

}