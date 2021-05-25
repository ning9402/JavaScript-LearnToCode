"use strict";

window.onload = function () {
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = totalCostBtnClicked;
}

function totalCostBtnClicked() {
    // Get Number of days from Number of days field
    const numberOfDaysField = document.getElementById("numberOfDays");
    let numberOfDays = Number(numberOfDaysField.value);

    //  rental Cost per day = 29.99
    let carRental = numberOfDays * 29.99;


    let additionalCarOptions = 0;

    // Checks for options the user selected under options
    const tollTagCheckbox = document.getElementById("tollTag");
    if (tollTagCheckbox.checked == true) {
        additionalCarOptions += 3.95 * numberOfDays;
    }
    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        additionalCarOptions += 2.95 * numberOfDays;
    }
    const roadsideAssistanceCheckbox = document.getElementById("roadsideAssistance");
    if (roadsideAssistance.checked == true) {
        additionalCarOptions += 2.95 * numberOfDays;
    }

    // Calculates the 30% surcharge if driver is under 25
    let surcharge = 0;

    const yesUnder25 = document.getElementById("yesUnder25");
    if (yesUnder25.checked == true) {
       surcharge = .3 * carRental;
    }

    let totalDue = carRental + additionalCarOptions + surcharge;

    // Displays pay total of car rental in <p id= Car Rental
    const carPara = document.getElementById("car");
    carPara.innerHTML = "Car Rental: $" + carRental.toFixed(2);

    // Displays additional options costs
    const optionsPara = document.getElementById("options");
    optionsPara.innerHTML = "Options: $" + additionalCarOptions.toFixed(2);
    
    // Displays under 25 30% surcharge
    const underSurchargePara = document.getElementById("underSurcharge");
    underSurchargePara.innerHTML = "Under 25 surcharge: $" + surcharge.toFixed(2);

    // Displays total cost
    const costPara = document.getElementById("cost");
    costPara.innerHTML = "Total Due is: $" + totalDue.toFixed(2);
}