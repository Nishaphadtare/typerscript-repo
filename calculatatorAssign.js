// get user input using prompt
var math = parseInt(prompt("Enter your math score: "));
var physics = parseInt(prompt("Enter your physics score: "));
var chemestry = parseInt(prompt("Enter your chem score: "));
var average = (math + physics + chemestry) / 3;
var grade;
if (average < 70) {
    grade = 'C';
}
else if (average >= 70 && average < 90) {
    grade = 'B';
}
else if (average > 90) {
    grade = 'A';
}
console.log("your average score is: ".concat(average, " and your Grade is: ").concat(grade));
