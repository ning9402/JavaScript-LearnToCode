"use strict";

let products = [{
            product: "Gummy Worms",
            price: 5.79
        }, {
            product: "Plain M&Ms",
            price: 2.89
        }, {
            product: "Peanut M&Ms",
            price: 2.89
        }, {
            product: "Swedish Fish ",
            price: 3.79
        }, {
            product: "Skittles",
            price: 2.25
        }, {
            product: "Sour Patch Kids",
            price: 1.99
        }, {
            product: "Sour Skittles",
            price: 2.25
        }, {
            product: "Air Heads",
            price: 1.49
        }, {
            product: "Starburst",
            price: 1.99
        }, {
            product: "Jolly Ranchers",
            price: 2.39
        },        
    ]  
        // TODO:  fill the array with 10 candies of various//        price ranges]

        let maxPrice = 4.00;

        let candyDisplay = products.filter(arrayElement => arrayElement.price < maxPrice);
        for (let i = 0; i < candyDisplay.length; i++){
            console.log(candyDisplay[i].product + " are under $4.");
        }