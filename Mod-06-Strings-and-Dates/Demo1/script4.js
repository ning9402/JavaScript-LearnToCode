"use strict";

// Parts code look like manufacturer: partNumber
// ex: Nike:L10

let partCode = "ADIDAS:M76T41S";
// Let partCode = document.getElementById('partCode').value;

let manufactuerer;
let partNumber;

let colonPosition = partCode.indexOf(":");

manufactuerer = partCode.substring(0, colonPosition);

partNumber = partCode.substring(colonPosition + 1);

console.log("Manufactuerer: " + manufactuerer);
console.log("Part Number: " + partNumber);