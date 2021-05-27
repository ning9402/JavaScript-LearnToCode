"use strict";

function calcMontlyPmt( prin, intRate, yrs) {
    let payment = (prin * intRate / 1200) /
        (1-(1 + intRate/1200) ** (-yrs * 12));
    return payment;
}

let principal = 325000;
let rate = 3.5;
let years = 30;

let pmt = calcMontlyPmt(principal, rate, years);
console.log("Payment is $" + pmt.toFixed(2));