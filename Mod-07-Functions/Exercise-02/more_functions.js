"use strict";

function displayMailingLabel (name, address, city, state, zip) {
    console.log(name, address, city, state, zip);
}

displayMailingLabel("Ning", "123 Main", "NYC", "NY", 11355);

function addNumbers (num1, num2) {
    let sum = num1 + num2;
    console.log("Your sum is: " + sum);
}

addNumbers(6,8);
addNumbers(7,9);

function displayReceipt (totalDue, amountPaid) {
    let changeDue = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);

    let remainAmount;
    if (amountPaid < totalDue) {
        remainAmount = totalDue - amountPaid;
        console.log("You still owe $ " + remainAmount);
    }
    else {
        console.log("Change Due: $" + changeDue);
    }
}

displayReceipt(20, 50);
displayReceipt(20, 20);
displayReceipt(50, 20);