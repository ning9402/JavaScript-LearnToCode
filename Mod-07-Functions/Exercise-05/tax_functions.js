"use strict";

function getSocSecTax (grossPay) {
    let socSecTax;
    socSecTax = grossPay * 0.062;
    return socSecTax;

    //console.log("Your Social Security Withholding is: $" + socSecTax.toFixed(2));
}


function getMedicareTax (grossPay) {
    let medicareTax;
    medicareTax = grossPay * 0.0145;
    return medicareTax;

    //console.log("Your Medicare Tax Witholding is: $" + medicareTax.toFixed(2));
}


function getFederalTax (grossPay, withHoldCode) {
    let federalTax;
    if (withHoldCode > 4){
        let extraWithHolding = withHoldCode -4;
        federalTax = grossPay * (.18 - (.005 * extraWithHolding));
    }
    else if (withHoldCode == 4){
        federalTax = grossPay * .18;
    }
    else if (withHoldCode == 3){
        federalTax = grossPay * .185;
    }
    else if (withHoldCode == 2) {
        federalTax = grossPay * .195;
    }
    else if (withHoldCode == 1){
        federalTax = grossPay * .21;
    }
    else {
        federalTax = grossPay * .23;
    }
    return federalTax;
   // console.log("Your Federal tax witholding is: $" + federalTax.toFixed(2));
}


console.log("Your Social Security Withholding is: $" + getSocSecTax(750));
console.log("Your Medicare Tax Witholding is: $" + getMedicareTax(750));
console.log("Your Federal tax witholding is: $" + getFederalTax(750,0));


console.log("Your Social Security Withholding is: $" + getSocSecTax(1550));
console.log("Your Medicare Tax Witholding is: $" + getMedicareTax(1550));
console.log("Your Federal tax witholding is: $" + getFederalTax(1550,2));



console.log("Your Social Security Withholding is: $" + getSocSecTax(1100));
console.log("Your Medicare Tax Witholding is: $" + getMedicareTax(1100));
console.log("Your Federal tax witholding is: $" + getFederalTax(1100,6));
