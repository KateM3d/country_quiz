const btnStartQuiz = document.querySelector('.startQuiz');

const btnNext = document.querySelector('.next');
const btnSubmit = document.querySelector('.submit');

let questionNumber = 0;

let points = 0;

const quizQuestions = [
    ["The body of the Egyptian Sphinx was based on which animal?", ["Lion", "Fish", "Bird", "Human"], 0],
    ["What is the capital of Denmark?", ["Ottawa", "Copenhagen", "Washington D.C", "Paris"], 1],
    ["How many time zones does China have?", [4, 3, 1, 2], 2],
    ["What is the smallest country in the world?", ["Spain", "Italy", "Canada", "Vatican City"], 3],
    ["Where would you find the \"Spanish Steps\"?", ["Rome", "Barcelona", "Montreal", "Tel-Aviv"], 0],
]

btnStartQuiz.addEventListener('click', (e) => {
    e.preventDefault();
    const removeStartBtn = document.querySelector('.startBtn');
    removeStartBtn.style.display = 'none';
    showButtons();
    showQuestion();
    displayAnswerOptions(questionNumber);

    btnNext.addEventListener('click', showNextQuestion);
})

function showButtons() {
    const btnNextShow = document.querySelector('.buttons');
    const questionField = document.querySelector('.questionField');
    btnNextShow.style.display = 'block';
    questionField.style.display = 'block';
}

function showQuestion() {
    const questionField = document.querySelector('.questionField');
    questionField.style.display = 'block';
}

let selectedAnswer = document.querySelectorAll('input');

function checkAnswer() {
    let correctAnswerIndex = quizQuestions[questionNumber][2];
    if (selectedAnswer[correctAnswerIndex].checked) {
        points++;
    }
}

function showNextQuestion(e) {
    e.preventDefault();

    checkAnswer();

    questionNumber++;
    displayAnswerOptions(questionNumber);

    if (questionNumber === quizQuestions.length - 1) {
        btnNext.style.display = 'none';
        btnSubmit.style.display = 'block';
        btnSubmit.addEventListener('click', showResults);
    }
}


function showResults(e) {
    e.preventDefault();
    checkAnswer();
    const par = document.querySelector('#show');
    par.style.display = 'block';
    par.textContent = "Your points: " + points;
}


function displayAnswerOptions(questionNumber) {

    let displayQuestionText = document.querySelector('#question');

    let displayAnswerOne = document.querySelector('#answer1');
    let displayAnswerTwo = document.querySelector('#answer2');
    let displayAnswerThree = document.querySelector('#answer3');
    let displayAnswerFour = document.querySelector('#answer4');

    displayQuestionText.textContent = quizQuestions[questionNumber][0]

    displayAnswerOne.textContent = quizQuestions[questionNumber][1][0];
    displayAnswerTwo.textContent = quizQuestions[questionNumber][1][1];
    displayAnswerThree.textContent = quizQuestions[questionNumber][1][2];
    displayAnswerFour.textContent = quizQuestions[questionNumber][1][3];
}