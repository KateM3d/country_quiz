const btnStartQuiz = document.querySelector('.startQuiz');
const removeStartBtn = document.querySelector('.startBtn');
let displayQuestionOne = document.querySelector('#question');

let displayAnswerOne = document.querySelector('#answer1');
let displayAnswerTwo = document.querySelector('#answer2');
let displayAnswerThree = document.querySelector('#answer3');
let displayAnswerFour = document.querySelector('#answer4');

const btnNext = document.querySelector('.next');
const btnSubmit = document.querySelector('.submit');

let sliderNumber = 0;
let questionNumber = 0;
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
    showNextQuestion();

    btnNext.addEventListener('click', showNextQuestion);
});


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



function showNextQuestion() {
    // e.preventDefault();

    // let questionOne = quizQuestions.map(question => question[0]);
    // displayQuestionOne.textContent = questionOne[0];


    displayAnswerOptions(sliderNumber, questionNumber);
    sliderNumber++;
    questionNumber++;


}

function showResults(e) {
    e.preventDefault();
    const par = document.querySelector('#show');
    par.style.display = 'block';
    par.textContent = "Your points: " + points;
}


function displayAnswerOptions(sliderNumber, questionNumber) {

    let questionOne = quizQuestions.map(question => question[questionNumber]);
    displayQuestionOne.textContent = questionOne[questionNumber];

    let answerOne = quizQuestions.map(answer => answer[1]);
    displayAnswerOne.textContent = answerOne[sliderNumber][0];
    displayAnswerTwo.textContent = answerOne[sliderNumber][1];
    displayAnswerThree.textContent = answerOne[sliderNumber][2];
    displayAnswerFour.textContent = answerOne[sliderNumber][3];

}









// function showQuestionTwo(e) {
//     e.preventDefault();

//     let questionOne = quizQuestions.map(question => question[0]);
//     displayQuestionOne.textContent = questionOne[1];


//     // let answerOne = quizQuestions.map(answer => answer[1]);
//     displayAnswerOptions(sliderNumber);
//     sliderNumber++;

//     // displayAnswerOne.textContent = answerOne[1][0];
//     // displayAnswerTwo.textContent = answerOne[1][1];
//     // displayAnswerThree.textContent = answerOne[1][2];
//     // displayAnswerFour.textContent = answerOne[1][3];
//     if (displayAnswerTwo.checked) {
//         points++;
//     }

//     btnNext.addEventListener('click', showQuestionThree);

// }


// function showQuestionThree(e) {
//     e.preventDefault();

//     let questionOne = quizQuestions.map(question => question[0]);
//     displayQuestionOne.textContent = questionOne[2];
//     // let answerOne = quizQuestions.map(answer => answer[1]);

//     displayAnswerOptions(sliderNumber);
//     sliderNumber++;
//     console.log(displayAnswerOptions);
//     // displayAnswerOne.textContent = answerOne[2][0];
//     // displayAnswerTwo.textContent = answerOne[2][1];
//     // displayAnswerThree.textContent = answerOne[2][2];
//     // displayAnswerFour.textContent = answerOne[2][3];
//     if (displayAnswerThree.checked) {
//         points++;
//     }
//     btnNext.addEventListener('click', showQuestionFour)
// }

// function showQuestionFour(e) {
//     e.preventDefault();

//     let questionOne = quizQuestions.map(question => question[0]);
//     displayQuestionOne.textContent = questionOne[3];


//     // let answerOne = quizQuestions.map(answer => answer[1]);

//     displayAnswerOptions(sliderNumber);
//     sliderNumber++;

//     // displayAnswerOne.textContent = answerOne[3][0];
//     // displayAnswerTwo.textContent = answerOne[3][1];
//     // displayAnswerThree.textContent = answerOne[3][2];
//     // displayAnswerFour.textContent = answerOne[3][3];
//     if (displayAnswerFour.checked) {
//         points++;
//     }
//     btnNext.addEventListener('click', showQuestionFive)
// }


// function showQuestionFive(e) {
//     e.preventDefault();

//     let questionOne = quizQuestions.map(question => question[0]);
//     displayQuestionOne.textContent = questionOne[4];


//     // let answerOne = quizQuestions.map(answer => answer[1]);

//     displayAnswerOptions(sliderNumber);
//     sliderNumber++;

//     // displayAnswerOne.textContent = answerOne[4][0];
//     // displayAnswerTwo.textContent = answerOne[4][1];
//     // displayAnswerThree.textContent = answerOne[4][2];
//     // displayAnswerFour.textContent = answerOne[4][3];
//     if (displayAnswerOne.checked) {
//         points++;
//     }
//     btnNext.style.display = 'none';
//     btnSubmit.style.display = 'block';
//     btnSubmit.addEventListener('click', showResults);
// }


function showResults(e) {
    e.preventDefault();
    const par = document.querySelector('#show');
    par.style.display = 'block';
    par.textContent = "Your points: " + points;
}


function displayAnswerOptions(sliderNumber, questionNumber) {

    let questionOne = quizQuestions.map(question => question[questionNumber]);
    displayQuestionOne.textContent = questionOne[questionNumber];

    let answerOne = quizQuestions.map(answer => answer[1]);
    displayAnswerOne.textContent = answerOne[sliderNumber][0];
    displayAnswerTwo.textContent = answerOne[sliderNumber][1];
    displayAnswerThree.textContent = answerOne[sliderNumber][2];
    displayAnswerFour.textContent = answerOne[sliderNumber][3];

}