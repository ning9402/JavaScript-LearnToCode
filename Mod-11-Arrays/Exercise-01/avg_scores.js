"use strict";

let examScores = [77, 88, 96, 65, 85, 91, 84];
let examScores2 = [98, 87, 93, 82];
/*let totalScore = 0;

for (let i = 0; i < examScores.length; i++){
    totalScore += examScores[i];
}

let avgScore = totalScore / examScores.length;

console.log("The average score for the exams is " + avgScore.toFixed(2));
*/

function getAverage (examScore) {
    let sum = 0;
    for (let i = 0; i < examScore.length; i++){
        sum += examScore[i];
    }
    let avgScore = sum / examScore.length;
    return avgScore;
}

let avgScore = getAverage(examScores);
console.log("The average score for the exams is " + avgScore.toFixed(2));

avgScore = getAverage(examScores2);
console.log("The average score for the exams set two is " + avgScore.toFixed(2));
