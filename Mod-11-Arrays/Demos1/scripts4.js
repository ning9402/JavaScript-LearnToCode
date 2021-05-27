"use strict";

// an array that stores all numbers
let mileageLog = [313, 328, 349, 287, 301];

/*let totalMiles  = 0;

totalMiles += mileageLog[0];
totalMiles += mileageLog[1];
totalMiles += mileageLog[2];
totalMiles += mileageLog[3];
totalMiles += mileageLog[4];

console.log("Total miles driven is " + totalMiles);
*/

let totalMiles = 0;

for(let i = 0; i < mileageLog.length; i++) {
    totalMiles += mileageLog[i];
}

console.log("Total miles driven is " + totalMiles);

let averageMilesPerTrip = totalMiles / mileageLog.length;

console.log("Average miles per trip is " + averageMilesPerTrip);