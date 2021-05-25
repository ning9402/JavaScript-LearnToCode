"use strict";

// 1-4 items, shipping $10
// 5+, shipping $3

let itemCount = 6;
let costPerItem = 4.99;

// calculate subTotal, tax (7%) , shipping, and total due

let subTotal = costPerItem * itemCount;
let tax = subTotal * .07;

let shipping;
if (itemCount <= 4) {
    shipping = 10;
}
else {
    shipping = 3;
}

let totalDue = subTotal + tax + shipping;

console.log("The subtotal is: $" + subTotal.toFixed(2));
console.log("The tax is: $" + tax.toFixed(2));
console.log("The shipping is: $" + shipping.toFixed(2));
console.log("The total due is: $" + totalDue.toFixed(2));