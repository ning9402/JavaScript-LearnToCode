"use strict";

let lunch = [
    {item: "Steak fajitas", price: 9.95},
    {item: "Chips and Guacomole", price: 5.25},
    {item: "Sweet tea", price: 2.79}
];

function getMealCost(order){
    let sum = 0;
    let length = order.length;
    for(let i = 0; i < order.length; i++)
        {sum += order[i].price;}
    return sum;
}


let mealCost = getMealCost(lunch);
console.log("Your subtotal is: $" + mealCost);

let tax = mealCost * .08;
let tip = mealCost * .18;

let total = mealCost + tax + tip;
console.log("Your total is: $" + total.toFixed(2));