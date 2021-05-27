"use strict";

function displayHello () {
    console.log("Hello");
}

function calculateAreaAndDisplay(height, width) {
    let area = height * width;
    console.log(area);
}

displayHello();
displayHello();

calculateAreaAndDisplay(5, 5);
calculateAreaAndDisplay(3, 6);
let x = 10;
let y = 3;
calculateAreaAndDisplay(x, y);