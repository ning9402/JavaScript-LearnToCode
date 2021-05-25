"use strict";

window.onload = function () {
    const findAgeBtn = document.getElementById("findAgeBtn");
    findAgeBtn.onclick = findAgeBtnClicked;
}

function findAgeBtnClicked(){
    //Get the year the user was born from the HTML input whose id is yearBorn
    const yearBornField = document.getElementById("yearBorn");
    let yearBorn = Number(yearBornField.value);

    let today = new Date();
    let currentYear = today.getFullYear();

    // Calculate user's age using their year born and today's year
    let age = currentYear - yearBorn;

    // find the input that will hold the results and place the age
    const ageField = document.getElementById("age");
    ageField.value = age;
}