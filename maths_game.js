let score = 0;

let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function setAdditionGame(){
    score=0;
    scoreBox.textContent = 0;
    answerForm.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame(){
    score = 0;
    scoreBox.textContent = 0;
    answerForm.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame(){
    score = 0;
    scoreBox.textContent = 0;
    answerForm.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer(){
    let gametype = answerForm.getAttribute("data-gametype");
    if(answerForm["answer"].value == answerForm["rightAnswer"].value){
        alert("Hey! You got it right!");
        score++;
    } else {
        alert("Oh no! A wrong answer :(");
    }
    answerForm["answer"].value = "";
    scoreBox.textContent = score;
    if(gametype == "addition"){
        additionQuiz();
    } else if (gametype == "subtraction"){
        subtractionQuiz();
    } else if (gametype == "multiplication"){
        multiplicationQuiz();
    }
    return false;
}


function additionQuiz(){
    
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    
    questionBox.textContent = "What is " + num1 + " + " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 + num2);
}

function subtractionQuiz(){
    let bigNum;
    let smallNum;
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if(num1 >= num2){
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }
    
    questionBox.textContent = "What is " + bigNum + " - " + smallNum + "?";
    
    answerForm["rightAnswer"].value = (bigNum - smallNum);
}

function multiplicationQuiz(){
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    
    questionBox.textContent = "What is " + num1 + " x " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 * num2);
}

