



const questions= [
    {
        question: "What is the capital of France?",
        answers: [
            {
               text: "Rome", correct: false },
               {
                text: "Berlin", correct: false},
                {
                  text: "Paris", correct: true
                },
                {
                    text: "Madrid", correct: false
                },
               
            ]
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers:[
            { text: "Charles Dickens", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Mark Twain", correct: false},
            {text: " Jane Austen", correct: false},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers:[
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
        ]

    },
    {
        question: "What is the capital city of Australia?",
        answers:[
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Brisbane", correct: false},
        ]

    },
    {
        question: "Which animal is known for its impressive memory?",
        answers: [
            {text: "Dog", correct: false},
            {text: "Cat", correct: false},
            {text: "Whale", correct: false},
            {text: "Elephant", correct: true},
        ]
    },
    {
        question: "What is the rarest blood type?",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: false},
            {text: "AB negative", correct: true},
            {text: "O", correct: false},
        ]
    },
    {
        question: "What is the main component of sun?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Carbon", correct: false},
            {text: "Hydrogen", correct: true},
            {text: "Helium", correct: false},
        ]
    },
    {
        question: "Which organ in the human body is primarily responsible for detoxification?",
        answers: [
            {text: "Kidney", correct: false},
            {text: "Liver", correct: true},
            {text: "Heart", correct: false},
            {text: "Lungs", correct: false},
        ]
    },


];

const questionElement = document.getElementById("question");
const answerBtns= document.getElementById("answer-button");
const nextBtn= document.getElementById("submit");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex= 0;
     score= 0;
     nextBtn.innerHTML= "Next";
     showQuiz();
};

function showQuiz(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question ; 

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

function resetState(){
    nextBtn.style.display= "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const correct= selectedBtn.dataset.correct === "true";
    if(correct){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

Array.from(answerBtns.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
   
    
});
nextBtn.style.display= "block";
};
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
};

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
       showQuiz();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})
startQuiz();