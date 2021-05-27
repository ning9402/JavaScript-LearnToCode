"use strict";
// an array that stores all numbers

let myMileageLog = [313, 328, 349, 287, 301, 299];
let yourMileageLog = [5, 20, 35, 1, .5, 15];
let theirMileageLog = [500, 20, 35, 1000];
// TWO KINDS OF FUNCTIONS... SOME DO THINGS, SOME DO THINGS AND RETURN SOMETHING
// function that just displays all the miles in mileageLog
function displayMiles(mileageLog) {
    for(let i = 0; i < mileageLog.length; i++) {
        console.log(mileageLog[i]);
    }
}
function getAverageTripDistance(mileageLog) {
    let total = 0;
    for (let i = 0; i < mileageLog.length; i++) {
        total += mileageLog[i];
    }
    let average = total / mileageLog.length;
    return average;
}
console.log("Their mileage log:")
displayMiles(theirMileageLog);

let theirAvgTrip = getAverageTripDistance(theirMileageLog);
console.log("Their average trip was " + theirAvgTrip + " miles");
console.log("Your mileage log:")

displayMiles(yourMileageLog);
let yourAvgTrip = getAverageTripDistance(yourMileageLog);
console.log("Your average trip was " + yourAvgTrip + " miles");