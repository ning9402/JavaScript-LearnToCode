"use strict"

let length = 10;
let width = 10;

let area = length * width;

let tilesNeeded = area + (area * .1);

// calculate # of boxes; tiles are packaged 12 per box
let boxesNeeded = Math.ceil(tilesNeeded / 12); 

console.log("You will need " + boxesNeeded + " boxes.")

