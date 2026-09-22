let quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "quiz.html";
    });
}

let currentQuestion = 0;
let questions = document.querySelectorAll(".question");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

let questionTimer = null; 
// Target layout containers
let timerDisplay = document.getElementById("timerDisplay"); 
let timerBox = document.getElementById("timerBox");

if (questions.length > 0) {
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    
    questions.forEach(function(question) {
        question.style.display = "none";
    });

   
    questions[index].style.display = "block";

   
    if (index === 0) {
        if (prevBtn) prevBtn.style.display = "none";
    } else {
        if (prevBtn) prevBtn.style.display = "inline-block";
    }

  
    if (index === questions.length - 1) {
        if (nextBtn) nextBtn.innerText = "Submit Quiz";
    } else {
        if (nextBtn) nextBtn.innerText = "Next";
    }

   
    startQuestionCountdown();
}

function startQuestionCountdown() {
    clearInterval(questionTimer);

    let timeLeft = 30; 
    if (timerBox) {
        timerBox.classList.remove("critical");
    }
    if (timerDisplay) {
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;
    }

    questionTimer = setInterval(function() {
        timeLeft--; 

        if (timerDisplay) {
            timerDisplay.innerText = `Time Left: ${timeLeft}s`;
        }

        if (timeLeft <= 5 && timerBox) {
            timerBox.classList.add("critical");
        }

        if (timeLeft <= 0) {
            clearInterval(questionTimer); 

            alert("Time is up for this question! Moving to the next one.");
            
            nextQuestion(); 
        }
    }, 1000); 
}

function nextQuestion() {
    if (currentQuestion === questions.length - 1) {
        submitQuiz();
        return;
    }

    currentQuestion++;
    showQuestion(currentQuestion);
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function submitQuiz() {
    clearInterval(questionTimer);
    alert("Quiz Submitted Successfully!");
}
