"use strict";

function convertCtoF (temp) {
    let fahTemp = (temp * 9/5) + 32;
    return fahTemp;
}

let currentTemp = 45;
let fahrenTemp = convertCtoF(currentTemp);
console.log(currentTemp + "C is " + fahrenTemp.toFixed(2) + "F");