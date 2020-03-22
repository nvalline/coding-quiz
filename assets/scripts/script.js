const quizBlock = document.getElementById("quiz-block");
const leaderBlock = document.getElementById("leader-block");
const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");

// Timer Function
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

// start clicked => display Q1, start timer

// if correct clicked => display Correct
// if correct add to score
// if wrong clicked => display Wrong
// if wrong subtract time
// hide Q1 => display Q2
// repeat

// leaderboard hides divider & answer block
// after Q5 display leaderboard with input
// after input submitted hide input

// if time = 0, game ends and displays leaderboard

// if View Highscores clicked display leaderboard w/o input => Play Again button displays Take Quiz

// if Play Again clicked return to Start Quiz

startBtn.addEventListener("click", startTimer);