const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");

function startTimer(event) {
    console.log("start timer")
    let timeLeft = 120;
    let quizTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
        }
        timeLeft -= 1;
        timeDisplay.innerText = timeLeft;
    }, 1000);
}
// console.log(timeLeft);


startBtn.addEventListener("click", startTimer);