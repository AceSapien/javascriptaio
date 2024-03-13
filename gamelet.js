const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let hPosition = 0;
let vPosition = 0;
let moveAmount = 20;

function handleKeyPress(e) {
    if (e.code === "ArrowLeft") {
        hPosition = hPosition - moveAmount;
    }
    if (e.code === "ArrowRight") {
        hPosition = hPosition + moveAmount;
    }
    if (e.code === "ArrowUp") {
        vPosition = vPosition - moveAmount;
    }
    if (e.code === "ArrowDown") {
        vPosition = vPosition + moveAmount;
    }
    if (hPosition < 0) {
        hPosition = 0;
    }
    if (vPosition < 0) {
        vPosition = 0;
    }
    refresh();
}

function refresh() {
    ball.style.left = hPosition + "px";
    ball.style.top = vPosition + "px";
}
