"use strict";

window.onload = function () {
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;

    const calcSalaryBtn = document.getElementById("calcSalaryBtn");
    calcSalaryBtn.onclick = calcSalaryBtnClicked;
}

function calcPayBtnClicked () {
    
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);

    let grossPay;
    if (hrsWorked > 40){
        grossPay = (payRate * 40) + (hrsWorked - 40) * payRate * 1.5;
    }
    else {
        grossPay = payRate * hrsWorked;
    }

    let message = "Your gross pay is $ " + grossPay.toFixed(2);
    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}

function calcSalaryBtnClicked () {
    // Get payRate of employee from input field
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    //Calculate gross pay for salaried employees (Always 40 hrs)
    let grossPay = payRate * 40;

    //Generate gross pay output for results
    let message = "Your gross pay is $ " + grossPay.toFixed(2);
    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}