"use strict";

let studentName = "Becky";
let major = "Marketing";
let degreeTrack = "Graduate";

let advisingLocation;
if (degreeTrack == "Undergraduate" && major == "English") {
    advisingLocation = "Kerr Hall, Room 201";
}
else if (degreeTrack == "Graduate" && major == "English"){
    advisingLocation = "Kerr Hall, Room 202";
}
else if (degreeTrack == "Undergraduate" && major == "Biology") {
    advisingLocation = "Science Bldg, Room 310";
}
else if (degreeTrack == "Graduate" && major == "Biology"){
    advisingLocation = "Science Bldg, Room 334";
}
else if (degreeTrack == "Undergraduate" && major == "Computer Science") {
    advisingLocation = "Sheppard Hall, Room 314";
}
else if (degreeTrack == "Graduate" && major == "Computer Science"){
    advisingLocation = "Sheppard Hall, Room 401";
}
else if (degreeTrack == "Undergraduate" && major == "History") {
    advisingLocation = "Alva Hall, Room 114";
}
else if (degreeTrack == "Graduate" && major == "History"){
    advisingLocation = "Alva Hall, Room 115";
}
else if (degreeTrack == "Undergraduate" && major == "Marketing") {
    advisingLocation = "Westly Hall, Room 310";
}
else {
    advisingLocation = "Westly Hall, Room 202";
}

console.log("Student: " + studentName);
console.log("Degree Track: " + degreeTrack);
console.log("Major: " + major);
console.log("Advising Location: " + advisingLocation);