"use strict";

let hoursWorked = 45;
let hourlyPay = 10;
let filingStatus = "joint";

let weeklyGross = hoursWorked * hourlyPay;
let yearlyGross = weeklyGross * 52;

console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $" + hourlyPay + " per hour, your yearly gross pay is $" + yearlyGross);

let tax;
if (filingStatus == "single"){
    if (yearlyGross < 12000) {
        tax = yearlyGross * .05;
    }
    else if (yearlyGross < 24999.99) {
        tax = yearlyGross * .1;
    }
    else if (yearlyGross < 74999.99) {
        tax = yearlyGross * .15;
    }
    else {
        tax = yearlyGross * .2;
    }
}
else {
    if (yearlyGross < 12000) {
        tax = yearlyGross * 0;
    }
    else if (yearlyGross < 24999.99) {
        tax = yearlyGross * .06;
    }
    else if (yearlyGross < 74999.99) {
        tax = yearlyGross * .11;
    }
    else {
        tax = yearlyGross * .2;
    }
}
let netPay = yearlyGross - tax;

console.log("Your filing status is " + filingStatus);
console.log("Your Tax withholding this period is " + tax);
console.log("Your net pay is $ " + netPay);