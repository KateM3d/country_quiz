const btnStartQuiz = document.querySelector('.startQuiz');
const removeStartBtn = document.querySelector('.startBtn');
let displayQuestionData = document.querySelector('#question');

let displayAnswerOne = document.querySelector('#answer1');
let displayAnswerTwo = document.querySelector('#answer2');
let displayAnswerThree = document.querySelector('#answer3');
let displayAnswerFour = document.querySelector('#answer4');

const btnNext = document.querySelector('.next');
const btnSubmit = document.querySelector('.submit');

let sliderNumber = 0;

let points = 0;

const quizQuestions = [
    ["The body of the Egyptian Sphinx was based on which animal?", ["Lion", "Fish", "Bird", "Human"]],
    ["What is the capital of Denmark?", ["Ottawa", "Copenhagen", "Washington D.C", "Paris"]],
    ["How many time zones does China have?", [4, 3, 1, 2]],
    ["What is the smallest country in the world?", ["Spain", "Italy", "Canada", "Vatican City"]],
    ["Where would you find the \"Spanish Steps\"?", ["Rome", "Barcelona", "Montreal", "Tel-Aviv"]],

]


btnStartQuiz.addEventListener('click', (e) => {
    e.preventDefault();

    removeStartBtn.style.display = 'none';
    showButtons();
    showQuestion();
    displayAnswerOptions(0);

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



function showNextQuestion(e) {
    e.preventDefault();
    sliderNumber++;
    displayAnswerOptions(sliderNumber);

    if (sliderNumber === 4) {
        btnNext.style.display = 'none';
        btnSubmit.style.display = 'block';
        btnSubmit.addEventListener('click', showResults);
    }
}

function showResults(e) {
    e.preventDefault();
    const par = document.querySelector('#show');
    par.style.display = 'block';
    par.textContent = "Your points: " + points;
}


function displayAnswerOptions(sliderNumber) {
    displayQuestionData.textContent = quizQuestions[sliderNumber][0]

    displayAnswerOne.textContent = quizQuestions[sliderNumber][1][0];
    displayAnswerTwo.textContent = quizQuestions[sliderNumber][1][1];
    displayAnswerThree.textContent = quizQuestions[sliderNumber][1][2];
    displayAnswerFour.textContent = quizQuestions[sliderNumber][1][3];

}