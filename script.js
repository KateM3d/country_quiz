const btnStartQuiz = document.querySelector('.startQuiz');
const removeStartBtn = document.querySelector('.startBtn');
let displayQuestionOne = document.querySelector('#question');

let displayAnswerOne = document.querySelector('#answer1');
let displayAnswerTwo = document.querySelector('#answer2');
let displayAnswerThree = document.querySelector('#answer3');
let displayAnswerFour = document.querySelector('#answer4');
const btnBack = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const btnSubmit = document.querySelector('.submit');

const quizQuestions = [
    ["The body of the Egyptian Sphinx was based on which animal?", ["Lyon", "Fish", "Bird", "Human"]],
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
    showQuestionOne();
    btnNext.addEventListener('click', showQuestionTwo)

});


function showButtons() {
    const btnsBackAndNextShow = document.querySelector('.buttons');
    const questionField = document.querySelector('.questionField');
    btnsBackAndNextShow.style.display = 'block';
    questionField.style.display = 'block';

}

function showQuestion() {
    const questionField = document.querySelector('.questionField');
    questionField.style.display = 'block';

}



function showQuestionOne() {

    let questionOne = quizQuestions.map(question => question[0]);
    displayQuestionOne.textContent = questionOne[0];


    let answerOne = quizQuestions.map(answer => answer[1])
    let showAnswerOne = answerOne.find(answer => answer[0]);
    displayAnswerOne.textContent = showAnswerOne[0];
    displayAnswerTwo.textContent = showAnswerOne[1];
    displayAnswerThree.textContent = showAnswerOne[2];
    displayAnswerFour.textContent = showAnswerOne[3];


}


function showQuestionTwo(e) {
    e.preventDefault();

    let questionOne = quizQuestions.map(question => question[0]);
    displayQuestionOne.textContent = questionOne[1];


    let answerTwo = quizQuestions.map(answer => answer[1]);
    // let showAnswerTwo = answerTwo.find(answer => answer[1]);


    displayAnswerOne.textContent = answerTwo[1][0];
    displayAnswerTwo.textContent = answerTwo[1][1];
    displayAnswerThree.textContent = answerTwo[1][2];
    displayAnswerFour.textContent = answerTwo[1][3];
    btnNext.addEventListener('click', showQuestionThree)
}


function showQuestionThree(e) {
    e.preventDefault();

    let questionOne = quizQuestions.map(question => question[0]);
    displayQuestionOne.textContent = questionOne[2];


    let answerThree = quizQuestions.map(answer => answer[1]);
    // let showAnswerTwo = answerTwo.find(answer => answer[1]);


    displayAnswerOne.textContent = answerThree[2][0];
    displayAnswerTwo.textContent = answerThree[2][1];
    displayAnswerThree.textContent = answerThree[2][2];
    displayAnswerFour.textContent = answerThree[2][3];
    btnNext.addEventListener('click', showQuestionFour)
}

function showQuestionFour(e) {
    e.preventDefault();

    let questionOne = quizQuestions.map(question => question[0]);
    displayQuestionOne.textContent = questionOne[3];


    let answerFour = quizQuestions.map(answer => answer[1]);
    // let showAnswerTwo = answerTwo.find(answer => answer[1]);


    displayAnswerOne.textContent = answerFour[3][0];
    displayAnswerTwo.textContent = answerFour[3][1];
    displayAnswerThree.textContent = answerFour[3][2];
    displayAnswerFour.textContent = answerFour[3][3];
    btnNext.addEventListener('click', showQuestionFive)
}


function showQuestionFive(e) {
    e.preventDefault();

    let questionOne = quizQuestions.map(question => question[0]);
    displayQuestionOne.textContent = questionOne[3];


    let answerFive = quizQuestions.map(answer => answer[1]);
    // let showAnswerTwo = answerTwo.find(answer => answer[1]);


    displayAnswerOne.textContent = answerFive[4][0];
    displayAnswerTwo.textContent = answerFive[4][1];
    displayAnswerThree.textContent = answerFive[4][2];
    displayAnswerFour.textContent = answerFive[4][3];
    btnBack.style.display = 'none';
    btnNext.style.display = 'none';
    btnSubmit.style.display = 'block';

}