"use strict"

let payRate = 20;
let hoursWorked = 49;

let grossPay = payRate * hoursWorked;
if ( hoursWorked > 40){
    grossPay = ((hoursWorked - 40) * (payRate * 1.5)) + (40 * payRate)
}

console.log("Your weekly paystub is: " + grossPay.toFixed(2))
