"use strict";

let name = "Ning Li";

let spaceFinder = name.indexOf(" ");

let firstName = name.substring(0, spaceFinder);
let lastName = name.substring(spaceFinder + 1);

console.log("Name: " + name);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);