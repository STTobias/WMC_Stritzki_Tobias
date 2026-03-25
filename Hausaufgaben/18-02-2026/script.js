function addieren() {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");
    out.textContent = `${m1 + m2}`;
}

function subtrahieren() {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");
    out.textContent = `${m1 - m2}`;
}

function multiplizieren() {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");
    out.textContent = `${m1 * m2}`;
}

function dividieren() {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");

    if (m2 === 0) {
        out.textContent = "Division durch 0 nicht möglich!";
        return;
    }

    out.textContent = `${m1 / m2}`;
}
