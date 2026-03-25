// Aufgabe 1 - Zähler

function add() {
    let current = parseInt(document.getElementById("counter").textContent);
    document.getElementById("counter").textContent = current + 1;
}

function sub() {
    let current = parseInt(document.getElementById("counter").textContent);
    document.getElementById("counter").textContent = current - 1;
}

function resetCounter() {
    document.getElementById("counter").textContent = 0;
}

// Aufgabe 2 - Zufallsfarbe

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.getElementById("heading").style.color = `rgb(${r}, ${g}, ${b})`;
}

// Aufgabe 3 - addEventListener

let count2 = 0;

document.getElementById("btnPlus").addEventListener("click", function() {
    count2++;
    document.getElementById("counter2").textContent = count2;
});

document.getElementById("btnMinus").addEventListener("click", function() {
    count2--;
    document.getElementById("counter2").textContent = count2;
});

document.getElementById("btnReset").addEventListener("click", function() {
    count2 = 0;
    document.getElementById("counter2").textContent = count2;
});
