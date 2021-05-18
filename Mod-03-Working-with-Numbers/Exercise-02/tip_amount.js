"use strict"

let cost = 19.99;
let tip = .22;

let tipAmount = cost * tip;

let totalAmount = cost + tipAmount;

console.log("The tip on a " + cost + " food bill is " + tipAmount.toFixed(2));