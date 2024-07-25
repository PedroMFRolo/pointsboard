let homeEl = document.getElementById("right-score") // pass in arguments
let guestEl = document.getElementById("left-score")
let countguest = 0
let counthome = 0

function add1guest() {
    countguest = countguest + 1
    guestEl.innerText = countguest
}

function add2guest() {
    countguest = countguest + 2
    guestEl.innerText = countguest
}

function add3guest() {
    countguest = countguest + 3
    guestEl.innerText = countguest
}

function add1home() {
    counthome = counthome + 1
    homeEl.innerText = counthome
}

function add2home() {
    counthome = counthome + 2
    homeEl.innerText = counthome
}

function add3home() {
    counthome = counthome + 3
    homeEl.innerText = counthome
}

function reset() {
    countguest = 0
    guestEl.innerText = countguest
    counthome = 0
    homeEl.innerText = counthome
}