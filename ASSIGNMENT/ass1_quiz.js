
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


// Run this code only if questions exist
if (questions.length > 0) {

    showQuestion(currentQuestion);

}

function showQuestion(index) {

    // Hide all questions
    questions.forEach(function(question) {

        question.style.display = "none";

    });


    // Show current question
    questions[index].style.display = "block";


    // Hide Previous button on Question 1
    if (index === 0) {

        prevBtn.style.display = "none";

    } else {

        prevBtn.style.display = "inline-block";

    }


    // Change Next to Submit on last question
    if (index === questions.length - 1) {

        nextBtn.innerText = "Submit Quiz";

    } else {

        nextBtn.innerText = "Next";

    }

}


function nextQuestion() {

    // If last question
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

    alert("Quiz Submitted Successfully!");

}