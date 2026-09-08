function student_list(){
    let studentName = document.getElementById("name").value;
    let studentSection = document.getElementById("section").value;
    let studentRollNo = document.getElementById("rollno").value;
    let noOfSubjects = document.getElementById("no of subjects").value;
    let marks = document.getElementById("marks").value;
}
function percentage(){
    let marks = document.getElementById("marks").value;
    let marks2 = document.getElementById("marks2").value;
    let marks3 = document.getElementById("marks3").value;
    let marks4 = document.getElementById("marks4").value;
    let marks5 = document.getElementById("marks5").value;
    let percentage = ((marks+marks2+marks3+marks4+marks5) / (500)) * 100;
    document.getElementById("percentage").innerHTML = "Percentage: " + percentage + "%";
}