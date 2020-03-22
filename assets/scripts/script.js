const quizBlock = document.getElementById("quiz-block");
const leaderBlock = document.getElementById("leader-block");
const time = document.getElementById("time");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");

const questions = {
    question1: {
        question: "True or false? You should avoid coding inline styles within an HTML document whenever possible?",
        correct: "True",
        answer2: "False"
    },
    question2: {
        question: "An ID that has been created in your CSS can be used __________ time(s) within you HTML document?",
        answer1: "4",
        answer2: "3",
        answer3: "2",
        correct: "1"
    },
    question3: {
        question: "Which of the following tags would allow you to input a line break in your HTML document correctly?",
        correct: "Br",
        answer2: "B",
        answer3: "P",
        answer4: "Lb"
    },
    question4: {
        question: "This section code holds the most of the page's information or content?",
        answer1: "HTML",
        correct: "BODY",
        answer3: "TITLE",
        answer4: "HEAD"
    },
    question5: {
        question: "A _____________________ is a set of text or button hyperlinks that can be used to access pages in your web site?",
        answer1: "Route Bar",
        answer2: "Map Bar",
        answer3: "Direction Bar",
        correct: "Navigation Bar"
    }
};

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