//1.
function calculate(n1 , n2 , operator){
    switch(operator){
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "*":
            return n1 * n2;
            break;
        case "/":
            return n1 / n2;
            break;
        default:
            return "Operator not defined."
    }
}
var num1 = 10;
var num2 = 3;
var operator = "+" ;
console.log(calculate(num1, num2, operator))
console.log("")

//2.
function averageScore(students){
    var studentsAverageScore = {}
    for(var i=0; i<students.length; i++){
        var sum = 0;
        for(var j=0; j<students[i].score.length; j++){
            sum += students[i].score[j];
        }
        studentsAverageScore[students[i].name] = sum/students[i].score.length;
    }
    return studentsAverageScore;
}
function bestStudent(studentsAverageScore, students){
    var maxScore = 0;
    var bestStudent = "";
    for(var i=0; i<students.length; i++){
        if(maxScore < studentsAverageScore[students[i].name]){
            maxScore = studentsAverageScore[students[i].name];
            bestStudent = students[i].name;
        }
    }
    return bestStudent;
}
var students = [
    {name:"Ali", score:[20, 18, 14, 15]},
    {name:"Erfan", score:[17, 19, 13, 15]},
    {name:"Amir", score:[14, 12, 9, 20]}
];
var studentsAverageScore = averageScore(students);
console.log(studentsAverageScore);
console.log("The best student is " + bestStudent(studentsAverageScore, students));