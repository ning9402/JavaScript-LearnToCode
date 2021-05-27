"use strict";

let contactInfo1 = {
    name: "Ning",
    address: "123 Main ST",
    city: "NYC",
    state: "NY",
    zip: 11555
};

let contactInfo2 = {
    name: "Billy",
    address: "123 Main ST",
    city: "NYCCC",
    state: "NY",
    zip: 11444
};

function printContact(contactInfo) {
    console.log(contactInfo.name);
    console.log(contactInfo.address);
    console.log(contactInfo.city + ", " + contactInfo.state + " " + contactInfo.zip);
}

printContact(contactInfo1);
printContact(contactInfo2);