document.getElementById('quizForm').addEventListener('submit', function(event) {

    event.preventDefault();

    window.location.href = "quiz.html";

});
function submitQuiz() {
    alert("Quiz submitted successfully!");
}