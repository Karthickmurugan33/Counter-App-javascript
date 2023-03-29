const display = document.querySelector(".counter-preview");
const allbtns = document.querySelector("#allbtn");

allbtns.addEventListener("click", counter)

let value = 0;
function counter(e) {
    let btn = e.target.id
    if (btn === "increment") {
        value += 1
    } else if (btn === "decrement") {
        value -= 1
    } else {
        value = 0
    }
    display.textContent = value
}