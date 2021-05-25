"use strict";

let phoneNumber = "8172918146";

let first3Digits = phoneNumber.substring(0,3);
let mid3Digits = phoneNumber.substring(3,6);
let last4Digits = phoneNumber.substring(6);

let formattedPhoneNumber =
"(" + first3Digits + ") " + mid3Digits + "-" + last4Digits;

console.log("Formatted phone number: " + formattedPhoneNumber);