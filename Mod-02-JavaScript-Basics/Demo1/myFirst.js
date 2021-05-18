"use strict";

let firstName = "Ning";
let lastName = "Li";

let age = 27;

console.log(lastName + ", " + firstName);
console.log("My name is " + firstName + " " + lastName + " and I am " + age);

let price = 19.95;
if (age >= 65){
    price = price * .9;
}

console.log(price.toFixed(2));