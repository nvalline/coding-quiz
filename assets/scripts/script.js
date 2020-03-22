const quizBlock = document.getElementById("quiz-block");
const leaderBlock = document.getElementById("leader-block");
const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");

function startTimer(event) {
    let timeLeft = 11;
    let quizTimer = setInterval(function () {
        if (timeLeft <= 1) {
            clearInterval(quizTimer);
        }
        timeLeft -= 1;
        timeDisplay.innerText = timeLeft;
    }, 1000);
}


startBtn.addEventListener("click", startTimer);