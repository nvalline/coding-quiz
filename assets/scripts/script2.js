const startBtn = document.getElementById('start-btn')
const startContent = document.getElementById('start-content')
const answerTimeContainer = document.getElementById('answer-time-container')

startBtn.addEventListener('click', startQuiz)
// start Quiz
function startQuiz() {
    startContent.classList.add('hide')
    answerTimeContainer.classList.remove('hide')
}
// display first question & answers

// determine if correct

// advance to next question

// log score

// set timer

// after last question advance to input

// after input advance to leaderboard

const questions = [
    {
        question: "An ID that has been created in your CSS can be used __________ time(s) within you HTML document?",
        answers: [
            { text: "Four", correct: false },
            { text: "Three", correct: false },
            { text: "Two", correct: false },
            { text: "One", correct: true }
        ]
    },
    {
        question: "True or false? You should avoid coding inline styles within an HTML document whenever possible?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which of the following tags would allow you to input a line break in your HTML document correctly?",
        answers: [
            { text: "Br", correct: true },
            { text: "B", correct: false },
            { text: "Hr", correct: false },
            { text: "P", correct: false }
        ]
    },
    {
        question: "This section code holds the most of the page's information or content?",
        answers: [
            { text: "HTML", correct: false },
            { text: "BODY", correct: true },
            { text: "TITLE", correct: false },
            { text: "HEAD", correct: false }
        ]
    },
    {
        question: "A ______________ is a set of text or button hyperlinks that can be used to access pages in your web site?",
        answers: [
            { text: "Route Bar", correct: false },
            { text: "Map Bar", correct: false },
            { text: "Direction Bar", correct: false },
            { text: "Navigation Bar", correct: true }
        ]
    }
]